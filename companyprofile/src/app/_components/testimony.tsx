import Image from "next/image"

export default function Testimony() {
    return (
        <div className="bg-neutral-400 w-full">
            <div className="flex flex-wrap justify-center gap-12 py-6 max-w-[1000px] mx-auto">
                <div className="w-[300px] h-[330px] bg-stone-50 place-content-center text-center rounded-sm shadow-md shadow-neutral-600">
                    <div className="flex justify-center place-content-center pt-4">
                    <Image className="rounded-full"
                        src="/users/jaime2.jpg"
                        alt="jaime"
                        width={80}
                        height={80}
                    />
                    </div>
                    <h2 className="py-6 font-semibold text-lg">Jaime Lannister</h2>
                    <p className="px-3 text-xs">&quot;Kopikalyan offers a delightful respite from the turmoil of Westeros, it is a place even a Lannister would frequent.</p>
                    <p className="px-3 pt-3 text-xs">5 out of 5 stars. A fitting tribute to a king—or a knight—seeking solace.&quot;</p>
                </div>
                <div className="w-[300px] h-[330px] bg-stone-50 place-content-center text-center rounded-sm shadow-md shadow-neutral-600">
                    <div className="flex justify-center place-content-center">
                    <Image className="rounded-full"
                        src="/users/darthvader.jpg"
                        alt="vader"
                        width={80}
                        height={80}
                    />
                    </div>
                    <h2 className="py-6 font-semibold text-lg">Darth Vader</h2>
                    <p className="px-3 text-xs">&quot;The scent of freshly brewed coffee was as invigorating as the Dark Side itself.</p>
                    <p className="px-3 pt-3 text-xs">5 out of 5 stars. May the Force be with their baristas.&quot;</p>
                </div>
                <div className="w-[300px] h-[330px] bg-stone-50 place-content-center text-center rounded-sm shadow-md shadow-neutral-600">
                    <div className="flex justify-center place-content-center pt-8">
                    <Image className="rounded-full"
                        src="/users/legolas.jpg"
                        alt="legolas"
                        width={80}
                        height={80}
                    />
                    </div>
                    <h2 className="py-6 font-semibold text-lg">Legolas Greenleaf</h2>
                    <p className="px-3 text-xs">&quot;Each sip of Kopikalyan was a journey through the verdant landscapes I so dearly love, with a delicate balance of flavor and froth.</p>
                    <p className="px-3 pt-1 text-xs">5 out of 5 stars. A worthy stop on any journey through Middle-earth.&quot;</p>
                </div>
            </div>
        </div>
    )
}