"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { title: "メニュー情報", href: "#" },
  { title: "サイゼリヤのこだわり", href: "#" },
  { title: "お店を探す", href: "#" },
  { title: "会社情報", href: "#" },
  { title: "採用情報", href: "#", current: true },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className='relative'>
      <header className='sticky top-0 z-50 w-full border-b bg-white'>
        <div className='container flex h-16 items-center justify-between'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/placeholder.svg?height=40&width=160'
              alt='サイゼリヤ'
              width={160}
              height={40}
              className='h-10 w-auto'
            />
          </Link>
          {isMobile ? (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-[#4A4A4A] focus:outline-none'
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <nav className='flex items-center gap-1'>
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  variant={item.current ? "default" : "ghost"}
                  className={`text-sm ${
                    item.current
                      ? "bg-[#A8E6CF] text-[#4A4A4A]"
                      : "text-[#4A4A4A]"
                  }`}
                  asChild
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className='flex flex-col items-center justify-center h-full'>
            {navItems.map((item) => (
              <Button
                key={item.title}
                variant={item.current ? "default" : "ghost"}
                className={`my-2 w-full max-w-xs ${
                  item.current
                    ? "bg-[#A8E6CF] text-[#4A4A4A]"
                    : "text-[#4A4A4A]"
                }`}
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href={item.href}>{item.title}</Link>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Banner */}
      <div className='relative h-[400px] w-full overflow-hidden'>
        <Image
          src='/placeholder.svg?height=400&width=1920'
          alt='サイゼリヤの店内の様子'
          layout='fill'
          objectFit='cover'
          priority
        />
        <div className='absolute inset-0 bg-black/20' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white'>
            <Image
              src='/placeholder.svg?height=80&width=300'
              alt='Saizeriya'
              width={300}
              height={80}
              className='mx-auto mb-4'
            />
            <p className='text-2xl font-medium'>
              毎日の暮らしの豊かさを、食から。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
