import { Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Portfolio | InnovaCentra Technologies",
  description: "View our upcoming portfolio of case studies and client success stories.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white p-12 rounded-3xl shadow-lg border border-slate-100">
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <Clock className="text-[var(--color-primary)]" size={48} />
          </div>
          <h1 className="text-4xl font-bold text-[var(--color-dark)] mb-4">Portfolio Coming Soon</h1>
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
