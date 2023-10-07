import React from "react";
import { HiUserAdd, HiChartBar } from "react-icons/hi";
import { SlPeople } from "react-icons/sl";
import achievement from "@/public/img/benefit-one.png";

const Benefits = () => {
    return (
        <div className="w-full bg-white py-24" id="about">
            <div className="container">
                <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
                    <div className="flex flex-col justify-center ">
                        <h1 className="md:leading-[72px] text-3xl font-bold">
                            Highlight Benefits for{" "}
                            <span className="text-primary">Client</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            uses new technology to keep up with popular
                            technology trends and protects your data with data
                            encryption.
                        </p>

                        <div className="grid grid-cols-2 py-16">
                            <div className="py-6 flex">
                                <div className="p-4 bg-[#E9F8F3] rounded-xl h-[70px]">
                                    <SlPeople
                                        size={30}
                                        style={{ color: "#1A906B" }}
                                    />
                                </div>
                                <div className="px-3">
                                    <h1 className=" font-semibold">
                                        Understand Customers Needs
                                    </h1>
                                    <p className="text-[#6D737A] text-sm">
                                        understand structurally and in order to
                                        build the required application
                                        requirements
                                    </p>
                                </div>
                            </div>
                            <div className="py-6 flex">
                                <div className="p-4 bg-[#FFFAF5] rounded-xl h-[70px]">
                                    <HiChartBar
                                        size={30}
                                        style={{ color: "#FFC27A" }}
                                    />
                                </div>
                                <div className="px-3">
                                    <h1 className=" font-semibold">
                                        Improve Customers App
                                    </h1>
                                    <p className="text-[#6D737A] text-sm">
                                        assist in customer application
                                        maintenance to fix bugs or add
                                        functional or non-functional functions
                                        according to customer needs.
                                    </p>
                                </div>
                            </div>
                            <div className="py-6 flex">
                                <div className="p-4 bg-[#FFEEF0] rounded-xl h-[70px]">
                                    <HiUserAdd
                                        size={30}
                                        style={{ color: "#ED4459" }}
                                    />
                                </div>
                                <div className="px-3">
                                    <h1 className=" font-semibold">
                                        Vendor For Customer
                                    </h1>
                                    <p className="text-[#6D737A] text-sm">
                                        Collaboration between Nava Dhanarama
                                        Indonesia and customers to support and
                                        develop applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img
                        src={achievement}
                        className="m-auto md:order-last  order-first"
                    />
                </div>
            </div>
        </div>
    );
};

export default Benefits;
