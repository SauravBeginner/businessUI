import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const About: React.FC = () => {
  const stats = [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Expert Support" },
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Global Clients" }
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* About Image */}
          <motion.div 
            className="flex-1 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="absolute -z-10 w-full h-full bg-primary/5 rounded-3xl -rotate-6 transform-gpu"></div>
              <img 
                src="https://img.heroui.chat/image/ai?w=600&h=500&u=2" 
                alt="About Our Company" 
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              
              <motion.div
                className="absolute -bottom-6 -right-6 bg-background rounded-lg p-4 shadow-lg border border-divider"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon icon="lucide:award" className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">Recognized as</p>
                    <p className="text-foreground font-semibold">Industry Leader 2023</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* About Content */}
          <motion.div 
            className="flex-1 order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We're on a mission to transform how businesses operate
            </h2>
            
            <p className="text-foreground/70 mb-6">
              Founded in 2013, we've been at the forefront of business innovation, helping companies of all sizes streamline operations, enhance customer experiences, and drive sustainable growth.
            </p>
            
            <p className="text-foreground/70 mb-8">
              Our team of experts combines deep industry knowledge with cutting-edge technology to deliver solutions that address real business challenges. We believe in building long-term partnerships with our clients, understanding their unique needs, and providing tailored solutions that evolve with their business.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                >
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-foreground/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <Button 
              color="primary" 
              variant="flat"
              radius="full"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};