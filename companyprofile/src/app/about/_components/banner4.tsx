import Image from "next/image";

export default function BannerFour() {
    return (
        <div className="w-full">
            <div className="max-w-[1000px] mx-auto font-semibold">
                <div className="flex flex-wrap justify-center mx-auto">
                    <Image src="/about/about6.jpg" alt="about6" width={500} height={500} />
                    <div className="bg-stone-50 w-[400px] sm:w-[500px] h-[500px] relative flex">
                        <div className="h-[400px] w-[330px] bg-black absolute left-0 top-11"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}