import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Working with this team transformed our Shopify store. Sales increased by 45% in the first month after launch!",
      author: "Sarah Johnson",
      position: "CEO, Fashion Brand",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "Their custom app development solved problems we'd been struggling with for years. Highly recommend!",
      author: "Michael Chen",
      position: "Director of E-commerce",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "The most professional Shopify developers we've worked with. They delivered on time and exceeded expectations.",
      author: "Emily Rodriguez",
      position: "Marketing Manager",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from brands that have transformed their Shopify businesses with our help
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md transition-transform hover:scale-105"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to grow your Shopify business?</h3>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium inline-flex items-center">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;