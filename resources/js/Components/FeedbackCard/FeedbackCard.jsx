import React from "react";
import Default from "@/public/img/default.png";
import QuotationMark from "@/public/img/quotationMark.png";

const FeedbackCard = ({name, job, comment}) => {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <img src={Default} className="w-14" />
                    <div>
                        <h1>{name}</h1>
                        <p>{job}</p>
                    </div>
                </div>
                <img className="h-8" src={QuotationMark} />
            </div>

            <div className="py-8">
                <h3 className="text-lg">
                    {comment}
                </h3>
            </div>
        </div>
    );
};

export default FeedbackCard;
