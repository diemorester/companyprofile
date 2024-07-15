import Image from "next/image";

export default function BannerFive() {
    return (
        <div className="w-full">
            <div className="max-w-[1000px] mx-auto font-semibold">
                <div className="flex flex-wrap justify-center mx-auto bg-stone-50">
                    <div className="relative w-[400px] md:w-[500px] h-[320px]">
                        <h2 className="-rotate-90 top-44 -left-1.5 absolute text-2xl font-extrabold">/Keluarga Kalyan</h2>
                        <p className="absolute right-[20%] top-[13%] place-content-end text-center text-xs md:text-base pl-36 pr-2 py-6">Meet Keluarga Kalyan</p>
                        <p className="absolute right-6 top-[37%] place-content-end text-end text-xs md:text-sm pl-36 pr-2">At Kopiklyan, we pride ourselves on more than just brewing exceptional coffee; we celebrate the essence of family through our dedicated team, Keluarga Kalyan. Comprising passionate baristas, meticulous roasters, and warm-hearted service staff, each member of our team embodies the values of togetherness, warmth, and excellence.</p>
                    </div>
                    <div className="w-[400px] md:w-[500px] h-[320px] text-start place-content-center">
                        <p className="pt-[60px] px-10 text-xs md:text-sm">Driven by a shared love for crafting the perfect cup of coffee and creating memorable experiences, the Kalyan Family ensures that every visit to our coffee shop is a delightful journey. Whether it's a friendly smile greeting you at the counter or the care put into each handcrafted beverage, our team is committed to making you feel like part of our extended family.</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mx-auto bg-stone-50">
                    <div className="w-[400px] md:w-[500px] h-[320px] place-content-center text-center">
                        <p className="place-content-end text-end text-xs md:text-sm pl-36 pr-[30px]">Behind every aromatic blend and comforting ambiance lies the dedication and expertise of the Kalyan Family. Together, we invite you to experience coffee not just as a beverage, but as a cherished tradition upheld by a team that treats you like one of their own.</p>
                        <p className="place-content-end text-end text-xs md:text-sm pl-36 pr-[30px] pt-5">Join us at Kopikalyan and discover the warmth of the Keluarga Kalyan in every cup.</p>
                    </div>
                    <div className="w-[400px] md:w-[500px] flex relative bg-stone-50">
                        {/* <Image src="/team/team2.jpg" alt="team2" width={500} height={300} className="object-cover absolute -top-6" /> */}
                        <div className="h-[80px] w-[150px] bg-[#c1c0c0] absolute bottom-0 max-sm:hidden"></div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mx-auto bg-stone-50">
                    <Image src="/team/team1.jpg" alt="team1" width={700} height={600} className="object-cover" />
                </div>
            </div>
        </div>
    )
}