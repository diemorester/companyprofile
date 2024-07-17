import Image from "next/image";

interface IProps {
    name: string
    description: string
    price: string
    image: string
}

export default function Coffee({name, description, price, image}: IProps) {
    
    return (
        <div className="w-full">
            <div className="max-w-[1000px] mx-auto">
                {/* <h2 className="text-2xl font-black px-7 py-5">/KopiKalyan To-Go</h2> */}
                <div className="flex flex-wrap justify-center gap-5 rounded-sm">
                    <div className="relative ">
                        <div className="absolute inset-0 z-10 bg-[#e7e5e3] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-65 duration-200 transition-all ease-out cursor-pointer">
                            <h3 className="text-sm pt-3">{description}</h3>
                            <p className="mx-auto px-3 pb-16 text-lg font-bold tracking-wider">{name}</p>
                            <p className="absolute bottom-16 text-xs">{price}</p>
                        </div>
                        <div className="">
                            <Image src={`https:${image}`} alt="kopi1" width={300} height={300} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}