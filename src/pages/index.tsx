"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Users,
  Briefcase,
  GraduationCap,
  Menu,
  X,
  ArrowUp,
} from "lucide-react";
import { HeroBanner } from "@/components/hero-banner";
import { TabbedNewsSection } from "@/components/tabbed-news-section";
import { FeaturedContent } from "@/components/featured-content";

export default function UnifiedCareersPage() {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = ["ホーム", "会社情報", "採用情報", "お問い合わせ"];

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      {/* Header */}
      <header className='sticky top-0 z-50 w-full border-b bg-white'>
        <div className='container flex h-16 items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image
              src='./saizeriya_logo.svg'
              alt='サイゼリヤのロゴ'
              width={160}
              height={40}
              className='h-10 w-auto'
            />
            <span className='text-lg font-bold text-[#4A4A4A]'>サイゼリヤ</span>
          </div>
          {isMobile ? (
            <button
              onClick={toggleMenu}
              className='text-[#4A4A4A] focus:outline-none'
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <nav className='flex items-center gap-4 text-sm'>
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant='ghost'
                  className='text-[#4A4A4A] hover:bg-[#DCEDC1] hover:text-[#4A4A4A]'
                >
                  {item}
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
                key={item}
                variant='ghost'
                className='text-[#4A4A4A] hover:bg-[#A8E6CF] hover:text-[#4A4A4A] my-2 w-full max-w-xs'
                onClick={toggleMenu}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Banner */}
      <HeroBanner />

      {/* Main Content */}
      <main className='flex-grow'>
        <TabbedNewsSection />
        <FeaturedContent />
        <div className='container py-12'>
          <h1 className='text-4xl font-bold mb-4 text-[#4A4A4A]'>採用情報</h1>
          <p className='text-lg mb-8 text-[#7C7C7C]'>
            サイゼリヤで、あなたのキャリアを築きませんか？私たちは、食を通じて日々の暮らしに豊かさを提供することを目指しています。
          </p>
          <p className='text-lg mb-12 text-[#7C7C7C]'>
            私たちと一緒に、お客様に素晴らしい食事体験を提供し、食の世界に革新をもたらしましょう。
            あなたの才能と情熱を活かせる場所、それがサイゼリヤです。
          </p>

          {/* Career Options Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Full-time Positions */}
            <Card className='group hover:shadow-lg transition-shadow bg-white'>
              <CardHeader className='bg-[#DCEDC1] rounded-t-lg'>
                <div className='flex items-center gap-2'>
                  <Briefcase className='h-5 w-5 text-[#4A4A4A]' />
                  <CardTitle className='text-[#4A4A4A]'>正社員募集</CardTitle>
                </div>
                <CardDescription className='text-[#7C7C7C]'>
                  キャリアを築くチャンス
                </CardDescription>
              </CardHeader>
              <CardContent className='p-6 flex flex-col h-full'>
                <div className='mb-4 relative h-48 rounded-lg overflow-hidden'>
                  <Image
                    src='/placeholder.svg?height=192&width=384'
                    alt='サイゼリヤの店舗で働くスタッフの様子'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <p className='text-[#4A4A4A] mb-4 flex-grow'>
                  店舗運営から本社業務まで、幅広いポジションで募集しています。
                  あなたのスキルと経験を活かし、成長できる環境をご用意しています。
                </p>
                <div className='flex justify-end mt-auto'>
                  <Button className='bg-[#A8E6CF] text-[#4A4A4A] hover:bg-[#DCEDC1]'>
                    詳細を見る
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Part-time Positions */}
            <Card className='group hover:shadow-lg transition-shadow bg-white'>
              <CardHeader className='bg-[#DCEDC1] rounded-t-lg'>
                <div className='flex items-center gap-2'>
                  <Users className='h-5 w-5 text-[#4A4A4A]' />
                  <CardTitle className='text-[#4A4A4A]'>
                    アルバイト・パート募集
                  </CardTitle>
                </div>
                <CardDescription className='text-[#7C7C7C]'>
                  柔軟な働き方を実現
                </CardDescription>
              </CardHeader>
              <CardContent className='p-6 flex flex-col h-full'>
                <div className='mb-4 relative h-48 rounded-lg overflow-hidden'>
                  <Image
                    src='/placeholder.svg?height=192&width=384'
                    alt='サイゼリヤのキッチンで調理するスタッフの様子'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <p className='text-[#4A4A4A] mb-4 flex-grow'>
                  店舗スタッフや工場スタッフなど、あなたのライフスタイルに合わせた働き方ができます。
                  未経験の方も歓迎です。
                </p>
                <div className='flex justify-end mt-auto'>
                  <Button className='bg-[#A8E6CF] text-[#4A4A4A] hover:bg-[#DCEDC1]'>
                    詳細を見る
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Internship Program */}
            <Card className='group hover:shadow-lg transition-shadow bg-white'>
              <CardHeader className='bg-[#DCEDC1] rounded-t-lg'>
                <div className='flex items-center gap-2'>
                  <GraduationCap className='h-5 w-5 text-[#4A4A4A]' />
                  <CardTitle className='text-[#4A4A4A]'>
                    インターンシッププログラム
                  </CardTitle>
                </div>
                <CardDescription className='text-[#7C7C7C]'>
                  実践的な経験を積むチャンス
                </CardDescription>
              </CardHeader>
              <CardContent className='p-6 flex flex-col h-full'>
                <div className='mb-4 relative h-48 rounded-lg overflow-hidden'>
                  <Image
                    src='/placeholder.svg?height=192&width=384'
                    alt='サイゼリヤのインターンシップに参加する学生たちの様子'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <p className='text-[#4A4A4A] mb-4 flex-grow'>
                  学生の皆さんに、実際の業務を体験していただくプログラムをご用意しています。
                  食品業界でのキャリアに興味のある方、ぜひご参加ください。
                </p>
                <div className='flex justify-end mt-auto'>
                  <Button className='bg-[#A8E6CF] text-[#4A4A4A] hover:bg-[#DCEDC1]'>
                    詳細を見る
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Career Development */}
            <Card className='group hover:shadow-lg transition-shadow bg-white'>
              <CardHeader className='bg-[#DCEDC1] rounded-t-lg'>
                <div className='flex items-center gap-2'>
                  <Building2 className='h-5 w-5 text-[#4A4A4A]' />
                  <CardTitle className='text-[#4A4A4A]'>キャリア開発</CardTitle>
                </div>
                <CardDescription className='text-[#7C7C7C]'>
                  成長を支援する環境
                </CardDescription>
              </CardHeader>
              <CardContent className='p-6 flex flex-col h-full'>
                <div className='mb-4 relative h-48 rounded-lg overflow-hidden'>
                  <Image
                    src='/placeholder.svg?height=192&width=384'
                    alt='サイゼリヤの研修プログラムに参加するスタッフたちの様子'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <p className='text-[#4A4A4A] mb-4 flex-grow'>
                  サイゼリヤでは、社員一人ひとりの成長を大切にしています。
                  研修プログラムやキャリアパスの提供など、あなたの成長をサポートします。
                </p>
                <div className='flex justify-end mt-auto'>
                  <Button className='bg-[#A8E6CF] text-[#4A4A4A] hover:bg-[#DCEDC1]'>
                    詳細を見る
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='mt-auto bg-[#DCEDC1] pt-8 pb-4'>
        <div className='container'>
          {/* Footer Navigation */}
          <nav className='flex flex-wrap justify-center gap-4 mb-6 px-4'>
            {[
              "サイトマップ",
              "ご利用上の注意",
              "プライバシーポリシー",
              "イタリア料理店サイゼリヤ",
            ].map((item) => (
              <Link
                key={item}
                href='#'
                className='text-sm text-[#4A4A4A] hover:text-[#7C7C7C] transition-colors'
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div className='text-center text-sm text-[#7C7C7C] mb-4'>
            Copyright Saizeriya Co., Ltd. 2011 All rights reserved.
          </div>

          {/* Back to Top Button */}
          <div className='flex justify-center'>
            <Button
              onClick={scrollToTop}
              variant='ghost'
              className='rounded-full p-2 hover:bg-[#A8E6CF]'
              aria-label='ページのトップへ'
            >
              <ArrowUp className='h-5 w-5 text-[#4A4A4A]' />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
