import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { ThemeSwitcher } from "./theme-switcher";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-primary rounded-md p-1.5">
            <Icon icon="lucide:layers" className="text-white text-xl" />
          </div>
          <span className="font-semibold text-xl text-foreground">Nexus</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Features", "About", "Pricing", "Contact"].map(
            (item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (i + 1) }}
              >
                {item}
              </motion.a>
            )
          )}
        </nav>

        {/* CTA Button and Theme Switcher */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ThemeSwitcher />
          <Button color="primary" variant="flat" radius="full" size="sm">
            Get Started
          </Button>
        </motion.div>

        {/* Mobile Menu Button and Theme Switcher */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <Button
            isIconOnly
            variant="light"
            onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon
              icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"}
              className="text-xl"
            />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background border-t border-divider"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {["Home", "Features", "About", "Pricing", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/80 hover:text-primary py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button
              color="primary"
              variant="flat"
              radius="full"
              size="sm"
              className="mt-2"
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
