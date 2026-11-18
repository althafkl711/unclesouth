import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#00209E] px-6 py-8 text-white sm:px-12 sm:py-10 md:px-16 md:py-12">
      {/* Top Bar */}
      <header className="relative z-20 flex w-full items-center justify-between">
        {/* Menu Icon (Top Left) */}
        <button
          type="button"
          aria-label="Menu"
          className="group flex flex-col items-start justify-center gap-[5px] p-1 transition-opacity hover:opacity-80"
        >
          <span className="h-[4px] w-7 rounded-full bg-white" />
          <span className="h-[4px] w-7 rounded-full bg-white" />
          <span className="h-[4px] w-4 rounded-full bg-white transition-all duration-300 group-hover:w-7" />
        </button>

        {/* Search Icon (Top Right) */}
        <button
          type="button"
          aria-label="Search"
          className="p-1 transition-opacity hover:opacity-80"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="14.5"
              cy="11.5"
              r="6.5"
              stroke="white"
              strokeWidth="4"
            />
            <path
              d="M9.5 16.5L4.5 21.5"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {/* Center Content + Background Logo */}
      <section className="relative flex flex-1 flex-col items-center justify-center">
        {/* Center Logo at 30% Opacity (replaces pineapple) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative h-[320px] w-[420px] sm:h-[420px] sm:w-[560px] md:h-[500px] md:w-[680px]">
            <Image
              src="/logo.png"
              alt="Uncle South Logo"
              fill
              priority
              className=" select-none object-contain opacity-30 brightness-0 invert"
            />
          </div>
        </div>

        {/* Foreground Typography & CTA */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-[5.5rem] leading-none drop-shadow-sm">
            Coming Soon.
          </h1>

          <p className="mt-3 text-2xl font-bold tracking-tight sm:mt-4 sm:text-3xl md:text-[2.25rem]">
            Stay tuned.
          </p>

          <a
            href="https://www.instagram.com/unclesouthofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-10 py-3.5 text-base font-extrabold text-[#00209E] shadow-lg transition-all duration-200 hover:scale-105 hover:bg-white/95 active:scale-95 sm:mt-12 sm:px-12 sm:py-4 sm:text-lg"
          >
            Follow - Us
          </a>
        </div>
      </section>

      {/* Bottom Bar */}
      <footer className="relative z-20 flex w-full items-end justify-between">
        {/* Bottom Left Coordinate / Indicator */}
        <div className="flex items-center gap-2 text-lg font-extrabold tracking-tight sm:text-xl md:text-2xl">
          <span>-72.15.58</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-0.5"
          >
            <path
              d="M12 4V20M12 20L6 14M12 20L18 14"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Bottom Right Social Link */}
        <a
          href="https://www.instagram.com/unclesouthofficial/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Uncle South on Instagram"
          className="text-2xl font-extrabold tracking-tight transition-opacity hover:opacity-80 sm:text-3xl"
        >
          In
        </a>
      </footer>
    </main>
  );
}
