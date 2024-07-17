import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Testimony from "./_components/testimony";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "kopikalyan",
  description: "Home | Kopikalyan",
};

export default function Home() {
  return (
    <div className="bg-stone-50 w-full">
      <div className="max-w-screen-2xl mx-auto">
        <div className="md:flex pt-[60px] bg-stone-50">
          <div className="md:flex-initial place-content-center items-center justify-center mx-6">
            <Image className=""
              src="/logo/logo.png"
              alt="logo"
              width={350}
              height={300}
            />
            <h1 className="italic md:w-[450px] py-2">“Our passion is coffee. Serving and sharing a cup of coffee coupled with stories that come along them gives us great satisfaction.”</h1>
            <div className="flex justify-start gap-3">
              <div className="z-10 space-x-6 pt-4">
                <Link href={'/product'}><button className="relative overflow-hidden  border-2 rounded-xl font-medium border-neutral-800 bg-transparent py-2 px-5 text-neutral-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-neutral-800 before:rounded-md before:transition-transform before:duration-300 before:content-[''] hover:text-stone-50 before:hover:scale-x-100">Our Product</button></Link>
                <Link href={'https://www.instagram.com/kopikalyan/?hl=en'} target="_blank"><button className="relative overflow-hidden  border-2 rounded-xl font-medium border-neutral-800 bg-transparent py-2 px-5 text-neutral-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#dea423] before:rounded-md before:transition-transform before:duration-300 before:content-[''] hover:text-stone-50 before:hover:scale-x-100">Contact Us</button></Link>
              </div>
            </div>
          </div>
          <div className="md:flex-initial max-[767px]:pt-4">
            <Image
              src="/logo/heroimg2.jpg"
              alt="hero"
              width={1100}
              height={300}
              priority
            />
          </div>
        </div>
        <Marquee autoFill pauseOnHover speed={35} gradient className="my-7">
          <Image className="m-5 hover:scale-125" src="/carousel/carousel1.png" alt="carousel1" width={100} height={100} />
          <Image className="m-5 hover:scale-125" src="/carousel/carousel2.png" alt="carousel2" width={100} height={100} />
          <Image className="m-5 hover:scale-125" src="/carousel/carousel3.png" alt="carousel3" width={100} height={100} />
          <Image className="m-5 hover:scale-125" src="/carousel/carousel4.png" alt="carousel4" width={100} height={100} />
          <Image className="m-5 hover:scale-125" src="/carousel/carousel5.png" alt="carousel5" width={100} height={100} />
          <Image className="m-5 hover:scale-125" src="/carousel/carousel6.png" alt="carousel6" width={100} height={100} />
        </Marquee>
        <div className="flex w-full h-auto flex-col md:flex-row gap-3 md:gap-0">
          <div className="flex-1">
            <Image
              src="/home/home1.jpg"
              alt="home1"
              width={666}
              height={300}
            />
          </div>
          <div className="flex-1 flex flex-col text-center items-center px-3 gap-6 md:gap-3 mt-[20px] bg-stone-50">
            <h1 className="font-semibold text-3xl flex md:mt-10">a brief about us</h1>
            <p className="px-[50px] my-10 md:pt-10">Kopikalyan is a specialty coffee roaster with cafes in Jakarta, Indonesia. We are a group of like minded individuals who share a love for great coffee and an untiring desire to break new ground. Coffee is our passion, we love to taste coffee, learn about coffee and explore coffee from various corners of the world, especially from our home land of Indonesia. Not only we love to brew and serve coffee, we also love to source and roast coffee from the finest regions of Indonesia.</p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row">
          <Image
            src="/home/home21.jpg"
            alt="home2"
            width={450}
            height={300}
          />
          <Image
            src="/home/home31.jpg"
            alt="home3"
            width={449}
            height={300}
          />
          <Image
            src="/home/home61.jpg"
            alt="home6"
            width={450}
            height={300}
          />
        </div>
        <div className="">
          <h3 className="font-semibold bg-stone-50 text-3xl md:mx-20 md:pt-5 pt-4 md:mt-8 h-20 text-center sm:h-28">some of our goods</h3>
        </div>
        <div className="relative flex flex-wrap gap-5 bg-stone-50 justify-center mx-5 lg:gap-0 lg:justify-evenly">
          <div className="card bg-neutral-400 w-72 h-[525px] shadow-xl">
            <figure>
              <Image src="/products/product1.jpg" alt="product1" width={350} height={350} className="hover:scale-125 overflow-hidden duration-300 ease-in-out" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">KK To-Go</h2>
              <p className="text-sm">Coffee based and non-coffee based Ready To Drink (RTD) handcrafted by our skilled and friendly employees.</p>
              <div className="absolute bottom-3 inset-x-24 card-actions pt-2">
                <button className="btn bg-stone-50 text-black transition-colors duration-150 ease-in-out hover:bg-[#dea423] hover:text-stone-50 border-none">
                  <a href="/product" className="text-2xl m-[10px]">More</a>
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-neutral-400 w-72 h-[525px] shadow-xl">
            <figure>
              <Image src="/products/product2.jpg" alt="product2" width={350} height={400} className="hover:scale-125 overflow-hidden duration-300 ease-in-out" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Roti Kalyan</h2>
              <p className="text-sm">Entice your taste buds with classical Indonesian baked goods with a modernised feel and twist.</p>
              <div className="absolute bottom-3 inset-x-24 card-actions pt-2">
                <button className="btn bg-stone-50 text-black transition-colors duration-150 ease-in-out hover:bg-[#dea423] hover:text-stone-50 border-none">
                  <a href="/product#roti" className="text-2xl m-[10px]">More</a>
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-neutral-400 w-72 h-[525px] shadow-xl">
            <figure>
              <Image src="/products/product3.jpg" alt="product3" width={350} height={400} className="hover:scale-125 overflow-hidden duration-300 ease-in-out" />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title">Kopi Atlas
                <div className="badge absolute bg-red-600 text-stone-50 border-none rounded-lg right-24 cursor-default">NEW!</div>
              </h2>
              <p className="text-sm">The best single origin coffees of Indonesia sourced from the the West, in the province of Aceh, to the East, in the province of Papua.</p>
              <div className="absolute bottom-3 inset-x-24 card-actions pt-2">
                <button className="btn bg-stone-50 text-black transition-colors duration-150 ease-in-out hover:bg-[#dea423] hover:text-stone-50 border-none">
                  <a href="/product#drip" className="text-2xl m-[10px]">More</a>
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-neutral-400 w-72 h-[525px] shadow-xl">
            <figure>
              <Image src="/products/product4.jpg" alt="product4" width={350} height={400} className="hover:scale-125 overflow-hidden duration-300 ease-in-out" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Origami</h2>
              <p className="text-sm">High quality coffee-related tools designated for baristas and homebrewers who are looking to bring out the original taste of beans.</p>
              <div className="absolute bottom-3 inset-x-24 card-actions pt-2">
                <button className="btn bg-stone-50 text-black transition-colors duration-150 ease-in-out hover:bg-[#dea423] hover:text-stone-50 border-none">
                  <a href="/product#origami" className="text-2xl m-[10px]">More</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="font-semibold bg-stone-50 text-3xl md:mx-20 md:pt-5 pt-4 md:mt-8 h-20 text-center sm:h-28">kind words from families</div>
        <Testimony />
      </div>
    </div>
  );
}