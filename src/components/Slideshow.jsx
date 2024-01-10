import { useState } from 'react';

const images = [
  'https://www.graza.co/cdn/shop/files/graza-pdp-duo-header-3_2x_caa7f912-38b3-4e36-b928-ed6c036abfc7_720x.jpg?v=1698551972',
  'https://www.graza.co/cdn/shop/products/graza-pdp-sizzle-header-3_2x_98f6ef49-281f-4095-b8bb-3045391401fe_720x.jpg?v=1698551972',
  'https://www.graza.co/cdn/shop/products/graza-pdp-drizzle-header-3_2x_569477b7-acf0-4950-93a4-c263d6893aa4_720x.jpg?v=1698551972',
  'https://www.graza.co/cdn/shop/products/graza-home-drizzle-in-use_2x_91b89a03-a404-434d-ae48-fb97e37406ab_720x.jpg?v=1698551972',
  'https://www.graza.co/cdn/shop/products/graza-pdp-duo-header-2_2x_7673c33b-ecf4-43d9-b053-4261454c4f3c_720x.jpg?v=1698551972',
  'https://www.graza.co/cdn/shop/products/graza-home-sizzle-in-usecopy_2x_47ab5af6-0732-4835-96ba-9853798e5b9d_720x.jpg?v=1698551972'
];


const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className='flex flex-1'>
      <img src={images[currentImageIndex]} alt="" className='imgg'/>
      <div className=' absolute bottom-0 mb-2 flex-col ' >
        {images.map((images, index) => (
          <div key={index} className=' m-4'>
            <button onClick={() => handleClick(index)} className=' bg-black h-16 w-16 imagebox border-2 border-white'>
              <img  src={images} alt="" style={{width: '100%', height: '100%'}}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
