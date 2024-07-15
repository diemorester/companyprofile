import Image from "next/image";
import Coffee from "./_components/coffee";
import Roti from "./_components/rotikalyan";
import Drip from "./_components/drip";
import Origami from "./_components/origami";

export default function Products() {
    return (
        <div className="pt-[60px] bg-stone-100 w-full">
            <div className="max-w-[1000px] mx-auto">
                <div className="flex justify-center mt-8 mb-3">
                    <Image src="/logo/logo.png" alt="logo" width={250} height={100} className="object-cover" />
                </div>
                <Coffee />
                <Roti />
                <Drip />
                <Origami />
            </div>
        </div>
    )
}