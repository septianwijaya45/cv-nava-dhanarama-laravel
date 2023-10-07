import React from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import { portfolio } from "@/Data/portfolio";

const Portfolio = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="w-full bg-[#E9F8F3B2] py-32" id="portfolio">
            <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
                <div className="py-4">
                    <h1 className="py-3 text-3xl font-bold">
                        Our Project{" "}
                        <span className="text-primary">Application</span>
                    </h1>
                    <p className="text-[#6D737A]">
                        This is a portfolio and products that we have completed
                        creating professional applications with various
                        technologies..
                    </p>
                </div>

                <Slider {...settings} className="px-5">
                    {portfolio.map((portfolio, i) => (
                        <div key={i}>
                            <Card portfolio={portfolio} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Portfolio;
