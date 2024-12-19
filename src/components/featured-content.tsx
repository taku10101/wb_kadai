import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const featuredItems = [
  {
    title: "サイゼリヤのこだわり",
    image: "/placeholder.svg?height=200&width=400",
    href: "#",
  },
  {
    title: "サステナビリティ",
    image: "/placeholder.svg?height=200&width=400",
    href: "#",
  },
  {
    title: "VIVA! Italia",
    image: "/placeholder.svg?height=200&width=400",
    href: "#",
  },
  {
    title: "デジタルトランスフォーメーション",
    image: "/placeholder.svg?height=200&width=400",
    href: "#",
  },
];

export function FeaturedContent() {
  return (
    <section className='py-12 bg-[#A8E6CF]/10'>
      <div className='container'>
        <h2 className='text-xl font-bold text-[#4A4A4A] mb-6'>
          Contents PICK UP!
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {featuredItems.map((item) => (
            <Card
              key={item.title}
              className='overflow-hidden hover:shadow-lg transition-shadow'
            >
              <Link href={item.href}>
                <CardContent className='p-0'>
                  <div className='relative h-48'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <div className='p-4'>
                    <h3 className='text-lg font-medium text-[#4A4A4A]'>
                      {item.title}
                    </h3>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
