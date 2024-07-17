import Image from "next/image";
import Roti from "./_components/rotikalyan";
import Drip from "./_components/drip";
import Origami from "./_components/origami";
import Testimony from "../_components/testimony";
import FetchCoffee from "./_components/fetchCoffee";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "kopikalyan",
    description: "Products | Kopikalyan",
};

export default function Products() {
    return (
        <div className="pt-[60px] bg-stone-100 w-full">
            <div className="max-w-[1000px] mx-auto">
                {/* <Coffee /> */}
                <FetchCoffee />
                <Roti />
                <Drip />
                <Origami />
                <div className="font-semibold bg-stone-50 text-3xl md:mx-20 md:pt-5 pt-4 md:mt-8 h-20 text-center sm:h-28">another bit of our reviews</div>
                <Testimony />
            </div>

        </div>
    )
}