import legImg from "Assets/Images/legImg.png";
import handImg from "Assets/Images/handImg.png";
import handImg2 from "Assets/Images/handImg2.png";
import mannequin from "Assets/Images/mannequin.png";
import { FaArrowLeft } from "react-icons/fa";
import Slider from "Components/sliders/Slider";
function PopularProduct() {
  return (
    <div>
      <div className="popular-products">
        {/* header title popular products */}
        <div className="popular-products__header">
          <h1 className="popular-products__header--title-session">
            محبوب ترین محصولات
          </h1>
          <h1 className="popular-products__header--all-products">
            همه محصولات
            <FaArrowLeft />
          </h1>
        </div>

        {/* slider popular products */}
        <div className="popular-products__box-swiper">
          <Slider item={BoxItemCarousel} navigation={true} />
        </div>
      </div>
    </div>
  );
}

export default PopularProduct;



function BoxItemCarousel() {
  return (
    <div className="popular-products__box-swiper__swiper">
      <div className="popular-products__box-swiper__swiper__parts">
        <img src={legImg} alt="" />
      </div>

      <div className="popular-products__box-swiper__swiper__parts">
        <h1>نام محصول تا دو خط در این محل قرار میگیرد</h1>
        <div className="popular-products__box-swiper__swiper__parts--code-product">
          <p>کد محصول:</p>
          <p>BG-168</p>
        </div>
      </div>

      <div className="popular-products__box-swiper__swiper__parts">
        <img src={handImg} alt="" />
        <h1>نام محصول تا دو خط در این محل قرار میگیرد</h1>
      </div>

      <div className="popular-products__box-swiper__swiper__parts">
        {" "}
        <img src={handImg2} alt="" />
        <h1>نام محصول تا دو خط در این محل قرار میگیرد</h1>
      </div>

      <div className="popular-products__box-swiper__swiper__parts">
        {" "}
        <img src={mannequin} alt="" />
      </div>

      <div className="popular-products__box-swiper__swiper__parts">
        <h1>نام محصول تا دو خط در این محل قرار میگیرد</h1>
        <div className="popular-products__box-swiper__swiper__parts--code-product">
          <p>کد محصول:</p>
          <p>BG-168</p>
        </div>
      </div>
    </div>
  );
}
