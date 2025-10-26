import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Shareholders from "./pages/Shareholders";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import GroupOfCompanies from "./pages/GroupOfCompanies";
import Services from "./pages/Services";
import Investment from "./pages/Investment";
import InvestNow from "./pages/InvestNow";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/shareholders" element={<Shareholders />} />
          <Route path="/board-of-directors" element={<BoardOfDirectors />} />
          <Route path="/group-of-companies" element={<GroupOfCompanies />} />
          <Route path="/services" element={<Services />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/invest-now" element={<InvestNow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
