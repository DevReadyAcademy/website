import { useState } from "react";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { useLanguage } from "../contexts/LanguageContext";

interface InterestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InterestDialog = ({ open, onOpenChange }: InterestDialogProps) => {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      setForm({ firstName: "", lastName: "", phone: "", email: "" });
      setErrors({});
      setStatus("idle");
    }
    onOpenChange(nextOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.firstName.trim()) errs.firstName = t("contact.interestRequired");
    if (!form.lastName.trim()) errs.lastName = t("contact.interestRequired");
    if (!form.phone.trim()) {
      errs.phone = t("contact.interestRequired");
    } else if (!/^\+?[\d\s\-]{7,}$/.test(form.phone.trim())) {
      errs.phone = t("contact.interestInvalidPhone");
    }
    if (!form.email.trim()) {
      errs.email = t("contact.interestRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = t("contact.interestInvalidEmail");
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          pipelineStage: "Interested",
        }),
      });
      if (!response.ok) throw new Error();
      setStatus("success");

      // Google Analytics
      if (typeof window !== "undefined" && "gtag" in window) {
        const gtag = (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag;
        gtag("event", "express_interest", {
          event_category: "engagement",
          event_label: "interest_form",
        });
      }
      // Meta Pixel
      if (typeof window !== "undefined" && "fbq" in window) {
        const fbq = (window as typeof window & { fbq: (...args: unknown[]) => void }).fbq;
        fbq("track", "Lead", {
          content_name: "Express Interest",
          content_category: "interest_form",
        });
      }
      // TikTok Pixel
      if (typeof window !== "undefined" && "ttq" in window) {
        const ttq = (window as typeof window & { ttq: { track: (...args: unknown[]) => void } }).ttq;
        ttq.track("SubmitForm", {
          content_name: "Express Interest",
        });
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[31rem]">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <span className="text-5xl mb-4">🎉</span>
            <h3 className="text-xl font-bold mb-2">{t("contact.interestSuccessTitle")}</h3>
            <p className="text-muted-foreground">{t("contact.interestSuccessMessage")}</p>
          </div>
        ) : status === "error" ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <span className="text-5xl mb-4">😕</span>
            <h3 className="text-xl font-bold mb-2">{t("contact.interestErrorTitle")}</h3>
            <p className="text-muted-foreground">{t("contact.interestErrorMessage")}</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{t("contact.interestFormTitle")}</DialogTitle>
              <DialogDescription>{t("contact.interestFormDescription")}</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="interest-firstName">{t("contact.interestFirstName")}</Label>
                  <Input
                    id="interest-firstName"
                    name="firstName"
                    placeholder={t("contact.interestFirstNamePlaceholder")}
                    value={form.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-destructive">{errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest-lastName">{t("contact.interestLastName")}</Label>
                  <Input
                    id="interest-lastName"
                    name="lastName"
                    placeholder={t("contact.interestLastNamePlaceholder")}
                    value={form.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-destructive">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest-phone">{t("contact.interestPhone")}</Label>
                <Input
                  id="interest-phone"
                  name="phone"
                  type="tel"
                  placeholder={t("contact.interestPhonePlaceholder")}
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest-email">{t("contact.interestEmail")}</Label>
                <Input
                  id="interest-email"
                  name="email"
                  type="email"
                  placeholder={t("contact.interestEmailPlaceholder")}
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? t("contact.interestSubmitting")
                  : t("contact.interestSubmit")}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InterestDialog;
