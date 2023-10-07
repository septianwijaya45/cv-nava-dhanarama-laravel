import React from "react";
import navaIcon from "@/public/icon/nava3d.png";
import {
    FaFacebookF,
    FaDribbble,
    FaLinkedinIn,
    FaInstagram,
    FaBehance,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full bg-white py-24" id="contact">
            <div className="container">
                <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0">
                    <div className="col-span-2">
                        <div className="flex">
                            <img src={navaIcon} className="h-[25px]" />
                            <p className="ml-2">CV NAVA DHANARAMA INDONESIA</p>
                        </div>
                        <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
                        <h3 className="py-2 text-[#6D737A]">
                            Call : +62 852 3128 0175
                        </h3>
                        <h3 className="py-2 text-[#6D737A]">
                            Jl. Letjend S Parman No. 45 Nganjuk
                        </h3>
                        <h3 className="py-2 text-[#363A3D]">
                            Email: cvnavadhanaramaindonesia@gmail.com
                        </h3>
                        <div className="flex gap-4 py-4">
                            <div className="p-4 bg-[#E9F8F3] rounded-xl">
                                <FaFacebookF
                                    size={25}
                                    style={{ color: "#4DC39E" }}
                                />
                            </div>
                            <div className="p-4 bg-[#E9F8F3] rounded-xl">
                                <FaLinkedinIn
                                    size={25}
                                    style={{ color: "#4DC39E" }}
                                />
                            </div>
                            <div className="p-4 bg-[#E9F8F3] rounded-xl">
                                <FaInstagram
                                    size={25}
                                    style={{ color: "#4DC39E" }}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold">Explore</h3>
                        <ul className="py-6 text-[#6D737A]">
                            <li className="py-2">
                                <a href="#home" className="text-base">
                                    Home
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="#portfolio" className="text-base">
                                    Portfolio
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="#about" className="text-base">
                                    About
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="#tech" className="text-base">
                                    Tech
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="#testimonial" className="text-base">
                                    Testimonial
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="#footer" className="text-base">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold">Category</h3>
                        <ul className="py-6 text-[#6D737A]">
                            <li className="py-2">Development</li>
                            <li className="py-2">Design</li>
                            <li className="py-2">Marketing</li>
                            <li className="py-2">Business</li>
                        </ul>
                    </div>

                    <div className="max-[780px]:col-span-2">
                        <h3 className="text-2xl font-bold">Subscribe</h3>
                        <h3 className="py-2 text-[#6D737A]">
                            You can subscribe us <br></br> for new information
                            about us.
                        </h3>
                        <form className="py-4">
                            <input
                                className="bg-[#F2F3F4] p-4 w-full rounded"
                                placeholder="Email here"
                            />
                            <button className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium">
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
