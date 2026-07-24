"use client";

import { useState } from "react";
import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
  name: string;
}

function getInitials(name: string) {
  const clean = name.replace(/^(Dr\.|Prof\.|Mr\.?|Ms\.?|Miss)\s+/i, "");
  const parts = clean.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function ProfileImage({ src, alt, name }: ProfileImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex h-full w-full items-center justify-center bg-[#7B1113] text-xl font-semibold text-white"
        aria-label={alt}
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 128px, 96px"
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
