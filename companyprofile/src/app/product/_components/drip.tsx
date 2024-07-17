import Image from "next/image";

export default function Drip() {
    return (
        <div className="w-full" id="drip">
            <div className="max-w-[1000px] mt-28 mx-auto"></div>
            <h2 className="text-2xl font-black px-7 py-5">/Kopi Atlas</h2>
            <div className="flex flex-wrap justify-center gap-5 rounded-sm">
                <div className="relative">
                    <div className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                        <h3 className="text-sm pt-3">Origin, Drip</h3>
                        <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Argopuro</p>
                        <p className="absolute bottom-16 text-xs"> from Rp15.000,</p>
                    </div>
                    <div>
                        <Image src="/products/drip1.png" alt="drip1" width={300} height={300} />
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                        <h3 className="text-sm pt-3">Origin, Drip</h3>
                        <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Enrekang</p>
                        <p className="absolute bottom-16 text-xs"> from Rp15.000,</p>
                    </div>
                    <div>
                        <Image src="/products/drip2.png" alt="drip2" width={300} height={300} />
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                        <h3 className="text-sm pt-3">Origin, Drip</h3>
                        <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Gayo Natural</p>
                        <p className="absolute bottom-16 text-xs"> from Rp15.000,</p>
                    </div>
                    <div>
                        <Image src="/products/drip3.png" alt="drip3" width={300} height={300} />
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                        <h3 className="text-sm pt-3">Origin, Drip</h3>
                        <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Manglayang</p>
                        <p className="absolute bottom-16 text-xs"> from Rp15.000,</p>
                    </div>
                    <div>
                        <Image src="/products/drip4.png" alt="drip4" width={300} height={300} />
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                        <h3 className="text-sm pt-3">Origin, Drip</h3>
                        <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Lembah kamu</p>
                        <p className="absolute bottom-16 text-xs"> from Rp15.000,</p>
                    </div>
                    <div>
                        <Image src="/products/drip5.png" alt="drip5" width={300} height={300} />
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                        <h3 className="text-sm pt-3">Origin, Drip</h3>
                        <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Kintamani</p>
                        <p className="absolute bottom-16 text-xs"> from Rp15.000,</p>
                    </div>
                    <div className="">
                        <Image src="/products/drip6.png" alt="drip6" width={300} height={300} />
                    </div>
                </div>
            </div>
        </div>
    )
}