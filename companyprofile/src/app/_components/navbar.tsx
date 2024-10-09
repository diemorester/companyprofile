import Image from "next/image"
import Sidebar from "./sidebar"
import Link from "next/link"

export default function NavBar() {
    return (
        <div className="w-full fixed z-50">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex justify-between px-5 md:px-11 h-[60px] bg-stone-50 items-center">
                    <div className="flex flex-wrap gap-1 w-[151px]">
                        <Image className="max-h-8 origin-center"
                            src="/logo/cup-logo.png"
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
                    <div className="md:hidden" id="text">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}