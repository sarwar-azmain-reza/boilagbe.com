
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "../NewProductCard/NewProductCard.css"


// import required modules
import { FreeMode } from "swiper";

const BrandsSlider = ({ displayProducts }) => {

    return (
        <div>
            <Swiper
                slidesPerView={5}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper m-0"
            >{
                    displayProducts.map(product => <SwiperSlide className="p-4 border-x m-0"><div>
                        <div className="h-36">
                            <img src={product.image} alt="" className='h-full w-full' />
                        </div>
                        <div>
                            <p className="product-name font-semibold mt-2 text-sm text-center">{product?.productName}</p>
                            <p className="text-center">BDT: {product.sellingPrice}</p>
                        </div>
                    </div></SwiperSlide>)
                }
                {
                    displayProducts.map(product => <SwiperSlide className="p-4 border-x m-0"><div>
                        <div className="h-36">
                            <img src={product.image} alt="" className='h-full w-full' />
                        </div>
                        <div>
                            <p className="product-name font-semibold mt-2 text-sm text-center">{product?.productName}</p>
                            <p className="text-center">BDT: {product.sellingPrice}</p>
                        </div>
                    </div></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default BrandsSlider;