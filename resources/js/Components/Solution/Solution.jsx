import React from "react";
import achievement from "@/public/img/benefit-two.png";
import { FaMobileAlt, FaAngleDoubleUp, FaChartLine } from "react-icons/fa";

const Solution = () => {
    return (
        <div className="w-full bg-white py-24" id="tech">
            <div className="container">
                <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
                    <div className="flex flex-col justify-center ">
                        <h1 className="md:leading-[72px] text-3xl font-bold">
                            Our Solution For{" "}
                            <span className="text-primary">Customer</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            We offer a variety of renewable solutions and
                            technologies to suit customer needs. Our experience
                            can be relied on for development in the IT world.
                        </p>

                        <div className="grid grid-cols-2 py-16">
                            <div className="py-6 flex">
                                <div className="p-4 bg-[#E9F8F3] rounded-xl h-[70px]">
                                    <FaMobileAlt
                                        size={30}
                                        style={{ color: "#1A906B" }}
                                    />
                                </div>
                                <div className="px-3">
                                    <h1 className="font-semibold">
                                        Mobile Responsive
                                    </h1>
                                    <p className="text-[#6D737A] text-sm">
                                        Applications can be opened on various
                                        devices, especially mobile smartphones
                                        or tablets.
                                    </p>
                                </div>
                            </div>
                            <div className="py-6 flex">
                                <div className="p-4 bg-[#FFFAF5] rounded-xl h-[70px]">
                                    <FaAngleDoubleUp
                                        size={30}
                                        style={{ color: "#FFC27A" }}
                                    />
                                </div>
                                <div className="px-3">
                                    <h1 className="font-semibold">
                                        High Performance and Guaranteed Security
                                    </h1>
                                    <p className="text-[#6D737A] text-sm">
                                        Creation and maintenance to high
                                        standards, from initial analysis to
                                        low-end testing to high-end testing, is
                                        carried out to ensure website
                                        performance and security.
                                    </p>
                                </div>
                            </div>
                            <div className="py-6 flex">
                                <div className="p-4 bg-[#FFEEF0] rounded-xl h-[70px]">
                                    <FaChartLine
                                        size={30}
                                        style={{ color: "#ED4459" }}
                                    />
                                </div>
                                <div className="px-3">
                                    <h1 className="font-semibold">
                                        Effectiveness & Efficiency.
                                    </h1>
                                    <p className="text-[#6D737A] text-sm">
                                        We carefully research and analyze
                                        customer needs so that the technology
                                        used can be used to develop effective
                                        and efficient businesses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img
                        src={achievement}
                        className="m-auto md:order-first  order-last w-[400]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Solution;
