import React from "react";
import { Card, CardBody, Input, Textarea, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Contact: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "lucide:mail",
      title: "Email Us",
      details: "hello@nexusbusiness.com",
      color: "text-primary bg-primary/10"
    },
    {
      icon: "lucide:phone",
      title: "Call Us",
      details: "+1 (555) 123-4567",
      color: "text-success bg-success/10"
    },
    {
      icon: "lucide:map-pin",
      title: "Visit Us",
      details: "123 Business Ave, Suite 100, San Francisco, CA 94107",
      color: "text-secondary bg-secondary/10"
    }
  ];

  // Enhanced animation for form inputs
  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * custom
      }
    })
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-content1">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Have questions or ready to get started? Contact our team today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Enhanced with staggered animations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border border-divider">
              <CardBody className="p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 text-success mb-4">
                      <Icon icon="lucide:check" className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-foreground/70">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={inputVariants} custom={0} initial="initial" animate="animate">
                      <Input
                        label="Name"
                        placeholder="Enter your name"
                        value={name}
                        onValueChange={setName}
                        variant="bordered"
                        radius="sm"
                        isRequired
                        classNames={{
                          input: "bg-content2/50"
                        }}
                      />
                    </motion.div>
                    
                    <motion.div variants={inputVariants} custom={1} initial="initial" animate="animate">
                      <Input
                        label="Email"
                        placeholder="Enter your email"
                        value={email}
                        onValueChange={setEmail}
                        type="email"
                        variant="bordered"
                        radius="sm"
                        isRequired
                        classNames={{
                          input: "bg-content2/50"
                        }}
                      />
                    </motion.div>
                    
                    <motion.div variants={inputVariants} custom={2} initial="initial" animate="animate">
                      <Textarea
                        label="Message"
                        placeholder="How can we help you?"
                        value={message}
                        onValueChange={setMessage}
                        variant="bordered"
                        radius="sm"
                        minRows={4}
                        isRequired
                        classNames={{
                          input: "bg-content2/50"
                        }}
                      />
                    </motion.div>
                    
                    <motion.div variants={inputVariants} custom={3} initial="initial" animate="animate">
                      <Button
                        type="submit"
                        color="primary"
                        className="w-full"
                        size="lg"
                        isLoading={isSubmitting}
                        radius="sm"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardBody>
            </Card>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-foreground/70">
                Our team is here to help. Reach out through any of these channels and we'll respond as soon as possible.
              </p>
            </div>
            
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className={`p-3 rounded-lg ${item.color}`}>
                  <Icon icon={item.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">{item.title}</h4>
                  <p className="text-foreground/70">{item.details}</p>
                </div>
              </motion.div>
            ))}
            
            <div className="mt-10 pt-6 border-t border-divider">
              <h4 className="font-medium text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {["lucide:twitter", "lucide:facebook", "lucide:instagram", "lucide:linkedin"].map((icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="p-2 rounded-full bg-default/10 hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={`Social media link ${i+1}`}
                  >
                    <Icon icon={icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};