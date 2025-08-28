import React from "react";
import { Card, CardBody, CardHeader, Button, Checkbox } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = React.useState(true);
  
  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 29 : 39,
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "24/7 email support",
        "10GB storage",
        "API access"
      ],
      cta: "Get Started",
      popular: false,
      color: "default"
    },
    {
      name: "Professional",
      price: isAnnual ? 79 : 99,
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "24/7 priority support",
        "50GB storage",
        "API access",
        "Custom integrations",
        "Workflow automation"
      ],
      cta: "Get Started",
      popular: true,
      color: "primary"
    },
    {
      name: "Enterprise",
      price: isAnnual ? 199 : 249,
      description: "For large organizations with complex needs",
      features: [
        "Unlimited team members",
        "Enterprise analytics",
        "Dedicated account manager",
        "Unlimited storage",
        "Advanced API access",
        "Custom integrations",
        "Workflow automation",
        "SSO & advanced security",
        "Custom training"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "default"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1 * custom
      }
    }),
    hover: (custom: boolean) => ({
      y: custom ? -10 : -5,
      boxShadow: custom 
        ? "0 20px 30px rgba(0,0,0,0.15)" 
        : "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3
      }
    })
  };

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${isAnnual ? 'text-foreground' : 'text-foreground/60'}`}>Monthly</span>
            <Checkbox
              isSelected={isAnnual}
              onValueChange={setIsAnnual}
              color="primary"
              size="lg"
            >
              <div className="flex items-center">
                <span className={`ml-3 ${isAnnual ? 'text-foreground' : 'text-foreground/60'}`}>Annual</span>
                <span className="ml-2 bg-success/10 text-success text-xs px-2 py-0.5 rounded-full">Save 20%</span>
              </div>
            </Checkbox>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              custom={plan.popular}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card 
                className={`border ${plan.popular ? 'border-primary' : 'border-divider'} h-full overflow-visible`}
                shadow={plan.popular ? "md" : "sm"}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="flex flex-col gap-2 pb-0">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="text-foreground/60 text-sm">{plan.description}</p>
                </CardHeader>
                
                <CardBody className="pt-4">
                  <div className="mb-6">
                    <div className="flex items-end">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-foreground/60 ml-2">/ month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-success text-sm mt-1">Billed annually</p>
                    )}
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon icon="lucide:check" className="text-success text-sm" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    color={plan.popular ? "primary" : "default"}
                    variant={plan.popular ? "solid" : "flat"}
                    radius="full"
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-foreground/70">
            Need a custom plan? <a href="#contact" className="text-primary font-medium hover:underline">Contact us</a> for enterprise pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};