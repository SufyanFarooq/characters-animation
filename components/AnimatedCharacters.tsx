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
          // animate={{
          //   scale: [1, 1.1, 1],
          // }}
          // transition={{
          //   duration: 2,
          //   repeat: Infinity,
          //   repeatType: "reverse",
          //   ease: "easeInOut",
          // }}
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
                <stop offset="0%" stopColor="#ff8a8a" />
                <stop offset="30%" stopColor="#ff6b6b" />
                <stop offset="70%" stopColor="#ee5a52" />
                <stop offset="100%" stopColor="#d63031" />
              </linearGradient>
              <radialGradient id="apple3D" cx="40%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#ff9f9f" />
                <stop offset="70%" stopColor="#ff6b6b" />
                <stop offset="100%" stopColor="#d63031" />
              </radialGradient>
              <filter id="appleShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
              </filter>
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
            
            {/* Apple Body - 3D Effect */}
            <path
              d="M64 15 C85 15, 105 35, 105 55 C105 75, 95 95, 75 105 C65 110, 55 110, 45 105 C25 95, 15 75, 15 55 C15 35, 35 15, 64 15 Z"
              fill="url(#apple3D)"
              mask="url(#appleFillMask)"
              filter="url(#appleShadow)"
            />
            {/* Apple Outline - Always Visible */}
            <path
              d="M64 15 C85 15, 105 35, 105 55 C105 75, 95 95, 75 105 C65 110, 55 110, 45 105 C25 95, 15 75, 15 55 C15 35, 35 15, 64 15 Z"
              fill="none"
              stroke="#c0392b"
              strokeWidth="1.5"
            />
            
            {/* Apple Highlight */}
            <ellipse
              cx="45"
              cy="35"
              rx="8"
              ry="12"
              fill="rgba(255,255,255,0.3)"
              mask="url(#appleFillMask)"
            />
            
            {/* Apple Stem - More Detailed */}
            <path
              d="M64 15 L62 8 L66 8 Z"
              fill="#8b4513"
              stroke="#654321"
              strokeWidth="1"
            />
            
            {/* Apple Leaf - More Realistic */}
            <path
              d="M66 8 Q72 3, 78 8 Q75 12, 70 10 Q68 8, 66 8"
              fill="#27ae60"
              stroke="#2e7d32"
              strokeWidth="0.5"
            />
            
            {/* Apple Dimple */}
            <ellipse
              cx="64"
              cy="15"
              rx="3"
              ry="2"
              fill="rgba(0,0,0,0.1)"
              mask="url(#appleFillMask)"
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
                <stop offset="30%" stopColor="#ff8a95" />
                <stop offset="70%" stopColor="#ff6b9d" />
                <stop offset="100%" stopColor="#e91e63" />
              </linearGradient>
              <radialGradient id="rabbit3D" cx="40%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffc1c8" />
                <stop offset="60%" stopColor="#ff8a95" />
                <stop offset="100%" stopColor="#e91e63" />
              </radialGradient>
              <filter id="rabbitShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.25"/>
              </filter>
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
            
            {/* Rabbit Body - 3D Effect */}
            <ellipse
              cx="64"
              cy="75"
              rx="32"
              ry="40"
              fill="url(#rabbit3D)"
              mask="url(#rabbitFillMask)"
              filter="url(#rabbitShadow)"
            />
            {/* Rabbit Body Outline - Always Visible */}
            <ellipse
              cx="64"
              cy="75"
              rx="32"
              ry="40"
              fill="none"
              stroke="#e91e63"
              strokeWidth="1.5"
            />
            
            {/* Rabbit Head - More Detailed */}
            <ellipse
              cx="64"
              cy="45"
              rx="22"
              ry="28"
              fill="url(#rabbitGradient)"
              mask="url(#rabbitFillMask)"
            />
            {/* Rabbit Head Outline - Always Visible */}
            <ellipse
              cx="64"
              cy="45"
              rx="22"
              ry="28"
              fill="none"
              stroke="#e91e63"
              strokeWidth="1.5"
            />
            
            {/* Rabbit Ears - More Realistic */}
            <ellipse
              cx="48"
              cy="20"
              rx="6"
              ry="18"
              fill="url(#rabbitGradient)"
              mask="url(#rabbitFillMask)"
              transform="rotate(-15 48 20)"
            />
            <ellipse
              cx="80"
              cy="20"
              rx="6"
              ry="18"
              fill="url(#rabbitGradient)"
              mask="url(#rabbitFillMask)"
              transform="rotate(15 80 20)"
            />
            {/* Rabbit Ears Outline - Always Visible */}
            <ellipse
              cx="48"
              cy="20"
              rx="6"
              ry="18"
              fill="none"
              stroke="#e91e63"
              strokeWidth="1.5"
              transform="rotate(-15 48 20)"
            />
            <ellipse
              cx="80"
              cy="20"
              rx="6"
              ry="18"
              fill="none"
              stroke="#e91e63"
              strokeWidth="1.5"
              transform="rotate(15 80 20)"
            />
            
            {/* Inner Ears */}
            <ellipse
              cx="48"
              cy="20"
              rx="3"
              ry="12"
              fill="#ffb3ba"
              mask="url(#rabbitFillMask)"
              transform="rotate(-15 48 20)"
            />
            <ellipse
              cx="80"
              cy="20"
              rx="3"
              ry="12"
              fill="#ffb3ba"
              mask="url(#rabbitFillMask)"
              transform="rotate(15 80 20)"
            />
            
            {/* Rabbit Eyes - More Detailed */}
            <circle cx="58" cy="40" r="4" fill="#fff" />
            <circle cx="70" cy="40" r="4" fill="#fff" />
            <circle cx="58" cy="40" r="2.5" fill="#333" />
            <circle cx="70" cy="40" r="2.5" fill="#333" />
            <circle cx="59" cy="39" r="0.8" fill="#fff" />
            <circle cx="71" cy="39" r="0.8" fill="#fff" />
            
            {/* Rabbit Nose - More Realistic */}
            <ellipse cx="64" cy="50" rx="2.5" ry="1.5" fill="#ff6b9d" />
            
            {/* Rabbit Mouth */}
            <path
              d="M64 52 Q62 55, 60 52"
              fill="none"
              stroke="#ff6b9d"
              strokeWidth="1"
              mask="url(#rabbitFillMask)"
            />
            
            {/* Rabbit Whiskers */}
            <line x1="45" y1="48" x2="35" y2="46" stroke="#ff6b9d" strokeWidth="1" />
            <line x1="45" y1="50" x2="35" y2="50" stroke="#ff6b9d" strokeWidth="1" />
            <line x1="45" y1="52" x2="35" y2="54" stroke="#ff6b9d" strokeWidth="1" />
            <line x1="83" y1="48" x2="93" y2="46" stroke="#ff6b9d" strokeWidth="1" />
            <line x1="83" y1="50" x2="93" y2="50" stroke="#ff6b9d" strokeWidth="1" />
            <line x1="83" y1="52" x2="93" y2="54" stroke="#ff6b9d" strokeWidth="1" />
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
                <stop offset="30%" stopColor="#ffb347" />
                <stop offset="70%" stopColor="#ff8c00" />
                <stop offset="100%" stopColor="#e67e22" />
              </linearGradient>
              <radialGradient id="hen3D" cx="40%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#ffe066" />
                <stop offset="50%" stopColor="#ffb347" />
                <stop offset="100%" stopColor="#e67e22" />
              </radialGradient>
              <filter id="henShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
              </filter>
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
            
            {/* Hen Body - 3D Effect */}
            <ellipse
              cx="64"
              cy="80"
              rx="28"
              ry="35"
              fill="url(#hen3D)"
              mask="url(#henFillMask)"
              filter="url(#henShadow)"
            />
            {/* Hen Body Outline - Always Visible */}
            <ellipse
              cx="64"
              cy="80"
              rx="28"
              ry="35"
              fill="none"
              stroke="#ff8c00"
              strokeWidth="1.5"
            />
            
            {/* Hen Head - More Detailed */}
            <ellipse
              cx="64"
              cy="45"
              rx="18"
              ry="22"
              fill="url(#henGradient)"
              mask="url(#henFillMask)"
            />
            {/* Hen Head Outline - Always Visible */}
            <ellipse
              cx="64"
              cy="45"
              rx="18"
              ry="22"
              fill="none"
              stroke="#ff8c00"
              strokeWidth="1.5"
            />
            
            {/* Hen Comb - More Realistic */}
            <path
              d="M55 28 L58 20 L61 25 L64 18 L67 25 L70 20 L73 28 L70 32 L64 30 L58 32 Z"
              fill="#e74c3c"
              mask="url(#henFillMask)"
              stroke="#c0392b"
              strokeWidth="1"
            />
            
            {/* Hen Wattle */}
            <ellipse
              cx="64"
              cy="55"
              rx="3"
              ry="5"
              fill="#e74c3c"
              mask="url(#henFillMask)"
            />
            
            {/* Hen Beak - More Detailed */}
            <path
              d="M64 58 L60 62 L64 65 L68 62 Z"
              fill="#ff8c00"
              mask="url(#henFillMask)"
              stroke="#ff7f00"
              strokeWidth="1"
            />
            
            {/* Hen Eyes - More Realistic */}
            <circle cx="58" cy="42" r="4" fill="#fff" />
            <circle cx="70" cy="42" r="4" fill="#fff" />
            <circle cx="58" cy="42" r="2.5" fill="#333" />
            <circle cx="70" cy="42" r="2.5" fill="#333" />
            <circle cx="59" cy="41" r="0.8" fill="#fff" />
            <circle cx="71" cy="41" r="0.8" fill="#fff" />
            
            {/* Hen Tail - More Detailed */}
            <path
              d="M92 80 Q105 75, 110 85 Q108 95, 100 100 Q95 105, 92 95 Q90 85, 92 80"
              fill="url(#henGradient)"
              mask="url(#henFillMask)"
              stroke="#ff8c00"
              strokeWidth="1.5"
            />
            
            {/* Hen Wings */}
            <ellipse
              cx="45"
              cy="75"
              rx="15"
              ry="25"
              fill="url(#henGradient)"
              mask="url(#henFillMask)"
              stroke="#ff8c00"
              strokeWidth="1"
              transform="rotate(-20 45 75)"
            />
            <ellipse
              cx="83"
              cy="75"
              rx="15"
              ry="25"
              fill="url(#henGradient)"
              mask="url(#henFillMask)"
              stroke="#ff8c00"
              strokeWidth="1"
              transform="rotate(20 83 75)"
            />
            
            {/* Hen Legs */}
            <rect x="60" y="110" width="3" height="15" fill="#ff8c00" mask="url(#henFillMask)" />
            <rect x="65" y="110" width="3" height="15" fill="#ff8c00" mask="url(#henFillMask)" />
            
            {/* Hen Feet */}
            <path
              d="M58 125 L55 128 L60 128 Z"
              fill="#ff8c00"
              mask="url(#henFillMask)"
            />
            <path
              d="M68 125 L65 128 L70 128 Z"
              fill="#ff8c00"
              mask="url(#henFillMask)"
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
