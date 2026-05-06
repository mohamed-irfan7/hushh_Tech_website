import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#1D1D1F] flex flex-col items-center justify-center px-6 text-white">

      {/* Logo */}
      <div className="mb-8">
        <span className="text-4xl">🤫</span>
      </div>

      {/* 404 Number */}
      <h1
        className="text-[120px] font-bold leading-none text-white/10 select-none"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        404
      </h1>

      {/* Message */}
      <h2
        className="text-2xl font-semibold text-white mt-2 mb-3"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Page Not Found
      </h2>

      <p className="text-gray-400 text-sm text-center max-w-xs mb-10 leading-relaxed">
        The page you are looking for does not exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors text-sm"
      >
        Back to Home
      </Link>

      {/* Footer */}
      <p className="mt-16 text-gray-600 text-xs">
        © {new Date().getFullYear()} Hushh Technologies LLC
      </p>

    </div>
  );
}