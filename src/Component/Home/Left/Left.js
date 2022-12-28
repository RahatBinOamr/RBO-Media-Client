import React from "react";
import "./Left.css"
import image from "../../../Images/img1.jpg"
import image1 from "../../../Images/img2.jpg"
import image2 from "../../../Images/img3.jpg"
import image3 from "../../../Images/img4.jpg"
import image4 from "../../../Images/img5.jpg"
import image5 from "../../../Images/img2.jpg"
import image6 from "../../../Images/img3.jpg"
const Left = () => {
  return (
    <div className='Leftbar'>
      <div className="NotificationsContainer">
        <div className="mb-5" style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ marginLeft: "-14px" }}>Notifications</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
        </div>
        <div className="mb-5" style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post
          </p>
          <img src={`${image1}`} className="likeimage" alt="" />
        </div>
        <div className="mb-5" style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            Suman started to following you
          </p>
          <img src={`${image2}`} className="followinguserimage" alt="" />
        </div>
        <div className="mb-5" style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
          <img src={`${image2}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post
          </p>
          <img src={`${image3}`} className="likeimage" alt="" />
        </div>
        <div className="mb-5" style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Suman started to following you
          </p>
          <img src={`${image4}`} className="followinguserimage" alt="" />
        </div>
        <div className="mb-5" style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
          <img src={`${image6}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Suman started to following you
          </p>
          <img src={`${image5}`} className="followinguserimage" alt="" />
        </div>
        <div className="mb-5" style={{ display: "flex", alignItems: "center", marginTop: -10 }}>
          <img src={`${image3}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post
          </p>
          <img src={`${image6}`} className="likeimage" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Left;
