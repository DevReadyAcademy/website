import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider } from "./contexts/LanguageContext";
import { FeatureFlagProvider } from "./contexts/FeatureFlagContext";
import FeatureGuard from "./components/FeatureGuard";

// Eagerly load the main page for fast initial load
import Index from "./pages/index";

// Lazy load secondary pages to reduce initial bundle size
const Accelerator = lazy(() => import("./pages/accelerator"));
const Team = lazy(() => import("./pages/team"));
const DevPress = lazy(() => import("./pages/devpress"));
const BlogPost = lazy(() => import("./pages/blogPost"));
const Contact = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/notFound"));
const CvReviewResults = lazy(() => import("./pages/cvReviewResults"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CvReview = lazy(() => import("./pages/CvReview"));
const CvTemplate = lazy(() => import("./pages/CvTemplate"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <FeatureFlagProvider>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <Suspense fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
              <div className="animate-pulse text-primary text-lg">Loading...</div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/accelerator" element={<Accelerator />} />
              <Route path="/team" element={<Team />} />
              <Route path="/devpress" element={<DevPress />} />
              <Route path="/devpress/:slug" element={<BlogPost />} />
              <Route
                path="/cv-review/:id"
                element={
                  <FeatureGuard flag="CV_REVIEW" redirectTo="/404">
                    <CvReviewResults />
                  </FeatureGuard>
                }
              />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route
                path="/cv-review"
                element={
                  <FeatureGuard flag="CV_REVIEW" redirectTo="/404">
                    <CvReview />
                  </FeatureGuard>
                }
              />
              <Route path="/cv-template" element={<CvTemplate />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster />
      </FeatureFlagProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
