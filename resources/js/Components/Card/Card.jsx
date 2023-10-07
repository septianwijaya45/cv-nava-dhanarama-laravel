import React from 'react'

const Card = ({portfolio}) => {
  return (
      <div className="z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4">
          <img src={portfolio.linkImg} className="h-40 w-full object-cover" />
          <div className="p-5 border border-b">
              <h1 className="py-2 truncate">{portfolio.title}</h1>
          <a
              href={portfolio.link}
              className="text-sm font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
          >
              See Project
          </a>
          </div>

          <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">
              {portfolio.category}
          </div>
      </div>
  );
}

export default Card