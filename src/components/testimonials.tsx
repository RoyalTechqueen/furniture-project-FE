import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "The design was absolutely stunning and exceeded all my expectations!",
    image: "img2.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "A fantastic experience from start to finish. Highly recommend!",
    image: "img2.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    feedback: "Incredible attention to detail and a pleasure to work with.",
    image: "img2.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    feedback: "Incredible attention to detail and a pleasure to work with.",
    image: "img2.jpg",
  },
  {
    id: 5,
    name: "Michael Brown",
    feedback: "Incredible attention to detail and a pleasure to work with.",
    image: "img2.jpg",
  },
  {
    id: 6,
    name: "Michael Brown",
    feedback: "Incredible attention to detail and a pleasure to work with.",
    image: "img2.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-gray-300" id="testimonial">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="md:w-1/3 px-4 mb-8">
              <div className="bg-gray-200 p-12 rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-lg text-black text-center mb-4">
                  {testimonial.feedback}
                </p>
                <p className="text-center font-bold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
