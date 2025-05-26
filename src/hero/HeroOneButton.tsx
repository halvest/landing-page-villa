"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = ({ title, description, button }: IHeroOneButtonProps) => (
  <motion.header
    role="banner"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/10 px-6 py-16 text-center text-white shadow-2xl backdrop-blur-lg sm:py-20 md:py-24"
  >
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="mb-6 whitespace-pre-line text-4xl font-bold leading-tight tracking-tight drop-shadow md:text-5xl"
    >
      {title}
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="mx-auto mb-10 max-w-2xl text-lg text-white/90 md:text-xl"
    >
      {description}
    </motion.p>

    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="inline-block"
    >
      {button}
    </motion.div>
  </motion.header>
);

export { HeroOneButton };
