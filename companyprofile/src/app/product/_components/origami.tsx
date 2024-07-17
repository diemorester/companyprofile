import Image from "next/image";

export default function Origami() {
    return (
        <div className="w-full" id="origami">
            <div className="max-w-[1000px] mt-28 mx-auto">
                <h2 className="text-2xl font-black px-7 py-5">/Origami</h2>
                <div className="flex flex-wrap justify-center gap-5 rounded-sm">
                    <div className="relative">
                        <div className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Origami</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Dripper M</p>
                            <p className="absolute bottom-16 text-xs"> from Rp438.000,</p>
                        </div>
                        <div>
                            <Image src="/products/dripper1.png" alt="dripper1" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Origami</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Aroma Mug</p>
                            <p className="absolute bottom-16 text-xs"> from Rp250.000,</p>
                        </div>
                        <div>
                            <Image src="/products/dripper3.png" alt="dripper3" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Origami</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Dripper Air</p>
                            <p className="absolute bottom-16 text-xs"> from Rp268.000,</p>
                        </div>
                        <div>
                            <Image src="/products/dripper2.png" alt="dripper2" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Origami</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Pinot Aroma Cup</p>
                            <p className="absolute bottom-16 text-xs"> from Rp213.000,</p>
                        </div>
                        <div>
                            <Image src="/products/dripper6.png" alt="dripper6" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Origami</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Canister</p>
                            <p className="absolute bottom-16 text-xs"> from Rp335.000,</p>
                        </div>
                        <div>
                            <Image src="/products/dripper4.png" alt="dripper4" width={300} height={300} />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 z-10 bg-[#d8d9d8] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">Origami</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">Pinot Server</p>
                            <p className="absolute bottom-16 text-xs"> from Rp328.000,</p>
                        </div>
                        <div>
                            <Image src="/products/dripper5.png" alt="dripper5" width={300} height={300} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}