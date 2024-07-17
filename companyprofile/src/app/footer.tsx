import Image from "next/image"
import img1 from "../../public/logo/cup-logo.png"
import img2 from "../../public/footer/footer1.webp"
import img3 from "../../public/footer/footer2.webp"
import img4 from "../../public/footer/footer3.webp"
import img5 from "../../public/footer/footer4.webp"
import img6 from "../../public/footer/footer5.webp"
import img7 from "../../public/footer/footer6.webp"
import img8 from "../../public/footer/footer7.webp"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="w-full">
            <div className="mx-auto">
                <footer className="footer bg-stone-50 text-xs p-10">
                    <nav>
                        <h6 className="footer-title">Kalyan</h6>
                        <Link className="link link-hover" href="/about" target="_blank">About</Link>
                        <Link className="link link-hover" href="/product" target="_blank">KK To-Go</Link>
                        <Link className="link link-hover" href="/product#roti" target="_blank">Roti Kalyan</Link>
                        <Link className="link link-hover" href="/product#drip" target="_blank">Kopi Atlas</Link>
                        <Link className="link link-hover" href="/product#origami" target="_blank">Origami</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Coffee</h6>
                        <Link className="link link-hover" href="https://www.kopikalyan.com/wholesale" target="_blank">Wholesale</Link>
                        <Link className="link link-hover" href="https://www.kopikalyan.com/training" target="_blank">Trainings</Link>
                        <Link className="link link-hover" href="https://www.kopikalyan.com/coffeecatering" target="_blank">Coffee Catering</Link>
                        <Link className="link link-hover" href="https://www.kopikalyan.com/projectsangrai" target="_blank">Project Sangrai</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Shop</h6>
                        <Link className="link link-hover" target="_blank" href="https://www.tokopedia.com/kopikalyan">Indonesia</Link>
                        <Link className="link link-hover" target="_blank" href="https://www.instagram.com/kopikalyanjapan/">Japan</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social Media</h6>
                        <Link className="link link-hover" target="_blank" href="https://www.instagram.com/kopikalyan/?hl=en">Kopikalyan Instagram</Link>
                        <Link className="link link-hover" target="_blank" href="https://www.instagram.com/kopikalyan/?hl=en">Kopikalyan Archive Instagram</Link>
                        <Link className="link link-hover" target="_blank" href="https://www.instagram.com/kopikalyanjapan/">Kopikalyan Japan</Link>
                        <p className="">TikTok</p>
                        <p className="">Twitter</p>
                    </nav>
                </footer>
                <footer className="footer bg-stone-50 text-base-content border-base-300 border-t px-10 py-4">
                    <aside className="grid-flow-col items-center">
                        <Image src={img1} width={30} height={30} alt="logo" />
                        <p>
                            © Kopikalyan 2024. All Rights Reserved.
                            {/* <br /> */}
                            {/* Providing reliable tech since 1992 */}
                        </p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <Image src={img2} width={40} height={40} alt="footer1" />
                            <Image src={img3} width={40} height={40} alt="footer2" />
                            <Image src={img4} width={40} height={40} alt="footer3" />
                            <Image src={img5} width={40} height={40} alt="footer4" />
                            <Image src={img6} width={40} height={40} alt="footer5" />
                            <Image src={img7} width={100} height={100} alt="footer6" />
                            <Image src={img8} width={75} height={75} alt="footer7" />
                            {/* <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    id="instagram"
                                    className="fill-current">
                                    <path
                                        d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z"></path>
                                </svg>
                            </a> */}
                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    )
}