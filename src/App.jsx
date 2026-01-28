import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider } from "./contexts/LanguageContext";

// Eagerly load the main page for fast initial load
import Index from "./pages/index";

// Lazy load secondary pages to reduce initial bundle size
const Accelerator = lazy(() => import("./pages/accelerator"));
const Team = lazy(() => import("./pages/team"));
const DevPress = lazy(() => import("./pages/devpress"));
const BlogPost = lazy(() => import("./pages/blogPost"));
const Contact = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/notFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster />
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
