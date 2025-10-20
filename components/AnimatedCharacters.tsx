import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedCharacters: React.FC = () => {
  const [appleFill, setAppleFill] = useState(100);
  const [rabbitFill, setRabbitFill] = useState(100);
  const [henFill, setHenFill] = useState(100);
  const [lionFill, setLionFill] = useState(100);
  const [monkeyFill, setMonkeyFill] = useState(100);
  
  // Interactive states
  const [hoveredCharacter, setHoveredCharacter] = useState<string | null>(null);
  const [clickedCharacter, setClickedCharacter] = useState<string | null>(null);
  const [theme, setTheme] = useState<'day' | 'night'>('day');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [particlesEnabled, setParticlesEnabled] = useState(true);

  // Animation loop
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
      setLionFill(prev => {
        const newValue = prev - 0.3;
        return newValue <= 0 ? 100 : newValue;
      });
      setMonkeyFill(prev => {
        const newValue = prev - 0.6;
        return newValue <= 0 ? 100 : newValue;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Sound effects
  const playSound = (soundType: string) => {
    if (!soundEnabled) return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      const sounds: { [key: string]: () => void } = {
        apple: () => {
          const duration = 0.3;
          const now = audioContext.currentTime;
          const crunch = audioContext.createOscillator();
          const crunchGain = audioContext.createGain();
          crunch.type = 'sawtooth';
          crunch.frequency.setValueAtTime(150, now);
          crunch.frequency.exponentialRampToValueAtTime(80, now + duration);
          crunchGain.gain.setValueAtTime(0.3, now);
          crunchGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          crunch.connect(crunchGain);
          crunchGain.connect(audioContext.destination);
          crunch.start(now);
          crunch.stop(now + duration);
          console.log('🍎 Crunch!');
        },
        rabbit: () => {
          const duration = 0.4;
          const now = audioContext.currentTime;
          const squeak = audioContext.createOscillator();
          const squeakGain = audioContext.createGain();
          squeak.type = 'sine';
          squeak.frequency.setValueAtTime(1200, now);
          squeak.frequency.exponentialRampToValueAtTime(800, now + duration);
          squeakGain.gain.setValueAtTime(0.2, now);
          squeakGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          squeak.connect(squeakGain);
          squeakGain.connect(audioContext.destination);
          squeak.start(now);
          squeak.stop(now + duration);
          console.log('🐰 Squeak!');
        },
        hen: () => {
          const duration = 0.5;
          const now = audioContext.currentTime;
          const cluck = audioContext.createOscillator();
          const cluckGain = audioContext.createGain();
          cluck.type = 'sawtooth';
          cluck.frequency.setValueAtTime(200, now);
          cluck.frequency.exponentialRampToValueAtTime(100, now + duration);
          cluckGain.gain.setValueAtTime(0.4, now);
          cluckGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          cluck.connect(cluckGain);
          cluckGain.connect(audioContext.destination);
          cluck.start(now);
          cluck.stop(now + duration);
          console.log('🐔 Cluck!');
        },
        lion: () => {
          const duration = 0.8;
          const now = audioContext.currentTime;
          const roar = audioContext.createOscillator();
          const roarGain = audioContext.createGain();
          roar.type = 'sawtooth';
          roar.frequency.setValueAtTime(80, now);
          roar.frequency.exponentialRampToValueAtTime(40, now + duration);
          roarGain.gain.setValueAtTime(0.5, now);
          roarGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          roar.connect(roarGain);
          roarGain.connect(audioContext.destination);
          roar.start(now);
          roar.stop(now + duration);
          console.log('🦁 Roar!');
        },
        monkey: () => {
          const duration = 0.4;
          const now = audioContext.currentTime;
          const chitter = audioContext.createOscillator();
          const chitterGain = audioContext.createGain();
          chitter.type = 'sawtooth';
          chitter.frequency.setValueAtTime(600, now);
          chitter.frequency.exponentialRampToValueAtTime(300, now + duration);
          chitterGain.gain.setValueAtTime(0.3, now);
          chitterGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          chitter.connect(chitterGain);
          chitterGain.connect(audioContext.destination);
          chitter.start(now);
          chitter.stop(now + duration);
          console.log('🐒 Chitter!');
        }
      };
      
      sounds[soundType]?.();
    } catch (error) {
      console.log('Audio not supported:', error);
    }
  };

  // Particle effects
  const createParticles = (character: string) => {
    if (!particlesEnabled) return;
    
    const particleConfigs: { [key: string]: { symbols: string[], count: number, colors: string[] } } = {
      apple: { symbols: ['✨', '⭐', '💫'], count: 5, colors: ['#ff6b6b', '#ffd93d', '#ff8a8a'] },
      rabbit: { symbols: ['💖', '💕', '💝'], count: 4, colors: ['#ff69b4', '#ff1493', '#ffc0cb'] },
      hen: { symbols: ['🪶', '✨', '💫'], count: 6, colors: ['#ffd93d', '#ffb347', '#ff8c00'] },
      lion: { symbols: ['👑', '🔥', '⚡'], count: 5, colors: ['#ff8c00', '#ffd700', '#ff4500'] },
      monkey: { symbols: ['🍌', '🐒', '🌿'], count: 4, colors: ['#8b4513', '#ffd700', '#32cd32'] }
    };
    
    const config = particleConfigs[character];
    if (!config) return;
    
    console.log(`${config.symbols[0]} Particles!`);
    
    // Add CSS animations if not exists
    if (!document.getElementById('particle-styles')) {
      const style = document.createElement('style');
      style.id = 'particle-styles';
      style.textContent = `
        @keyframes particleFloat1 {
          0% { opacity: 1; transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
          100% { opacity: 0; transform: translateY(-120px) translateX(30px) scale(0.3) rotate(360deg); }
        }
        @keyframes particleFloat2 {
          0% { opacity: 1; transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
          100% { opacity: 0; transform: translateY(-100px) translateX(-40px) scale(0.4) rotate(-360deg); }
        }
        @keyframes particleFloat3 {
          0% { opacity: 1; transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
          100% { opacity: 0; transform: translateY(-80px) translateX(20px) scale(0.5) rotate(180deg); }
        }
        @keyframes particleFloat4 {
          0% { opacity: 1; transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
          100% { opacity: 0; transform: translateY(-90px) translateX(-20px) scale(0.3) rotate(-180deg); }
        }
        @keyframes particleFloat5 {
          0% { opacity: 1; transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
          100% { opacity: 0; transform: translateY(-110px) translateX(10px) scale(0.4) rotate(270deg); }
        }
        @keyframes particleFloat6 {
          0% { opacity: 1; transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
          100% { opacity: 0; transform: translateY(-95px) translateX(-30px) scale(0.3) rotate(-270deg); }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Create multiple particles
    for (let i = 0; i < config.count; i++) {
      const particleElement = document.createElement('div');
      particleElement.textContent = config.symbols[i % config.symbols.length];
      particleElement.style.position = 'absolute';
      particleElement.style.fontSize = `${20 + Math.random() * 10}px`;
      particleElement.style.color = config.colors[i % config.colors.length];
      particleElement.style.pointerEvents = 'none';
      particleElement.style.zIndex = '1000';
      particleElement.style.animation = `particleFloat${(i % 6) + 1} ${1.5 + Math.random() * 1}s ease-out forwards`;
      
      // Position particle near the character
      const characterElement = document.querySelector(`[data-character="${character}"]`);
      if (characterElement) {
        const rect = characterElement.getBoundingClientRect();
        const randomX = (Math.random() - 0.5) * 60;
        const randomY = (Math.random() - 0.5) * 20;
        particleElement.style.left = `${rect.left + rect.width / 2 + randomX}px`;
        particleElement.style.top = `${rect.top + rect.height / 2 + randomY}px`;
      } else {
        particleElement.style.left = '50%';
        particleElement.style.top = '50%';
      }
      
      document.body.appendChild(particleElement);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particleElement.parentNode) {
          particleElement.parentNode.removeChild(particleElement);
        }
      }, 3000);
    }
  };

  const handleCharacterClick = (character: string) => {
    setClickedCharacter(character);
    
    if (soundEnabled) {
      if (typeof window !== 'undefined') {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        if (audioContext.state === 'suspended') {
          audioContext.resume();
        }
      }
      playSound(character);
    }
    
    createParticles(character);
    
    setTimeout(() => setClickedCharacter(null), 1000);
  };

  const handleCharacterHover = (character: string | null) => {
    setHoveredCharacter(character);
  };

  return (
    <div className="w-full">
      {/* Control Panel */}
      <div className="mb-8 p-4 bg-gray-100 rounded-lg">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <button
            onClick={() => setTheme(theme === 'day' ? 'night' : 'day')}
            className={`px-4 py-2 rounded ${theme === 'day' ? 'bg-yellow-400' : 'bg-gray-800 text-white'}`}
          >
            {theme === 'day' ? '🌞 Day' : '🌙 Night'}
          </button>
          
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`px-4 py-2 rounded ${soundEnabled ? 'bg-green-400' : 'bg-gray-400'}`}
          >
            {soundEnabled ? '🔊 Sound On' : '🔇 Sound Off'}
          </button>
          
          <button
            onClick={() => setParticlesEnabled(!particlesEnabled)}
            className={`px-4 py-2 rounded ${particlesEnabled ? 'bg-purple-400' : 'bg-gray-400'}`}
          >
            {particlesEnabled ? '✨ Particles On' : '✨ Particles Off'}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-8 p-8">
        {/* Apple Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="apple"
          onClick={() => handleCharacterClick('apple')}
          onMouseEnter={() => handleCharacterHover('apple')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'apple' ? [1, 1.1, 1] : [1, 1.05, 1],
              rotate: clickedCharacter === 'apple' ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              duration: hoveredCharacter === 'apple' ? 0.5 : 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.1,
              filter: "brightness(1.1)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            className={`${hoveredCharacter === 'apple' ? 'drop-shadow-lg' : ''} ${
              clickedCharacter === 'apple' ? 'animate-pulse' : ''
            }`}
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
              
              {/* Apple Highlight - Enhanced */}
              <ellipse
                cx="45"
                cy="35"
                rx="8"
                ry="12"
                fill="rgba(255,255,255,0.4)"
                mask="url(#appleFillMask)"
              />
              
              {/* Apple Shine Effect */}
              <ellipse
                cx="50"
                cy="30"
                rx="4"
                ry="6"
                fill="rgba(255,255,255,0.6)"
                mask="url(#appleFillMask)"
              />
              
              {/* Apple Texture Spots */}
              <circle cx="70" cy="50" r="1.5" fill="rgba(0,0,0,0.1)" mask="url(#appleFillMask)" />
              <circle cx="80" cy="60" r="1" fill="rgba(0,0,0,0.08)" mask="url(#appleFillMask)" />
              <circle cx="60" cy="70" r="1.2" fill="rgba(0,0,0,0.1)" mask="url(#appleFillMask)" />
              
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
              
              {/* Apple Reflection */}
              <ellipse
                cx="55"
                cy="25"
                rx="6"
                ry="8"
                fill="rgba(255,255,255,0.2)"
                mask="url(#appleFillMask)"
              />
              
              {/* Apple Shadow Side */}
              <path
                d="M64 15 C85 15, 105 35, 105 55 C105 75, 95 95, 75 105 C65 110, 55 110, 45 105 C25 95, 15 75, 15 55 C15 35, 35 15, 64 15 Z"
                fill="rgba(0,0,0,0.1)"
                mask="url(#appleFillMask)"
                opacity="0.3"
              />
            </svg>
          </motion.div>
          
          {/* Fill Value Display */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-red-600">
            {Math.round(appleFill)}%
          </div>
        </div>

        {/* Rabbit Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="rabbit"
          onClick={() => handleCharacterClick('rabbit')}
          onMouseEnter={() => handleCharacterHover('rabbit')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'rabbit' ? [1, 1.2, 1] : [1, 1.1, 1],
              y: clickedCharacter === 'rabbit' ? [0, -5, 0] : 0,
            }}
            transition={{
              duration: hoveredCharacter === 'rabbit' ? 0.4 : 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.15,
              filter: "brightness(1.1)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            className={`${hoveredCharacter === 'rabbit' ? 'drop-shadow-lg' : ''} ${
              clickedCharacter === 'rabbit' ? 'animate-bounce' : ''
            }`}
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
                fill="url(#rabbit3D)"
                mask="url(#rabbitFillMask)"
                filter="url(#rabbitShadow)"
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
                fill="url(#rabbit3D)"
                mask="url(#rabbitFillMask)"
                transform="rotate(-15 48 20)"
              />
              <ellipse
                cx="80"
                cy="20"
                rx="6"
                ry="18"
                fill="url(#rabbit3D)"
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
              
              {/* Rabbit Whiskers - Enhanced */}
              <line x1="45" y1="48" x2="35" y2="46" stroke="#ff6b9d" strokeWidth="1" />
              <line x1="45" y1="50" x2="35" y2="50" stroke="#ff6b9d" strokeWidth="1" />
              <line x1="45" y1="52" x2="35" y2="54" stroke="#ff6b9d" strokeWidth="1" />
              <line x1="83" y1="48" x2="93" y2="46" stroke="#ff6b9d" strokeWidth="1" />
              <line x1="83" y1="50" x2="93" y2="50" stroke="#ff6b9d" strokeWidth="1" />
              <line x1="83" y1="52" x2="93" y2="54" stroke="#ff6b9d" strokeWidth="1" />
              
              {/* Rabbit Fur Texture */}
              <circle cx="55" cy="65" r="1" fill="rgba(255,255,255,0.3)" mask="url(#rabbitFillMask)" />
              <circle cx="70" cy="70" r="0.8" fill="rgba(255,255,255,0.2)" mask="url(#rabbitFillMask)" />
              <circle cx="60" cy="80" r="1.2" fill="rgba(255,255,255,0.25)" mask="url(#rabbitFillMask)" />
              <circle cx="75" cy="85" r="0.9" fill="rgba(255,255,255,0.2)" mask="url(#rabbitFillMask)" />
              
              {/* Rabbit Cheek Blush */}
              <ellipse cx="50" cy="55" rx="3" ry="2" fill="rgba(255,182,193,0.4)" mask="url(#rabbitFillMask)" />
              <ellipse cx="78" cy="55" rx="3" ry="2" fill="rgba(255,182,193,0.4)" mask="url(#rabbitFillMask)" />
              
              {/* Rabbit Tail */}
              <circle cx="90" cy="85" r="6" fill="url(#rabbit3D)" mask="url(#rabbitFillMask)" />
              <circle cx="90" cy="85" r="6" fill="none" stroke="#e91e63" strokeWidth="1" />
              
              {/* Rabbit Nose Detail */}
              <ellipse cx="64" cy="50" rx="1" ry="0.5" fill="rgba(255,255,255,0.3)" mask="url(#rabbitFillMask)" />
              
              {/* Rabbit Ear Details */}
              <ellipse cx="48" cy="25" rx="2" ry="8" fill="rgba(255,255,255,0.2)" mask="url(#rabbitFillMask)" transform="rotate(-15 48 20)" />
              <ellipse cx="80" cy="25" rx="2" ry="8" fill="rgba(255,255,255,0.2)" mask="url(#rabbitFillMask)" transform="rotate(15 80 20)" />
              
              {/* Rabbit Body Shadow */}
              <ellipse cx="55" cy="85" rx="15" ry="20" fill="rgba(0,0,0,0.1)" mask="url(#rabbitFillMask)" />
            </svg>
          </motion.div>
          
          {/* Fill Value Display */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-pink-600">
            {Math.round(rabbitFill)}%
          </div>
        </div>

        {/* Hen Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="hen"
          onClick={() => handleCharacterClick('hen')}
          onMouseEnter={() => handleCharacterHover('hen')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'hen' ? [1, 1.15, 1] : [1, 1.08, 1],
              rotate: clickedCharacter === 'hen' ? [0, 3, -3, 0] : 0,
            }}
            transition={{
              duration: hoveredCharacter === 'hen' ? 0.6 : 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.12,
              filter: "brightness(1.1)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            className={`${hoveredCharacter === 'hen' ? 'drop-shadow-lg' : ''} ${
              clickedCharacter === 'hen' ? 'animate-pulse' : ''
            }`}
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
                fill="url(#hen3D)"
                mask="url(#henFillMask)"
                filter="url(#henShadow)"
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
                fill="url(#hen3D)"
                mask="url(#henFillMask)"
                filter="url(#henShadow)"
              />
              {/* Hen Tail Outline - Always Visible */}
              <path
                d="M92 80 Q105 75, 110 85 Q108 95, 100 100 Q95 105, 92 95 Q90 85, 92 80"
                fill="none"
                stroke="#ff8c00"
                strokeWidth="1.5"
              />
              
              {/* Hen Wings */}
              <ellipse
                cx="45"
                cy="75"
                rx="15"
                ry="25"
                fill="url(#hen3D)"
                mask="url(#henFillMask)"
                filter="url(#henShadow)"
                transform="rotate(-20 45 75)"
              />
              <ellipse
                cx="83"
                cy="75"
                rx="15"
                ry="25"
                fill="url(#hen3D)"
                mask="url(#henFillMask)"
                filter="url(#henShadow)"
                transform="rotate(20 83 75)"
              />
              {/* Hen Wings Outline - Always Visible */}
              <ellipse
                cx="45"
                cy="75"
                rx="15"
                ry="25"
                fill="none"
                stroke="#ff8c00"
                strokeWidth="1"
                transform="rotate(-20 45 75)"
              />
              <ellipse
                cx="83"
                cy="75"
                rx="15"
                ry="25"
                fill="none"
                stroke="#ff8c00"
                strokeWidth="1"
                transform="rotate(20 83 75)"
              />
              
              {/* Hen Legs */}
              <rect x="60" y="110" width="3" height="15" fill="#ff8c00" mask="url(#henFillMask)" />
              <rect x="65" y="110" width="3" height="15" fill="#ff8c00" mask="url(#henFillMask)" />
              
              {/* Hen Feet - Enhanced */}
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
              
              {/* Hen Feather Texture */}
              <circle cx="50" cy="70" r="1.5" fill="rgba(255,255,255,0.3)" mask="url(#henFillMask)" />
              <circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.2)" mask="url(#henFillMask)" />
              <circle cx="45" cy="85" r="1.2" fill="rgba(255,255,255,0.25)" mask="url(#henFillMask)" />
              <circle cx="80" cy="90" r="0.8" fill="rgba(255,255,255,0.2)" mask="url(#henFillMask)" />
              
              {/* Hen Wing Feathers */}
              <path d="M40 70 Q35 65, 30 70 Q35 75, 40 70" fill="rgba(255,255,255,0.2)" mask="url(#henFillMask)" />
              <path d="M88 70 Q93 65, 98 70 Q93 75, 88 70" fill="rgba(255,255,255,0.2)" mask="url(#henFillMask)" />
              
              {/* Hen Chest Pattern */}
              <ellipse cx="64" cy="75" rx="8" ry="12" fill="rgba(255,255,255,0.1)" mask="url(#henFillMask)" />
              
              {/* Hen Beak Highlight */}
              <ellipse cx="64" cy="62" rx="1" ry="0.5" fill="rgba(255,255,255,0.4)" mask="url(#henFillMask)" />
              
              {/* Hen Comb Detail */}
              <circle cx="58" cy="25" r="1" fill="rgba(255,255,255,0.3)" mask="url(#henFillMask)" />
              <circle cx="64" cy="22" r="1" fill="rgba(255,255,255,0.3)" mask="url(#henFillMask)" />
              <circle cx="70" cy="25" r="1" fill="rgba(255,255,255,0.3)" mask="url(#henFillMask)" />
              
              {/* Hen Eye Detail */}
              <circle cx="58" cy="42" r="1" fill="rgba(255,255,255,0.4)" mask="url(#henFillMask)" />
              <circle cx="70" cy="42" r="1" fill="rgba(255,255,255,0.4)" mask="url(#henFillMask)" />
              
              {/* Hen Wing Detail */}
              <path d="M45 75 Q40 70, 35 75 Q40 80, 45 75" fill="rgba(255,255,255,0.15)" mask="url(#henFillMask)" />
              <path d="M83 75 Q88 70, 93 75 Q88 80, 83 75" fill="rgba(255,255,255,0.15)" mask="url(#henFillMask)" />
              
              {/* Hen Body Shadow */}
              <ellipse cx="55" cy="90" rx="12" ry="15" fill="rgba(0,0,0,0.1)" mask="url(#henFillMask)" />
            </svg>
          </motion.div>
          
          {/* Fill Value Display */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-yellow-600">
            {Math.round(henFill)}%
          </div>
        </div>

        {/* Lion Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="lion"
          onClick={() => handleCharacterClick('lion')}
          onMouseEnter={() => handleCharacterHover('lion')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'lion' ? [1, 1.2, 1] : [1, 1.1, 1],
              rotate: clickedCharacter === 'lion' ? [0, 3, -3, 0] : 0,
            }}
            transition={{
              duration: hoveredCharacter === 'lion' ? 0.4 : 1.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.15,
              filter: "brightness(1.1)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            className={`${hoveredCharacter === 'lion' ? 'drop-shadow-lg' : ''} ${
              clickedCharacter === 'lion' ? 'animate-pulse' : ''
            }`}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <linearGradient id="lionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffd700" />
                  <stop offset="30%" stopColor="#ff8c00" />
                  <stop offset="70%" stopColor="#ff7f00" />
                  <stop offset="100%" stopColor="#ff4500" />
                </linearGradient>
                <radialGradient id="lion3D" cx="40%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffed4e" />
                  <stop offset="50%" stopColor="#ff8c00" />
                  <stop offset="100%" stopColor="#ff4500" />
                </radialGradient>
                <filter id="lionShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
                </filter>
                <mask id="lionFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (lionFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Lion Body - 3D Effect */}
              <ellipse
                cx="64"
                cy="85"
                rx="30"
                ry="35"
                fill="url(#lion3D)"
                mask="url(#lionFillMask)"
                filter="url(#lionShadow)"
              />
              {/* Lion Body Outline - Always Visible */}
              <ellipse
                cx="64"
                cy="85"
                rx="30"
                ry="35"
                fill="none"
                stroke="#ff4500"
                strokeWidth="2"
              />
              
              {/* Lion Head - 3D Effect */}
              <circle
                cx="64"
                cy="50"
                r="28"
                fill="url(#lion3D)"
                mask="url(#lionFillMask)"
                filter="url(#lionShadow)"
              />
              {/* Lion Head Outline - Always Visible */}
              <circle
                cx="64"
                cy="50"
                r="28"
                fill="none"
                stroke="#ff4500"
                strokeWidth="2"
              />
              
              {/* Lion Mane - More Detailed */}
              <path
                d="M36 35 Q25 20, 40 15 Q55 10, 64 15 Q73 10, 88 15 Q103 20, 92 35 Q88 45, 78 40 Q68 35, 64 40 Q60 35, 50 40 Q40 45, 36 35"
                fill="url(#lion3D)"
                mask="url(#lionFillMask)"
                filter="url(#lionShadow)"
              />
              {/* Lion Mane Outline - Always Visible */}
              <path
                d="M36 35 Q25 20, 40 15 Q55 10, 64 15 Q73 10, 88 15 Q103 20, 92 35 Q88 45, 78 40 Q68 35, 64 40 Q60 35, 50 40 Q40 45, 36 35"
                fill="none"
                stroke="#ff4500"
                strokeWidth="2"
              />
              
              {/* Lion Tail */}
              <path
                d="M94 85 Q110 80, 115 90 Q113 100, 105 105 Q100 110, 94 100 Q92 90, 94 85"
                fill="url(#lion3D)"
                mask="url(#lionFillMask)"
                filter="url(#lionShadow)"
              />
              {/* Lion Tail Outline - Always Visible */}
              <path
                d="M94 85 Q110 80, 115 90 Q113 100, 105 105 Q100 110, 94 100 Q92 90, 94 85"
                fill="none"
                stroke="#ff4500"
                strokeWidth="2"
              />
              
              {/* Lion Legs */}
              <ellipse cx="50" cy="110" rx="8" ry="15" fill="url(#lion3D)" mask="url(#lionFillMask)" />
              <ellipse cx="78" cy="110" rx="8" ry="15" fill="url(#lion3D)" mask="url(#lionFillMask)" />
              <ellipse cx="50" cy="110" rx="8" ry="15" fill="none" stroke="#ff4500" strokeWidth="2" />
              <ellipse cx="78" cy="110" rx="8" ry="15" fill="none" stroke="#ff4500" strokeWidth="2" />
              
              {/* Lion Paws */}
              <ellipse cx="50" cy="120" rx="6" ry="4" fill="url(#lion3D)" mask="url(#lionFillMask)" />
              <ellipse cx="78" cy="120" rx="6" ry="4" fill="url(#lion3D)" mask="url(#lionFillMask)" />
              <ellipse cx="50" cy="120" rx="6" ry="4" fill="none" stroke="#ff4500" strokeWidth="1" />
              <ellipse cx="78" cy="120" rx="6" ry="4" fill="none" stroke="#ff4500" strokeWidth="1" />
              
              {/* Lion Eyes - More Realistic */}
              <ellipse cx="55" cy="40" rx="6" ry="8" fill="#fff" />
              <ellipse cx="73" cy="40" rx="6" ry="8" fill="#fff" />
              <ellipse cx="55" cy="40" rx="4" ry="6" fill="#333" />
              <ellipse cx="73" cy="40" rx="4" ry="6" fill="#333" />
              <circle cx="56" cy="38" r="1.5" fill="#fff" />
              <circle cx="74" cy="38" r="1.5" fill="#fff" />
              
              {/* Lion Nose */}
              <ellipse cx="64" cy="55" rx="4" ry="3" fill="#ff4500" />
              <ellipse cx="64" cy="55" rx="2" ry="1.5" fill="#ff8c00" />
              
              {/* Lion Mouth */}
              <path
                d="M64 60 Q60 65, 55 60"
                fill="none"
                stroke="#ff4500"
                strokeWidth="2"
                mask="url(#lionFillMask)"
              />
              <path
                d="M64 60 Q68 65, 73 60"
                fill="none"
                stroke="#ff4500"
                strokeWidth="2"
                mask="url(#lionFillMask)"
              />
              
              {/* Lion Whiskers */}
              <line x1="40" y1="50" x2="25" y2="48" stroke="#ff4500" strokeWidth="2" />
              <line x1="40" y1="55" x2="25" y2="55" stroke="#ff4500" strokeWidth="2" />
              <line x1="40" y1="60" x2="25" y2="62" stroke="#ff4500" strokeWidth="2" />
              <line x1="88" y1="50" x2="103" y2="48" stroke="#ff4500" strokeWidth="2" />
              <line x1="88" y1="55" x2="103" y2="55" stroke="#ff4500" strokeWidth="2" />
              <line x1="88" y1="60" x2="103" y2="62" stroke="#ff4500" strokeWidth="2" />
              
              {/* Lion Ears */}
              <ellipse cx="45" cy="25" rx="8" ry="12" fill="url(#lion3D)" mask="url(#lionFillMask)" transform="rotate(-20 45 25)" />
              <ellipse cx="83" cy="25" rx="8" ry="12" fill="url(#lion3D)" mask="url(#lionFillMask)" transform="rotate(20 83 25)" />
              <ellipse cx="45" cy="25" rx="8" ry="12" fill="none" stroke="#ff4500" strokeWidth="2" transform="rotate(-20 45 25)" />
              <ellipse cx="83" cy="25" rx="8" ry="12" fill="none" stroke="#ff4500" strokeWidth="2" transform="rotate(20 83 25)" />
              
              {/* Inner Ears */}
              <ellipse cx="45" cy="25" rx="4" ry="8" fill="#ff8c00" mask="url(#lionFillMask)" transform="rotate(-20 45 25)" />
              <ellipse cx="83" cy="25" rx="4" ry="8" fill="#ff8c00" mask="url(#lionFillMask)" transform="rotate(20 83 25)" />
              
              {/* Lion Mane Texture */}
              <circle cx="50" cy="30" r="2" fill="rgba(255,255,255,0.3)" mask="url(#lionFillMask)" />
              <circle cx="75" cy="25" r="1.5" fill="rgba(255,255,255,0.2)" mask="url(#lionFillMask)" />
              <circle cx="40" cy="40" r="1.8" fill="rgba(255,255,255,0.25)" mask="url(#lionFillMask)" />
              <circle cx="85" cy="35" r="1.2" fill="rgba(255,255,255,0.2)" mask="url(#lionFillMask)" />
              
              {/* Lion Crown Effect */}
              <path
                d="M45 15 Q50 5, 55 10 Q60 0, 64 5 Q68 0, 73 10 Q78 5, 83 15 Q80 20, 75 18 Q70 25, 64 20 Q58 25, 53 18 Q48 20, 45 15"
                fill="url(#lion3D)"
                mask="url(#lionFillMask)"
                opacity="0.8"
              />
              
              {/* Lion Body Texture */}
              <circle cx="55" cy="85" r="2" fill="rgba(255,255,255,0.2)" mask="url(#lionFillMask)" />
              <circle cx="75" cy="90" r="1.5" fill="rgba(255,255,255,0.15)" mask="url(#lionFillMask)" />
              <circle cx="45" cy="95" r="1.8" fill="rgba(255,255,255,0.2)" mask="url(#lionFillMask)" />
              <circle cx="80" cy="100" r="1.2" fill="rgba(255,255,255,0.15)" mask="url(#lionFillMask)" />
              
              {/* Lion Nose Highlight */}
              <ellipse cx="64" cy="55" rx="1" ry="0.5" fill="rgba(255,255,255,0.4)" mask="url(#lionFillMask)" />
              
              {/* Lion Eye Highlights */}
              <circle cx="55" cy="40" r="1" fill="rgba(255,255,255,0.6)" />
              <circle cx="73" cy="40" r="1" fill="rgba(255,255,255,0.6)" />
              
              {/* Lion Mane Detail */}
              <path d="M35 20 Q30 15, 25 20 Q30 25, 35 20" fill="rgba(255,255,255,0.2)" mask="url(#lionFillMask)" />
              <path d="M93 20 Q98 15, 103 20 Q98 25, 93 20" fill="rgba(255,255,255,0.2)" mask="url(#lionFillMask)" />
              
              {/* Lion Body Shadow */}
              <ellipse cx="55" cy="95" rx="15" ry="10" fill="rgba(0,0,0,0.1)" mask="url(#lionFillMask)" />
              
              {/* Lion Tail Tip */}
              <circle cx="115" cy="90" r="3" fill="url(#lion3D)" mask="url(#lionFillMask)" />
              <circle cx="115" cy="90" r="3" fill="none" stroke="#ff4500" strokeWidth="1" />
            </svg>
          </motion.div>
          
          {/* Fill Value Display */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-600">
            {Math.round(lionFill)}%
          </div>
        </div>

        {/* Monkey Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="monkey"
          onClick={() => handleCharacterClick('monkey')}
          onMouseEnter={() => handleCharacterHover('monkey')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'monkey' ? [1, 1.15, 1] : [1, 1.08, 1],
              y: clickedCharacter === 'monkey' ? [0, -3, 0] : 0,
            }}
            transition={{
              duration: hoveredCharacter === 'monkey' ? 0.3 : 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.12,
              filter: "brightness(1.1)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            className={`${hoveredCharacter === 'monkey' ? 'drop-shadow-lg' : ''} ${
              clickedCharacter === 'monkey' ? 'animate-bounce' : ''
            }`}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <linearGradient id="monkeyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#d2691e" />
                  <stop offset="30%" stopColor="#8b4513" />
                  <stop offset="70%" stopColor="#654321" />
                  <stop offset="100%" stopColor="#3e2723" />
                </linearGradient>
                <radialGradient id="monkey3D" cx="40%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#cd853f" />
                  <stop offset="50%" stopColor="#8b4513" />
                  <stop offset="100%" stopColor="#654321" />
                </radialGradient>
                <filter id="monkeyShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.25"/>
                </filter>
                <mask id="monkeyFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (monkeyFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Monkey Body - 3D Effect */}
              <ellipse
                cx="64"
                cy="85"
                rx="25"
                ry="30"
                fill="url(#monkey3D)"
                mask="url(#monkeyFillMask)"
                filter="url(#monkeyShadow)"
              />
              {/* Monkey Body Outline - Always Visible */}
              <ellipse
                cx="64"
                cy="85"
                rx="25"
                ry="30"
                fill="none"
                stroke="#654321"
                strokeWidth="2"
              />
              
              {/* Monkey Head - 3D Effect */}
              <circle
                cx="64"
                cy="45"
                r="22"
                fill="url(#monkey3D)"
                mask="url(#monkeyFillMask)"
                filter="url(#monkeyShadow)"
              />
              {/* Monkey Head Outline - Always Visible */}
              <circle
                cx="64"
                cy="45"
                r="22"
                fill="none"
                stroke="#654321"
                strokeWidth="2"
              />
              
              {/* Monkey Ears */}
              <circle cx="48" cy="30" r="8" fill="url(#monkey3D)" mask="url(#monkeyFillMask)" />
              <circle cx="80" cy="30" r="8" fill="url(#monkey3D)" mask="url(#monkeyFillMask)" />
              <circle cx="48" cy="30" r="8" fill="none" stroke="#654321" strokeWidth="2" />
              <circle cx="80" cy="30" r="8" fill="none" stroke="#654321" strokeWidth="2" />
              
              {/* Inner Ears */}
              <circle cx="48" cy="30" r="4" fill="#8b4513" mask="url(#monkeyFillMask)" />
              <circle cx="80" cy="30" r="4" fill="#8b4513" mask="url(#monkeyFillMask)" />
              
              {/* Monkey Eyes - More Realistic */}
              <ellipse cx="58" cy="40" rx="5" ry="7" fill="#fff" />
              <ellipse cx="70" cy="40" rx="5" ry="7" fill="#fff" />
              <ellipse cx="58" cy="40" rx="3" ry="5" fill="#333" />
              <ellipse cx="70" cy="40" rx="3" ry="5" fill="#333" />
              <circle cx="59" cy="38" r="1.2" fill="#fff" />
              <circle cx="71" cy="38" r="1.2" fill="#fff" />
              
              {/* Monkey Nose */}
              <ellipse cx="64" cy="50" rx="3" ry="2" fill="#654321" />
              <ellipse cx="64" cy="50" rx="1.5" ry="1" fill="#8b4513" />
              
              {/* Monkey Mouth */}
              <path
                d="M64 55 Q62 58, 60 55"
                fill="none"
                stroke="#654321"
                strokeWidth="2"
                mask="url(#monkeyFillMask)"
              />
              <path
                d="M64 55 Q66 58, 68 55"
                fill="none"
                stroke="#654321"
                strokeWidth="2"
                mask="url(#monkeyFillMask)"
              />
              
              {/* Monkey Arms */}
              <ellipse cx="35" cy="70" rx="8" ry="20" fill="url(#monkey3D)" mask="url(#monkeyFillMask)" transform="rotate(-30 35 70)" />
              <ellipse cx="93" cy="70" rx="8" ry="20" fill="url(#monkey3D)" mask="url(#monkeyFillMask)" transform="rotate(30 93 70)" />
              <ellipse cx="35" cy="70" rx="8" ry="20" fill="none" stroke="#654321" strokeWidth="2" transform="rotate(-30 35 70)" />
              <ellipse cx="93" cy="70" rx="8" ry="20" fill="none" stroke="#654321" strokeWidth="2" transform="rotate(30 93 70)" />
              
              {/* Monkey Hands */}
              <circle cx="25" cy="85" r="6" fill="url(#monkey3D)" mask="url(#monkeyFillMask)" />
              <circle cx="103" cy="85" r="6" fill="url(#monkey3D)" mask="url(#monkeyFillMask)" />
              <circle cx="25" cy="85" r="6" fill="none" stroke="#654321" strokeWidth="2" />
              <circle cx="103" cy="85" r="6" fill="none" stroke="#654321" strokeWidth="2" />
              
              {/* Monkey Legs */}
              <ellipse cx="55" cy="110" rx="8" ry="15" fill="url(#monkey3D)" mask="url(#monkeyFillMask)" />
              <ellipse cx="73" cy="110" rx="8" ry="15" fill="url(#monkey3D)" mask="url(#monkeyFillMask)" />
              <ellipse cx="55" cy="110" rx="8" ry="15" fill="none" stroke="#654321" strokeWidth="2" />
              <ellipse cx="73" cy="110" rx="8" ry="15" fill="none" stroke="#654321" strokeWidth="2" />
              
              {/* Monkey Feet */}
              <ellipse cx="55" cy="120" rx="6" ry="4" fill="url(#monkey3D)" mask="url(#monkeyFillMask)" />
              <ellipse cx="73" cy="120" rx="6" ry="4" fill="url(#monkey3D)" mask="url(#monkeyFillMask)" />
              <ellipse cx="55" cy="120" rx="6" ry="4" fill="none" stroke="#654321" strokeWidth="1" />
              <ellipse cx="73" cy="120" rx="6" ry="4" fill="none" stroke="#654321" strokeWidth="1" />
              
              {/* Monkey Tail */}
              <path
                d="M89 85 Q105 80, 110 90 Q108 100, 100 105 Q95 110, 89 100 Q87 90, 89 85"
                fill="url(#monkey3D)"
                mask="url(#monkeyFillMask)"
                filter="url(#monkeyShadow)"
              />
              {/* Monkey Tail Outline - Always Visible */}
              <path
                d="M89 85 Q105 80, 110 90 Q108 100, 100 105 Q95 110, 89 100 Q87 90, 89 85"
                fill="none"
                stroke="#654321"
                strokeWidth="2"
              />
              
              {/* Monkey Body Texture */}
              <circle cx="55" cy="85" r="1.5" fill="rgba(255,255,255,0.2)" mask="url(#monkeyFillMask)" />
              <circle cx="75" cy="90" r="1" fill="rgba(255,255,255,0.15)" mask="url(#monkeyFillMask)" />
              <circle cx="45" cy="95" r="1.2" fill="rgba(255,255,255,0.2)" mask="url(#monkeyFillMask)" />
              <circle cx="80" cy="100" r="0.8" fill="rgba(255,255,255,0.15)" mask="url(#monkeyFillMask)" />
              
              {/* Monkey Nose Highlight */}
              <ellipse cx="64" cy="50" rx="0.8" ry="0.4" fill="rgba(255,255,255,0.3)" mask="url(#monkeyFillMask)" />
              
              {/* Monkey Eye Highlights */}
              <circle cx="58" cy="40" r="0.8" fill="rgba(255,255,255,0.6)" />
              <circle cx="70" cy="40" r="0.8" fill="rgba(255,255,255,0.6)" />
              
              {/* Monkey Tail Tip */}
              <circle cx="110" cy="90" r="2" fill="url(#monkey3D)" mask="url(#monkeyFillMask)" />
              <circle cx="110" cy="90" r="2" fill="none" stroke="#654321" strokeWidth="1" />
              
              {/* Monkey Body Shadow */}
              <ellipse cx="55" cy="95" rx="12" ry="8" fill="rgba(0,0,0,0.1)" mask="url(#monkeyFillMask)" />
            </svg>
          </motion.div>
          
          {/* Fill Value Display */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-amber-600">
            {Math.round(monkeyFill)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCharacters;