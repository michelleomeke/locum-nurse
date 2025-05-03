
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "LocumNurse has transformed how I find shifts. I've increased my income by 30% while maintaining control over my schedule. The platform is intuitive and the team is incredibly responsive.",
    name: "Sarah Johnson, RN",
    role: "ICU Nurse",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    quote: "As a nursing director, finding qualified staff quickly used to be a constant challenge. LocumNurse has streamlined our staffing process and connected us with high-quality nurses who fit our culture.",
    name: "Michael Chen",
    role: "Director of Nursing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    quote: "The flexibility LocumNurse offers has allowed me to continue my education while maintaining income. I can pick up shifts that work with my schedule and the pay is consistently better than traditional staffing agencies.",
    name: "Jasmine Davis, BSN",
    role: "ER Nurse",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    quote: "Our rural hospital struggled to maintain adequate staffing. LocumNurse has been a game-changer, connecting us with dedicated professionals who provide excellent care to our community.",
    name: "Robert Thompson",
    role: "Hospital Administrator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600">
            Hear from nurses and healthcare facilities who've transformed their approach to staffing with LocumNurse.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="h-full">
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-sm h-full flex flex-col">
                    <div className="mb-6">
                      <svg
                        className="h-8 w-8 text-locum-400 mb-4"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                    </div>
                    <div className="mt-auto flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2" />
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
