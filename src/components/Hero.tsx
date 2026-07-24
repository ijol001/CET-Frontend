"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import it from "../../public/it.jpg";
import iitg_20 from "../../public/iitg_20.jpg";
import iitg6a_2021 from "../../public/iitg6a_2021.jpg";
import Link from "next/link";

export default function Hero() {
  const backgroundSlides = [it, iitg6a_2021, iitg_20];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundSlides.length]);

  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden bg-slate-950 text-white py-14 md:py-20">
      <div className="absolute inset-0 z-0">
        {backgroundSlides.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Background Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-linear-to-br from-[#7B1113]/90 via-black/60 to-black/70" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl md:max-w-2xl">
          <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight">
            Centre for <span className="text-[#c93235]">Educational</span>{" "}
            Technology
          </h1>

          <p className="mb-6 md:mb-8 text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
            Empowering education through technology, innovation, training and
            outreach at IIT Guwahati.
          </p>

          <Link
            href="/programs"
            className="rounded-lg border bg-white border-rose-900 px-3 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm font-medium text-rose-900 transition hover:bg-[#7B1113] hover:text-white active:scale-95"
          >
            Explore Programs →
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-5 sm:left-8 z-20 flex gap-2">
        {backgroundSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              index === currentIndex ? "bg-white w-8" : "bg-white/30 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
