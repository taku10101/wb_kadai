import Link from "next/link";

const newsItems = [
  {
    date: "2024/12/10",
    title: "不正アクセスによる個人情報漏えいのお詫びとご報告",
    href: "#",
  },
  {
    date: "2024/11/14",
    title: "「11月の間違い探し」公開しました。",
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
];

export function NewsSection() {
  return (
    <section className='py-12 bg-white'>
      <div className='container'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-xl font-bold text-[#4A4A4A]'>新着情報</h2>
          <Link
            href='#'
            className='text-sm text-[#4A4A4A] hover:text-[#7C7C7C]'
          >
            ニュースリリース一覧へ
          </Link>
        </div>
        <div className='space-y-4'>
          {newsItems.map((item) => (
            <div
              key={item.title}
              className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4'
            >
              <time className='text-sm text-[#7C7C7C] min-w-[100px]'>
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
      </div>
    </section>
  );
}
