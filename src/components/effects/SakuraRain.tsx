import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  opacity: number;
}

const SakuraRain: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate petals on mount
    const petalCount = 20; // Number of petals
    const newPetals = Array.from({ length: petalCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position %
      animationDuration: 10 + Math.random() * 10, // 10-20s fall duration
      delay: Math.random() * 5, // Random start delay
      opacity: 0.3 + Math.random() * 0.4, // Random opacity
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-[-20px] text-pink-300 pointer-events-none"
          style={{
            left: `${petal.left}%`,
            opacity: petal.opacity,
            animation: `sakura-fall ${petal.animationDuration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            fontSize: `${10 + Math.random() * 12}px`,
            color: 'var(--color-cyber-secondary)' // Use theme pink
          }}
        >
          🌸
        </div>
      ))}
      <style>{`
        @keyframes sakura-fall {
          0% {
            transform: translateY(-10vh) rotate(0deg) translateX(0px);
          }
          100% {
            transform: translateY(110vh) rotate(360deg) translateX(100px);
          }
        }
      `}</style>
    </div>
  );
};

export default SakuraRain;
