import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedCharacters: React.FC = () => {
  const [appleFill, setAppleFill] = useState(100);
  const [rabbitFill, setRabbitFill] = useState(100);
  const [henFill, setHenFill] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setAppleFill(prev => {
        const newValue = prev - 0.5;
        return newValue <= 0 ? 100 : newValue;
      });
      setRabbitFill(prev => {
        const newValue = prev - 0.3;
        return newValue <= 0 ? 100 : newValue;
      });
      setHenFill(prev => {
        const newValue = prev - 0.4;
        return newValue <= 0 ? 100 : newValue;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-8 p-8">
      {/* Apple Character with SVG Fill/Unfill Effect */}
      <div className="relative w-32 h-32">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <svg
            width="128"
            height="128"
            viewBox="0 0 128 128"
            className="w-32 h-32"
          >
            {/* Apple Shape */}
            <defs>
              <linearGradient id="appleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff6b6b" />
                <stop offset="100%" stopColor="#ee5a52" />
              </linearGradient>
              <mask id="appleFillMask">
                <rect 
                  x="0" 
                  y="0" 
                  width="128" 
                  height="128" 
                  fill="white"
                  transform={`translate(0, ${128 - (appleFill * 1.28)})`}
                />
              </mask>
            </defs>
            
            {/* Apple Body */}
            <path
              d="M64 20 C80 20, 100 40, 100 60 C100 80, 85 100, 64 100 C43 100, 28 80, 28 60 C28 40, 48 20, 64 20 Z"
              fill="url(#appleGradient)"
              mask="url(#appleFillMask)"
              stroke="#d63031"
              strokeWidth="2"
            />
            
            {/* Apple Stem */}
            <path
              d="M64 20 L60 10 L68 10 Z"
              fill="#8b4513"
              stroke="#654321"
              strokeWidth="1"
            />
            
            {/* Apple Leaf */}
            <path
              d="M68 10 Q75 5, 80 10 Q75 15, 68 10"
              fill="#4caf50"
              stroke="#2e7d32"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
        
        {/* Fill Value Display */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-red-600">
          {Math.round(appleFill)}%
        </div>
      </div>

      {/* Rabbit Character with SVG Fill/Unfill Effect */}
      <div className="relative w-32 h-32">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <svg
            width="128"
            height="128"
            viewBox="0 0 128 128"
            className="w-32 h-32"
          >
            <defs>
              <linearGradient id="rabbitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffb3ba" />
                <stop offset="100%" stopColor="#ff8a95" />
              </linearGradient>
              <mask id="rabbitFillMask">
                <rect 
                  x="0" 
                  y="0" 
                  width="128" 
                  height="128" 
                  fill="white"
                  transform={`translate(0, ${128 - (rabbitFill * 1.28)})`}
                />
              </mask>
            </defs>
            
            {/* Rabbit Body */}
            <ellipse
              cx="64"
              cy="70"
              rx="35"
              ry="45"
              fill="url(#rabbitGradient)"
              mask="url(#rabbitFillMask)"
              stroke="#ff6b9d"
              strokeWidth="2"
            />
            
            {/* Rabbit Head */}
            <ellipse
              cx="64"
              cy="40"
              rx="25"
              ry="30"
              fill="url(#rabbitGradient)"
              mask="url(#rabbitFillMask)"
              stroke="#ff6b9d"
              strokeWidth="2"
            />
            
            {/* Rabbit Ears */}
            <ellipse
              cx="50"
              cy="25"
              rx="8"
              ry="20"
              fill="url(#rabbitGradient)"
              mask="url(#rabbitFillMask)"
              stroke="#ff6b9d"
              strokeWidth="2"
              transform="rotate(-20 50 25)"
            />
            <ellipse
              cx="78"
              cy="25"
              rx="8"
              ry="20"
              fill="url(#rabbitGradient)"
              mask="url(#rabbitFillMask)"
              stroke="#ff6b9d"
              strokeWidth="2"
              transform="rotate(20 78 25)"
            />
            
            {/* Rabbit Eyes */}
            <circle cx="58" cy="35" r="3" fill="#333" />
            <circle cx="70" cy="35" r="3" fill="#333" />
            
            {/* Rabbit Nose */}
            <ellipse cx="64" cy="45" rx="2" ry="1" fill="#ff6b9d" />
          </svg>
        </motion.div>
        
        {/* Fill Value Display */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-pink-600">
          {Math.round(rabbitFill)}%
        </div>
      </div>

      {/* Hen Character with SVG Fill/Unfill Effect */}
      <div className="relative w-32 h-32">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <svg
            width="128"
            height="128"
            viewBox="0 0 128 128"
            className="w-32 h-32"
          >
            <defs>
              <linearGradient id="henGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffd93d" />
                <stop offset="100%" stopColor="#ffb347" />
              </linearGradient>
              <mask id="henFillMask">
                <rect 
                  x="0" 
                  y="0" 
                  width="128" 
                  height="128" 
                  fill="white"
                  transform={`translate(0, ${128 - (henFill * 1.28)})`}
                />
              </mask>
            </defs>
            
            {/* Hen Body */}
            <ellipse
              cx="64"
              cy="75"
              rx="30"
              ry="40"
              fill="url(#henGradient)"
              mask="url(#henFillMask)"
              stroke="#ff8c00"
              strokeWidth="2"
            />
            
            {/* Hen Head */}
            <circle
              cx="64"
              cy="45"
              r="20"
              fill="url(#henGradient)"
              mask="url(#henFillMask)"
              stroke="#ff8c00"
              strokeWidth="2"
            />
            
            {/* Hen Comb */}
            <path
              d="M55 30 L60 25 L65 30 L70 25 L75 30 L70 35 L60 35 Z"
              fill="#ff4757"
              mask="url(#henFillMask)"
              stroke="#ff3742"
              strokeWidth="1"
            />
            
            {/* Hen Beak */}
            <path
              d="M64 55 L60 60 L68 60 Z"
              fill="#ff8c00"
              mask="url(#henFillMask)"
              stroke="#ff7f00"
              strokeWidth="1"
            />
            
            {/* Hen Eyes */}
            <circle cx="58" cy="42" r="3" fill="#333" />
            <circle cx="70" cy="42" r="3" fill="#333" />
            
            {/* Hen Tail */}
            <path
              d="M94 75 Q110 70, 105 85 Q100 100, 94 90 Q90 80, 94 75"
              fill="url(#henGradient)"
              mask="url(#henFillMask)"
              stroke="#ff8c00"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
        
        {/* Fill Value Display */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-yellow-600">
          {Math.round(henFill)}%
        </div>
      </div>
    </div>
  );
};

export default AnimatedCharacters;
