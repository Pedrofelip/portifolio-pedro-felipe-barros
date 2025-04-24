"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./ScrollDownButton.module.css";
import { a } from "framer-motion/client";

export default function ScrollDownButton({ url }:any) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 0); // Aparece após 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <a href={url}>
      <div className={styles.container}>
        {showButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.button
              className={styles.button}
              animate={{ y: [0, -10, 0,] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", type: "tween" }}
            >
              <i className="fa-solid fa-angles-down"></i>
            </motion.button>
          </motion.div>
        )}
      </div>
    </a>
  );
}
