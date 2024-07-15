import React from 'react'
import Image from 'next/image'

export default function BannerThree() {
    return (
        <div className='w-full'>
            <div className='max-w-[1000px] mx-auto font-semibold'>
                <div className="flex flex-wrap justify-center mx-auto">
                    <div className="w-[500px] h-[400px] bg-stone-50"></div>
                    <p className="w-[400px] md:w-[500px] h-[400px] text-center text-xs md:text-sm px-10 place-content-center">Our mission is to provide a third space where everyone is welcome. All connected and inspired by the experience of coffee and its culture. Just like we were. </p>
                </div>
                <div className="flex flex-wrap justify-center mx-auto">
                    <div className='w-[400px] md:w-[500px] h-[400px] relative'>
                        <Image src="/logo/cup-logo.png" alt='logo1' width={35} height={35} className='absolute right-[38%] top-[22%]' />
                        <Image src="/logo/logo.png" alt='logo2' width={150} height={30} className='absolute right-[25%] top-[33%]' />
                    </div>
                    <div className='relative'>
                        <div className="h-[400px] w-[100px] bg-[#dea423] absolute 0 -bottom-11 z-10"></div>
                        <p className="w-[400px] md:w-[500px] h-[400px] text-center text-xs md:text-sm pl-32 pr-11 place-content-center z-20">From our humble first coffee shop at Cikajang street in Jakarta, today we own a total of four stores; 3 stores in Jakarta and 1 in Tokyo, Japan.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}