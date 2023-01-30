import HeroHeader from "Components/hero-header/hero-header-component";
import PopularProduct from "Components/popular-products/popular-products-components";


export function HomePage() {

  return (
    <div  className="home">
      {/* Header */}

      {/* Hero Header */}
      <HeroHeader />

      {/* most popular products */}
      <PopularProduct />
      {/* Footer */}
    </div>
  );
}