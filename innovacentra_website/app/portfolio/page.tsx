import { Clock } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Portfolio | InnovaCentra Technologies",
  description: "View our upcoming portfolio of case studies and client success stories.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-blue-50 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-orange-50 rounded-full blur-[100px] opacity-50"></div>

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <div className="bg-white p-12 rounded-3xl shadow-lg border border-slate-100">
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <Clock className="text-[var(--color-primary)]" size={48} />
          </div>
          <div className="mb-8">
            <SectionHeader
              badge="Portfolio"
              titleStart="Coming"
              titleHighlight="Soon"
              isPageTitle
              colorTheme="secondary"
            />
          </div>
          <p className="text-lg text-slate-600 mb-8">
            We are currently compiling our latest projects, client success stories, and in-depth case studies. Check back soon to see how we've helped businesses transform their digital presence.
          </p>
          <Link href="/contact" className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
            Start Your Project Now
          </Link>
        </div>
      </div>
    </div>
  );
}
