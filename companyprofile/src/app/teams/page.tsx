import { Metadata } from "next";
import FetchingData from "./_components/fetchingdata";

export const metadata: Metadata = {
    title: "kopikalyan",
    description: "Team | Kopikalyan",
};

export default function Teams() {
    return (
        <div className="pt-[60px] bg-stone-50">
            <div className="w-full">
                <div className="max-w-[1000px] mx-auto font-semibold"></div>
                <FetchingData />
            </div>
        </div>

    )
}