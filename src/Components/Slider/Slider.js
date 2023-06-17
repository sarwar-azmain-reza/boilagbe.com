import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import slide1 from '../../Assets/slide1.jpg';
import slide2 from '../../Assets/slide2.jpg';
import slide3 from '../../Assets/slide3.jpg';
import delivery from '../../Assets/dhaka-express-delivery.webp';
import boots from '../../Assets/boots.png';
import gif from '../../Assets/77169-buy-and-sell-online.gif';
import bookgif from '../../Assets/72170-books.gif';
import bookgif2 from '../../Assets/98849-book-lover.gif';
const Slider = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const slider = (
        <AutoplaySlider
            animation="cubeAnimation"
            className="w-full h-[95%]"
            play={true}
            cancelOnInteraction={false}
            interval={4000}
            bullets={false}
        >
            <div data-src={slide1} />
            <div data-src={slide2} />
            <div data-src={slide3} />
        </AutoplaySlider>
    );

    return (
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-12 gap-5 overflow-hidden'>
                <div className='lg:col-span-3 flex flex-col items-center justify-center '>
                    <img src={gif} alt="" className='h-52' />
                    <p className='text-3xl text-center font-semibold text-info'>BUY AND SELL OLD BOOKS<br /></p>
                </div>
                <div className='lg:col-span-7'>
                    {slider}
                </div>
                <div className='lg:flex lg:flex-col lg:gap-4 grid col-span-2 gap-2 mt-7 lg:mt-0  h-min'>
                    <img className='h-1/6' src={bookgif} alt="" />
                    <img className='h-1/6' src={bookgif2} alt="" />
                    {/* <img className='h-1/6' src={bookgif} alt="" /> */}
                </div>
            </div>

        </div>
    );
};

export default Slider;