import Image from "next/image"
import Sidebar from "./sidebar"
import Link from "next/link"

export default function NavBar() {
    return (
        <nav>
            <div className="fixed w-full flex justify-between px-5 py-2 md:pl-5 md:pr-20 h-[60px] bg-stone-50 items-center z-20">
                <div className="flex flex-wrap gap-1 w-[151px] justify-center">
                    <Image className="max-h-8 origin-center"
                        src="/asset/cup-logo.png"
                        width={30}
                        height={30}
                        alt="cup"
                    />
                    {/* <Image
                    src="/asset/logo.png"
                    width={150}
                    height={30}
                    alt="logo"
                /> */}
                </div>
                <div className="hidden md:flex md:gap-10 font-medium">
                    <Link href="/" className=" transition-colors duration-300 ease-in-out hover:text-[#dea423]">
                        Home
                    </Link>
                    <Link href="/about" className=" transition-colors duration-300 ease-in-out hover:text-[#dea423]">
                        About Us
                    </Link>
                    <Link href="/product" className=" transition-colors duration-300 ease-in-out hover:text-[#dea423]">
                        Products
                    </Link>
                    <Link href="/teams" className=" transition-colors duration-300 ease-in-out hover:text-[#dea423]">
                        Teams
                    </Link>
                </div>
                {/* <button className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                </button> */}
                <div className="md:hidden">
                    <Sidebar />
                </div>
            </div>
        </nav>
    )
}