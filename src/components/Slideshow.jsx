import { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1676106623769-539ecc6d7f92?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];


const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className='flex '>
      <img src={images[currentImageIndex]} alt="" style={{ height:'100%', width: '100%',  backgroundSize: 'cover', backgroundPosition:'center' }}/>
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
