"use client";

import SmoothScroll from "@/components/SmoothScroll";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <SmoothScroll>
        <div className="relative flex flex-col min-h-screen">
          {children}
        </div>
      </SmoothScroll>
    </>
  );
}
