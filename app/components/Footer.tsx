
"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white/70 text-sm sm:text-base font-medium">
            © {currentYear} SixOneCafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}