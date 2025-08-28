import React from "react";
import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: "lucide:bar-chart-2",
      title: "Advanced Analytics",
      description: "Gain valuable insights with real-time data visualization and comprehensive reporting tools.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: "lucide:shield",
      title: "Enterprise Security",
      description: "Protect your business with industry-leading security protocols and compliance standards.",
      color: "bg-success/10 text-success"
    },
    {
      icon: "lucide:users",
      title: "Team Collaboration",
      description: "Enhance productivity with seamless communication and project management features.",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: "lucide:zap",
      title: "Automation Tools",
      description: "Save time and reduce errors by automating repetitive tasks and workflows.",
      color: "bg-warning/10 text-warning"
    },
    {
      icon: "lucide:smartphone",
      title: "Mobile Integration",
      description: "Access your business data anytime, anywhere with our responsive mobile applications.",
      color: "bg-danger/10 text-danger"
    },
    {
      icon: "lucide:code",
      title: "API Integration",
      description: "Connect with your favorite tools through our extensive API and integration options.",
      color: "bg-primary/10 text-primary"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Enhanced hover animation for feature cards
  const cardVariants = {
    initial: { 
      y: 0,
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
    },
    hover: { 
      y: -8,
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
    }
  };

  return (
    <section id="features" className="py-20 md:py-32 bg-content1">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Our comprehensive suite of tools helps you streamline operations, enhance customer experiences, and drive sustainable growth.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="border border-divider h-full"
                  isPressable
                >
                  <CardBody className="p-6">
                    <div className={`${feature.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4`}>
                      <Icon icon={feature.icon} className="text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-foreground/70 mb-2">And many more features to explore</p>
          <a href="#pricing" className="text-primary font-medium inline-flex items-center gap-1 hover:underline">
            View all features
            <Icon icon="lucide:arrow-right" className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};