import React from 'react'
import Slider from "react-slick";
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import { customerData } from '@/Data/customer';

const Feedback = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
      <div className="w-full bg-white py-32" id='testimonial'>
          <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
              <div className="py-4">
                  <h1 className="py-3 text-3xl font-bold">
                      Customer <span className="text-primary">Feedback</span>
                  </h1>
                  <p className="text-[#6D737A]">
                      Our customers' comments after collaborating with us
                  </p>
              </div>

              <Slider {...settings}>
                  {customerData.map((customer, i) => (
                      <div key={i}>
                          <FeedbackCard name={customer.name} job={customer.job} comment={customer.comment} />
                      </div>
                  ))}
              </Slider>
          </div>
      </div>
  );
}

export default Feedback