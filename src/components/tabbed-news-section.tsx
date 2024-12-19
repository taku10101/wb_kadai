"use client";

import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const newsReleaseItems = [
  {
    date: "2024/12/10",
    title: "不正アクセスによる個人情報漏えいのお詫びとご報告",
    href: "#",
  },
  {
    date: "2024/10/18",
    title: "サイゼリヤ 函館市初出店",
    href: "#",
  },
  {
    date: "2024/10/17",
    title: "サイゼリヤ 大分県初出店",
    href: "#",
  },
  {
    date: "2024/10/16",
    title:
      "ランサムウェア被害に伴う サービスの一部停止と情報漏えいに関するお知らせ",
    href: "#",
  },
  {
    date: "2024/10/09",
    title: "10/16 秋のグランドメニュー改定",
    href: "#",
  },
];

const irNewsItems = [
  {
    date: "2024/12/02",
    title:
      "【投資家の皆様へ／月次情報】に、2024年11月の月次情報を開示しました。",
    href: "#",
  },
  {
    date: "2024/11/28",
    title:
      "【投資家の皆様へ／その他重要開示事項】に、「譲渡制限付株式報酬としての自己株式の処分に関するお知らせ」を開示しました。",
    href: "#",
  },
  {
    date: "2024/11/28",
    title:
      "【投資家の皆様へ／ その他重要開示事項】に「人事異動に関するお知らせ」を開示しました。",
    href: "#",
  },
  {
    date: "2024/11/28",
    title:
      "【投資家の皆様へ／株主総会】に、52期定時株主総会決議ご通知を開示しました。",
    href: "#",
  },
  {
    date: "2024/11/06",
    title:
      "【投資家の皆様へ／株主総会】に、52期定時株主総会招集ご通知を開示しました。",
    href: "#",
  },
];

export function TabbedNewsSection() {
  return (
    <section className='py-12 bg-white'>
      <div className='container'>
        <Tabs defaultValue='news' className='w-full'>
          <div className='flex items-center justify-between mb-6'>
            <TabsList className='grid w-[400px] grid-cols-2'>
              <TabsTrigger value='news' className='text-base'>
                ニュースリリース
              </TabsTrigger>
              <TabsTrigger value='ir' className='text-base'>
                IR 新着情報
              </TabsTrigger>
            </TabsList>
            <div className='flex gap-4'>
              <TabsContent value='news' className='mt-0'>
                <Link
                  href='#'
                  className='text-sm text-[#4A4A4A] hover:text-[#7C7C7C] border border-[#E5E7EB] rounded-md px-4 py-1'
                >
                  More Topics
                </Link>
              </TabsContent>
              <TabsContent value='ir' className='mt-0'>
                <Link
                  href='#'
                  className='text-sm text-[#4A4A4A] hover:text-[#7C7C7C] border border-[#E5E7EB] rounded-md px-4 py-1'
                >
                  More Topics
                </Link>
              </TabsContent>
            </div>
          </div>

          <TabsContent value='news' className='mt-0'>
            <div className='space-y-4'>
              {newsReleaseItems.map((item) => (
                <div
                  key={item.title}
                  className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4'
                >
                  <time className='text-sm text-red-600 min-w-[100px]'>
                    {item.date}
                  </time>
                  <Link
                    href={item.href}
                    className='text-[#4A4A4A] hover:text-[#7C7C7C] hover:underline'
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value='ir' className='mt-0'>
            <div className='space-y-4'>
              {irNewsItems.map((item) => (
                <div
                  key={item.title}
                  className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4'
                >
                  <time className='text-sm text-green-600 min-w-[100px]'>
                    {item.date}
                  </time>
                  <Link
                    href={item.href}
                    className='text-[#4A4A4A] hover:text-[#7C7C7C] hover:underline'
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
