import React from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechInnovate",
      image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=1",
      content: "Implementing this platform has transformed our business operations. We've seen a 40% increase in productivity and significant cost savings. The customer support team has been exceptional throughout our journey.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "CTO, GrowthWave",
      image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=2",
      content: "The analytics capabilities are outstanding. We now have real-time insights into our business performance, allowing us to make data-driven decisions quickly. This has been a game-changer for our strategic planning.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Director, ScaleUp Inc",
      image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=3",
      content: "The automation features have eliminated hours of manual work for our team. Integration was smooth, and the platform is intuitive to use. I highly recommend it to any business looking to streamline their operations.",
      rating: 4
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Enhanced animation for testimonial cards
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (custom: number) => ({
      opacity: activeIndex === custom ? 1 : 0,
      x: activeIndex === custom ? 0 : 100,
      zIndex: activeIndex === custom ? 10 : 0,
      transition: { 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1],
        delay: activeIndex === custom ? 0.1 : 0
      }
    }),
    exit: { opacity: 0, x: -100 }
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-content1">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what businesses like yours have achieved with our platform.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Large Quote Icon - Enhanced with animation */}
            <motion.div 
              className="absolute -top-10 left-0 text-primary/10 pointer-events-none"
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.05, 1, 0.95, 1]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <Icon icon="lucide:quote" className="w-20 h-20" />
            </motion.div>
            
            {/* Testimonial Cards */}
            <div className="relative h-[300px] md:h-[250px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="absolute w-full"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Card className="border border-divider">
                    <CardBody className="p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <Avatar
                          src={testimonial.image}
                          className="w-16 h-16 text-large"
                          name={testimonial.name}
                        />
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Icon 
                                key={i}
                                icon="lucide:star" 
                                className={`${i < testimonial.rating ? "text-warning" : "text-default-300"} w-4 h-4`} 
                              />
                            ))}
                          </div>
                          <p className="text-foreground/80 mb-4 italic">"{testimonial.content}"</p>
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-foreground/60 text-sm">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Navigation Dots - Enhanced with animation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-primary w-8" : "bg-default-300"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};