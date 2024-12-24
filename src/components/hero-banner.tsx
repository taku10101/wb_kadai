import Image from "next/image";

export function HeroBanner() {
  return (
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
            src='/img9.png'
            alt='Saizeriya'
            width={1800}
            height={300}
            className='mx-auto mb-4'
          />
        </div>
      </div>
    </div>
  );
}
