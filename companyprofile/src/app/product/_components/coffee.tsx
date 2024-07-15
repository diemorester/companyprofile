import Image from "next/image";
import Link from "next/link";

export default function Coffee() {
    return (
        <div className="w-full">
            <div className="max-w-[1000px] mx-auto">
                <h2 className="text-2xl font-black px-7 py-5">/KopiKalyan To-Go</h2>
                <div className="flex flex-wrap justify-center gap-5 rounded-sm">
                    <div className="relative ">
                        <a className="absolute inset-0 z-10 bg-[#e7e5e3] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Single, Origin</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Es Kopikalyan Single</p>
                            <p className="absolute bottom-16 text-xs"> from Rp37.000,</p>
                        </a>
                        <Link href=""></Link>
                        <div className="">
                            <Image src="/products/kopi1.png" alt="kopi1" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative ">
                        <a className="absolute inset-0 z-10 bg-[#e7e5e3] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Single, Blend</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Tamarind Cold Brew</p>
                            <p className="absolute bottom-16 text-xs"> from Rp39.000,</p>
                        </a>
                        <Link href=""></Link>
                        <div className="">
                            <Image src="/products/kopi2.png" alt="kopi2" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative ">
                        <a className="absolute inset-0 z-10 bg-[#e7e5e3] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Non Coffee</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Choco Grass Lemonade</p>
                            <p className="absolute bottom-16 text-xs"> from Rp34.000,</p>
                        </a>
                        <Link href=""></Link>
                        <div className="">
                            <Image src="/products/kopi3.png" alt="kopi3" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative ">
                        <a className="absolute inset-0 z-10 bg-[#e7e5e3] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Single, Blend</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Es Kopi Susu Pisang</p>
                            <p className="absolute bottom-16 text-xs"> from Rp41.000,</p>
                        </a>
                        <Link href=""></Link>
                        <div className="">
                            <Image src="/products/kopi4.png" alt="kopi4" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative ">
                        <a className="absolute inset-0 z-10 bg-[#e7e5e3] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Blend</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Coffee Jelly</p>
                            <p className="absolute bottom-16 text-xs"> from Rp57.000,</p>
                        </a>
                        <Link href=""></Link>
                        <div className="">
                            <Image src="/products/kopi5.png" alt="kopi5" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative ">
                        <a className="absolute inset-0 z-10 bg-[#e7e5e3] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Non Coffee</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Es Teh Kaleng</p>
                            <p className="absolute bottom-16 text-xs"> from Rp25.000,</p>
                        </a>
                        <Link href=""></Link>
                        <div className="">
                            <Image src="/products/kopi6.png" alt="kopi6" width={300} height={300} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}