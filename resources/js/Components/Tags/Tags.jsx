import React from 'react'
import { Helmet } from "react-helmet";
import navaIcon from "@/public/icon/nava3d.png"
const Tags = () => {
  return (
      <div className="application">
          <Helmet>
              <meta charSet="utf-8" />
              <title>Nava Dhanarama Indonesia</title>
              <link rel="canonical" href="https://navadhanarama.com/" />

              <link rel="icon" href={navaIcon} />
          </Helmet>
      </div>
  );
}

export default Tags