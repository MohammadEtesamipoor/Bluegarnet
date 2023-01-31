import heroImg from "Assets/Images/img-hero.png";
import cubeImg from "Assets/Images/specular.png";
import BoxSliderHero from "Components/box-slider-hero/BoxSliderHero";
import Slider from "Components/sliders/Slider";
function HeroHeader() {
  return (
    <div className="hero-header">
      
      <div className="hero-header__info">
       
        {/* yellow box */}
        <div className="hero-header__info__box-background"></div>

        {/* carousel info */}
        <div className="hero-header__info__swiper">
        <Slider item={BoxSliderHero} effect="flip" /> 
        </div>

        {/* img info Jewelry mannequin*/}
        <div className="hero-header__info__img">
          <img src={heroImg} alt="Jewelry mannequin" />
        </div>
      </div>

      {/* cube image */}
      <div className="hero-header__img-cube">
        <img src={cubeImg} alt="" />
      </div>
    </div>
  );
}

export default HeroHeader;
