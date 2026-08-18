import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7F3EC] text-[#111111] px-6 text-center">
      <h1 className="text-6xl font-black font-display text-[#8C21EF] mb-4">404</h1>
      <h2 className="text-2xl font-bold font-display uppercase mb-2">Page Not Found</h2>
      <p className="text-sm text-[#111111]/70 mb-6 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-[#111111] text-[#F7F3EC] text-xs font-black uppercase tracking-wider hover:bg-[#8C21EF] transition-colors shadow-md"
      >
        Return Home
      </Link>
    </div>
  );
}
