import React from 'react'

const Client = () => {
  return (
      <div className="w-full bg-white py-[50px]">
          <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
              <h1 className="text-center text-2xl font-bold text-[#536E96]">
                  Client App
              </h1>
              <p className="text-center  text-[#536E96] text-xl">
                  Top Application For Nava Dhanarama Indonesia Customers
              </p>
              <div className="flex justify-center text-center py-8 md:gap-8 ">
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                      <p className="text-[#b2bec3]">Warehouse Management</p>
                      <p className="text-[#558ee4]">Point of Sale</p>
                      <p className="text-[#b2bec3]">Finance & Analyze Profit</p>
                      <p className="text-[#558ee4]">Absence App</p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Client