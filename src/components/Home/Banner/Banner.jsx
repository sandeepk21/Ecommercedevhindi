import "./Banner.scss";
import bannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Convallis interdum purus adipiscing dis parturient posuere ac a quam
            a eleifend montes parturient posuere curae tempor
          </p>
          <div className="ctas">
            <div className="banner-cta">READ MORE</div>
            <div className="banner-cta v2">SHOP NOW</div>
          </div>
        </div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
