"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-amber-50 border-t border-amber-600/30 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <p className="text-amber-100/70 text-sm sm:text-base font-medium">
            Unofficial Website • For Portfolio Purposes Only
          </p>
          <p className="text-amber-500 text-sm sm:text-base font-medium">
            Not affiliated with or endorsed by SixOneCafe.
          </p>
        </div>
      </div>
    </footer>
  );
}