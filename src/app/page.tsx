import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#00209E] px-6 py-8 text-white sm:px-12 sm:py-10 md:px-16 md:py-12">
      {/* Top Bar */}
      <header className="relative z-20 flex w-full items-center justify-between">
        {/* Menu Icon + Logo (Top Left) */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label="Menu"
            className="group flex flex-col items-start justify-center gap-[5px] p-1 transition-opacity hover:opacity-80"
          >
            <span className="h-[4px] w-7 rounded-full bg-white" />
            <span className="h-[4px] w-7 rounded-full bg-white" />
            <span className="h-[4px] w-4 rounded-full bg-white transition-all duration-300 group-hover:w-7" />
          </button>

         
        </div>

         <Image
            src="/recraft-svg-converter.svg"
            alt="Uncle South Logo"
            width={120}
            height={90}
            priority
            className="h-10 w-auto select-none object-contain brightness-0 invert sm:h-18"
          />

          

        {/* Bottom Right Social Link */}
        <a
          href="https://www.instagram.com/unclesouthofficial/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Uncle South on Instagram"
          className="p-1 transition-opacity hover:opacity-80"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 "
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              stroke="white"
              strokeWidth="2.5"
            />
            <circle
              cx="12"
              cy="12"
              r="4.5"
              stroke="white"
              strokeWidth="2.5"
            />
            <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
          </svg>
        </a>
      </header>

      {/* Center Content + Background Logo */}
      <section className="relative flex flex-1 flex-col items-center justify-center">
        {/* Center Logo at 30% Opacity (replaces pineapple) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative h-[320px] w-[420px] sm:h-[420px] sm:w-[560px] md:h-[900px] md:w-[980px]">
            <Image
              src="/recraft-svg-converter.svg"
              alt="Uncle South Logo"
              fill
              priority
              className=" select-none object-contain opacity-5 brightness-0 "
            />
          </div>
        </div>

        {/* Foreground Typography & CTA */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl font-black tracking-tight sm:text-7xl md:text-[5.5rem] leading-none drop-shadow-sm">
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
        

        
      </footer>
    </main>
  );
}
