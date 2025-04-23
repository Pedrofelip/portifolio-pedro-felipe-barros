'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import styles from './DownloadBtn.module.css';
import global from '../../page.module.css'

let balloonId = 0;

export default function DownloadBtn() {
  const [balloons, setBalloons] = useState([]);
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    const link = document.createElement('a');
    link.href = '/arquivo.pdf';
    link.download = 'arquivo.pdf';
    link.click();

    setAnimating(true);

    // Confetes
    const confettiInterval = setInterval(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: Math.random(), y: 0 },
      });
    }, 300);

    setTimeout(() => clearInterval(confettiInterval), 5000);

    // Balões
    // const balloonInterval = setInterval(() => {
    //   setBalloons((prev) => [
    //     ...prev,
    //     {
    //       id: balloonId++,
    //       left: Math.random() * 90,
    //       size: 40 + Math.random() * 60,
    //       delay: Math.random() * 0.3,
    //     },
    //   ]);
    // }, 250);

    // setTimeout(() => {
    //   clearInterval(balloonInterval);
    //   setAnimating(false);
    // }, 5000);
  };

  // Limpa balões antigos
  useEffect(() => {
    const cleanup = setInterval(() => {
      setBalloons((prev) => prev.slice(-30));
    }, 6000);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <>
      <a onClick={handleClick} className={global.red_btn}>
        Baixar currículo
      </a>

      {/* Efeitos em camada fixa separada */}
      <div className={styles.effectsWrapper} aria-hidden>
        <AnimatePresence>
          {animating &&
            balloons.map((balloon) => (
              <motion.img
                key={balloon.id}
                src="/balloon.svg"
                alt=""
                className={styles.balloon}
                initial={{ y: window.innerHeight, opacity: 0 }}
                animate={{ y: -window.innerHeight - 200, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 5 + Math.random() * 2,
                  ease: 'easeOut',
                  delay: balloon.delay,
                }}
                style={{
                  left: `${balloon.left}%`,
                  width: `${balloon.size}px`,
                  height: 'auto',
                }}
              />
            ))}
        </AnimatePresence>
      </div>
    </>
  );
}
