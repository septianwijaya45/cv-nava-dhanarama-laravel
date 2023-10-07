import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import heroVector from "@/public/vectors/first.jpg";

const Hero = () => {
    return (
        <div id="home" className="container w-full bg-white py-24">
            <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
                <div className="flex flex-col justify-start gap-4">
                    <p className="py-2 text-2xl text-primary font-medium">
                        Advance For The Achievement
                    </p>
                    <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
                        Make Awesome{" "}
                        <span className="text-primary">Application</span> For
                        Client With{" "}
                        <span className="text-primary">Popular Technology</span>{" "}
                    </h1>
                    <p className="py-2 text-lg text-gray-600">
                        We help your business to develop and introduce your
                        business in the digital world
                    </p>
                </div>

                <img src={heroVector} className="md:order-last  order-first " />
            </div>
        </div>
    );
};

export default Hero;
