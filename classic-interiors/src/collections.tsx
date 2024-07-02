import React from 'react';
import { useState, useEffect} from "react";

const imageUrls: string[] = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
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
    <div className="grid grid-rows-3 grid-cols-2 gap-4 p-8">
      {/* First Card */}
      <div className="col-span-1">
        <div className="p-4 border border-gray-300 bg-customGold">
          <div className="flex">
            <div className="w-1/2">
              <img src="img1.jpg" alt="Image 1" className="w-full h-auto" />
            </div>
            <div className="w-1/2 p-4">
              <h2 className="text-lg font-bold">Title 1</h2>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="col-span-1">
        <div className="p-4 border border-gray-300 bg-customGold">
          <div className="flex">
            <div className="w-1/2 ">
              <img src="img1.jpg" alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="w-1/2 order-1 p-4">
              <h2 className="text-lg font-bold">Title 2</h2>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Card (Span 2 columns) */}
      <div className="row-span-2">
        <div className=" border border-gray-300 bg-customGold h-full">
        <img src={imageUrl} alt="Slideshow" className='w-auto h-full' />
          </div>
      </div>

      {/* Fourth Card */}
      <div className="col-span-1">
        <div className="p-4 border border-gray-300 bg-customGold">
          <div className="flex">
            <div className="w-1/2 order-2">
              <img src="img1.jpg" alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="w-1/2 order-1 p-4">
              <h2 className="text-lg font-bold">Title 4</h2>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Fifth Card */}
      <div className="col-span-1">
        <div className="p-4 border border-gray-300 bg-customGold">
          <div className="flex">
            <div className="w-1/2">
              <img src="img1.jpg" alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="w-1/2 order-1 p-4">
              <h2 className="text-lg font-bold">Title 5</h2>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>     
    </div>
  );
};

export default CollectionPage;
