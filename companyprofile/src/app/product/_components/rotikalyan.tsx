import Image from "next/image";
import Link from "next/link";

export default function Roti() {
    return (
        <div className="w-full" id="roti">
            <div className="max-w-[1000px] mt-28 mx-auto">
                <h2 className="text-2xl font-black px-7 py-5">/Roti Kalyan</h2>
                <div className="flex flex-wrap justify-center gap-5 rounded-sm">
                    <div className="relative ">
                        <a className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Savoury</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Tuna Mayo</p>
                            <p className="absolute bottom-16 text-xs"> from Rp20.000,</p>
                        </a>
                        <Link href=""></Link>
                        <div className="">
                            <Image src="/products/roti1.jpg" alt="roti1" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative ">
                        <a className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Savoury</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Bakso Ayam Keju</p>
                            <p className="absolute bottom-16 text-xs"> from Rp20.000,</p>
                        </a>
                        <Link href=""></Link>
                        <div className="">
                            <Image src="/products/roti2.jpg" alt="roti2" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative ">
                        <a className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Sweet</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Mapple Cheese</p>
                            <p className="absolute bottom-16 text-xs"> from Rp20.000,</p>
                        </a>
                        <Link href=""></Link>
                        <div className="">
                            <Image src="/products/roti3.jpg" alt="roti3" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative ">
                        <a className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-55 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Sweet/Savoury</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Cokelat Keju</p>
                            <p className="absolute bottom-16 text-xs"> from Rp20.000,</p>
                        </a>
                        <Link href=""></Link>
                        <div className="">
                            <Image src="/products/roti4.jpg" alt="roti4" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative ">
                        <a className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Sweet</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Corndog</p>
                            <p className="absolute bottom-16 text-xs"> from Rp20.000,</p>
                        </a>
                        <Link href=""></Link>
                        <div className="">
                            <Image src="/products/roti5.jpg" alt="roti5" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative ">
                        <a className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-55 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Sweet</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Gula Mentega</p>
                            <p className="absolute bottom-16 text-xs"> from Rp20.000,</p>
                        </a>
                        <Link href=""></Link>
                        <div className="">
                            <Image src="/products/roti6.jpg" alt="roti6" width={300} height={300} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}