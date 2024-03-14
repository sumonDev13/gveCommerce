import { productData } from "../../products/ProductData";
import Product from "../productCard/Product";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="sm:flex flex-row flex-wrap">
            {productData.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
