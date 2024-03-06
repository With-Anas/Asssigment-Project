import React from "react";
import "./CSS/PageTwo.css";
import { useState } from "react";

function PageTwo() {
  const [para, setPara] = useState("Nil");

  return (
    <div className="containerp2">
      <div className="heading">
        <h1 className="p1h">02</h1>
        <h4 className="white">Our Agency</h4>
        <p className="white">________________</p>
      </div>
      <div className="contentp2 row">
        <div className="imgp2 col-md-6">
          <img
            className="im"
            src="https://i0.wp.com/musicphotolife.com/wp-content/uploads/2017/01/Sennheiser-PXC550-2.jpg?resize=1170%2C780&ssl=1"
            alt=""
          />
        </div>
        <div className="contp2 col-md-6">
          <div className="headingp2 white">
            <h4>Digital Team</h4>
            <h5>Best Design Agensy Collecton</h5>
          </div>
          <div className="cont white">
            <h5
              onClick={() => setPara(<p>
                    Design Design Design Design Design Design Design Design
                    Design Design Design Design Design Design Design Design
                    Design Design Design Design Design Design Design Design
                    Design Design Design Design Design Design Design Design
                  </p>)}>Design</h5>
            <h5 onClick={() => setPara(<p>
                    Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile
                    Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile
                    Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile
                    Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile
                  </p>)}>Mobile</h5>
            <h5 onClick={() => setPara(<p>
                    Web Web WEb WEb Web Web WEb WEb Web Web WEb WEb WEB                    Web Web WEb WEb Web Web WEb WEb Web Web WEb WEb WEB
                    Web Web WEb WEb Web Web WEb WEb Web Web WEb WEb WEB
                    Web Web WEb WEb Web Web WEb WEb Web
                  </p>)}>Web</h5>
          </div>
          <div>
            <hr className="white" />
            <p className="white">{para}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
