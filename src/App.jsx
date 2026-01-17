import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/index";
import NotFound from "./pages/notFound";
import Contact from "./pages/contact";
import Bootcamp from "./pages/bootcamp";
import DevPress from "./pages/devpress";
import BlogPost from "./pages/blogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/devpress" element={<DevPress />} />
          <Route path="/devpress/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
