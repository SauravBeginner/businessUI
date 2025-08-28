import React from "react";
import { useTheme } from "@heroui/use-theme";
import { Button, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Tooltip content={`Switch to ${isDark ? "light" : "dark"} mode`}>
      <Button
        isIconOnly
        variant="flat"
        radius="full"
        size="sm"
        className="bg-content2/50 backdrop-blur-sm"
        onPress={() => setTheme(isDark ? "light" : "dark")}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          key={theme}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <Icon icon="lucide:sun" className="text-lg" />
          ) : (
            <Icon icon="lucide:moon" className="text-lg" />
          )}
        </motion.div>
      </Button>
    </Tooltip>
  );
};
