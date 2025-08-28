import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements - Enhanced with more dynamic elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        {/* New animated background elements */}
        <motion.div 
          className="absolute top-1/2 left-1/4 w-40 h-40 bg-success/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-warning/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -20, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Hero Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New Features Available
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform Your Business with <span className="text-primary">Intelligent</span> Solutions
            </motion.h1>
            
            <motion.p 
              className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Streamline operations, enhance customer experiences, and drive growth with our comprehensive business platform.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button 
                color="primary" 
                size="lg" 
                radius="full"
                className="font-medium px-8"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Get Started
              </Button>
              <Button 
                variant="bordered" 
                size="lg" 
                radius="full"
                className="font-medium"
                startContent={<Icon icon="lucide:play" className="text-primary" />}
              >
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://img.heroui.chat/image/avatar?w=48&h=48&u=${i}`} 
                    alt={`User ${i}`}
                    className="w-8 h-8 rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="text-foreground font-medium">500+</span>
                <span className="text-foreground/60 ml-1">businesses trust us</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-6 -left-6 bg-primary/10 rounded-lg p-4 backdrop-blur-sm border border-primary/20 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-success/20 p-2 rounded-full">
                    <Icon icon="lucide:trending-up" className="text-success text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Monthly Revenue</p>
                    <p className="text-foreground font-semibold">+12.5%</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -right-6 bg-primary/10 rounded-lg p-4 backdrop-blur-sm border border-primary/20 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Icon icon="lucide:users" className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">New Customers</p>
                    <p className="text-foreground font-semibold">+1,240</p>
                  </div>
                </div>
              </motion.div>
              
              <img 
                src="https://img.heroui.chat/image/dashboard?w=800&h=600&u=1" 
                alt="Business Dashboard" 
                className="rounded-xl shadow-xl w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Trusted By Logos */}
        <motion.div 
          className="mt-20 pt-10 border-t border-divider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-center text-foreground/60 text-sm mb-6">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
            <Icon icon="logos:google" className="h-8 w-auto" />
            <Icon icon="logos:slack" className="h-8 w-auto" />
            <Icon icon="logos:airbnb" className="h-8 w-auto" />
            <Icon icon="logos:spotify" className="h-8 w-auto" />
            <Icon icon="logos:microsoft" className="h-8 w-auto" />
            <Icon icon="logos:amazon" className="h-8 w-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};