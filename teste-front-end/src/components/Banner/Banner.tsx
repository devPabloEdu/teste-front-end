import React from "react";
import BannerContent from "./BannerContent";

function Banner() {
    return <div className="BannerContainer">
        <img src="/Assets/bannerBackground.png" 
        alt="Banner Principal da ECONVERSE" 
        loading="lazy"
        aria-label="Banner da empresa Econverse"
        className="BannerImg"
        />
        <BannerContent />
    </div>
}

export default Banner;