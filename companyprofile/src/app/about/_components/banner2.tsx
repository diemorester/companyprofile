import React from 'react'
import Image from 'next/image'

export default function BannerTwo() {
    return (
        <div className='w-full'>
            <div className='max-w-[1000px] mx-auto font-semibold'>
                <div className="flex flex-wrap justify-center mx-auto">
                    <div className="w-[400px] md:w-[500px] sm:h-[711px] text-center">
                        <Image src="/about/about2.jpg" alt="about3" width={500} height={350} className="w-[400px] md:w-[500px] h-[380px] pt-6 object-cover" />
                        <p className="h-[378px] place-content-center text-center text-xs md:text-sm px-16">From its conception, Kopikalyan was designed to be both product centered and people centered. We are passionate about always creating new innovative products and aim to celebrate every individual that is involved in making a great cup of coffee; from farmers to baristas.</p>
                    </div>
                    <div className="w-[400px] md:w-[500px] md:h-[711px] text-center">
                        <p className="w-[400px] md:w-[500px] h-[290px] text-center text-xs md:text-sm px-10 place-content-center">It reflects our gratitude towards our homeland, Indonesia as the home of over 17,000 islands, 120 active volcanoes, rainfall, fertile soil and ideal temperatures that have nourished the existence of the finest varieties of coffee.</p>
                        <Image src="/about/about3.png" alt="about4" width={500} height={467} className="w-[400px] md:w-[500px] h-[468px] object-none" />
                    </div>
                </div>
            </div>
        </div>
    )
}