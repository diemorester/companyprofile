import React from 'react'
import Image from 'next/image'

export default function BannerOne() {
    return (
        <div className='w-full'>
            <div className='max-w-[1000px] mx-auto font-semibold'>
                <Image src="/about/about5.jpg" alt="about1" width={1024} height={400} className="w-full" />
                <div className="flex flex-wrap justify-center mx-auto">
                    <div className="relative w-[400px] md:w-[500px] h-[729px]">
                        <h1 className="-rotate-90 top-44 -left-1.5 absolute text-2xl font-extrabold" >/About us</h1>
                        <div className="h-[400px] w-[120px] bg-[#767776] absolute top-[15%] right-0"></div>
                        <p className="absolute bottom-[33%] text-start text-xs md:text-sm pl-5 pr-40">Started from a casual conversation between good friends, Kopikalyan was created over mutual love for great coffee. The name comes from the sanskrit word ‘kalyan’, meaning being fortunate.</p>
                    </div>
                    <Image src="/about/about1.jpg" alt="about2" width={500} height={480} className="w-[400px] md:w-[500px] h-[729px] pb-5" />
                </div>
            </div>
        </div>
    )
}