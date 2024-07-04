import React from 'react';
import { useState, useEffect} from "react";

const imageUrls: string[] = [
  '../public/dining/img1 (4).jpg',
  '../public/living/img1 (1).jpg',
  '../public/office/img1 (2).jpg',
  '../public/bedroom/img1 (3).jpg',
  '../public/living/img2 (1).jpg' ,
  '../public/living/img2 (2).jpg' ,
  '../public/living/img2 (3).jpg, ,
  '../public/living/img2 (4).jpg' ,
];

const CollectionPage: React.FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>(imageUrls[imageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex: number = (imageIndex + 1) % imageUrls.length;
      setImageIndex(newIndex);
      setImageUrl(imageUrls[newIndex]);
    }, 3000); // Change image every 1 second

    return () => clearInterval(interval);
  }, [imageIndex]);


  return (
    <div className="grid md:grid-rows-3 1g:grid-rows-3  md:grid-cols-2  grid-rows-1 grid-cols-1 gap-4 p-8">
      {/* First Card */}
      <div className="col-span-1">
        <div className="p-4 border border-gray-300 bg-customYellow">
          <div className="flex">
            <div className="w-1/2 ">
              <img src="../public/bedroom/img1 (3).jpg" alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="w-1/2 order-1 p-4">
              <h2 className="text-lg font-bold">Bedroom</h2>
              <p className="mt-2">Cozy beds, elegant dresses, wardrobes and nightstands</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      
      <div className="col-span-1">
        <div className="p-4 border border-gray-300 bg-customYellow">
          <div className="flex">
            <div className="w-1/2">
              <img src="../public/living/img1 (1).jpg" alt="Image 1" className="w-full h-auto" />
            </div>
            <div className="w-1/2 p-4">
              <h2 className="text-lg font-bold">Living Room</h2>
              <p className="mt-2">Comfortable sofas, stylish coffee tablesand chairs.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Third Card */}
      <div className="row-span-2">
        <div className=" border border-gray-300 bg-customYellow h-full">
        <img src={imageUrl} alt="Slideshow" className='w-auto h-full' />
          </div>
      </div>

      {/* Fourth Card */}
      <div className="col-span-1">
        <div className="p-4 border border-gray-300 bg-customYellow">
          <div className="flex">
            <div className="w-1/2 order-2">
              <img src="../public/dining/img1 (4).jpg" alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="w-1/2 order-1 p-4">
              <h2 className="text-lg font-bold">Dining Room</h2>
              <p className="mt-2">Dining tables, comfortable chairs and hutches/buffets.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Fifth Card */}
      <div className="col-span-1">
        <div className="p-4 border border-gray-300 bg-customYellow">
          <div className="flex">
            <div className="w-1/2">
              <img src="../public/office/img1 (2).jpg" alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="w-1/2 order-1 p-4">
              <h2 className="text-lg font-bold">Office</h2>
              <p className="mt-2">Functional Desks, chairs, cabinets and bookcases.</p>
            </div>
          </div>
        </div>
      </div>     
    </div>
  );
};

export default CollectionPage;
