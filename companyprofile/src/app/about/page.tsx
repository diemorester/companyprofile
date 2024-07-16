import BannerOne from "./_components/banner"
import BannerTwo from "./_components/banner2"
import BannerThree from "./_components/banner3"
import BannerFour from "./_components/banner4"
import BannerFive from "./_components/banner5"

export default function About() {
    return (
        <div className="pt-[60px] bg-stone-50 pb-6">
            <BannerOne />
            <BannerTwo />
            <BannerThree />
            <BannerFour />
            <BannerFive />
        </div>


    )
}