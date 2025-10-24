import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedCharacters: React.FC = () => {
  const [appleFill, setAppleFill] = useState(100);
  const [rabbitFill, setRabbitFill] = useState(100);
  const [henFill, setHenFill] = useState(100);
  const [lionFill, setLionFill] = useState(100);
  const [monkeyFill, setMonkeyFill] = useState(100);
  const [emberFill, setEmberFill] = useState(100);
  const [sparkFill, setSparkFill] = useState(100);
  const [flickerFill, setFlickerFill] = useState(100);
  const [glowFill, setGlowFill] = useState(100);
  const [flameFill, setFlameFill] = useState(100);
  const [bubbleFill, setBubbleFill] = useState(100);
  const [prismFill, setPrismFill] = useState(100);
  const [pebbleFill, setPebbleFill] = useState(100);
  const [crystalFill, setCrystalFill] = useState(100);
  const [leafFill, setLeafFill] = useState(100);
  const [cloudFill, setCloudFill] = useState(100);
  const [boltFill, setBoltFill] = useState(100);
  const [raindropFill, setRaindropFill] = useState(100);
  const [iceFill, setIceFill] = useState(100);
  const [sunbeamFill, setSunbeamFill] = useState(100);
  const [tigerFill, setTigerFill] = useState(100);
  const [wolfFill, setWolfFill] = useState(100);
  const [eagleFill, setEagleFill] = useState(100);
  const [pantherFill, setPantherFill] = useState(100);
  const [dragonFill, setDragonFill] = useState(100);
  const [goatFill, setGoatFill] = useState(100);
  const [foxFill, setFoxFill] = useState(100);
  const [owlFill, setOwlFill] = useState(100);
  const [ratFill, setRatFill] = useState(100);
  const [dogFill, setDogFill] = useState(100);
  const [catFill, setCatFill] = useState(100);
  const [bearFill, setBearFill] = useState(100);
  const [rhinoFill, setRhinoFill] = useState(100);
  const [snakeFill, setSnakeFill] = useState(100);
  
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
      setEmberFill(prev => {
        const newValue = prev - 0.5;
        return newValue <= 0 ? 100 : newValue;
      });
      setSparkFill(prev => {
        const newValue = prev - 0.7;
        return newValue <= 0 ? 100 : newValue;
      });
      setFlickerFill(prev => {
        const newValue = prev - 0.4;
        return newValue <= 0 ? 100 : newValue;
      });
      setGlowFill(prev => {
        const newValue = prev - 0.3;
        return newValue <= 0 ? 100 : newValue;
      });
      setFlameFill(prev => {
        const newValue = prev - 0.6;
        return newValue <= 0 ? 100 : newValue;
      });
      setBubbleFill(prev => {
        const newValue = prev - 0.2;
        return newValue <= 0 ? 100 : newValue;
      });
      setPrismFill(prev => {
        const newValue = prev - 0.4;
        return newValue <= 0 ? 100 : newValue;
      });
      setPebbleFill(prev => {
        const newValue = prev - 0.25;
        return newValue <= 0 ? 100 : newValue;
      });
      setCrystalFill(prev => {
        const newValue = prev - 0.5;
        return newValue <= 0 ? 100 : newValue;
      });
      setLeafFill(prev => {
        const newValue = prev - 0.35;
        return newValue <= 0 ? 100 : newValue;
      });
      setCloudFill(prev => {
        const newValue = prev - 0.15;
        return newValue <= 0 ? 100 : newValue;
      });
      setBoltFill(prev => {
        const newValue = prev - 0.8;
        return newValue <= 0 ? 100 : newValue;
      });
      setRaindropFill(prev => {
        const newValue = prev - 0.3;
        return newValue <= 0 ? 100 : newValue;
      });
      setIceFill(prev => {
        const newValue = prev - 0.25;
        return newValue <= 0 ? 100 : newValue;
      });
      setSunbeamFill(prev => {
        const newValue = prev - 0.4;
        return newValue <= 0 ? 100 : newValue;
      });
      setTigerFill(prev => {
        const newValue = prev - 0.35;
        return newValue <= 0 ? 100 : newValue;
      });
      setWolfFill(prev => {
        const newValue = prev - 0.3;
        return newValue <= 0 ? 100 : newValue;
      });
      setEagleFill(prev => {
        const newValue = prev - 0.45;
        return newValue <= 0 ? 100 : newValue;
      });
      setPantherFill(prev => {
        const newValue = prev - 0.4;
        return newValue <= 0 ? 100 : newValue;
      });
      setDragonFill(prev => {
        const newValue = prev - 0.5;
        return newValue <= 0 ? 100 : newValue;
      });
      setGoatFill(prev => {
        const newValue = prev - 0.25;
        return newValue <= 0 ? 100 : newValue;
      });
      setFoxFill(prev => {
        const newValue = prev - 0.4;
        return newValue <= 0 ? 100 : newValue;
      });
      setOwlFill(prev => {
        const newValue = prev - 0.3;
        return newValue <= 0 ? 100 : newValue;
      });
      setRatFill(prev => {
        const newValue = prev - 0.6;
        return newValue <= 0 ? 100 : newValue;
      });
      setDogFill(prev => {
        const newValue = prev - 0.3;
        return newValue <= 0 ? 100 : newValue;
      });
      setCatFill(prev => {
        const newValue = prev - 0.35;
        return newValue <= 0 ? 100 : newValue;
      });
      setBearFill(prev => {
        const newValue = prev - 0.25;
        return newValue <= 0 ? 100 : newValue;
      });
      setRhinoFill(prev => {
        const newValue = prev - 0.2;
        return newValue <= 0 ? 100 : newValue;
      });
      setSnakeFill(prev => {
        const newValue = prev - 0.4;
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
        },
        ember: () => {
          const duration = 0.6;
          const now = audioContext.currentTime;
          const flame = audioContext.createOscillator();
          const flameGain = audioContext.createGain();
          flame.type = 'triangle';
          flame.frequency.setValueAtTime(400, now);
          flame.frequency.exponentialRampToValueAtTime(200, now + duration);
          flameGain.gain.setValueAtTime(0.4, now);
          flameGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          flame.connect(flameGain);
          flameGain.connect(audioContext.destination);
          flame.start(now);
          flame.stop(now + duration);
          console.log('🔥 Whoosh!');
        },
        spark: () => {
          const duration = 0.2;
          const now = audioContext.currentTime;
          const zap = audioContext.createOscillator();
          const zapGain = audioContext.createGain();
          zap.type = 'square';
          zap.frequency.setValueAtTime(1500, now);
          zap.frequency.exponentialRampToValueAtTime(800, now + duration);
          zapGain.gain.setValueAtTime(0.3, now);
          zapGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          zap.connect(zapGain);
          zapGain.connect(audioContext.destination);
          zap.start(now);
          zap.stop(now + duration);
          console.log('⚡ Zap!');
        },
        flicker: () => {
          const duration = 0.3;
          const now = audioContext.currentTime;
          const buzz = audioContext.createOscillator();
          const buzzGain = audioContext.createGain();
          buzz.type = 'sawtooth';
          buzz.frequency.setValueAtTime(500, now);
          buzz.frequency.exponentialRampToValueAtTime(250, now + duration);
          buzzGain.gain.setValueAtTime(0.25, now);
          buzzGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          buzz.connect(buzzGain);
          buzzGain.connect(audioContext.destination);
          buzz.start(now);
          buzz.stop(now + duration);
          console.log('✨ Flicker!');
        },
        glow: () => {
          const duration = 0.5;
          const now = audioContext.currentTime;
          const shimmer = audioContext.createOscillator();
          const shimmerGain = audioContext.createGain();
          shimmer.type = 'sine';
          shimmer.frequency.setValueAtTime(800, now);
          shimmer.frequency.exponentialRampToValueAtTime(400, now + duration);
          shimmerGain.gain.setValueAtTime(0.2, now);
          shimmerGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          shimmer.connect(shimmerGain);
          shimmerGain.connect(audioContext.destination);
          shimmer.start(now);
          shimmer.stop(now + duration);
          console.log('💫 Glow!');
        },
        flame: () => {
          const duration = 0.7;
          const now = audioContext.currentTime;
          const burn = audioContext.createOscillator();
          const burnGain = audioContext.createGain();
          burn.type = 'triangle';
          burn.frequency.setValueAtTime(350, now);
          burn.frequency.exponentialRampToValueAtTime(150, now + duration);
          burnGain.gain.setValueAtTime(0.35, now);
          burnGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          burn.connect(burnGain);
          burnGain.connect(audioContext.destination);
          burn.start(now);
          burn.stop(now + duration);
          console.log('🔥 Flame!');
        },
        bubble: () => {
          const duration = 0.4;
          const now = audioContext.currentTime;
          const pop = audioContext.createOscillator();
          const popGain = audioContext.createGain();
          pop.type = 'sine';
          pop.frequency.setValueAtTime(900, now);
          pop.frequency.exponentialRampToValueAtTime(400, now + duration);
          popGain.gain.setValueAtTime(0.3, now);
          popGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          pop.connect(popGain);
          popGain.connect(audioContext.destination);
          pop.start(now);
          pop.stop(now + duration);
          console.log('🫧 Pop!');
        },
        prism: () => {
          const duration = 0.5;
          const now = audioContext.currentTime;
          const refract = audioContext.createOscillator();
          const refractGain = audioContext.createGain();
          refract.type = 'sine';
          refract.frequency.setValueAtTime(1000, now);
          refract.frequency.exponentialRampToValueAtTime(2000, now + duration/2);
          refract.frequency.exponentialRampToValueAtTime(500, now + duration);
          refractGain.gain.setValueAtTime(0.25, now);
          refractGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          refract.connect(refractGain);
          refractGain.connect(audioContext.destination);
          refract.start(now);
          refract.stop(now + duration);
          console.log('🌈 Refract!');
        },
        pebble: () => {
          const duration = 0.3;
          const now = audioContext.currentTime;
          const clunk = audioContext.createOscillator();
          const clunkGain = audioContext.createGain();
          clunk.type = 'triangle';
          clunk.frequency.setValueAtTime(200, now);
          clunk.frequency.exponentialRampToValueAtTime(100, now + duration);
          clunkGain.gain.setValueAtTime(0.35, now);
          clunkGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          clunk.connect(clunkGain);
          clunkGain.connect(audioContext.destination);
          clunk.start(now);
          clunk.stop(now + duration);
          console.log('🪨 Clunk!');
        },
        crystal: () => {
          const duration = 0.6;
          const now = audioContext.currentTime;
          const chime = audioContext.createOscillator();
          const chimeGain = audioContext.createGain();
          chime.type = 'sine';
          chime.frequency.setValueAtTime(1500, now);
          chime.frequency.exponentialRampToValueAtTime(800, now + duration);
          chimeGain.gain.setValueAtTime(0.3, now);
          chimeGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          chime.connect(chimeGain);
          chimeGain.connect(audioContext.destination);
          chime.start(now);
          chime.stop(now + duration);
          console.log('💎 Chime!');
        },
        leaf: () => {
          const duration = 0.4;
          const now = audioContext.currentTime;
          const rustle = audioContext.createOscillator();
          const rustleGain = audioContext.createGain();
          rustle.type = 'sawtooth';
          rustle.frequency.setValueAtTime(400, now);
          rustle.frequency.exponentialRampToValueAtTime(200, now + duration);
          rustleGain.gain.setValueAtTime(0.2, now);
          rustleGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          rustle.connect(rustleGain);
          rustleGain.connect(audioContext.destination);
          rustle.start(now);
          rustle.stop(now + duration);
          console.log('🍃 Rustle!');
        },
        cloud: () => {
          const duration = 0.5;
          const now = audioContext.currentTime;
          const whoosh = audioContext.createOscillator();
          const whooshGain = audioContext.createGain();
          whoosh.type = 'sine';
          whoosh.frequency.setValueAtTime(300, now);
          whoosh.frequency.exponentialRampToValueAtTime(150, now + duration);
          whooshGain.gain.setValueAtTime(0.25, now);
          whooshGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          whoosh.connect(whooshGain);
          whooshGain.connect(audioContext.destination);
          whoosh.start(now);
          whoosh.stop(now + duration);
          console.log('☁️ Whoosh!');
        },
        bolt: () => {
          const duration = 0.15;
          const now = audioContext.currentTime;
          const strike = audioContext.createOscillator();
          const strikeGain = audioContext.createGain();
          strike.type = 'square';
          strike.frequency.setValueAtTime(2000, now);
          strike.frequency.exponentialRampToValueAtTime(100, now + duration);
          strikeGain.gain.setValueAtTime(0.4, now);
          strikeGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          strike.connect(strikeGain);
          strikeGain.connect(audioContext.destination);
          strike.start(now);
          strike.stop(now + duration);
          console.log('⚡ Strike!');
        },
        raindrop: () => {
          const duration = 0.3;
          const now = audioContext.currentTime;
          const drip = audioContext.createOscillator();
          const dripGain = audioContext.createGain();
          drip.type = 'sine';
          drip.frequency.setValueAtTime(1200, now);
          drip.frequency.exponentialRampToValueAtTime(400, now + duration);
          dripGain.gain.setValueAtTime(0.25, now);
          dripGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          drip.connect(dripGain);
          dripGain.connect(audioContext.destination);
          drip.start(now);
          drip.stop(now + duration);
          console.log('💧 Drip!');
        },
        ice: () => {
          const duration = 0.5;
          const now = audioContext.currentTime;
          const freeze = audioContext.createOscillator();
          const freezeGain = audioContext.createGain();
          freeze.type = 'sine';
          freeze.frequency.setValueAtTime(1800, now);
          freeze.frequency.exponentialRampToValueAtTime(600, now + duration);
          freezeGain.gain.setValueAtTime(0.2, now);
          freezeGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          freeze.connect(freezeGain);
          freezeGain.connect(audioContext.destination);
          freeze.start(now);
          freeze.stop(now + duration);
          console.log('❄️ Freeze!');
        },
        sunbeam: () => {
          const duration = 0.6;
          const now = audioContext.currentTime;
          const shine = audioContext.createOscillator();
          const shineGain = audioContext.createGain();
          shine.type = 'sine';
          shine.frequency.setValueAtTime(600, now);
          shine.frequency.exponentialRampToValueAtTime(1200, now + duration/2);
          shine.frequency.exponentialRampToValueAtTime(400, now + duration);
          shineGain.gain.setValueAtTime(0.3, now);
          shineGain.gain.exponentialRampToValueAtTime(0.01, now + duration);
          shine.connect(shineGain);
          shineGain.connect(audioContext.destination);
          shine.start(now);
          shine.stop(now + duration);
          console.log('☀️ Shine!');
        },
        tiger: () => console.log('🐅 Roar!'),
        wolf: () => console.log('🐺 Howl!'),
        eagle: () => console.log('🦅 Screech!'),
        panther: () => console.log('🐆 Growl!'),
        dragon: () => console.log('🐉 Roar!'),
        goat: () => console.log('🐐 Bleat!'),
        fox: () => console.log('🦊 Yip!'),
        owl: () => console.log('🦉 Hoot!'),
        rat: () => console.log('🐀 Squeak!'),
        dog: () => console.log('🐕 Bark!'),
        cat: () => console.log('🐈 Meow!'),
        bear: () => console.log('🐻 Grr!'),
        rhino: () => console.log('🦏 Snort!'),
        snake: () => console.log('🐍 Hiss!')
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
      monkey: { symbols: ['🍌', '🐒', '🌿'], count: 4, colors: ['#8b4513', '#ffd700', '#32cd32'] },
      ember: { symbols: ['🔥', '💥', '✨'], count: 6, colors: ['#ff4500', '#ff6347', '#ffd700'] },
      spark: { symbols: ['⚡', '✨', '💥'], count: 7, colors: ['#ffff00', '#ffd700', '#ff8c00'] },
      flicker: { symbols: ['✨', '💫', '⭐'], count: 5, colors: ['#ffd700', '#ffb347', '#ff6347'] },
      glow: { symbols: ['💫', '✨', '🌟'], count: 6, colors: ['#00ffff', '#87ceeb', '#4169e1'] },
      flame: { symbols: ['🔥', '💥', '🌟'], count: 6, colors: ['#ff4500', '#ff8c00', '#ffd700'] },
      bubble: { symbols: ['🫧', '💧', '✨'], count: 5, colors: ['#87ceeb', '#add8e6', '#b0e0e6'] },
      prism: { symbols: ['🌈', '✨', '💎'], count: 7, colors: ['#ff00ff', '#00ffff', '#ffff00'] },
      pebble: { symbols: ['🪨', '💫', '✨'], count: 4, colors: ['#8b7355', '#a0826d', '#696969'] },
      crystal: { symbols: ['💎', '✨', '🌟'], count: 6, colors: ['#e0ffff', '#b0e0e6', '#add8e6'] },
      leaf: { symbols: ['🍃', '🌿', '✨'], count: 5, colors: ['#32cd32', '#90ee90', '#98fb98'] },
      cloud: { symbols: ['☁️', '💨', '✨'], count: 6, colors: ['#f0f8ff', '#e0e0e0', '#d3d3d3'] },
      bolt: { symbols: ['⚡', '💥', '✨'], count: 8, colors: ['#ffff00', '#ffd700', '#ff8c00'] },
      raindrop: { symbols: ['💧', '💦', '✨'], count: 5, colors: ['#87ceeb', '#4682b4', '#1e90ff'] },
      ice: { symbols: ['❄️', '💎', '✨'], count: 6, colors: ['#e0ffff', '#b0e0e6', '#87ceeb'] },
      sunbeam: { symbols: ['☀️', '🌟', '✨'], count: 7, colors: ['#ffd700', '#ffb347', '#ff8c00'] },
      tiger: { symbols: ['🐅', '💥', '✨'], count: 5, colors: ['#ff8c00', '#ffa500', '#ff4500'] },
      wolf: { symbols: ['🐺', '🌙', '✨'], count: 5, colors: ['#808080', '#a9a9a9', '#696969'] },
      eagle: { symbols: ['🦅', '💨', '✨'], count: 6, colors: ['#8b4513', '#d2691e', '#daa520'] },
      panther: { symbols: ['🐆', '💫', '✨'], count: 5, colors: ['#000000', '#2f4f4f', '#696969'] },
      dragon: { symbols: ['🐉', '🔥', '💥'], count: 7, colors: ['#ff4500', '#ff6347', '#ffd700'] },
      goat: { symbols: ['🐐', '🌿', '✨'], count: 4, colors: ['#f5deb3', '#daa520', '#cd853f'] },
      fox: { symbols: ['🦊', '🍂', '✨'], count: 5, colors: ['#ff8c00', '#ff7f50', '#ff6347'] },
      owl: { symbols: ['🦉', '🌙', '✨'], count: 5, colors: ['#8b7355', '#a0826d', '#696969'] },
      rat: { symbols: ['🐀', '💨', '✨'], count: 4, colors: ['#808080', '#a9a9a9', '#696969'] },
      dog: { symbols: ['🐕', '💖', '✨'], count: 5, colors: ['#d2691e', '#daa520', '#cd853f'] },
      cat: { symbols: ['🐈', '💕', '✨'], count: 5, colors: ['#ff69b4', '#ffa500', '#696969'] },
      bear: { symbols: ['🐻', '🍯', '✨'], count: 5, colors: ['#8b4513', '#a0522d', '#d2691e'] },
      rhino: { symbols: ['🦏', '💨', '✨'], count: 4, colors: ['#808080', '#696969', '#778899'] },
      snake: { symbols: ['🐍', '💚', '✨'], count: 5, colors: ['#32cd32', '#228b22', '#556b2f'] }
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

      {/* Categories Section */}
      <div className="space-y-12 px-8">
        {/* Animals & Nature Category */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            🌿 Animals & Nature
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 py-8">
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
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            🍎 Apple
          </div>
          
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
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            🐰 Rabbit
          </div>
          
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
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            🐔 Hen
          </div>
          
          {/* Fill Value Display */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-yellow-600">
            {Math.round(henFill)}%
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
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            🐒 Monkey
          </div>
          
          {/* Fill Value Display */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-amber-600">
            {Math.round(monkeyFill)}%
          </div>
        </div>
          </div>
        </div>

        {/* Sparklings Category */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
            ✨ Sparklings
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 py-8">

        {/* Ember Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="ember"
          onClick={() => handleCharacterClick('ember')}
          onMouseEnter={() => handleCharacterHover('ember')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'ember' ? [1, 1.2, 1] : [1, 1.1, 1],
              y: clickedCharacter === 'ember' ? [0, -5, 0] : 0,
            }}
            transition={{
              duration: hoveredCharacter === 'ember' ? 0.3 : 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.15,
              filter: "brightness(1.2) drop-shadow(0 0 10px rgba(255,69,0,0.6))",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            className={`${hoveredCharacter === 'ember' ? 'drop-shadow-2xl' : ''} ${
              clickedCharacter === 'ember' ? 'animate-pulse' : ''
            }`}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <linearGradient id="emberGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffd700" />
                  <stop offset="30%" stopColor="#ff8c00" />
                  <stop offset="70%" stopColor="#ff4500" />
                  <stop offset="100%" stopColor="#dc143c" />
                </linearGradient>
                <radialGradient id="ember3D" cx="40%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffff00" />
                  <stop offset="30%" stopColor="#ffd700" />
                  <stop offset="60%" stopColor="#ff8c00" />
                  <stop offset="100%" stopColor="#ff4500" />
                </radialGradient>
                <radialGradient id="emberCore" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="20%" stopColor="#ffff00" />
                  <stop offset="50%" stopColor="#ff8c00" />
                  <stop offset="100%" stopColor="#ff4500" />
                </radialGradient>
                <filter id="emberGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="emberShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#ff4500" floodOpacity="0.4"/>
                </filter>
                <mask id="emberFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (emberFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Ember Base - Flame Shape */}
              <path
                d="M64 20 Q75 25, 80 35 Q85 50, 82 65 Q80 80, 75 90 Q70 100, 64 105 Q58 100, 53 90 Q48 80, 46 65 Q43 50, 48 35 Q53 25, 64 20 Z"
                fill="url(#ember3D)"
                mask="url(#emberFillMask)"
                filter="url(#emberShadow)"
              />
              {/* Ember Outline - Always Visible */}
              <path
                d="M64 20 Q75 25, 80 35 Q85 50, 82 65 Q80 80, 75 90 Q70 100, 64 105 Q58 100, 53 90 Q48 80, 46 65 Q43 50, 48 35 Q53 25, 64 20 Z"
                fill="none"
                stroke="#ff4500"
                strokeWidth="2"
              />
              
              {/* Inner Flame - Brighter Core */}
              <path
                d="M64 30 Q70 33, 73 42 Q75 55, 73 65 Q70 75, 64 80 Q58 75, 55 65 Q53 55, 55 42 Q58 33, 64 30 Z"
                fill="url(#emberCore)"
                mask="url(#emberFillMask)"
                filter="url(#emberGlow)"
              />
              {/* Inner Flame Outline */}
              <path
                d="M64 30 Q70 33, 73 42 Q75 55, 73 65 Q70 75, 64 80 Q58 75, 55 65 Q53 55, 55 42 Q58 33, 64 30 Z"
                fill="none"
                stroke="#ffd700"
                strokeWidth="1"
              />
              
              {/* Flame Flicker Left */}
              <path
                d="M48 40 Q45 35, 42 45 Q40 55, 45 60 Q48 58, 48 50 Q48 45, 48 40"
                fill="url(#ember3D)"
                mask="url(#emberFillMask)"
                opacity="0.8"
              />
              
              {/* Flame Flicker Right */}
              <path
                d="M80 40 Q83 35, 86 45 Q88 55, 83 60 Q80 58, 80 50 Q80 45, 80 40"
                fill="url(#ember3D)"
                mask="url(#emberFillMask)"
                opacity="0.8"
              />
              
              {/* Top Flame Point */}
              <path
                d="M64 15 Q67 18, 68 25 Q67 30, 64 28 Q61 30, 60 25 Q61 18, 64 15"
                fill="url(#emberCore)"
                mask="url(#emberFillMask)"
                filter="url(#emberGlow)"
              />
              
              {/* Ember Eyes - Glowing */}
              <ellipse cx="57" cy="50" rx="4" ry="6" fill="#ffff00" />
              <ellipse cx="71" cy="50" rx="4" ry="6" fill="#ffff00" />
              <ellipse cx="57" cy="50" rx="2" ry="4" fill="#ff8c00" />
              <ellipse cx="71" cy="50" rx="2" ry="4" fill="#ff8c00" />
              <circle cx="57" cy="48" r="1" fill="#ffffff" opacity="0.8" />
              <circle cx="71" cy="48" r="1" fill="#ffffff" opacity="0.8" />
              
              {/* Ember Smile - Fiery */}
              <path
                d="M58 62 Q64 67, 70 62"
                fill="none"
                stroke="#ffd700"
                strokeWidth="2"
                mask="url(#emberFillMask)"
              />
              
              {/* Flame Swirls - Decorative */}
              <path
                d="M50 55 Q48 60, 52 63"
                fill="none"
                stroke="#ffd700"
                strokeWidth="1.5"
                mask="url(#emberFillMask)"
                opacity="0.6"
              />
              <path
                d="M78 55 Q80 60, 76 63"
                fill="none"
                stroke="#ffd700"
                strokeWidth="1.5"
                mask="url(#emberFillMask)"
                opacity="0.6"
              />
              
              {/* Ember Arms - Flame Tendrils */}
              <path
                d="M48 65 Q35 68, 30 75 Q28 80, 32 82 Q38 78, 45 72"
                fill="url(#ember3D)"
                mask="url(#emberFillMask)"
                opacity="0.7"
              />
              <path
                d="M80 65 Q93 68, 98 75 Q100 80, 96 82 Q90 78, 83 72"
                fill="url(#ember3D)"
                mask="url(#emberFillMask)"
                opacity="0.7"
              />
              
              {/* Ember Arms Outline */}
              <path
                d="M48 65 Q35 68, 30 75 Q28 80, 32 82 Q38 78, 45 72"
                fill="none"
                stroke="#ff8c00"
                strokeWidth="1"
              />
              <path
                d="M80 65 Q93 68, 98 75 Q100 80, 96 82 Q90 78, 83 72"
                fill="none"
                stroke="#ff8c00"
                strokeWidth="1"
              />
              
              {/* Hot Spots - White Highlights */}
              <circle cx="64" cy="40" r="2" fill="#ffffff" mask="url(#emberFillMask)" opacity="0.6" />
              <circle cx="60" cy="55" r="1.5" fill="#ffffff" mask="url(#emberFillMask)" opacity="0.5" />
              <circle cx="68" cy="58" r="1.5" fill="#ffffff" mask="url(#emberFillMask)" opacity="0.5" />
              <circle cx="64" cy="70" r="2" fill="#ffffff" mask="url(#emberFillMask)" opacity="0.4" />
              
              {/* Ember Sparks - Floating */}
              <circle cx="40" cy="45" r="1" fill="#ffd700" mask="url(#emberFillMask)" opacity="0.8" />
              <circle cx="88" cy="50" r="1.2" fill="#ffd700" mask="url(#emberFillMask)" opacity="0.7" />
              <circle cx="35" cy="60" r="0.8" fill="#ff8c00" mask="url(#emberFillMask)" opacity="0.6" />
              <circle cx="92" cy="65" r="0.9" fill="#ff8c00" mask="url(#emberFillMask)" opacity="0.6" />
              
              {/* Flame Wisps - Bottom */}
              <path
                d="M55 95 Q50 100, 48 105 Q50 108, 52 105 Q55 100, 55 95"
                fill="url(#ember3D)"
                mask="url(#emberFillMask)"
                opacity="0.5"
              />
              <path
                d="M64 100 Q62 105, 60 110 Q62 113, 64 110 Q66 105, 64 100"
                fill="url(#ember3D)"
                mask="url(#emberFillMask)"
                opacity="0.5"
              />
              <path
                d="M73 95 Q78 100, 80 105 Q78 108, 76 105 Q73 100, 73 95"
                fill="url(#ember3D)"
                mask="url(#emberFillMask)"
                opacity="0.5"
              />
              
              {/* Ember Cheeks - Glow */}
              <ellipse cx="52" cy="56" rx="3" ry="2" fill="#ffd700" mask="url(#emberFillMask)" opacity="0.4" />
              <ellipse cx="76" cy="56" rx="3" ry="2" fill="#ffd700" mask="url(#emberFillMask)" opacity="0.4" />
              
              {/* Core Pulse Effect */}
              <circle cx="64" cy="55" r="3" fill="#ffffff" mask="url(#emberFillMask)" opacity="0.3" />
              
              {/* Flame Details - Texture */}
              <path
                d="M58 75 Q60 72, 62 75"
                fill="none"
                stroke="#ff8c00"
                strokeWidth="1"
                mask="url(#emberFillMask)"
                opacity="0.5"
              />
              <path
                d="M66 75 Q68 72, 70 75"
                fill="none"
                stroke="#ff8c00"
                strokeWidth="1"
                mask="url(#emberFillMask)"
                opacity="0.5"
              />
              
              {/* Bottom Glow Base */}
              <ellipse cx="64" cy="105" rx="20" ry="8" fill="#ff4500" mask="url(#emberFillMask)" opacity="0.3" />
              <ellipse cx="64" cy="105" rx="15" ry="6" fill="#ff8c00" mask="url(#emberFillMask)" opacity="0.2" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            🔥 Ember
          </div>
          
          {/* Fill Value Display */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-500">
            {Math.round(emberFill)}%
          </div>
        </div>

        {/* Spark Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="spark"
          onClick={() => handleCharacterClick('spark')}
          onMouseEnter={() => handleCharacterHover('spark')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'spark' ? [1, 1.3, 1] : [1, 1.15, 1],
              rotate: clickedCharacter === 'spark' ? [0, 360] : [0, 0],
            }}
            transition={{
              duration: hoveredCharacter === 'spark' ? 0.2 : 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.2,
              filter: "brightness(1.3) drop-shadow(0 0 15px rgba(255,255,0,0.8))",
              transition: { duration: 0.15 }
            }}
            whileTap={{ 
              scale: 0.9,
              transition: { duration: 0.1 }
            }}
            className={`${hoveredCharacter === 'spark' ? 'drop-shadow-2xl' : ''} ${
              clickedCharacter === 'spark' ? 'animate-spin' : ''
            }`}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <radialGradient id="spark3D" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#ffff00" />
                  <stop offset="70%" stopColor="#ffd700" />
                  <stop offset="100%" stopColor="#ff8c00" />
                </radialGradient>
                <filter id="sparkGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <mask id="sparkFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (sparkFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Spark Core */}
              <circle cx="64" cy="64" r="15" fill="url(#spark3D)" mask="url(#sparkFillMask)" filter="url(#sparkGlow)" />
              <circle cx="64" cy="64" r="15" fill="none" stroke="#ffd700" strokeWidth="2" />
              
              {/* Main Lightning Bolts */}
              <path d="M64 25 L68 50 L75 45 L64 75" fill="#ffff00" mask="url(#sparkFillMask)" stroke="#ffd700" strokeWidth="2" />
              <path d="M64 103 L60 78 L53 83 L64 53" fill="#ffff00" mask="url(#sparkFillMask)" stroke="#ffd700" strokeWidth="2" />
              <path d="M25 64 L50 60 L45 53 L75 64" fill="#ffff00" mask="url(#sparkFillMask)" stroke="#ffd700" strokeWidth="2" />
              <path d="M103 64 L78 68 L83 75 L53 64" fill="#ffff00" mask="url(#sparkFillMask)" stroke="#ffd700" strokeWidth="2" />
              
              {/* Diagonal Lightning Bolts */}
              <path d="M35 35 L55 50 L50 55 L64 64" fill="#ffd700" mask="url(#sparkFillMask)" opacity="0.8" />
              <path d="M93 93 L73 78 L78 73 L64 64" fill="#ffd700" mask="url(#sparkFillMask)" opacity="0.8" />
              <path d="M93 35 L73 50 L78 55 L64 64" fill="#ffd700" mask="url(#sparkFillMask)" opacity="0.8" />
              <path d="M35 93 L55 78 L50 73 L64 64" fill="#ffd700" mask="url(#sparkFillMask)" opacity="0.8" />
              
              {/* Electric Arcs */}
              <path d="M64 30 Q80 40, 85 50" fill="none" stroke="#ffff00" strokeWidth="2" mask="url(#sparkFillMask)" opacity="0.6" />
              <path d="M64 98 Q48 88, 43 78" fill="none" stroke="#ffff00" strokeWidth="2" mask="url(#sparkFillMask)" opacity="0.6" />
              
              {/* Inner Core Details */}
              <circle cx="64" cy="64" r="8" fill="#ffffff" mask="url(#sparkFillMask)" opacity="0.8" />
              <circle cx="64" cy="64" r="4" fill="#ffff00" mask="url(#sparkFillMask)" />
              
              {/* Spark Eyes */}
              <circle cx="60" cy="62" r="2" fill="#333" />
              <circle cx="68" cy="62" r="2" fill="#333" />
              <circle cx="60.5" cy="61" r="0.8" fill="#fff" />
              <circle cx="68.5" cy="61" r="0.8" fill="#fff" />
              
              {/* Energy Rings */}
              <circle cx="64" cy="64" r="20" fill="none" stroke="#ffd700" strokeWidth="1.5" opacity="0.4" mask="url(#sparkFillMask)" />
              <circle cx="64" cy="64" r="25" fill="none" stroke="#ff8c00" strokeWidth="1" opacity="0.3" mask="url(#sparkFillMask)" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            ⚡ Spark
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-yellow-500">
            {Math.round(sparkFill)}%
          </div>
        </div>

        {/* Flicker Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="flicker"
          onClick={() => handleCharacterClick('flicker')}
          onMouseEnter={() => handleCharacterHover('flicker')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'flicker' ? [1, 1.15, 1] : [1, 1.05, 1],
              opacity: hoveredCharacter === 'flicker' ? [1, 0.7, 1] : [1, 0.9, 1],
            }}
            transition={{
              duration: hoveredCharacter === 'flicker' ? 0.2 : 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.15,
              filter: "brightness(1.3)",
              transition: { duration: 0.15 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            className={`${hoveredCharacter === 'flicker' ? 'drop-shadow-xl' : ''}`}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <radialGradient id="flicker3D" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="40%" stopColor="#ffd700" />
                  <stop offset="80%" stopColor="#ff8c00" />
                  <stop offset="100%" stopColor="#ff6347" />
                </radialGradient>
                <filter id="flickerGlow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <mask id="flickerFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (flickerFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Flicker Body - Star Shape */}
              <path
                d="M64 20 L70 50 L95 45 L75 65 L85 95 L64 80 L43 95 L53 65 L33 45 L58 50 Z"
                fill="url(#flicker3D)"
                mask="url(#flickerFillMask)"
                filter="url(#flickerGlow)"
                stroke="#ffd700"
                strokeWidth="2"
              />
              
              {/* Inner Star */}
              <path
                d="M64 35 L68 55 L82 52 L72 64 L78 80 L64 70 L50 80 L56 64 L46 52 L60 55 Z"
                fill="#ffffff"
                mask="url(#flickerFillMask)"
                opacity="0.6"
              />
              
              {/* Flicker Eyes */}
              <circle cx="60" cy="58" r="3" fill="#333" />
              <circle cx="68" cy="58" r="3" fill="#333" />
              <circle cx="61" cy="57" r="1" fill="#fff" />
              <circle cx="69" cy="57" r="1" fill="#fff" />
              
              {/* Flicker Smile */}
              <path d="M58 66 Q64 70, 70 66" fill="none" stroke="#ff8c00" strokeWidth="2" mask="url(#flickerFillMask)" />
              
              {/* Sparkle Points */}
              <circle cx="30" cy="50" r="2" fill="#ffd700" mask="url(#flickerFillMask)" opacity="0.8" />
              <circle cx="98" cy="50" r="2" fill="#ffd700" mask="url(#flickerFillMask)" opacity="0.8" />
              <circle cx="64" cy="15" r="2.5" fill="#ffffff" mask="url(#flickerFillMask)" />
              <circle cx="50" cy="100" r="2" fill="#ff8c00" mask="url(#flickerFillMask)" opacity="0.7" />
              <circle cx="78" cy="100" r="2" fill="#ff8c00" mask="url(#flickerFillMask)" opacity="0.7" />
              
              {/* Glow Rings */}
              <circle cx="64" cy="64" r="30" fill="none" stroke="#ffd700" strokeWidth="1" opacity="0.3" mask="url(#flickerFillMask)" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            ✨ Flicker
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-500">
            {Math.round(flickerFill)}%
          </div>
        </div>

        {/* Glow Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="glow"
          onClick={() => handleCharacterClick('glow')}
          onMouseEnter={() => handleCharacterHover('glow')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'glow' ? [1, 1.2, 1] : [1, 1.1, 1],
              filter: hoveredCharacter === 'glow' 
                ? ['brightness(1.2)', 'brightness(1.5)', 'brightness(1.2)']
                : ['brightness(1)', 'brightness(1.1)', 'brightness(1)'],
            }}
            transition={{
              duration: hoveredCharacter === 'glow' ? 0.6 : 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.2,
              filter: "brightness(1.4) drop-shadow(0 0 20px rgba(0,255,255,0.7))",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <radialGradient id="glow3D" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#e0ffff" />
                  <stop offset="60%" stopColor="#87ceeb" />
                  <stop offset="100%" stopColor="#4169e1" />
                </radialGradient>
                <filter id="glowEffect" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <mask id="glowFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (glowFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Glow Body - Orb */}
              <circle cx="64" cy="64" r="35" fill="url(#glow3D)" mask="url(#glowFillMask)" filter="url(#glowEffect)" />
              <circle cx="64" cy="64" r="35" fill="none" stroke="#87ceeb" strokeWidth="2" />
              
              {/* Inner Orb Layers */}
              <circle cx="64" cy="64" r="25" fill="#e0ffff" mask="url(#glowFillMask)" opacity="0.5" />
              <circle cx="64" cy="64" r="15" fill="#ffffff" mask="url(#glowFillMask)" opacity="0.7" />
              
              {/* Glow Eyes */}
              <ellipse cx="58" cy="60" rx="4" ry="5" fill="#4169e1" />
              <ellipse cx="70" cy="60" rx="4" ry="5" fill="#4169e1" />
              <circle cx="59" cy="59" r="1.5" fill="#fff" />
              <circle cx="71" cy="59" r="1.5" fill="#fff" />
              
              {/* Glow Smile */}
              <path d="M58 72 Q64 78, 70 72" fill="none" stroke="#87ceeb" strokeWidth="2.5" mask="url(#glowFillMask)" />
              
              {/* Aura Rings */}
              <circle cx="64" cy="64" r="40" fill="none" stroke="#87ceeb" strokeWidth="2" opacity="0.4" mask="url(#glowFillMask)" />
              <circle cx="64" cy="64" r="45" fill="none" stroke="#4169e1" strokeWidth="1.5" opacity="0.3" mask="url(#glowFillMask)" />
              <circle cx="64" cy="64" r="50" fill="none" stroke="#00ffff" strokeWidth="1" opacity="0.2" mask="url(#glowFillMask)" />
              
              {/* Light Rays */}
              <line x1="64" y1="20" x2="64" y2="30" stroke="#e0ffff" strokeWidth="2" mask="url(#glowFillMask)" opacity="0.6" />
              <line x1="64" y1="98" x2="64" y2="108" stroke="#e0ffff" strokeWidth="2" mask="url(#glowFillMask)" opacity="0.6" />
              <line x1="20" y1="64" x2="30" y2="64" stroke="#e0ffff" strokeWidth="2" mask="url(#glowFillMask)" opacity="0.6" />
              <line x1="98" y1="64" x2="108" y2="64" stroke="#e0ffff" strokeWidth="2" mask="url(#glowFillMask)" opacity="0.6" />
              
              {/* Sparkle Details */}
              <circle cx="50" cy="50" r="2" fill="#ffffff" mask="url(#glowFillMask)" opacity="0.8" />
              <circle cx="78" cy="50" r="2" fill="#ffffff" mask="url(#glowFillMask)" opacity="0.8" />
              <circle cx="64" cy="85" r="2.5" fill="#e0ffff" mask="url(#glowFillMask)" opacity="0.7" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            💫 Glow
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-blue-500">
            {Math.round(glowFill)}%
          </div>
        </div>

        {/* Flame Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="flame"
          onClick={() => handleCharacterClick('flame')}
          onMouseEnter={() => handleCharacterHover('flame')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'flame' ? [1, 1.15, 1] : [1, 1.08, 1],
              y: clickedCharacter === 'flame' ? [0, -8, 0] : [0, -3, 0],
            }}
            transition={{
              duration: hoveredCharacter === 'flame' ? 0.4 : 0.9,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.18,
              filter: "brightness(1.3) drop-shadow(0 0 15px rgba(255,69,0,0.8))",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            className={`${hoveredCharacter === 'flame' ? 'drop-shadow-2xl' : ''}`}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffff00" />
                  <stop offset="30%" stopColor="#ffd700" />
                  <stop offset="60%" stopColor="#ff8c00" />
                  <stop offset="100%" stopColor="#ff4500" />
                </linearGradient>
                <radialGradient id="flame3D" cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="20%" stopColor="#ffff00" />
                  <stop offset="50%" stopColor="#ff8c00" />
                  <stop offset="100%" stopColor="#ff4500" />
                </radialGradient>
                <filter id="flameShadow">
                  <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#ff4500" floodOpacity="0.5"/>
                </filter>
                <mask id="flameFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (flameFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Large Flame Body */}
              <path
                d="M64 15 Q80 25, 90 45 Q95 65, 88 85 Q80 100, 64 110 Q48 100, 40 85 Q33 65, 38 45 Q48 25, 64 15 Z"
                fill="url(#flame3D)"
                mask="url(#flameFillMask)"
                filter="url(#flameShadow)"
                stroke="#ff8c00"
                strokeWidth="2"
              />
              
              {/* Middle Flame Layer */}
              <path
                d="M64 25 Q75 32, 80 48 Q83 63, 78 78 Q72 90, 64 95 Q56 90, 50 78 Q45 63, 48 48 Q53 32, 64 25 Z"
                fill="url(#flameGradient)"
                mask="url(#flameFillMask)"
                opacity="0.8"
              />
              
              {/* Inner Hot Core */}
              <path
                d="M64 35 Q70 40, 72 50 Q74 60, 70 68 Q66 75, 64 78 Q62 75, 58 68 Q54 60, 56 50 Q58 40, 64 35 Z"
                fill="#ffffff"
                mask="url(#flameFillMask)"
                opacity="0.7"
              />
              
              {/* Flame Eyes */}
              <ellipse cx="58" cy="55" rx="3" ry="4" fill="#333" />
              <ellipse cx="70" cy="55" rx="3" ry="4" fill="#333" />
              <circle cx="59" cy="54" r="1" fill="#fff" />
              <circle cx="71" cy="54" r="1" fill="#fff" />
              
              {/* Flame Smile */}
              <path d="M58 65 Q64 69, 70 65" fill="none" stroke="#ff4500" strokeWidth="2" mask="url(#flameFillMask)" />
              
              {/* Flame Wisps - Top */}
              <path d="M58 20 Q55 10, 60 8 Q62 12, 60 18" fill="#ffff00" mask="url(#flameFillMask)" opacity="0.7" />
              <path d="M70 20 Q73 10, 68 8 Q66 12, 68 18" fill="#ffff00" mask="url(#flameFillMask)" opacity="0.7" />
              <path d="M64 12 Q66 5, 64 3 Q62 5, 64 12" fill="#ffffff" mask="url(#flameFillMask)" opacity="0.8" />
              
              {/* Side Flames */}
              <path d="M40 55 Q33 50, 30 55 Q33 60, 38 58" fill="#ff8c00" mask="url(#flameFillMask)" opacity="0.6" />
              <path d="M88 55 Q95 50, 98 55 Q95 60, 90 58" fill="#ff8c00" mask="url(#flameFillMask)" opacity="0.6" />
              
              {/* Base Glow */}
              <ellipse cx="64" cy="110" rx="25" ry="10" fill="#ff4500" mask="url(#flameFillMask)" opacity="0.4" />
              <ellipse cx="64" cy="108" rx="18" ry="7" fill="#ff8c00" mask="url(#flameFillMask)" opacity="0.3" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            🔥 Flame
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-600">
            {Math.round(flameFill)}%
          </div>
        </div>

        {/* Bubble Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="bubble"
          onClick={() => handleCharacterClick('bubble')}
          onMouseEnter={() => handleCharacterHover('bubble')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'bubble' ? [1, 1.1, 1] : [1, 1.05, 1],
              y: clickedCharacter === 'bubble' ? [0, -10, 0] : [0, -2, 0],
            }}
            transition={{
              duration: hoveredCharacter === 'bubble' ? 0.8 : 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.15,
              filter: "brightness(1.2)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ 
              scale: 0.9,
              transition: { duration: 0.1 }
            }}
            className={`${hoveredCharacter === 'bubble' ? 'drop-shadow-xl' : ''}`}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <radialGradient id="bubble3D" cx="35%" cy="35%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#e0ffff" />
                  <stop offset="70%" stopColor="#add8e6" />
                  <stop offset="100%" stopColor="#87ceeb" />
                </radialGradient>
                <radialGradient id="bubbleShine" cx="30%" cy="30%" r="40%">
                  <stop offset="0%" stopColor="#ffffff" opacity="0.9" />
                  <stop offset="70%" stopColor="#ffffff" opacity="0.3" />
                  <stop offset="100%" stopColor="#ffffff" opacity="0" />
                </radialGradient>
                <filter id="bubbleShadow">
                  <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.15"/>
                </filter>
                <mask id="bubbleFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (bubbleFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Main Bubble Body */}
              <circle cx="64" cy="64" r="38" fill="url(#bubble3D)" mask="url(#bubbleFillMask)" filter="url(#bubbleShadow)" />
              <circle cx="64" cy="64" r="38" fill="none" stroke="#87ceeb" strokeWidth="2.5" />
              
              {/* Bubble Shine Effect */}
              <ellipse cx="48" cy="45" rx="18" ry="22" fill="url(#bubbleShine)" mask="url(#bubbleFillMask)" />
              
              {/* Secondary Shine */}
              <ellipse cx="45" cy="42" rx="8" ry="12" fill="#ffffff" mask="url(#bubbleFillMask)" opacity="0.6" />
              <ellipse cx="42" cy="38" rx="4" ry="6" fill="#ffffff" mask="url(#bubbleFillMask)" opacity="0.8" />
              
              {/* Bubble Eyes */}
              <circle cx="58" cy="60" r="4" fill="#4169e1" />
              <circle cx="70" cy="60" r="4" fill="#4169e1" />
              <circle cx="59" cy="59" r="1.5" fill="#fff" />
              <circle cx="71" cy="59" r="1.5" fill="#fff" />
              
              {/* Bubble Smile */}
              <path d="M56 72 Q64 78, 72 72" fill="none" stroke="#87ceeb" strokeWidth="2.5" mask="url(#bubbleFillMask)" />
              
              {/* Small Bubbles Around */}
              <circle cx="30" cy="40" r="6" fill="url(#bubble3D)" mask="url(#bubbleFillMask)" opacity="0.8" stroke="#87ceeb" strokeWidth="1.5" />
              <circle cx="98" cy="50" r="8" fill="url(#bubble3D)" mask="url(#bubbleFillMask)" opacity="0.7" stroke="#87ceeb" strokeWidth="1.5" />
              <circle cx="25" cy="75" r="5" fill="url(#bubble3D)" mask="url(#bubbleFillMask)" opacity="0.8" stroke="#87ceeb" strokeWidth="1.5" />
              <circle cx="95" cy="85" r="7" fill="url(#bubble3D)" mask="url(#bubbleFillMask)" opacity="0.7" stroke="#87ceeb" strokeWidth="1.5" />
              <circle cx="64" cy="20" r="4" fill="url(#bubble3D)" mask="url(#bubbleFillMask)" opacity="0.9" stroke="#87ceeb" strokeWidth="1" />
              
              {/* Tiny Shine Spots on Small Bubbles */}
              <circle cx="28" cy="38" r="2" fill="#ffffff" mask="url(#bubbleFillMask)" opacity="0.7" />
              <circle cx="96" cy="48" r="2.5" fill="#ffffff" mask="url(#bubbleFillMask)" opacity="0.7" />
              <circle cx="23" cy="73" r="1.5" fill="#ffffff" mask="url(#bubbleFillMask)" opacity="0.7" />
              <circle cx="93" cy="83" r="2" fill="#ffffff" mask="url(#bubbleFillMask)" opacity="0.7" />
              
              {/* Reflection Details */}
              <path d="M75 55 Q80 50, 85 55" fill="none" stroke="#ffffff" strokeWidth="1.5" mask="url(#bubbleFillMask)" opacity="0.4" />
              <ellipse cx="78" cy="70" rx="3" ry="5" fill="#ffffff" mask="url(#bubbleFillMask)" opacity="0.3" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            🫧 Bubble
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-blue-400">
            {Math.round(bubbleFill)}%
          </div>
        </div>

        {/* Prism Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="prism"
          onClick={() => handleCharacterClick('prism')}
          onMouseEnter={() => handleCharacterHover('prism')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'prism' ? [1, 1.15, 1] : [1, 1.08, 1],
              rotate: clickedCharacter === 'prism' ? [0, 180, 360] : [0, 5, 0],
            }}
            transition={{
              duration: hoveredCharacter === 'prism' ? 0.5 : 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.2,
              filter: "brightness(1.3) drop-shadow(0 0 15px rgba(255,0,255,0.6))",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <linearGradient id="prismGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff0000" />
                  <stop offset="20%" stopColor="#ff7f00" />
                  <stop offset="40%" stopColor="#ffff00" />
                  <stop offset="60%" stopColor="#00ff00" />
                  <stop offset="80%" stopColor="#0000ff" />
                  <stop offset="100%" stopColor="#8b00ff" />
                </linearGradient>
                <linearGradient id="prismGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff00ff" />
                  <stop offset="33%" stopColor="#00ffff" />
                  <stop offset="66%" stopColor="#ffff00" />
                  <stop offset="100%" stopColor="#ff00ff" />
                </linearGradient>
                <filter id="prismGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <mask id="prismFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (prismFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Prism Triangle Body */}
              <path
                d="M64 20 L100 100 L28 100 Z"
                fill="url(#prismGradient1)"
                mask="url(#prismFillMask)"
                filter="url(#prismGlow)"
                stroke="#ff00ff"
                strokeWidth="2"
              />
              
              {/* Inner Triangle */}
              <path
                d="M64 35 L88 85 L40 85 Z"
                fill="url(#prismGradient2)"
                mask="url(#prismFillMask)"
                opacity="0.7"
              />
              
              {/* Light Refraction Beams */}
              <line x1="64" y1="30" x2="75" y2="10" stroke="#ff0000" strokeWidth="2" mask="url(#prismFillMask)" opacity="0.6" />
              <line x1="64" y1="30" x2="80" y2="15" stroke="#ffff00" strokeWidth="2" mask="url(#prismFillMask)" opacity="0.6" />
              <line x1="64" y1="30" x2="48" y2="15" stroke="#00ffff" strokeWidth="2" mask="url(#prismFillMask)" opacity="0.6" />
              <line x1="64" y1="30" x2="53" y2="10" stroke="#ff00ff" strokeWidth="2" mask="url(#prismFillMask)" opacity="0.6" />
              
              {/* Prism Eyes */}
              <circle cx="58" cy="55" r="4" fill="#fff" />
              <circle cx="70" cy="55" r="4" fill="#fff" />
              <circle cx="58" cy="55" r="2.5" fill="#333" />
              <circle cx="70" cy="55" r="2.5" fill="#333" />
              <circle cx="59" cy="54" r="1" fill="#fff" />
              <circle cx="71" cy="54" r="1" fill="#fff" />
              
              {/* Prism Smile */}
              <path d="M56 68 Q64 74, 72 68" fill="none" stroke="#ff00ff" strokeWidth="2" mask="url(#prismFillMask)" />
              
              {/* Rainbow Sparkles */}
              <circle cx="45" cy="50" r="2" fill="#ff0000" mask="url(#prismFillMask)" opacity="0.8" />
              <circle cx="83" cy="50" r="2" fill="#0000ff" mask="url(#prismFillMask)" opacity="0.8" />
              <circle cx="64" cy="90" r="2.5" fill="#ffff00" mask="url(#prismFillMask)" opacity="0.7" />
              
              {/* Facet Lines */}
              <line x1="64" y1="35" x2="64" y2="85" stroke="#ffffff" strokeWidth="1" mask="url(#prismFillMask)" opacity="0.4" />
              <line x1="50" y1="65" x2="78" y2="65" stroke="#ffffff" strokeWidth="1" mask="url(#prismFillMask)" opacity="0.4" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            🌈 Prism
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-purple-600">
            {Math.round(prismFill)}%
          </div>
        </div>

        {/* Pebble Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="pebble"
          onClick={() => handleCharacterClick('pebble')}
          onMouseEnter={() => handleCharacterHover('pebble')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'pebble' ? [1, 1.08, 1] : [1, 1.03, 1],
              y: clickedCharacter === 'pebble' ? [0, -5, 0] : 0,
            }}
            transition={{
              duration: hoveredCharacter === 'pebble' ? 0.8 : 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.12,
              filter: "brightness(1.2)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <radialGradient id="pebble3D" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#c4a57b" />
                  <stop offset="50%" stopColor="#a0826d" />
                  <stop offset="100%" stopColor="#8b7355" />
                </radialGradient>
                <filter id="pebbleShadow">
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
                </filter>
                <mask id="pebbleFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (pebbleFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Pebble Body - Irregular Stone Shape */}
              <ellipse cx="64" cy="70" rx="35" ry="32" fill="url(#pebble3D)" mask="url(#pebbleFillMask)" filter="url(#pebbleShadow)" />
              <ellipse cx="64" cy="70" rx="35" ry="32" fill="none" stroke="#8b7355" strokeWidth="2" />
              
              {/* Stone Texture Spots */}
              <circle cx="50" cy="60" r="3" fill="rgba(0,0,0,0.15)" mask="url(#pebbleFillMask)" />
              <circle cx="75" cy="65" r="2.5" fill="rgba(0,0,0,0.12)" mask="url(#pebbleFillMask)" />
              <circle cx="58" cy="80" r="2" fill="rgba(0,0,0,0.1)" mask="url(#pebbleFillMask)" />
              <circle cx="70" cy="75" r="2.2" fill="rgba(0,0,0,0.13)" mask="url(#pebbleFillMask)" />
              <circle cx="45" cy="72" r="1.8" fill="rgba(0,0,0,0.11)" mask="url(#pebbleFillMask)" />
              
              {/* Highlight Shine */}
              <ellipse cx="50" cy="55" rx="12" ry="8" fill="rgba(255,255,255,0.3)" mask="url(#pebbleFillMask)" />
              <ellipse cx="48" cy="52" rx="6" ry="4" fill="rgba(255,255,255,0.4)" mask="url(#pebbleFillMask)" />
              
              {/* Pebble Eyes */}
              <circle cx="58" cy="65" r="4" fill="#3d3d3d" />
              <circle cx="70" cy="65" r="4" fill="#3d3d3d" />
              <circle cx="59" cy="64" r="1.5" fill="#fff" />
              <circle cx="71" cy="64" r="1.5" fill="#fff" />
              
              {/* Pebble Smile */}
              <path d="M56 78 Q64 83, 72 78" fill="none" stroke="#6b5d4f" strokeWidth="2" mask="url(#pebbleFillMask)" />
              
              {/* Stone Cracks */}
              <path d="M40 65 Q45 67, 48 65" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" mask="url(#pebbleFillMask)" />
              <path d="M82 72 Q85 75, 88 73" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" mask="url(#pebbleFillMask)" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            🪨 Pebble
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-stone-600">
            {Math.round(pebbleFill)}%
          </div>
        </div>

        {/* Crystal Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="crystal"
          onClick={() => handleCharacterClick('crystal')}
          onMouseEnter={() => handleCharacterHover('crystal')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'crystal' ? [1, 1.2, 1] : [1, 1.1, 1],
              rotate: hoveredCharacter === 'crystal' ? [0, 10, -10, 0] : [0, 3, -3, 0],
            }}
            transition={{
              duration: hoveredCharacter === 'crystal' ? 0.6 : 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.25,
              filter: "brightness(1.4) drop-shadow(0 0 20px rgba(173,216,230,0.8))",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <linearGradient id="crystalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e0ffff" />
                  <stop offset="50%" stopColor="#b0e0e6" />
                  <stop offset="100%" stopColor="#87ceeb" />
                </linearGradient>
                <radialGradient id="crystal3D" cx="40%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="40%" stopColor="#e0ffff" />
                  <stop offset="100%" stopColor="#87ceeb" />
                </radialGradient>
                <filter id="crystalGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <mask id="crystalFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (crystalFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Crystal Main Body - Hexagonal */}
              <path
                d="M64 20 L85 40 L85 75 L64 95 L43 75 L43 40 Z"
                fill="url(#crystal3D)"
                mask="url(#crystalFillMask)"
                filter="url(#crystalGlow)"
                stroke="#87ceeb"
                strokeWidth="2"
              />
              
              {/* Crystal Facets */}
              <path d="M64 20 L64 95" stroke="#ffffff" strokeWidth="1.5" mask="url(#crystalFillMask)" opacity="0.4" />
              <path d="M43 40 L85 75" stroke="#ffffff" strokeWidth="1.5" mask="url(#crystalFillMask)" opacity="0.3" />
              <path d="M85 40 L43 75" stroke="#ffffff" strokeWidth="1.5" mask="url(#crystalFillMask)" opacity="0.3" />
              <path d="M43 40 L64 57.5 L85 40" stroke="#b0e0e6" strokeWidth="1" mask="url(#crystalFillMask)" opacity="0.5" />
              <path d="M43 75 L64 57.5 L85 75" stroke="#b0e0e6" strokeWidth="1" mask="url(#crystalFillMask)" opacity="0.5" />
              
              {/* Inner Glow */}
              <ellipse cx="64" cy="57" rx="15" ry="20" fill="#ffffff" mask="url(#crystalFillMask)" opacity="0.5" />
              
              {/* Crystal Eyes */}
              <circle cx="58" cy="55" r="3" fill="#4682b4" />
              <circle cx="70" cy="55" r="3" fill="#4682b4" />
              <circle cx="59" cy="54" r="1" fill="#fff" />
              <circle cx="71" cy="54" r="1" fill="#fff" />
              
              {/* Crystal Smile */}
              <path d="M58 66 Q64 70, 70 66" fill="none" stroke="#87ceeb" strokeWidth="2" mask="url(#crystalFillMask)" />
              
              {/* Sparkle Points */}
              <circle cx="50" cy="35" r="2" fill="#ffffff" mask="url(#crystalFillMask)" opacity="0.9" />
              <circle cx="78" cy="35" r="2" fill="#ffffff" mask="url(#crystalFillMask)" opacity="0.9" />
              <circle cx="38" cy="57" r="1.5" fill="#e0ffff" mask="url(#crystalFillMask)" opacity="0.8" />
              <circle cx="90" cy="57" r="1.5" fill="#e0ffff" mask="url(#crystalFillMask)" opacity="0.8" />
              <circle cx="64" cy="100" r="2.5" fill="#b0e0e6" mask="url(#crystalFillMask)" opacity="0.7" />
              
              {/* Light Refraction */}
              <path d="M64 20 L60 10" stroke="#e0ffff" strokeWidth="2" mask="url(#crystalFillMask)" opacity="0.6" />
              <path d="M64 20 L68 10" stroke="#87ceeb" strokeWidth="2" mask="url(#crystalFillMask)" opacity="0.6" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            💎 Crystal
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-cyan-600">
            {Math.round(crystalFill)}%
          </div>
        </div>

        {/* Leaf Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="leaf"
          onClick={() => handleCharacterClick('leaf')}
          onMouseEnter={() => handleCharacterHover('leaf')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'leaf' ? [1, 1.1, 1] : [1, 1.05, 1],
              rotate: hoveredCharacter === 'leaf' ? [0, 5, -5, 0] : [0, 2, -2, 0],
              y: clickedCharacter === 'leaf' ? [0, -8, 0] : 0,
            }}
            transition={{
              duration: hoveredCharacter === 'leaf' ? 0.7 : 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.15,
              filter: "brightness(1.2)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <linearGradient id="leafGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#98fb98" />
                  <stop offset="50%" stopColor="#32cd32" />
                  <stop offset="100%" stopColor="#228b22" />
                </linearGradient>
                <radialGradient id="leaf3D" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#adff2f" />
                  <stop offset="50%" stopColor="#32cd32" />
                  <stop offset="100%" stopColor="#228b22" />
                </radialGradient>
                <filter id="leafShadow">
                  <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.2"/>
                </filter>
                <mask id="leafFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (leafFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Leaf Body */}
              <path
                d="M64 20 Q80 30, 90 50 Q95 70, 85 85 Q75 95, 64 100 Q53 95, 43 85 Q33 70, 38 50 Q48 30, 64 20 Z"
                fill="url(#leaf3D)"
                mask="url(#leafFillMask)"
                filter="url(#leafShadow)"
                stroke="#228b22"
                strokeWidth="2"
              />
              
              {/* Central Vein */}
              <path d="M64 20 Q64 40, 64 100" stroke="#90ee90" strokeWidth="2.5" mask="url(#leafFillMask)" />
              
              {/* Side Veins */}
              <path d="M64 35 Q55 45, 48 50" stroke="#90ee90" strokeWidth="1.5" mask="url(#leafFillMask)" opacity="0.7" />
              <path d="M64 35 Q73 45, 80 50" stroke="#90ee90" strokeWidth="1.5" mask="url(#leafFillMask)" opacity="0.7" />
              <path d="M64 50 Q55 58, 48 65" stroke="#90ee90" strokeWidth="1.5" mask="url(#leafFillMask)" opacity="0.7" />
              <path d="M64 50 Q73 58, 80 65" stroke="#90ee90" strokeWidth="1.5" mask="url(#leafFillMask)" opacity="0.7" />
              <path d="M64 65 Q55 72, 50 78" stroke="#90ee90" strokeWidth="1.5" mask="url(#leafFillMask)" opacity="0.7" />
              <path d="M64 65 Q73 72, 78 78" stroke="#90ee90" strokeWidth="1.5" mask="url(#leafFillMask)" opacity="0.7" />
              <path d="M64 80 Q58 88, 55 92" stroke="#90ee90" strokeWidth="1.5" mask="url(#leafFillMask)" opacity="0.7" />
              <path d="M64 80 Q70 88, 73 92" stroke="#90ee90" strokeWidth="1.5" mask="url(#leafFillMask)" opacity="0.7" />
              
              {/* Leaf Eyes */}
              <circle cx="58" cy="55" r="4" fill="#1a5c1a" />
              <circle cx="70" cy="55" r="4" fill="#1a5c1a" />
              <circle cx="59" cy="54" r="1.5" fill="#fff" />
              <circle cx="71" cy="54" r="1.5" fill="#fff" />
              
              {/* Leaf Smile */}
              <path d="M56 68 Q64 74, 72 68" fill="none" stroke="#228b22" strokeWidth="2" mask="url(#leafFillMask)" />
              
              {/* Dew Drops */}
              <circle cx="75" cy="40" r="2.5" fill="rgba(255,255,255,0.6)" mask="url(#leafFillMask)" stroke="#e0ffff" strokeWidth="1" />
              <circle cx="52" cy="45" r="2" fill="rgba(255,255,255,0.5)" mask="url(#leafFillMask)" stroke="#e0ffff" strokeWidth="1" />
              <circle cx="78" cy="75" r="1.8" fill="rgba(255,255,255,0.5)" mask="url(#leafFillMask)" stroke="#e0ffff" strokeWidth="1" />
              
              {/* Shine Spots */}
              <ellipse cx="55" cy="38" rx="6" ry="8" fill="rgba(255,255,255,0.25)" mask="url(#leafFillMask)" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            🍃 Leaf
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-green-600">
            {Math.round(leafFill)}%
          </div>
        </div>

        {/* Cloud Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="cloud"
          onClick={() => handleCharacterClick('cloud')}
          onMouseEnter={() => handleCharacterHover('cloud')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'cloud' ? [1, 1.12, 1] : [1, 1.06, 1],
              x: hoveredCharacter === 'cloud' ? [0, 3, -3, 0] : [0, 2, -2, 0],
              y: clickedCharacter === 'cloud' ? [0, -6, 0] : 0,
            }}
            transition={{
              duration: hoveredCharacter === 'cloud' ? 1.2 : 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.15,
              filter: "brightness(1.2)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <radialGradient id="cloud3D" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#f0f8ff" />
                  <stop offset="100%" stopColor="#e0e0e0" />
                </radialGradient>
                <filter id="cloudShadow">
                  <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.15"/>
                </filter>
                <mask id="cloudFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (cloudFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Cloud Puffs - Main Body */}
              <circle cx="50" cy="65" r="22" fill="url(#cloud3D)" mask="url(#cloudFillMask)" filter="url(#cloudShadow)" />
              <circle cx="78" cy="65" r="22" fill="url(#cloud3D)" mask="url(#cloudFillMask)" filter="url(#cloudShadow)" />
              <circle cx="64" cy="50" r="25" fill="url(#cloud3D)" mask="url(#cloudFillMask)" filter="url(#cloudShadow)" />
              <circle cx="38" cy="75" r="18" fill="url(#cloud3D)" mask="url(#cloudFillMask)" filter="url(#cloudShadow)" />
              <circle cx="90" cy="75" r="18" fill="url(#cloud3D)" mask="url(#cloudFillMask)" filter="url(#cloudShadow)" />
              
              {/* Cloud Outlines */}
              <circle cx="50" cy="65" r="22" fill="none" stroke="#d3d3d3" strokeWidth="1.5" />
              <circle cx="78" cy="65" r="22" fill="none" stroke="#d3d3d3" strokeWidth="1.5" />
              <circle cx="64" cy="50" r="25" fill="none" stroke="#d3d3d3" strokeWidth="1.5" />
              <circle cx="38" cy="75" r="18" fill="none" stroke="#d3d3d3" strokeWidth="1.5" />
              <circle cx="90" cy="75" r="18" fill="none" stroke="#d3d3d3" strokeWidth="1.5" />
              
              {/* Cloud Eyes */}
              <circle cx="58" cy="58" r="4" fill="#87ceeb" />
              <circle cx="70" cy="58" r="4" fill="#87ceeb" />
              <circle cx="59" cy="57" r="1.5" fill="#fff" />
              <circle cx="71" cy="57" r="1.5" fill="#fff" />
              
              {/* Cloud Smile */}
              <path d="M56 70 Q64 76, 72 70" fill="none" stroke="#b0c4de" strokeWidth="2.5" mask="url(#cloudFillMask)" />
              
              {/* Fluffy Details */}
              <ellipse cx="48" cy="45" rx="8" ry="10" fill="rgba(255,255,255,0.6)" mask="url(#cloudFillMask)" />
              <ellipse cx="75" cy="42" rx="7" ry="9" fill="rgba(255,255,255,0.5)" mask="url(#cloudFillMask)" />
              
              {/* Wind Lines */}
              <path d="M100 55 L115 55" stroke="#d3d3d3" strokeWidth="2" opacity="0.5" mask="url(#cloudFillMask)" />
              <path d="M102 65 L120 65" stroke="#d3d3d3" strokeWidth="2" opacity="0.4" mask="url(#cloudFillMask)" />
              <path d="M98 75 L112 75" stroke="#d3d3d3" strokeWidth="2" opacity="0.3" mask="url(#cloudFillMask)" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            ☁️ Cloud
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-500">
            {Math.round(cloudFill)}%
          </div>
        </div>

        {/* Bolt Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="bolt"
          onClick={() => handleCharacterClick('bolt')}
          onMouseEnter={() => handleCharacterHover('bolt')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'bolt' ? [1, 1.25, 1] : [1, 1.12, 1],
              rotate: clickedCharacter === 'bolt' ? [0, 20, -20, 0] : 0,
            }}
            transition={{
              duration: hoveredCharacter === 'bolt' ? 0.15 : 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.3,
              filter: "brightness(1.5) drop-shadow(0 0 20px rgba(255,255,0,0.9))",
              transition: { duration: 0.1 }
            }}
            whileTap={{ 
              scale: 0.9,
              transition: { duration: 0.05 }
            }}
            className={`${hoveredCharacter === 'bolt' ? 'drop-shadow-2xl' : ''}`}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <linearGradient id="boltGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffff00" />
                  <stop offset="50%" stopColor="#ffd700" />
                  <stop offset="100%" stopColor="#ff8c00" />
                </linearGradient>
                <radialGradient id="bolt3D" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="40%" stopColor="#ffff00" />
                  <stop offset="100%" stopColor="#ff8c00" />
                </radialGradient>
                <filter id="boltGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <mask id="boltFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (boltFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Bolt Main Shape */}
              <path
                d="M70 10 L45 60 L60 60 L50 110 L95 50 L75 50 L85 10 Z"
                fill="url(#bolt3D)"
                mask="url(#boltFillMask)"
                filter="url(#boltGlow)"
                stroke="#ffd700"
                strokeWidth="3"
              />
              
              {/* Inner Lightning Core */}
              <path
                d="M70 20 L52 60 L62 60 L58 90 L85 50 L73 50 L78 20 Z"
                fill="#ffffff"
                mask="url(#boltFillMask)"
                opacity="0.7"
              />
              
              {/* Bolt Eyes */}
              <circle cx="62" cy="45" r="3" fill="#333" />
              <circle cx="73" cy="45" r="3" fill="#333" />
              <circle cx="63" cy="44" r="1" fill="#fff" />
              <circle cx="74" cy="44" r="1" fill="#fff" />
              
              {/* Bolt Smile */}
              <path d="M60 55 Q67.5 60, 75 55" fill="none" stroke="#ff8c00" strokeWidth="2" mask="url(#boltFillMask)" />
              
              {/* Electric Sparks */}
              <circle cx="40" cy="55" r="2.5" fill="#ffff00" mask="url(#boltFillMask)" opacity="0.8" />
              <circle cx="95" cy="45" r="2" fill="#ffd700" mask="url(#boltFillMask)" opacity="0.8" />
              <circle cx="48" cy="105" r="2.2" fill="#ff8c00" mask="url(#boltFillMask)" opacity="0.7" />
              
              {/* Energy Lines */}
              <line x1="35" y1="50" x2="25" y2="45" stroke="#ffff00" strokeWidth="2" mask="url(#boltFillMask)" opacity="0.6" />
              <line x1="100" y1="48" x2="110" y2="43" stroke="#ffd700" strokeWidth="2" mask="url(#boltFillMask)" opacity="0.6" />
              <line x1="45" y1="100" x2="35" y2="105" stroke="#ff8c00" strokeWidth="2" mask="url(#boltFillMask)" opacity="0.5" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            ⚡ Bolt
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-yellow-500">
            {Math.round(boltFill)}%
          </div>
        </div>

        {/* Raindrop Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="raindrop"
          onClick={() => handleCharacterClick('raindrop')}
          onMouseEnter={() => handleCharacterHover('raindrop')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'raindrop' ? [1, 1.1, 1] : [1, 1.05, 1],
              y: clickedCharacter === 'raindrop' ? [0, -10, 0] : [0, -2, 0, 2, 0],
            }}
            transition={{
              duration: hoveredCharacter === 'raindrop' ? 0.6 : 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.15,
              filter: "brightness(1.2)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <linearGradient id="raindropGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#add8e6" />
                  <stop offset="50%" stopColor="#4682b4" />
                  <stop offset="100%" stopColor="#1e90ff" />
                </linearGradient>
                <radialGradient id="raindrop3D" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#e0ffff" />
                  <stop offset="50%" stopColor="#87ceeb" />
                  <stop offset="100%" stopColor="#4682b4" />
                </radialGradient>
                <filter id="raindropShadow">
                  <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.2"/>
                </filter>
                <mask id="raindropFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (raindropFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Raindrop Body - Teardrop Shape */}
              <path
                d="M64 20 Q50 35, 45 55 Q40 75, 45 85 Q50 95, 64 100 Q78 95, 83 85 Q88 75, 83 55 Q78 35, 64 20 Z"
                fill="url(#raindrop3D)"
                mask="url(#raindropFillMask)"
                filter="url(#raindropShadow)"
                stroke="#4682b4"
                strokeWidth="2"
              />
              
              {/* Shine Highlight */}
              <ellipse cx="55" cy="40" rx="10" ry="15" fill="rgba(255,255,255,0.6)" mask="url(#raindropFillMask)" />
              <ellipse cx="52" cy="35" rx="5" ry="8" fill="rgba(255,255,255,0.8)" mask="url(#raindropFillMask)" />
              
              {/* Raindrop Eyes */}
              <circle cx="58" cy="58" r="4" fill="#1e90ff" />
              <circle cx="70" cy="58" r="4" fill="#1e90ff" />
              <circle cx="59" cy="57" r="1.5" fill="#fff" />
              <circle cx="71" cy="57" r="1.5" fill="#fff" />
              
              {/* Raindrop Smile */}
              <path d="M56 70 Q64 76, 72 70" fill="none" stroke="#4682b4" strokeWidth="2" mask="url(#raindropFillMask)" />
              
              {/* Water Ripple Effect */}
              <ellipse cx="64" cy="60" rx="15" ry="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" mask="url(#raindropFillMask)" />
              
              {/* Small Droplets */}
              <circle cx="45" cy="50" r="2" fill="rgba(173,216,230,0.6)" mask="url(#raindropFillMask)" stroke="#87ceeb" strokeWidth="1" />
              <circle cx="83" cy="55" r="1.8" fill="rgba(173,216,230,0.6)" mask="url(#raindropFillMask)" stroke="#87ceeb" strokeWidth="1" />
              
              {/* Inner Reflection */}
              <path d="M70 45 Q75 50, 78 55" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" mask="url(#raindropFillMask)" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            💧 Raindrop
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-blue-500">
            {Math.round(raindropFill)}%
          </div>
        </div>

        {/* Ice Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="ice"
          onClick={() => handleCharacterClick('ice')}
          onMouseEnter={() => handleCharacterHover('ice')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'ice' ? [1, 1.15, 1] : [1, 1.08, 1],
              rotate: hoveredCharacter === 'ice' ? [0, 5, -5, 0] : [0, 2, -2, 0],
            }}
            transition={{
              duration: hoveredCharacter === 'ice' ? 0.8 : 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.2,
              filter: "brightness(1.3) drop-shadow(0 0 15px rgba(173,216,230,0.8))",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <linearGradient id="iceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f0ffff" />
                  <stop offset="50%" stopColor="#b0e0e6" />
                  <stop offset="100%" stopColor="#87ceeb" />
                </linearGradient>
                <radialGradient id="ice3D" cx="40%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#e0ffff" />
                  <stop offset="100%" stopColor="#add8e6" />
                </radialGradient>
                <filter id="iceGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <mask id="iceFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (iceFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Ice Crystal - Snowflake Shape */}
              {/* Center Hexagon */}
              <path
                d="M64 45 L75 51 L75 63 L64 69 L53 63 L53 51 Z"
                fill="url(#ice3D)"
                mask="url(#iceFillMask)"
                filter="url(#iceGlow)"
                stroke="#87ceeb"
                strokeWidth="2"
              />
              
              {/* Snowflake Arms */}
              <line x1="64" y1="20" x2="64" y2="45" stroke="url(#iceGradient)" strokeWidth="3" mask="url(#iceFillMask)" />
              <line x1="64" y1="69" x2="64" y2="100" stroke="url(#iceGradient)" strokeWidth="3" mask="url(#iceFillMask)" />
              <line x1="35" y1="35" x2="53" y2="51" stroke="url(#iceGradient)" strokeWidth="3" mask="url(#iceFillMask)" />
              <line x1="75" y1="63" x2="93" y2="85" stroke="url(#iceGradient)" strokeWidth="3" mask="url(#iceFillMask)" />
              <line x1="93" y1="35" x2="75" y2="51" stroke="url(#iceGradient)" strokeWidth="3" mask="url(#iceFillMask)" />
              <line x1="53" y1="63" x2="35" y2="85" stroke="url(#iceGradient)" strokeWidth="3" mask="url(#iceFillMask)" />
              
              {/* Ice Crystals at Tips */}
              <circle cx="64" cy="20" r="4" fill="#ffffff" mask="url(#iceFillMask)" stroke="#b0e0e6" strokeWidth="1.5" />
              <circle cx="64" cy="100" r="4" fill="#ffffff" mask="url(#iceFillMask)" stroke="#b0e0e6" strokeWidth="1.5" />
              <circle cx="35" cy="35" r="4" fill="#ffffff" mask="url(#iceFillMask)" stroke="#b0e0e6" strokeWidth="1.5" />
              <circle cx="93" cy="85" r="4" fill="#ffffff" mask="url(#iceFillMask)" stroke="#b0e0e6" strokeWidth="1.5" />
              <circle cx="93" cy="35" r="4" fill="#ffffff" mask="url(#iceFillMask)" stroke="#b0e0e6" strokeWidth="1.5" />
              <circle cx="35" cy="85" r="4" fill="#ffffff" mask="url(#iceFillMask)" stroke="#b0e0e6" strokeWidth="1.5" />
              
              {/* Ice Eyes */}
              <circle cx="60" cy="56" r="3" fill="#4682b4" />
              <circle cx="68" cy="56" r="3" fill="#4682b4" />
              <circle cx="61" cy="55" r="1" fill="#fff" />
              <circle cx="69" cy="55" r="1" fill="#fff" />
              
              {/* Ice Smile */}
              <path d="M58 62 Q64 65, 70 62" fill="none" stroke="#87ceeb" strokeWidth="2" mask="url(#iceFillMask)" />
              
              {/* Frost Details */}
              <circle cx="50" cy="45" r="1.5" fill="#ffffff" mask="url(#iceFillMask)" opacity="0.8" />
              <circle cx="78" cy="50" r="1.5" fill="#ffffff" mask="url(#iceFillMask)" opacity="0.8" />
              <circle cx="60" cy="75" r="1.2" fill="#ffffff" mask="url(#iceFillMask)" opacity="0.7" />
              <circle cx="72" cy="70" r="1.3" fill="#ffffff" mask="url(#iceFillMask)" opacity="0.7" />
              
              {/* Inner Sparkles */}
              <path d="M64 30 L65 35 L64 40 L63 35 Z" fill="#ffffff" mask="url(#iceFillMask)" opacity="0.6" />
              <path d="M45 45 L50 46 L45 47 L40 46 Z" fill="#ffffff" mask="url(#iceFillMask)" opacity="0.6" />
              <path d="M83 75 L88 76 L83 77 L78 76 Z" fill="#ffffff" mask="url(#iceFillMask)" opacity="0.6" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            ❄️ Ice
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-cyan-500">
            {Math.round(iceFill)}%
          </div>
        </div>

        {/* Sunbeam Character with Interactive Features */}
        <div 
          className="relative w-32 h-32 cursor-pointer"
          data-character="sunbeam"
          onClick={() => handleCharacterClick('sunbeam')}
          onMouseEnter={() => handleCharacterHover('sunbeam')}
          onMouseLeave={() => handleCharacterHover(null)}
        >
          <motion.div
            animate={{
              scale: hoveredCharacter === 'sunbeam' ? [1, 1.2, 1] : [1, 1.1, 1],
              rotate: hoveredCharacter === 'sunbeam' ? [0, 360] : [0, 180],
            }}
            transition={{
              duration: hoveredCharacter === 'sunbeam' ? 2 : 4,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ 
              scale: 1.25,
              filter: "brightness(1.4) drop-shadow(0 0 25px rgba(255,215,0,0.8))",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              className="w-32 h-32"
            >
              <defs>
                <radialGradient id="sunbeam3D" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#ffd700" />
                  <stop offset="70%" stopColor="#ff8c00" />
                  <stop offset="100%" stopColor="#ff6347" />
                </radialGradient>
                <radialGradient id="sunbeamCore" cx="50%" cy="50%" r="40%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#ffff00" />
                  <stop offset="100%" stopColor="#ffd700" />
                </radialGradient>
                <filter id="sunbeamGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <mask id="sunbeamFillMask">
                  <rect 
                    x="0" 
                    y="0" 
                    width="128" 
                    height="128" 
                    fill="white"
                    transform={`translate(0, ${128 - (sunbeamFill * 1.28)})`}
                  />
                </mask>
              </defs>
              
              {/* Sun Rays - Long */}
              <line x1="64" y1="10" x2="64" y2="30" stroke="#ffd700" strokeWidth="4" mask="url(#sunbeamFillMask)" opacity="0.8" />
              <line x1="64" y1="98" x2="64" y2="118" stroke="#ffd700" strokeWidth="4" mask="url(#sunbeamFillMask)" opacity="0.8" />
              <line x1="10" y1="64" x2="30" y2="64" stroke="#ffd700" strokeWidth="4" mask="url(#sunbeamFillMask)" opacity="0.8" />
              <line x1="98" y1="64" x2="118" y2="64" stroke="#ffd700" strokeWidth="4" mask="url(#sunbeamFillMask)" opacity="0.8" />
              
              {/* Sun Rays - Diagonal */}
              <line x1="25" y1="25" x2="38" y2="38" stroke="#ffd700" strokeWidth="4" mask="url(#sunbeamFillMask)" opacity="0.7" />
              <line x1="103" y1="103" x2="90" y2="90" stroke="#ffd700" strokeWidth="4" mask="url(#sunbeamFillMask)" opacity="0.7" />
              <line x1="103" y1="25" x2="90" y2="38" stroke="#ffd700" strokeWidth="4" mask="url(#sunbeamFillMask)" opacity="0.7" />
              <line x1="25" y1="103" x2="38" y2="90" stroke="#ffd700" strokeWidth="4" mask="url(#sunbeamFillMask)" opacity="0.7" />
              
              {/* Sun Core Body */}
              <circle cx="64" cy="64" r="28" fill="url(#sunbeam3D)" mask="url(#sunbeamFillMask)" filter="url(#sunbeamGlow)" />
              <circle cx="64" cy="64" r="28" fill="none" stroke="#ff8c00" strokeWidth="2" />
              
              {/* Inner Core */}
              <circle cx="64" cy="64" r="18" fill="url(#sunbeamCore)" mask="url(#sunbeamFillMask)" opacity="0.8" />
              
              {/* Sun Eyes */}
              <circle cx="58" cy="60" r="4" fill="#ff8c00" />
              <circle cx="70" cy="60" r="4" fill="#ff8c00" />
              <circle cx="59" cy="59" r="1.5" fill="#fff" />
              <circle cx="71" cy="59" r="1.5" fill="#fff" />
              
              {/* Sun Smile */}
              <path d="M56 70 Q64 76, 72 70" fill="none" stroke="#ff8c00" strokeWidth="2.5" mask="url(#sunbeamFillMask)" />
              
              {/* Sparkles */}
              <circle cx="48" cy="50" r="2" fill="#ffffff" mask="url(#sunbeamFillMask)" opacity="0.9" />
              <circle cx="80" cy="52" r="2" fill="#ffffff" mask="url(#sunbeamFillMask)" opacity="0.9" />
              <circle cx="60" cy="80" r="1.8" fill="#ffffff" mask="url(#sunbeamFillMask)" opacity="0.8" />
              
              {/* Ray Tips - Small Stars */}
              <path d="M64 8 L65 12 L64 16 L63 12 Z" fill="#ffff00" mask="url(#sunbeamFillMask)" opacity="0.8" />
              <path d="M64 112 L65 116 L64 120 L63 116 Z" fill="#ffff00" mask="url(#sunbeamFillMask)" opacity="0.8" />
              <path d="M8 64 L12 65 L16 64 L12 63 Z" fill="#ffff00" mask="url(#sunbeamFillMask)" opacity="0.8" />
              <path d="M112 64 L116 65 L120 64 L116 63 Z" fill="#ffff00" mask="url(#sunbeamFillMask)" opacity="0.8" />
            </svg>
          </motion.div>
          
          {/* Character Name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">
            ☀️ Sunbeam
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-yellow-600">
            {Math.round(sunbeamFill)}%
          </div>
        </div>
          </div>
        </div>

        {/* Beastlings Category */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            🦁 Beastlings
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 py-8">
            
            {/* Tiger */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="tiger" onClick={() => handleCharacterClick('tiger')} onMouseEnter={() => handleCharacterHover('tiger')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'tiger' ? [1, 1.2, 1] : [1, 1.1, 1], rotate: clickedCharacter === 'tiger' ? [0, 10, -10, 0] : 0 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.25, filter: "brightness(1.2) drop-shadow(0 0 15px rgba(255,140,0,0.8))" }} whileTap={{ scale: 0.9 }} className={`${hoveredCharacter === 'tiger' ? 'drop-shadow-2xl' : ''}`}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <linearGradient id="tigerBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffa500" />
                      <stop offset="50%" stopColor="#ff8c00" />
                      <stop offset="100%" stopColor="#ff7700" />
                    </linearGradient>
                    <filter id="tigerGlow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="tigerFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (tigerFill * 1.28)})`} /></mask>
                  </defs>
                  {/* Body */}
                  <ellipse cx="64" cy="85" rx="32" ry="35" fill="url(#tigerBodyGrad)" mask="url(#tigerFillMask)" filter="url(#tigerGlow)" />
                  <ellipse cx="64" cy="85" rx="32" ry="35" fill="none" stroke="#ff6347" strokeWidth="2" />
                  {/* Head */}
                  <ellipse cx="64" cy="45" rx="28" ry="30" fill="url(#tigerBodyGrad)" mask="url(#tigerFillMask)" />
                  <ellipse cx="64" cy="45" rx="28" ry="30" fill="none" stroke="#ff6347" strokeWidth="2" />
                  {/* Ears */}
                  <ellipse cx="42" cy="25" rx="10" ry="14" fill="url(#tigerBodyGrad)" mask="url(#tigerFillMask)" transform="rotate(-15 42 25)" />
                  <ellipse cx="86" cy="25" rx="10" ry="14" fill="url(#tigerBodyGrad)" mask="url(#tigerFillMask)" transform="rotate(15 86 25)" />
                  <ellipse cx="42" cy="27" rx="5" ry="8" fill="#ffb366" mask="url(#tigerFillMask)" transform="rotate(-15 42 27)" />
                  <ellipse cx="86" cy="27" rx="5" ry="8" fill="#ffb366" mask="url(#tigerFillMask)" transform="rotate(15 86 27)" />
                  {/* Tiger Stripes - Black */}
                  <path d="M50 35 L48 40" stroke="#000" strokeWidth="2.5" mask="url(#tigerFillMask)" opacity="0.8" />
                  <path d="M78 35 L80 40" stroke="#000" strokeWidth="2.5" mask="url(#tigerFillMask)" opacity="0.8" />
                  <path d="M45 45 L43 50" stroke="#000" strokeWidth="2" mask="url(#tigerFillMask)" opacity="0.7" />
                  <path d="M83 45 L85 50" stroke="#000" strokeWidth="2" mask="url(#tigerFillMask)" opacity="0.7" />
                  <path d="M50 90 L48 95" stroke="#000" strokeWidth="2.5" mask="url(#tigerFillMask)" opacity="0.8" />
                  <path d="M78 90 L80 95" stroke="#000" strokeWidth="2.5" mask="url(#tigerFillMask)" opacity="0.8" />
                  <path d="M55 85 L53 92" stroke="#000" strokeWidth="2" mask="url(#tigerFillMask)" opacity="0.7" />
                  <path d="M73 85 L75 92" stroke="#000" strokeWidth="2" mask="url(#tigerFillMask)" opacity="0.7" />
                  {/* Snout area */}
                  <ellipse cx="64" cy="55" rx="18" ry="15" fill="#ffcc99" mask="url(#tigerFillMask)" opacity="0.9" />
                  {/* Eyes */}
                  <ellipse cx="54" cy="45" rx="5" ry="7" fill="#fff" mask="url(#tigerFillMask)" />
                  <ellipse cx="74" cy="45" rx="5" ry="7" fill="#fff" mask="url(#tigerFillMask)" />
                  <ellipse cx="54" cy="46" rx="3" ry="5" fill="#000" mask="url(#tigerFillMask)" />
                  <ellipse cx="74" cy="46" rx="3" ry="5" fill="#000" mask="url(#tigerFillMask)" />
                  <circle cx="54.5" cy="44" r="1.5" fill="#fff" mask="url(#tigerFillMask)" opacity="0.9" />
                  <circle cx="74.5" cy="44" r="1.5" fill="#fff" mask="url(#tigerFillMask)" opacity="0.9" />
                  {/* Nose */}
                  <path d="M64 60 L60 64 L64 66 L68 64 Z" fill="#000" mask="url(#tigerFillMask)" />
                  {/* Mouth */}
                  <path d="M64 66 L64 70" stroke="#000" strokeWidth="2" mask="url(#tigerFillMask)" />
                  <path d="M64 70 Q58 72, 54 70" fill="none" stroke="#000" strokeWidth="2" mask="url(#tigerFillMask)" />
                  <path d="M64 70 Q70 72, 74 70" fill="none" stroke="#000" strokeWidth="2" mask="url(#tigerFillMask)" />
                  {/* Whiskers */}
                  <line x1="45" y1="55" x2="30" y2="53" stroke="#333" strokeWidth="1.5" mask="url(#tigerFillMask)" />
                  <line x1="45" y1="60" x2="30" y2="60" stroke="#333" strokeWidth="1.5" mask="url(#tigerFillMask)" />
                  <line x1="83" y1="55" x2="98" y2="53" stroke="#333" strokeWidth="1.5" mask="url(#tigerFillMask)" />
                  <line x1="83" y1="60" x2="98" y2="60" stroke="#333" strokeWidth="1.5" mask="url(#tigerFillMask)" />
                  {/* Legs */}
                  <ellipse cx="50" cy="110" rx="8" ry="14" fill="url(#tigerBodyGrad)" mask="url(#tigerFillMask)" />
                  <ellipse cx="78" cy="110" rx="8" ry="14" fill="url(#tigerBodyGrad)" mask="url(#tigerFillMask)" />
                  {/* Paws */}
                  <ellipse cx="50" cy="118" rx="7" ry="4" fill="#ff8c00" mask="url(#tigerFillMask)" />
                  <ellipse cx="78" cy="118" rx="7" ry="4" fill="#ff8c00" mask="url(#tigerFillMask)" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🐅 Tiger</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-600">{Math.round(tigerFill)}%</div>
            </div>

            {/* Wolf */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="wolf" onClick={() => handleCharacterClick('wolf')} onMouseEnter={() => handleCharacterHover('wolf')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'wolf' ? [1, 1.18, 1] : [1, 1.08, 1] }} transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.25, filter: "brightness(1.3) drop-shadow(0 0 15px rgba(128,128,128,0.8))" }} whileTap={{ scale: 0.9 }} className={`${hoveredCharacter === 'wolf' ? 'drop-shadow-2xl' : ''}`}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <linearGradient id="wolfBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a9a9a9" />
                      <stop offset="50%" stopColor="#808080" />
                      <stop offset="100%" stopColor="#696969" />
                    </linearGradient>
                    <filter id="wolfGlow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="wolfFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (wolfFill * 1.28)})`} /></mask>
                  </defs>
                  {/* Body */}
                  <ellipse cx="64" cy="85" rx="30" ry="36" fill="url(#wolfBodyGrad)" mask="url(#wolfFillMask)" filter="url(#wolfGlow)" />
                  <ellipse cx="64" cy="85" rx="30" ry="36" fill="none" stroke="#696969" strokeWidth="2" />
                  {/* Head - more elongated for wolf snout */}
                  <ellipse cx="64" cy="42" rx="26" ry="28" fill="url(#wolfBodyGrad)" mask="url(#wolfFillMask)" />
                  <ellipse cx="64" cy="42" rx="26" ry="28" fill="none" stroke="#696969" strokeWidth="2" />
                  {/* Pointed Ears */}
                  <path d="M42 18 L38 8 L45 22 Z" fill="url(#wolfBodyGrad)" mask="url(#wolfFillMask)" />
                  <path d="M42 18 L38 8 L45 22 Z" fill="none" stroke="#696969" strokeWidth="1.5" />
                  <path d="M86 18 L90 8 L83 22 Z" fill="url(#wolfBodyGrad)" mask="url(#wolfFillMask)" />
                  <path d="M86 18 L90 8 L83 22 Z" fill="none" stroke="#696969" strokeWidth="1.5" />
                  {/* Inner ears */}
                  <path d="M42 18 L40 12 L43 20 Z" fill="#999" mask="url(#wolfFillMask)" />
                  <path d="M86 18 L88 12 L85 20 Z" fill="#999" mask="url(#wolfFillMask)" />
                  {/* Snout - elongated */}
                  <ellipse cx="64" cy="55" rx="16" ry="18" fill="#d3d3d3" mask="url(#wolfFillMask)" opacity="0.9" />
                  {/* Eyes - wolf-like yellow */}
                  <ellipse cx="54" cy="40" rx="5" ry="7" fill="#ffcc00" mask="url(#wolfFillMask)" />
                  <ellipse cx="74" cy="40" rx="5" ry="7" fill="#ffcc00" mask="url(#wolfFillMask)" />
                  <ellipse cx="54" cy="40" rx="2.5" ry="5" fill="#000" mask="url(#wolfFillMask)" />
                  <ellipse cx="74" cy="40" rx="2.5" ry="5" fill="#000" mask="url(#wolfFillMask)" />
                  <circle cx="54.5" cy="38" r="1" fill="#fff" mask="url(#wolfFillMask)" opacity="0.9" />
                  <circle cx="74.5" cy="38" r="1" fill="#fff" mask="url(#wolfFillMask)" opacity="0.9" />
                  {/* Nose */}
                  <ellipse cx="64" cy="62" rx="4" ry="5" fill="#000" mask="url(#wolfFillMask)" />
                  {/* Mouth */}
                  <path d="M64 67 L64 72" stroke="#000" strokeWidth="2" mask="url(#wolfFillMask)" />
                  <path d="M64 72 Q58 75, 54 73" fill="none" stroke="#000" strokeWidth="2" mask="url(#wolfFillMask)" />
                  <path d="M64 72 Q70 75, 74 73" fill="none" stroke="#000" strokeWidth="2" mask="url(#wolfFillMask)" />
                  {/* Chest fur */}
                  <ellipse cx="64" cy="75" rx="18" ry="22" fill="#d3d3d3" mask="url(#wolfFillMask)" opacity="0.6" />
                  {/* Legs */}
                  <ellipse cx="50" cy="108" rx="7" ry="13" fill="url(#wolfBodyGrad)" mask="url(#wolfFillMask)" />
                  <ellipse cx="78" cy="108" rx="7" ry="13" fill="url(#wolfBodyGrad)" mask="url(#wolfFillMask)" />
                  {/* Paws */}
                  <ellipse cx="50" cy="116" rx="6" ry="4" fill="#696969" mask="url(#wolfFillMask)" />
                  <ellipse cx="78" cy="116" rx="6" ry="4" fill="#696969" mask="url(#wolfFillMask)" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🐺 Wolf</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-600">{Math.round(wolfFill)}%</div>
            </div>

            {/* Eagle */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="eagle" onClick={() => handleCharacterClick('eagle')} onMouseEnter={() => handleCharacterHover('eagle')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'eagle' ? [1, 1.2, 1] : [1, 1.08, 1], y: hoveredCharacter === 'eagle' ? [0, -8, 0] : [0, -3, 0] }} transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.25, filter: "brightness(1.2) drop-shadow(0 0 15px rgba(184,134,11,0.8))" }} whileTap={{ scale: 0.9 }} className={`${hoveredCharacter === 'eagle' ? 'drop-shadow-2xl' : ''}`}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <linearGradient id="eagleBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#daa520" />
                      <stop offset="50%" stopColor="#b8860b" />
                      <stop offset="100%" stopColor="#8b6914" />
                    </linearGradient>
                    <filter id="eagleGlow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="eagleFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (eagleFill * 1.28)})`} /></mask>
                  </defs>
                  {/* Wings - spread out */}
                  <ellipse cx="35" cy="70" rx="22" ry="35" fill="url(#eagleBodyGrad)" mask="url(#eagleFillMask)" transform="rotate(-20 35 70)" filter="url(#eagleGlow)" />
                  <ellipse cx="35" cy="70" rx="22" ry="35" fill="none" stroke="#8b6914" strokeWidth="2" transform="rotate(-20 35 70)" />
                  <ellipse cx="93" cy="70" rx="22" ry="35" fill="url(#eagleBodyGrad)" mask="url(#eagleFillMask)" transform="rotate(20 93 70)" filter="url(#eagleGlow)" />
                  <ellipse cx="93" cy="70" rx="22" ry="35" fill="none" stroke="#8b6914" strokeWidth="2" transform="rotate(20 93 70)" />
                  {/* Wing feathers */}
                  <path d="M20 75 L15 80 L20 85" fill="none" stroke="#8b6914" strokeWidth="2" mask="url(#eagleFillMask)" />
                  <path d="M108 75 L113 80 L108 85" fill="none" stroke="#8b6914" strokeWidth="2" mask="url(#eagleFillMask)" />
                  {/* Body */}
                  <ellipse cx="64" cy="75" rx="24" ry="32" fill="url(#eagleBodyGrad)" mask="url(#eagleFillMask)" filter="url(#eagleGlow)" />
                  <ellipse cx="64" cy="75" rx="24" ry="32" fill="none" stroke="#8b6914" strokeWidth="2" />
                  {/* Head */}
                  <circle cx="64" cy="42" r="20" fill="url(#eagleBodyGrad)" mask="url(#eagleFillMask)" />
                  <circle cx="64" cy="42" r="20" fill="none" stroke="#8b6914" strokeWidth="2" />
                  {/* White head feathers */}
                  <ellipse cx="64" cy="35" rx="18" ry="15" fill="#fff" mask="url(#eagleFillMask)" opacity="0.9" />
                  {/* Eyes - fierce */}
                  <ellipse cx="56" cy="40" rx="4" ry="5" fill="#fff" mask="url(#eagleFillMask)" />
                  <ellipse cx="72" cy="40" rx="4" ry="5" fill="#fff" mask="url(#eagleFillMask)" />
                  <circle cx="56" cy="40" r="3" fill="#000" mask="url(#eagleFillMask)" />
                  <circle cx="72" cy="40" r="3" fill="#000" mask="url(#eagleFillMask)" />
                  <circle cx="56.5" cy="39" r="1" fill="#fff" mask="url(#eagleFillMask)" />
                  <circle cx="72.5" cy="39" r="1" fill="#fff" mask="url(#eagleFillMask)" />
                  {/* Hooked Beak */}
                  <path d="M64 48 L58 54 L62 56 L64 58 L66 56 L70 54 Z" fill="#ffa500" mask="url(#eagleFillMask)" />
                  <path d="M64 48 L58 54 L62 56 L64 58" fill="none" stroke="#ff8c00" strokeWidth="1.5" />
                  {/* Tail feathers */}
                  <path d="M54 100 L50 115 L54 108 Z" fill="url(#eagleBodyGrad)" mask="url(#eagleFillMask)" />
                  <path d="M64 102 L64 118 L64 110 Z" fill="url(#eagleBodyGrad)" mask="url(#eagleFillMask)" />
                  <path d="M74 100 L78 115 L74 108 Z" fill="url(#eagleBodyGrad)" mask="url(#eagleFillMask)" />
                  {/* Talons */}
                  <path d="M56 100 L54 110 L52 108" fill="none" stroke="#333" strokeWidth="2" mask="url(#eagleFillMask)" />
                  <path d="M72 100 L74 110 L76 108" fill="none" stroke="#333" strokeWidth="2" mask="url(#eagleFillMask)" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🦅 Eagle</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-yellow-700">{Math.round(eagleFill)}%</div>
            </div>

            {/* Panther */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="panther" onClick={() => handleCharacterClick('panther')} onMouseEnter={() => handleCharacterHover('panther')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'panther' ? [1, 1.18, 1] : [1, 1.08, 1] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.25, filter: "brightness(1.4) drop-shadow(0 0 20px rgba(100,100,100,0.9))" }} whileTap={{ scale: 0.9 }} className={`${hoveredCharacter === 'panther' ? 'drop-shadow-2xl' : ''}`}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <linearGradient id="pantherBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4a4a4a" />
                      <stop offset="50%" stopColor="#2f2f2f" />
                      <stop offset="100%" stopColor="#1a1a1a" />
                    </linearGradient>
                    <filter id="pantherGlow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="pantherFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (pantherFill * 1.28)})`} /></mask>
                  </defs>
                  {/* Sleek body */}
                  <ellipse cx="64" cy="82" rx="30" ry="36" fill="url(#pantherBodyGrad)" mask="url(#pantherFillMask)" filter="url(#pantherGlow)" />
                  <ellipse cx="64" cy="82" rx="30" ry="36" fill="none" stroke="#555" strokeWidth="2" />
                  {/* Head - cat-like */}
                  <ellipse cx="64" cy="42" rx="24" ry="26" fill="url(#pantherBodyGrad)" mask="url(#pantherFillMask)" />
                  <ellipse cx="64" cy="42" rx="24" ry="26" fill="none" stroke="#555" strokeWidth="2" />
                  {/* Pointed cat ears */}
                  <path d="M46 20 L42 10 L48 24 Z" fill="url(#pantherBodyGrad)" mask="url(#pantherFillMask)" />
                  <path d="M46 20 L42 10 L48 24 Z" fill="none" stroke="#555" strokeWidth="1.5" />
                  <path d="M82 20 L86 10 L80 24 Z" fill="url(#pantherBodyGrad)" mask="url(#pantherFillMask)" />
                  <path d="M82 20 L86 10 L80 24 Z" fill="none" stroke="#555" strokeWidth="1.5" />
                  {/* Inner ears */}
                  <path d="M46 20 L44 14 L47 22 Z" fill="#333" mask="url(#pantherFillMask)" />
                  <path d="M82 20 L84 14 L81 22 Z" fill="#333" mask="url(#pantherFillMask)" />
                  {/* Sleek snout */}
                  <ellipse cx="64" cy="52" rx="16" ry="14" fill="#2a2a2a" mask="url(#pantherFillMask)" opacity="0.8" />
                  {/* Cat-like green glowing eyes */}
                  <ellipse cx="54" cy="42" rx="6" ry="9" fill="#32cd32" mask="url(#pantherFillMask)" />
                  <ellipse cx="74" cy="42" rx="6" ry="9" fill="#32cd32" mask="url(#pantherFillMask)" />
                  <ellipse cx="54" cy="42" rx="2.5" ry="7" fill="#000" mask="url(#pantherFillMask)" />
                  <ellipse cx="74" cy="42" rx="2.5" ry="7" fill="#000" mask="url(#pantherFillMask)" />
                  <circle cx="54.5" cy="40" r="1.5" fill="#fff" mask="url(#pantherFillMask)" opacity="0.9" />
                  <circle cx="74.5" cy="40" r="1.5" fill="#fff" mask="url(#pantherFillMask)" opacity="0.9" />
                  {/* Small pink nose */}
                  <ellipse cx="64" cy="56" rx="3" ry="4" fill="#ff69b4" mask="url(#pantherFillMask)" opacity="0.8" />
                  {/* Mouth */}
                  <path d="M64 60 L64 64" stroke="#111" strokeWidth="2" mask="url(#pantherFillMask)" />
                  <path d="M64 64 Q58 66, 54 64" fill="none" stroke="#111" strokeWidth="2" mask="url(#pantherFillMask)" />
                  <path d="M64 64 Q70 66, 74 64" fill="none" stroke="#111" strokeWidth="2" mask="url(#pantherFillMask)" />
                  {/* Whiskers */}
                  <line x1="45" y1="52" x2="28" y2="50" stroke="#999" strokeWidth="1.5" mask="url(#pantherFillMask)" opacity="0.7" />
                  <line x1="45" y1="56" x2="28" y2="56" stroke="#999" strokeWidth="1.5" mask="url(#pantherFillMask)" opacity="0.7" />
                  <line x1="83" y1="52" x2="100" y2="50" stroke="#999" strokeWidth="1.5" mask="url(#pantherFillMask)" opacity="0.7" />
                  <line x1="83" y1="56" x2="100" y2="56" stroke="#999" strokeWidth="1.5" mask="url(#pantherFillMask)" opacity="0.7" />
                  {/* Legs - sleek */}
                  <ellipse cx="50" cy="106" rx="7" ry="12" fill="url(#pantherBodyGrad)" mask="url(#pantherFillMask)" />
                  <ellipse cx="78" cy="106" rx="7" ry="12" fill="url(#pantherBodyGrad)" mask="url(#pantherFillMask)" />
                  {/* Paws */}
                  <ellipse cx="50" cy="114" rx="6" ry="4" fill="#1a1a1a" mask="url(#pantherFillMask)" />
                  <ellipse cx="78" cy="114" rx="6" ry="4" fill="#1a1a1a" mask="url(#pantherFillMask)" />
                  {/* Long tail */}
                  <path d="M88 90 Q100 100, 105 110 Q102 115, 95 108" fill="url(#pantherBodyGrad)" mask="url(#pantherFillMask)" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🐆 Panther</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-900">{Math.round(pantherFill)}%</div>
            </div>

            {/* Dragon */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="dragon" onClick={() => handleCharacterClick('dragon')} onMouseEnter={() => handleCharacterHover('dragon')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'dragon' ? [1, 1.25, 1] : [1, 1.12, 1], rotate: hoveredCharacter === 'dragon' ? [0, 8, -8, 0] : [0, 2, -2, 0] }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.3, filter: "brightness(1.3) drop-shadow(0 0 25px rgba(255,69,0,0.9))" }} whileTap={{ scale: 0.85 }} className={`${hoveredCharacter === 'dragon' ? 'drop-shadow-2xl' : ''}`}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <linearGradient id="dragonBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff4500" />
                      <stop offset="50%" stopColor="#ff6347" />
                      <stop offset="100%" stopColor="#ffd700" />
                    </linearGradient>
                    <filter id="dragonGlow"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="dragonFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (dragonFill * 1.28)})`} /></mask>
                  </defs>
                  {/* Dragon Wings */}
                  <path d="M35 65 Q20 55, 15 70 Q12 85, 25 80 L35 75 Z" fill="url(#dragonBodyGrad)" mask="url(#dragonFillMask)" opacity="0.9" filter="url(#dragonGlow)" />
                  <path d="M35 65 Q20 55, 15 70 Q12 85, 25 80 L35 75 Z" fill="none" stroke="#ff4500" strokeWidth="2" />
                  <path d="M93 65 Q108 55, 113 70 Q116 85, 103 80 L93 75 Z" fill="url(#dragonBodyGrad)" mask="url(#dragonFillMask)" opacity="0.9" filter="url(#dragonGlow)" />
                  <path d="M93 65 Q108 55, 113 70 Q116 85, 103 80 L93 75 Z" fill="none" stroke="#ff4500" strokeWidth="2" />
                  {/* Body */}
                  <ellipse cx="64" cy="75" rx="32" ry="38" fill="url(#dragonBodyGrad)" mask="url(#dragonFillMask)" filter="url(#dragonGlow)" />
                  <ellipse cx="64" cy="75" rx="32" ry="38" fill="none" stroke="#ff4500" strokeWidth="3" />
                  {/* Neck */}
                  <ellipse cx="64" cy="55" rx="22" ry="25" fill="url(#dragonBodyGrad)" mask="url(#dragonFillMask)" />
                  {/* Head */}
                  <ellipse cx="64" cy="38" rx="24" ry="26" fill="url(#dragonBodyGrad)" mask="url(#dragonFillMask)" />
                  <ellipse cx="64" cy="38" rx="24" ry="26" fill="none" stroke="#ff4500" strokeWidth="2" />
                  {/* Horns */}
                  <path d="M48 22 L42 10 L46 26 Z" fill="#ffd700" mask="url(#dragonFillMask)" />
                  <path d="M48 22 L42 10 L46 26 Z" fill="none" stroke="#ff8c00" strokeWidth="1.5" />
                  <path d="M80 22 L86 10 L82 26 Z" fill="#ffd700" mask="url(#dragonFillMask)" />
                  <path d="M80 22 L86 10 L82 26 Z" fill="none" stroke="#ff8c00" strokeWidth="1.5" />
                  {/* Back spikes */}
                  <path d="M64 50 L60 40 L64 50 L68 40 L64 50" fill="#ffd700" mask="url(#dragonFillMask)" opacity="0.9" />
                  <path d="M64 65 L60 55 L64 65 L68 55 L64 65" fill="#ffd700" mask="url(#dragonFillMask)" opacity="0.9" />
                  <path d="M64 80 L60 70 L64 80 L68 70 L64 80" fill="#ffd700" mask="url(#dragonFillMask)" opacity="0.9" />
                  {/* Dragon scales */}
                  <circle cx="55" cy="70" r="3" fill="#ff8c00" mask="url(#dragonFillMask)" opacity="0.7" />
                  <circle cx="73" cy="72" r="3" fill="#ff8c00" mask="url(#dragonFillMask)" opacity="0.7" />
                  <circle cx="64" cy="85" r="3" fill="#ff8c00" mask="url(#dragonFillMask)" opacity="0.7" />
                  {/* Fierce eyes */}
                  <ellipse cx="54" cy="36" rx="6" ry="8" fill="#ffff00" mask="url(#dragonFillMask)" />
                  <ellipse cx="74" cy="36" rx="6" ry="8" fill="#ffff00" mask="url(#dragonFillMask)" />
                  <ellipse cx="54" cy="36" rx="2.5" ry="6" fill="#ff0000" mask="url(#dragonFillMask)" />
                  <ellipse cx="74" cy="36" rx="2.5" ry="6" fill="#ff0000" mask="url(#dragonFillMask)" />
                  <circle cx="54.5" cy="34" r="1.5" fill="#fff" mask="url(#dragonFillMask)" opacity="0.9" />
                  <circle cx="74.5" cy="34" r="1.5" fill="#fff" mask="url(#dragonFillMask)" opacity="0.9" />
                  {/* Snout with nostrils */}
                  <ellipse cx="64" cy="48" rx="14" ry="12" fill="#ff6347" mask="url(#dragonFillMask)" opacity="0.9" />
                  <ellipse cx="60" cy="50" rx="2" ry="3" fill="#000" mask="url(#dragonFillMask)" />
                  <ellipse cx="68" cy="50" rx="2" ry="3" fill="#000" mask="url(#dragonFillMask)" />
                  {/* Mouth with fire */}
                  <path d="M64 54 Q58 58, 54 56" fill="none" stroke="#ff0000" strokeWidth="2" mask="url(#dragonFillMask)" />
                  <path d="M64 54 Q70 58, 74 56" fill="none" stroke="#ff0000" strokeWidth="2" mask="url(#dragonFillMask)" />
                  {/* Long tail with spikes */}
                  <path d="M88 90 Q100 100, 108 110 Q110 115, 105 118" fill="url(#dragonBodyGrad)" mask="url(#dragonFillMask)" />
                  <path d="M100 100 L98 95 L100 100 L102 95" fill="#ffd700" mask="url(#dragonFillMask)" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🐉 Dragon</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-red-600">{Math.round(dragonFill)}%</div>
            </div>

            {/* Goat */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="goat" onClick={() => handleCharacterClick('goat')} onMouseEnter={() => handleCharacterHover('goat')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'goat' ? [1, 1.12, 1] : [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.2, filter: "brightness(1.2)" }} whileTap={{ scale: 0.9 }}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <radialGradient id="goatBodyGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f5deb3" />
                      <stop offset="50%" stopColor="#daa520" />
                      <stop offset="100%" stopColor="#cd853f" />
                    </radialGradient>
                    <linearGradient id="goatHornGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b7355" />
                      <stop offset="100%" stopColor="#654321" />
                    </linearGradient>
                    <filter id="goatGlow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="goatFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (goatFill * 1.28)})`} /></mask>
                  </defs>
                  {/* Body */}
                  <ellipse cx="64" cy="78" rx="28" ry="36" fill="url(#goatBodyGrad)" mask="url(#goatFillMask)" filter="url(#goatGlow)" />
                  <ellipse cx="64" cy="78" rx="28" ry="36" fill="none" stroke="#cd853f" strokeWidth="2" />
                  {/* Neck */}
                  <ellipse cx="64" cy="52" rx="18" ry="22" fill="url(#goatBodyGrad)" mask="url(#goatFillMask)" />
                  {/* Head */}
                  <ellipse cx="64" cy="38" rx="22" ry="20" fill="url(#goatBodyGrad)" mask="url(#goatFillMask)" />
                  <ellipse cx="64" cy="38" rx="22" ry="20" fill="none" stroke="#cd853f" strokeWidth="2" />
                  {/* Ears */}
                  <ellipse cx="48" cy="32" rx="6" ry="12" fill="url(#goatBodyGrad)" mask="url(#goatFillMask)" transform="rotate(-25 48 32)" />
                  <ellipse cx="48" cy="32" rx="3" ry="8" fill="#daa520" mask="url(#goatFillMask)" transform="rotate(-25 48 32)" opacity="0.7" />
                  <ellipse cx="80" cy="32" rx="6" ry="12" fill="url(#goatBodyGrad)" mask="url(#goatFillMask)" transform="rotate(25 80 32)" />
                  <ellipse cx="80" cy="32" rx="3" ry="8" fill="#daa520" mask="url(#goatFillMask)" transform="rotate(25 80 32)" opacity="0.7" />
                  {/* Curved horns */}
                  <path d="M48 26 Q42 18, 38 12 Q36 8, 38 10 Q40 14, 44 20 Q46 24, 48 28" fill="url(#goatHornGrad)" mask="url(#goatFillMask)" />
                  <path d="M48 26 Q42 18, 38 12" fill="none" stroke="#654321" strokeWidth="2" />
                  <path d="M80 26 Q86 18, 90 12 Q92 8, 90 10 Q88 14, 84 20 Q82 24, 80 28" fill="url(#goatHornGrad)" mask="url(#goatFillMask)" />
                  <path d="M80 26 Q86 18, 90 12" fill="none" stroke="#654321" strokeWidth="2" />
                  {/* Horn ridges */}
                  <line x1="40" y1="16" x2="42" y2="18" stroke="#000" strokeWidth="1" opacity="0.3" />
                  <line x1="42" y1="20" x2="44" y2="22" stroke="#000" strokeWidth="1" opacity="0.3" />
                  <line x1="88" y1="16" x2="86" y2="18" stroke="#000" strokeWidth="1" opacity="0.3" />
                  <line x1="86" y1="20" x2="84" y2="22" stroke="#000" strokeWidth="1" opacity="0.3" />
                  {/* Goat eyes with horizontal pupils */}
                  <ellipse cx="56" cy="38" rx="6" ry="7" fill="#ffffe0" mask="url(#goatFillMask)" />
                  <ellipse cx="72" cy="38" rx="6" ry="7" fill="#ffffe0" mask="url(#goatFillMask)" />
                  <rect x="54" y="37" width="4" height="2" rx="0.5" fill="#000" mask="url(#goatFillMask)" />
                  <rect x="70" y="37" width="4" height="2" rx="0.5" fill="#000" mask="url(#goatFillMask)" />
                  <circle cx="55" cy="37" r="1" fill="#fff" mask="url(#goatFillMask)" opacity="0.9" />
                  <circle cx="71" cy="37" r="1" fill="#fff" mask="url(#goatFillMask)" opacity="0.9" />
                  {/* Snout */}
                  <ellipse cx="64" cy="48" rx="10" ry="9" fill="#daa520" mask="url(#goatFillMask)" opacity="0.9" />
                  <ellipse cx="61" cy="50" rx="2" ry="2.5" fill="#000" mask="url(#goatFillMask)" />
                  <ellipse cx="67" cy="50" rx="2" ry="2.5" fill="#000" mask="url(#goatFillMask)" />
                  <path d="M64 52 L64 55" stroke="#8b7355" strokeWidth="2" mask="url(#goatFillMask)" />
                  <path d="M64 55 Q60 57, 58 56" fill="none" stroke="#8b7355" strokeWidth="2" mask="url(#goatFillMask)" />
                  <path d="M64 55 Q68 57, 70 56" fill="none" stroke="#8b7355" strokeWidth="2" mask="url(#goatFillMask)" />
                  {/* Goat beard */}
                  <path d="M64 56 L62 64 L60 68 M64 56 L64 70 M64 56 L66 64 L68 68" stroke="#8b7355" strokeWidth="2" mask="url(#goatFillMask)" opacity="0.8" />
                  {/* Fur texture */}
                  <circle cx="52" cy="75" r="2" fill="#cd853f" mask="url(#goatFillMask)" opacity="0.5" />
                  <circle cx="76" cy="78" r="2" fill="#cd853f" mask="url(#goatFillMask)" opacity="0.5" />
                  <circle cx="64" cy="88" r="2" fill="#cd853f" mask="url(#goatFillMask)" opacity="0.5" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🐐 Goat</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-yellow-700">{Math.round(goatFill)}%</div>
            </div>

            {/* Fox */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="fox" onClick={() => handleCharacterClick('fox')} onMouseEnter={() => handleCharacterHover('fox')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'fox' ? [1, 1.18, 1] : [1, 1.08, 1] }} transition={{ duration: 1.3, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.25, filter: "brightness(1.2) drop-shadow(0 0 15px rgba(255,140,0,0.8))" }} whileTap={{ scale: 0.9 }} className={`${hoveredCharacter === 'fox' ? 'drop-shadow-2xl' : ''}`}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <radialGradient id="foxBodyGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ff8c00" />
                      <stop offset="50%" stopColor="#ff7f50" />
                      <stop offset="100%" stopColor="#ff6347" />
                    </radialGradient>
                    <linearGradient id="foxTailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff8c00" />
                      <stop offset="70%" stopColor="#ff6347" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                    <filter id="foxGlow"><feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="foxFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (foxFill * 1.28)})`} /></mask>
                  </defs>
                  {/* Bushy tail */}
                  <ellipse cx="90" cy="88" rx="20" ry="28" fill="url(#foxTailGrad)" mask="url(#foxFillMask)" filter="url(#foxGlow)" transform="rotate(35 90 88)" />
                  <ellipse cx="88" cy="92" rx="12" ry="16" fill="#fff" mask="url(#foxFillMask)" opacity="0.8" transform="rotate(35 88 92)" />
                  {/* Body */}
                  <ellipse cx="62" cy="75" rx="28" ry="34" fill="url(#foxBodyGrad)" mask="url(#foxFillMask)" filter="url(#foxGlow)" />
                  <ellipse cx="62" cy="75" rx="28" ry="34" fill="none" stroke="#ff6347" strokeWidth="2" />
                  {/* White chest */}
                  <ellipse cx="62" cy="78" rx="18" ry="24" fill="#fff" mask="url(#foxFillMask)" opacity="0.85" />
                  {/* Neck */}
                  <ellipse cx="60" cy="52" rx="20" ry="24" fill="url(#foxBodyGrad)" mask="url(#foxFillMask)" />
                  {/* Head */}
                  <ellipse cx="58" cy="38" rx="22" ry="20" fill="url(#foxBodyGrad)" mask="url(#foxFillMask)" />
                  <ellipse cx="58" cy="38" rx="22" ry="20" fill="none" stroke="#ff6347" strokeWidth="2" />
                  {/* Pointy ears */}
                  <path d="M46 28 L42 12 L50 26 Z" fill="url(#foxBodyGrad)" mask="url(#foxFillMask)" />
                  <path d="M46 28 L42 12 L50 26 Z" fill="none" stroke="#ff6347" strokeWidth="2" />
                  <path d="M46 24 L43 16 L48 24 Z" fill="#fff" mask="url(#foxFillMask)" opacity="0.7" />
                  <path d="M70 28 L74 12 L62 26 Z" fill="url(#foxBodyGrad)" mask="url(#foxFillMask)" />
                  <path d="M70 28 L74 12 L62 26 Z" fill="none" stroke="#ff6347" strokeWidth="2" />
                  <path d="M68 24 L71 16 L64 24 Z" fill="#fff" mask="url(#foxFillMask)" opacity="0.7" />
                  {/* White face markings */}
                  <ellipse cx="48" cy="42" rx="8" ry="10" fill="#fff" mask="url(#foxFillMask)" opacity="0.85" />
                  <ellipse cx="68" cy="42" rx="8" ry="10" fill="#fff" mask="url(#foxFillMask)" opacity="0.85" />
                  {/* Clever eyes */}
                  <ellipse cx="50" cy="40" rx="4" ry="6" fill="#333" mask="url(#foxFillMask)" />
                  <ellipse cx="66" cy="40" rx="4" ry="6" fill="#333" mask="url(#foxFillMask)" />
                  <circle cx="51" cy="39" r="1.5" fill="#fff" mask="url(#foxFillMask)" />
                  <circle cx="67" cy="39" r="1.5" fill="#fff" mask="url(#foxFillMask)" />
                  {/* Snout */}
                  <ellipse cx="58" cy="50" rx="12" ry="10" fill="#ff8c00" mask="url(#foxFillMask)" opacity="0.9" />
                  <ellipse cx="58" cy="48" rx="8" ry="6" fill="#fff" mask="url(#foxFillMask)" opacity="0.8" />
                  {/* Black nose */}
                  <ellipse cx="58" cy="52" rx="4" ry="3" fill="#000" mask="url(#foxFillMask)" />
                  <path d="M58 54 L58 58" stroke="#000" strokeWidth="1.5" mask="url(#foxFillMask)" />
                  {/* Smile */}
                  <path d="M58 58 Q54 60, 50 58" fill="none" stroke="#000" strokeWidth="2" mask="url(#foxFillMask)" />
                  <path d="M58 58 Q62 60, 66 58" fill="none" stroke="#000" strokeWidth="2" mask="url(#foxFillMask)" />
                  {/* Whisker dots */}
                  <circle cx="42" cy="48" r="1.5" fill="#000" mask="url(#foxFillMask)" />
                  <circle cx="74" cy="48" r="1.5" fill="#000" mask="url(#foxFillMask)" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🦊 Fox</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-600">{Math.round(foxFill)}%</div>
            </div>

            {/* Owl */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="owl" onClick={() => handleCharacterClick('owl')} onMouseEnter={() => handleCharacterHover('owl')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'owl' ? [1, 1.14, 1] : [1, 1.06, 1], rotate: hoveredCharacter === 'owl' ? [0, 4, -4, 0] : [0, 1, -1, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.22, filter: "brightness(1.2)" }} whileTap={{ scale: 0.9 }}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <radialGradient id="owlBodyGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#a0826d" />
                      <stop offset="50%" stopColor="#8b7355" />
                      <stop offset="100%" stopColor="#696969" />
                    </radialGradient>
                    <radialGradient id="owlChestGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f5deb3" />
                      <stop offset="100%" stopColor="#d2b48c" />
                    </radialGradient>
                    <filter id="owlGlow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="owlFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (owlFill * 1.28)})`} /></mask>
                  </defs>
                  {/* Body - oval shape */}
                  <ellipse cx="64" cy="78" rx="32" ry="40" fill="url(#owlBodyGrad)" mask="url(#owlFillMask)" filter="url(#owlGlow)" />
                  <ellipse cx="64" cy="78" rx="32" ry="40" fill="none" stroke="#696969" strokeWidth="2" />
                  {/* Chest markings */}
                  <ellipse cx="64" cy="82" rx="20" ry="28" fill="url(#owlChestGrad)" mask="url(#owlFillMask)" opacity="0.9" />
                  {/* Feather patterns on chest */}
                  <path d="M56 70 Q56 75, 56 80" stroke="#8b7355" strokeWidth="1" mask="url(#owlFillMask)" opacity="0.6" />
                  <path d="M64 72 Q64 77, 64 82" stroke="#8b7355" strokeWidth="1" mask="url(#owlFillMask)" opacity="0.6" />
                  <path d="M72 70 Q72 75, 72 80" stroke="#8b7355" strokeWidth="1" mask="url(#owlFillMask)" opacity="0.6" />
                  {/* Head - large and round */}
                  <ellipse cx="64" cy="48" rx="36" ry="32" fill="url(#owlBodyGrad)" mask="url(#owlFillMask)" />
                  <ellipse cx="64" cy="48" rx="36" ry="32" fill="none" stroke="#696969" strokeWidth="2" />
                  {/* Ear tufts */}
                  <path d="M36 28 L32 14 L38 26 Z" fill="url(#owlBodyGrad)" mask="url(#owlFillMask)" />
                  <path d="M36 28 L32 14 L38 26 Z" fill="none" stroke="#696969" strokeWidth="1.5" />
                  <path d="M92 28 L96 14 L90 26 Z" fill="url(#owlBodyGrad)" mask="url(#owlFillMask)" />
                  <path d="M92 28 L96 14 L90 26 Z" fill="none" stroke="#696969" strokeWidth="1.5" />
                  {/* Facial disk */}
                  <ellipse cx="46" cy="48" rx="18" ry="20" fill="#8b7355" mask="url(#owlFillMask)" opacity="0.3" />
                  <ellipse cx="82" cy="48" rx="18" ry="20" fill="#8b7355" mask="url(#owlFillMask)" opacity="0.3" />
                  {/* Huge round eyes */}
                  <circle cx="48" cy="48" r="14" fill="#fff" mask="url(#owlFillMask)" />
                  <circle cx="48" cy="48" r="14" fill="none" stroke="#696969" strokeWidth="2" />
                  <circle cx="80" cy="48" r="14" fill="#fff" mask="url(#owlFillMask)" />
                  <circle cx="80" cy="48" r="14" fill="none" stroke="#696969" strokeWidth="2" />
                  {/* Pupils */}
                  <circle cx="48" cy="48" r="10" fill="#000" mask="url(#owlFillMask)" />
                  <circle cx="80" cy="48" r="10" fill="#000" mask="url(#owlFillMask)" />
                  {/* Eye highlights */}
                  <circle cx="50" cy="45" r="4" fill="#fff" mask="url(#owlFillMask)" opacity="0.9" />
                  <circle cx="82" cy="45" r="4" fill="#fff" mask="url(#owlFillMask)" opacity="0.9" />
                  <circle cx="46" cy="51" r="2" fill="#fff" mask="url(#owlFillMask)" opacity="0.6" />
                  <circle cx="78" cy="51" r="2" fill="#fff" mask="url(#owlFillMask)" opacity="0.6" />
                  {/* Hooked beak */}
                  <path d="M64 56 L60 62 L64 66 L68 62 Z" fill="#ffa500" mask="url(#owlFillMask)" />
                  <path d="M64 56 L60 62 L64 66 L68 62 Z" fill="none" stroke="#ff8c00" strokeWidth="2" />
                  <ellipse cx="64" cy="64" rx="3" ry="4" fill="#ff8c00" mask="url(#owlFillMask)" />
                  {/* Eyebrows */}
                  <path d="M36 38 Q42 34, 48 36" fill="none" stroke="#696969" strokeWidth="2" mask="url(#owlFillMask)" opacity="0.7" />
                  <path d="M92 38 Q86 34, 80 36" fill="none" stroke="#696969" strokeWidth="2" mask="url(#owlFillMask)" opacity="0.7" />
                  {/* Wing details */}
                  <ellipse cx="40" cy="85" rx="8" ry="20" fill="url(#owlBodyGrad)" mask="url(#owlFillMask)" opacity="0.8" transform="rotate(-20 40 85)" />
                  <ellipse cx="88" cy="85" rx="8" ry="20" fill="url(#owlBodyGrad)" mask="url(#owlFillMask)" opacity="0.8" transform="rotate(20 88 85)" />
                  {/* Feather texture */}
                  <circle cx="50" cy="90" r="2" fill="#696969" mask="url(#owlFillMask)" opacity="0.4" />
                  <circle cx="78" cy="92" r="2" fill="#696969" mask="url(#owlFillMask)" opacity="0.4" />
                  <circle cx="64" cy="100" r="2" fill="#696969" mask="url(#owlFillMask)" opacity="0.4" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🦉 Owl</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-yellow-800">{Math.round(owlFill)}%</div>
            </div>

            {/* Rat */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="rat" onClick={() => handleCharacterClick('rat')} onMouseEnter={() => handleCharacterHover('rat')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'rat' ? [1, 1.18, 1] : [1, 1.12, 1] }} transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.24, filter: "brightness(1.2)" }} whileTap={{ scale: 0.9 }}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <radialGradient id="ratGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#a9a9a9" />
                      <stop offset="50%" stopColor="#808080" />
                      <stop offset="100%" stopColor="#696969" />
                    </radialGradient>
                    <filter id="ratGlow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="ratFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (ratFill * 1.28)})`} /></mask>
                  </defs>
                  <ellipse cx="64" cy="75" rx="28" ry="35" fill="url(#ratGradient)" mask="url(#ratFillMask)" filter="url(#ratGlow)" />
                  <ellipse cx="64" cy="75" rx="28" ry="35" fill="none" stroke="#696969" strokeWidth="2" />
                  <circle cx="42" cy="40" r="14" fill="url(#ratGradient)" mask="url(#ratFillMask)" />
                  <circle cx="86" cy="40" r="14" fill="url(#ratGradient)" mask="url(#ratFillMask)" />
                  <ellipse cx="64" cy="52" rx="24" ry="28" fill="url(#ratGradient)" mask="url(#ratFillMask)" />
                  <circle cx="42" cy="35" r="10" fill="#f5f5f5" mask="url(#ratFillMask)" opacity="0.4" />
                  <circle cx="86" cy="35" r="10" fill="#f5f5f5" mask="url(#ratFillMask)" opacity="0.4" />
                  <ellipse cx="54" cy="60" rx="3" ry="5" fill="#000" mask="url(#ratFillMask)" />
                  <ellipse cx="74" cy="60" rx="3" ry="5" fill="#000" mask="url(#ratFillMask)" />
                  <circle cx="55" cy="59" r="1" fill="#fff" mask="url(#ratFillMask)" />
                  <circle cx="75" cy="59" r="1" fill="#fff" mask="url(#ratFillMask)" />
                  <ellipse cx="64" cy="70" rx="3" ry="4" fill="#ff69b4" mask="url(#ratFillMask)" />
                  <path d="M64 74 L60 78 L58 76" fill="none" stroke="#696969" strokeWidth="1.5" mask="url(#ratFillMask)" />
                  <path d="M64 74 L68 78 L70 76" fill="none" stroke="#696969" strokeWidth="1.5" mask="url(#ratFillMask)" />
                  <path d="M52 72 Q46 73, 42 72" stroke="#808080" strokeWidth="1" opacity="0.6" mask="url(#ratFillMask)" />
                  <path d="M76 72 Q82 73, 86 72" stroke="#808080" strokeWidth="1" opacity="0.6" mask="url(#ratFillMask)" />
                  <path d="M90 70 Q100 65, 105 68" fill="none" stroke="#808080" strokeWidth="2" mask="url(#ratFillMask)" opacity="0.7" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🐀 Rat</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-600">{Math.round(ratFill)}%</div>
            </div>

            {/* Dog */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="dog" onClick={() => handleCharacterClick('dog')} onMouseEnter={() => handleCharacterHover('dog')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'dog' ? [1, 1.18, 1] : [1, 1.08, 1] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.24, filter: "brightness(1.2) drop-shadow(0 0 12px rgba(218,165,32,0.7))" }} whileTap={{ scale: 0.9 }}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <radialGradient id="dogBodyGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#daa520" />
                      <stop offset="50%" stopColor="#cd853f" />
                      <stop offset="100%" stopColor="#8b4513" />
                    </radialGradient>
                    <filter id="dogGlow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="dogFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (dogFill * 1.28)})`} /></mask>
                  </defs>
                  {/* Wagging tail */}
                  <ellipse cx="88" cy="88" rx="12" ry="22" fill="url(#dogBodyGrad)" mask="url(#dogFillMask)" opacity="0.9" transform="rotate(25 88 88)" />
                  {/* Body */}
                  <ellipse cx="62" cy="78" rx="30" ry="36" fill="url(#dogBodyGrad)" mask="url(#dogFillMask)" filter="url(#dogGlow)" />
                  <ellipse cx="62" cy="78" rx="30" ry="36" fill="none" stroke="#8b4513" strokeWidth="2" />
                  {/* Neck */}
                  <ellipse cx="60" cy="52" rx="22" ry="26" fill="url(#dogBodyGrad)" mask="url(#dogFillMask)" />
                  {/* Head */}
                  <ellipse cx="58" cy="38" rx="24" ry="22" fill="url(#dogBodyGrad)" mask="url(#dogFillMask)" />
                  <ellipse cx="58" cy="38" rx="24" ry="22" fill="none" stroke="#8b4513" strokeWidth="2" />
                  {/* Floppy ears */}
                  <ellipse cx="42" cy="38" rx="10" ry="18" fill="url(#dogBodyGrad)" mask="url(#dogFillMask)" transform="rotate(-15 42 38)" />
                  <ellipse cx="42" cy="38" rx="10" ry="18" fill="none" stroke="#8b4513" strokeWidth="1.5" transform="rotate(-15 42 38)" />
                  <ellipse cx="42" cy="40" rx="6" ry="12" fill="#8b4513" mask="url(#dogFillMask)" opacity="0.5" transform="rotate(-15 42 40)" />
                  <ellipse cx="74" cy="38" rx="10" ry="18" fill="url(#dogBodyGrad)" mask="url(#dogFillMask)" transform="rotate(15 74 38)" />
                  <ellipse cx="74" cy="38" rx="10" ry="18" fill="none" stroke="#8b4513" strokeWidth="1.5" transform="rotate(15 74 38)" />
                  <ellipse cx="74" cy="40" rx="6" ry="12" fill="#8b4513" mask="url(#dogFillMask)" opacity="0.5" transform="rotate(15 74 40)" />
                  {/* Friendly eyes */}
                  <ellipse cx="52" cy="38" rx="5" ry="6" fill="#333" mask="url(#dogFillMask)" />
                  <ellipse cx="64" cy="38" rx="5" ry="6" fill="#333" mask="url(#dogFillMask)" />
                  <circle cx="53" cy="37" r="2" fill="#fff" mask="url(#dogFillMask)" opacity="0.9" />
                  <circle cx="65" cy="37" r="2" fill="#fff" mask="url(#dogFillMask)" opacity="0.9" />
                  {/* Snout */}
                  <ellipse cx="58" cy="48" rx="14" ry="12" fill="#cd853f" mask="url(#dogFillMask)" opacity="0.95" />
                  <ellipse cx="58" cy="46" rx="10" ry="8" fill="#daa520" mask="url(#dogFillMask)" opacity="0.8" />
                  {/* Big black nose */}
                  <ellipse cx="58" cy="50" rx="5" ry="4" fill="#000" mask="url(#dogFillMask)" />
                  <path d="M58 53 L58 56" stroke="#000" strokeWidth="2" mask="url(#dogFillMask)" />
                  {/* Happy smile */}
                  <path d="M58 56 Q54 59, 50 57" fill="none" stroke="#000" strokeWidth="2" mask="url(#dogFillMask)" />
                  <path d="M58 56 Q62 59, 66 57" fill="none" stroke="#000" strokeWidth="2" mask="url(#dogFillMask)" />
                  {/* Panting tongue */}
                  <ellipse cx="58" cy="60" rx="4" ry="6" fill="#ff69b4" mask="url(#dogFillMask)" opacity="0.9" />
                  {/* Spots */}
                  <circle cx="48" cy="75" r="4" fill="#8b4513" mask="url(#dogFillMask)" opacity="0.6" />
                  <circle cx="72" cy="80" r="3" fill="#8b4513" mask="url(#dogFillMask)" opacity="0.6" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🐕 Dog</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-yellow-700">{Math.round(dogFill)}%</div>
            </div>

            {/* Cat */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="cat" onClick={() => handleCharacterClick('cat')} onMouseEnter={() => handleCharacterHover('cat')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'cat' ? [1, 1.16, 1] : [1, 1.08, 1] }} transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.24, filter: "brightness(1.2) drop-shadow(0 0 12px rgba(255,140,0,0.7))" }} whileTap={{ scale: 0.9 }}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <radialGradient id="catBodyGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffa500" />
                      <stop offset="50%" stopColor="#ff8c00" />
                      <stop offset="100%" stopColor="#ff7f50" />
                    </radialGradient>
                    <filter id="catGlow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="catFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (catFill * 1.28)})`} /></mask>
                  </defs>
                  {/* Curled tail */}
                  <path d="M88 85 Q95 75, 98 65 Q100 55, 95 50" fill="none" stroke="url(#catBodyGrad)" strokeWidth="10" mask="url(#catFillMask)" strokeLinecap="round" />
                  {/* Body */}
                  <ellipse cx="62" cy="75" rx="28" ry="34" fill="url(#catBodyGrad)" mask="url(#catFillMask)" filter="url(#catGlow)" />
                  <ellipse cx="62" cy="75" rx="28" ry="34" fill="none" stroke="#ff7f50" strokeWidth="2" />
                  {/* Neck */}
                  <ellipse cx="60" cy="52" rx="20" ry="24" fill="url(#catBodyGrad)" mask="url(#catFillMask)" />
                  {/* Head - rounder */}
                  <ellipse cx="58" cy="38" rx="24" ry="22" fill="url(#catBodyGrad)" mask="url(#catFillMask)" />
                  <ellipse cx="58" cy="38" rx="24" ry="22" fill="none" stroke="#ff7f50" strokeWidth="2" />
                  {/* Pointy triangular ears */}
                  <path d="M42 28 L36 12 L48 24 Z" fill="url(#catBodyGrad)" mask="url(#catFillMask)" />
                  <path d="M42 28 L36 12 L48 24 Z" fill="none" stroke="#ff7f50" strokeWidth="2" />
                  <path d="M42 24 L38 16 L46 22 Z" fill="#ff69b4" mask="url(#catFillMask)" opacity="0.7" />
                  <path d="M74 28 L80 12 L68 24 Z" fill="url(#catBodyGrad)" mask="url(#catFillMask)" />
                  <path d="M74 28 L80 12 L68 24 Z" fill="none" stroke="#ff7f50" strokeWidth="2" />
                  <path d="M72 24 L76 16 L68 22 Z" fill="#ff69b4" mask="url(#catFillMask)" opacity="0.7" />
                  {/* Cat eyes - slanted and mysterious */}
                  <ellipse cx="50" cy="40" rx="6" ry="9" fill="#32cd32" mask="url(#catFillMask)" transform="rotate(-10 50 40)" />
                  <ellipse cx="66" cy="40" rx="6" ry="9" fill="#32cd32" mask="url(#catFillMask)" transform="rotate(10 66 40)" />
                  <ellipse cx="50" cy="40" rx="2" ry="7" fill="#000" mask="url(#catFillMask)" transform="rotate(-10 50 40)" />
                  <ellipse cx="66" cy="40" rx="2" ry="7" fill="#000" mask="url(#catFillMask)" transform="rotate(10 66 40)" />
                  <circle cx="50" cy="38" r="1.5" fill="#fff" mask="url(#catFillMask)" opacity="0.9" />
                  <circle cx="66" cy="38" r="1.5" fill="#fff" mask="url(#catFillMask)" opacity="0.9" />
                  {/* Pink nose */}
                  <path d="M58 48 L55 50 L58 52 L61 50 Z" fill="#ff69b4" mask="url(#catFillMask)" />
                  <path d="M58 52 L58 54" stroke="#ff69b4" strokeWidth="1.5" mask="url(#catFillMask)" />
                  {/* Whiskers */}
                  <line x1="40" y1="46" x2="28" y2="44" stroke="#333" strokeWidth="1.5" mask="url(#catFillMask)" />
                  <line x1="40" y1="50" x2="28" y2="50" stroke="#333" strokeWidth="1.5" mask="url(#catFillMask)" />
                  <line x1="40" y1="54" x2="28" y2="56" stroke="#333" strokeWidth="1.5" mask="url(#catFillMask)" />
                  <line x1="76" y1="46" x2="88" y2="44" stroke="#333" strokeWidth="1.5" mask="url(#catFillMask)" />
                  <line x1="76" y1="50" x2="88" y2="50" stroke="#333" strokeWidth="1.5" mask="url(#catFillMask)" />
                  <line x1="76" y1="54" x2="88" y2="56" stroke="#333" strokeWidth="1.5" mask="url(#catFillMask)" />
                  {/* Mouth - W shape */}
                  <path d="M58 54 Q54 56, 50 54" fill="none" stroke="#333" strokeWidth="1.5" mask="url(#catFillMask)" />
                  <path d="M58 54 Q62 56, 66 54" fill="none" stroke="#333" strokeWidth="1.5" mask="url(#catFillMask)" />
                  {/* Stripes */}
                  <path d="M46 72 Q44 74, 46 76" stroke="#ff6347" strokeWidth="2" mask="url(#catFillMask)" opacity="0.6" />
                  <path d="M70 74 Q72 76, 70 78" stroke="#ff6347" strokeWidth="2" mask="url(#catFillMask)" opacity="0.6" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🐈 Cat</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-600">{Math.round(catFill)}%</div>
            </div>

            {/* Bear */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="bear" onClick={() => handleCharacterClick('bear')} onMouseEnter={() => handleCharacterHover('bear')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'bear' ? [1, 1.14, 1] : [1, 1.06, 1] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.22, filter: "brightness(1.2) drop-shadow(0 0 12px rgba(139,69,19,0.7))" }} whileTap={{ scale: 0.9 }}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <radialGradient id="bearBodyGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#a0522d" />
                      <stop offset="50%" stopColor="#8b4513" />
                      <stop offset="100%" stopColor="#654321" />
                    </radialGradient>
                    <filter id="bearGlow"><feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="bearFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (bearFill * 1.28)})`} /></mask>
                  </defs>
                  {/* Body - large and round */}
                  <ellipse cx="64" cy="80" rx="34" ry="40" fill="url(#bearBodyGrad)" mask="url(#bearFillMask)" filter="url(#bearGlow)" />
                  <ellipse cx="64" cy="80" rx="34" ry="40" fill="none" stroke="#654321" strokeWidth="2" />
                  {/* Neck */}
                  <ellipse cx="64" cy="54" rx="28" ry="26" fill="url(#bearBodyGrad)" mask="url(#bearFillMask)" />
                  {/* Head */}
                  <ellipse cx="64" cy="42" rx="30" ry="28" fill="url(#bearBodyGrad)" mask="url(#bearFillMask)" />
                  <ellipse cx="64" cy="42" rx="30" ry="28" fill="none" stroke="#654321" strokeWidth="2" />
                  {/* Round ears */}
                  <circle cx="44" cy="26" r="12" fill="url(#bearBodyGrad)" mask="url(#bearFillMask)" />
                  <circle cx="44" cy="26" r="12" fill="none" stroke="#654321" strokeWidth="2" />
                  <circle cx="44" cy="28" r="7" fill="#d2691e" mask="url(#bearFillMask)" opacity="0.7" />
                  <circle cx="84" cy="26" r="12" fill="url(#bearBodyGrad)" mask="url(#bearFillMask)" />
                  <circle cx="84" cy="26" r="12" fill="none" stroke="#654321" strokeWidth="2" />
                  <circle cx="84" cy="28" r="7" fill="#d2691e" mask="url(#bearFillMask)" opacity="0.7" />
                  {/* Light belly patch */}
                  <ellipse cx="64" cy="85" rx="24" ry="30" fill="#d2691e" mask="url(#bearFillMask)" opacity="0.6" />
                  {/* Small eyes */}
                  <ellipse cx="54" cy="42" rx="4" ry="6" fill="#333" mask="url(#bearFillMask)" />
                  <ellipse cx="74" cy="42" rx="4" ry="6" fill="#333" mask="url(#bearFillMask)" />
                  <circle cx="55" cy="41" r="1.5" fill="#fff" mask="url(#bearFillMask)" opacity="0.9" />
                  <circle cx="75" cy="41" r="1.5" fill="#fff" mask="url(#bearFillMask)" opacity="0.9" />
                  {/* Large snout area */}
                  <ellipse cx="64" cy="52" rx="16" ry="14" fill="#d2691e" mask="url(#bearFillMask)" opacity="0.9" />
                  <ellipse cx="64" cy="50" rx="12" ry="10" fill="#cd853f" mask="url(#bearFillMask)" opacity="0.8" />
                  {/* Big black nose */}
                  <ellipse cx="64" cy="54" rx="6" ry="5" fill="#000" mask="url(#bearFillMask)" />
                  <path d="M64 58 L64 62" stroke="#000" strokeWidth="2.5" mask="url(#bearFillMask)" />
                  {/* Mouth */}
                  <path d="M64 62 Q58 65, 54 63" fill="none" stroke="#000" strokeWidth="2" mask="url(#bearFillMask)" />
                  <path d="M64 62 Q70 65, 74 63" fill="none" stroke="#000" strokeWidth="2" mask="url(#bearFillMask)" />
                  {/* Claws hint */}
                  <circle cx="46" cy="105" r="3" fill="#000" mask="url(#bearFillMask)" opacity="0.5" />
                  <circle cx="52" cy="108" r="3" fill="#000" mask="url(#bearFillMask)" opacity="0.5" />
                  <circle cx="76" cy="108" r="3" fill="#000" mask="url(#bearFillMask)" opacity="0.5" />
                  <circle cx="82" cy="105" r="3" fill="#000" mask="url(#bearFillMask)" opacity="0.5" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🐻 Bear</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-yellow-800">{Math.round(bearFill)}%</div>
            </div>

            {/* Rhino */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="rhino" onClick={() => handleCharacterClick('rhino')} onMouseEnter={() => handleCharacterHover('rhino')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'rhino' ? [1, 1.12, 1] : [1, 1.05, 1] }} transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.2, filter: "brightness(1.2)" }} whileTap={{ scale: 0.9 }}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <radialGradient id="rhinoBodyGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#808080" />
                      <stop offset="50%" stopColor="#696969" />
                      <stop offset="100%" stopColor="#4a4a4a" />
                    </radialGradient>
                    <linearGradient id="rhinoHornGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#d3d3d3" />
                      <stop offset="100%" stopColor="#696969" />
                    </linearGradient>
                    <filter id="rhinoGlow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="rhinoFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (rhinoFill * 1.28)})`} /></mask>
                  </defs>
                  {/* Body - massive */}
                  <ellipse cx="64" cy="82" rx="36" ry="40" fill="url(#rhinoBodyGrad)" mask="url(#rhinoFillMask)" filter="url(#rhinoGlow)" />
                  <ellipse cx="64" cy="82" rx="36" ry="40" fill="none" stroke="#4a4a4a" strokeWidth="2" />
                  {/* Thick neck */}
                  <ellipse cx="62" cy="54" rx="28" ry="30" fill="url(#rhinoBodyGrad)" mask="url(#rhinoFillMask)" />
                  {/* Large head */}
                  <ellipse cx="60" cy="38" rx="26" ry="24" fill="url(#rhinoBodyGrad)" mask="url(#rhinoFillMask)" />
                  <ellipse cx="60" cy="38" rx="26" ry="24" fill="none" stroke="#4a4a4a" strokeWidth="2" />
                  {/* Prominent horn */}
                  <path d="M60 32 L58 12 L54 18 L56 30 Z" fill="url(#rhinoHornGrad)" mask="url(#rhinoFillMask)" />
                  <path d="M60 32 L58 12 L56 30 Z" fill="none" stroke="#555" strokeWidth="2" />
                  {/* Smaller second horn */}
                  <path d="M60 36 L59 24 L57 28 L58 35 Z" fill="url(#rhinoHornGrad)" mask="url(#rhinoFillMask)" opacity="0.9" />
                  {/* Small ears */}
                  <ellipse cx="44" cy="30" rx="6" ry="10" fill="url(#rhinoBodyGrad)" mask="url(#rhinoFillMask)" transform="rotate(-20 44 30)" />
                  <ellipse cx="76" cy="30" rx="6" ry="10" fill="url(#rhinoBodyGrad)" mask="url(#rhinoFillMask)" transform="rotate(20 76 30)" />
                  {/* Small eyes */}
                  <ellipse cx="52" cy="36" rx="3" ry="5" fill="#333" mask="url(#rhinoFillMask)" />
                  <ellipse cx="68" cy="36" rx="3" ry="5" fill="#333" mask="url(#rhinoFillMask)" />
                  <circle cx="53" cy="35" r="1" fill="#fff" mask="url(#rhinoFillMask)" opacity="0.8" />
                  <circle cx="69" cy="35" r="1" fill="#fff" mask="url(#rhinoFillMask)" opacity="0.8" />
                  {/* Long snout */}
                  <ellipse cx="60" cy="50" rx="20" ry="16" fill="#696969" mask="url(#rhinoFillMask)" opacity="0.95" />
                  <ellipse cx="60" cy="48" rx="16" ry="12" fill="#808080" mask="url(#rhinoFillMask)" opacity="0.8" />
                  {/* Nostrils */}
                  <ellipse cx="56" cy="54" rx="3" ry="4" fill="#000" mask="url(#rhinoFillMask)" />
                  <ellipse cx="64" cy="54" rx="3" ry="4" fill="#000" mask="url(#rhinoFillMask)" />
                  {/* Mouth line */}
                  <path d="M50 58 Q55 60, 60 60 Q65 60, 70 58" fill="none" stroke="#4a4a4a" strokeWidth="2" mask="url(#rhinoFillMask)" />
                  {/* Thick skin folds */}
                  <path d="M40 62 Q38 64, 40 66" stroke="#4a4a4a" strokeWidth="2" mask="url(#rhinoFillMask)" opacity="0.5" />
                  <path d="M36 75 Q34 77, 36 79" stroke="#4a4a4a" strokeWidth="2" mask="url(#rhinoFillMask)" opacity="0.5" />
                  <path d="M84 75 Q86 77, 84 79" stroke="#4a4a4a" strokeWidth="2" mask="url(#rhinoFillMask)" opacity="0.5" />
                  {/* Stubby legs hint */}
                  <ellipse cx="50" cy="110" rx="8" ry="12" fill="url(#rhinoBodyGrad)" mask="url(#rhinoFillMask)" opacity="0.8" />
                  <ellipse cx="74" cy="110" rx="8" ry="12" fill="url(#rhinoBodyGrad)" mask="url(#rhinoFillMask)" opacity="0.8" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🦏 Rhino</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-700">{Math.round(rhinoFill)}%</div>
            </div>

            {/* Snake */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="snake" onClick={() => handleCharacterClick('snake')} onMouseEnter={() => handleCharacterHover('snake')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'snake' ? [1, 1.18, 1] : [1, 1.1, 1], rotate: hoveredCharacter === 'snake' ? [0, 3, -3, 0] : 0 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} whileHover={{ scale: 1.25, filter: "brightness(1.2) drop-shadow(0 0 15px rgba(34,139,34,0.8))" }} whileTap={{ scale: 0.9 }} className={`${hoveredCharacter === 'snake' ? 'drop-shadow-2xl' : ''}`}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
                  <defs>
                    <linearGradient id="snakeBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#32cd32" />
                      <stop offset="50%" stopColor="#228b22" />
                      <stop offset="100%" stopColor="#006400" />
                    </linearGradient>
                    <radialGradient id="snakeScaleGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3cb371" />
                      <stop offset="100%" stopColor="#228b22" />
                    </radialGradient>
                    <filter id="snakeGlow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    <mask id="snakeFillMask"><rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (snakeFill * 1.28)})`} /></mask>
                  </defs>
                  {/* Coiled snake body - S-shaped */}
                  <path d="M30 100 Q25 85, 32 70 Q40 55, 52 48 Q64 42, 76 48 Q88 55, 96 70 Q103 85, 98 100" fill="url(#snakeBodyGrad)" mask="url(#snakeFillMask)" filter="url(#snakeGlow)" stroke="#006400" strokeWidth="3" />
                  {/* Body segments with width variation */}
                  <ellipse cx="32" cy="70" rx="14" ry="16" fill="url(#snakeBodyGrad)" mask="url(#snakeFillMask)" transform="rotate(-30 32 70)" />
                  <ellipse cx="52" cy="52" rx="16" ry="18" fill="url(#snakeBodyGrad)" mask="url(#snakeFillMask)" />
                  <ellipse cx="76" cy="52" rx="16" ry="18" fill="url(#snakeBodyGrad)" mask="url(#snakeFillMask)" />
                  <ellipse cx="96" cy="70" rx="14" ry="16" fill="url(#snakeBodyGrad)" mask="url(#snakeFillMask)" transform="rotate(30 96 70)" />
                  {/* Belly scales - lighter */}
                  <ellipse cx="52" cy="54" rx="10" ry="12" fill="#90ee90" mask="url(#snakeFillMask)" opacity="0.5" />
                  <ellipse cx="76" cy="54" rx="10" ry="12" fill="#90ee90" mask="url(#snakeFillMask)" opacity="0.5" />
                  {/* Head - triangular shape */}
                  <path d="M48 38 L64 28 L80 38 L76 48 L52 48 Z" fill="url(#snakeBodyGrad)" mask="url(#snakeFillMask)" />
                  <path d="M48 38 L64 28 L80 38" fill="none" stroke="#006400" strokeWidth="2" />
                  {/* Snake eyes - slitted pupils */}
                  <ellipse cx="56" cy="38" rx="6" ry="7" fill="#ffff00" mask="url(#snakeFillMask)" />
                  <ellipse cx="72" cy="38" rx="6" ry="7" fill="#ffff00" mask="url(#snakeFillMask)" />
                  <rect x="55" y="36" width="2" height="4" fill="#000" mask="url(#snakeFillMask)" />
                  <rect x="71" y="36" width="2" height="4" fill="#000" mask="url(#snakeFillMask)" />
                  <circle cx="56" cy="37" r="1" fill="#fff" mask="url(#snakeFillMask)" opacity="0.9" />
                  <circle cx="72" cy="37" r="1" fill="#fff" mask="url(#snakeFillMask)" opacity="0.9" />
                  {/* Forked tongue */}
                  <path d="M64 44 L64 52" stroke="#ff0000" strokeWidth="2" mask="url(#snakeFillMask)" />
                  <path d="M64 52 L60 56 M64 52 L68 56" stroke="#ff0000" strokeWidth="2" mask="url(#snakeFillMask)" />
                  {/* Scale pattern */}
                  <circle cx="42" cy="60" r="4" fill="url(#snakeScaleGrad)" mask="url(#snakeFillMask)" opacity="0.7" />
                  <circle cx="52" cy="65" r="3.5" fill="url(#snakeScaleGrad)" mask="url(#snakeFillMask)" opacity="0.7" />
                  <circle cx="64" cy="58" r="4" fill="url(#snakeScaleGrad)" mask="url(#snakeFillMask)" opacity="0.7" />
                  <circle cx="76" cy="65" r="3.5" fill="url(#snakeScaleGrad)" mask="url(#snakeFillMask)" opacity="0.7" />
                  <circle cx="86" cy="60" r="4" fill="url(#snakeScaleGrad)" mask="url(#snakeFillMask)" opacity="0.7" />
                  <circle cx="38" cy="80" r="3" fill="url(#snakeScaleGrad)" mask="url(#snakeFillMask)" opacity="0.7" />
                  <circle cx="90" cy="80" r="3" fill="url(#snakeScaleGrad)" mask="url(#snakeFillMask)" opacity="0.7" />
                  {/* Diamond patterns on back */}
                  <path d="M64 46 L60 50 L64 54 L68 50 Z" fill="#006400" mask="url(#snakeFillMask)" opacity="0.6" />
                  <path d="M40 68 L36 72 L40 76 L44 72 Z" fill="#006400" mask="url(#snakeFillMask)" opacity="0.6" />
                  <path d="M88 68 L84 72 L88 76 L92 72 Z" fill="#006400" mask="url(#snakeFillMask)" opacity="0.6" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🐍 Snake</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-green-700">{Math.round(snakeFill)}%</div>
            </div>

            {/* Lion */}
            <div className="relative w-32 h-32 cursor-pointer" data-character="lion" onClick={() => handleCharacterClick('lion')} onMouseEnter={() => handleCharacterHover('lion')} onMouseLeave={() => handleCharacterHover(null)}>
              <motion.div animate={{ scale: hoveredCharacter === 'lion' ? [1, 1.2, 1] : [1, 1.1, 1], rotate: clickedCharacter === 'lion' ? [0, 3, -3, 0] : 0 }} transition={{ duration: hoveredCharacter === 'lion' ? 0.4 : 1.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} whileHover={{ scale: 1.15, filter: "brightness(1.1)", transition: { duration: 0.2 } }} whileTap={{ scale: 0.95, transition: { duration: 0.1 } }} className={`${hoveredCharacter === 'lion' ? 'drop-shadow-lg' : ''} ${clickedCharacter === 'lion' ? 'animate-pulse' : ''}`}>
                <svg width="128" height="128" viewBox="0 0 128 128" className="w-32 h-32">
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
                      <rect x="0" y="0" width="128" height="128" fill="white" transform={`translate(0, ${128 - (lionFill * 1.28)})`} />
                    </mask>
                  </defs>
                  <ellipse cx="64" cy="85" rx="30" ry="35" fill="url(#lion3D)" mask="url(#lionFillMask)" filter="url(#lionShadow)" />
                  <ellipse cx="64" cy="85" rx="30" ry="35" fill="none" stroke="#ff4500" strokeWidth="2" />
                  <circle cx="64" cy="50" r="28" fill="url(#lion3D)" mask="url(#lionFillMask)" filter="url(#lionShadow)" />
                  <circle cx="64" cy="50" r="28" fill="none" stroke="#ff4500" strokeWidth="2" />
                  <path d="M36 35 Q25 20, 40 15 Q55 10, 64 15 Q73 10, 88 15 Q103 20, 92 35 Q88 45, 78 40 Q68 35, 64 40 Q60 35, 50 40 Q40 45, 36 35" fill="url(#lion3D)" mask="url(#lionFillMask)" filter="url(#lionShadow)" />
                  <path d="M36 35 Q25 20, 40 15 Q55 10, 64 15 Q73 10, 88 15 Q103 20, 92 35 Q88 45, 78 40 Q68 35, 64 40 Q60 35, 50 40 Q40 45, 36 35" fill="none" stroke="#ff4500" strokeWidth="2" />
                  <path d="M94 85 Q110 80, 115 90 Q113 100, 105 105 Q100 110, 94 100 Q92 90, 94 85" fill="url(#lion3D)" mask="url(#lionFillMask)" filter="url(#lionShadow)" />
                  <path d="M94 85 Q110 80, 115 90 Q113 100, 105 105 Q100 110, 94 100 Q92 90, 94 85" fill="none" stroke="#ff4500" strokeWidth="2" />
                  <ellipse cx="50" cy="110" rx="8" ry="15" fill="url(#lion3D)" mask="url(#lionFillMask)" />
                  <ellipse cx="78" cy="110" rx="8" ry="15" fill="url(#lion3D)" mask="url(#lionFillMask)" />
                  <ellipse cx="50" cy="110" rx="8" ry="15" fill="none" stroke="#ff4500" strokeWidth="2" />
                  <ellipse cx="78" cy="110" rx="8" ry="15" fill="none" stroke="#ff4500" strokeWidth="2" />
                  <ellipse cx="50" cy="120" rx="6" ry="4" fill="url(#lion3D)" mask="url(#lionFillMask)" />
                  <ellipse cx="78" cy="120" rx="6" ry="4" fill="url(#lion3D)" mask="url(#lionFillMask)" />
                  <ellipse cx="50" cy="120" rx="6" ry="4" fill="none" stroke="#ff4500" strokeWidth="1" />
                  <ellipse cx="78" cy="120" rx="6" ry="4" fill="none" stroke="#ff4500" strokeWidth="1" />
                  <ellipse cx="55" cy="40" rx="6" ry="8" fill="#fff" mask="url(#lionFillMask)" />
                  <ellipse cx="73" cy="40" rx="6" ry="8" fill="#fff" mask="url(#lionFillMask)" />
                  <ellipse cx="55" cy="40" rx="4" ry="6" fill="#333" mask="url(#lionFillMask)" />
                  <ellipse cx="73" cy="40" rx="4" ry="6" fill="#333" mask="url(#lionFillMask)" />
                  <circle cx="56" cy="38" r="1.5" fill="#fff" mask="url(#lionFillMask)" />
                  <circle cx="74" cy="38" r="1.5" fill="#fff" mask="url(#lionFillMask)" />
                  <ellipse cx="64" cy="55" rx="4" ry="3" fill="#ff4500" mask="url(#lionFillMask)" />
                  <ellipse cx="64" cy="55" rx="2" ry="1.5" fill="#ff8c00" mask="url(#lionFillMask)" />
                  <path d="M64 60 Q60 65, 55 60" fill="none" stroke="#ff4500" strokeWidth="2" mask="url(#lionFillMask)" />
                  <path d="M64 60 Q68 65, 73 60" fill="none" stroke="#ff4500" strokeWidth="2" mask="url(#lionFillMask)" />
                  <line x1="40" y1="50" x2="25" y2="48" stroke="#ff4500" strokeWidth="2" mask="url(#lionFillMask)" />
                  <line x1="40" y1="55" x2="25" y2="55" stroke="#ff4500" strokeWidth="2" mask="url(#lionFillMask)" />
                  <line x1="40" y1="60" x2="25" y2="62" stroke="#ff4500" strokeWidth="2" mask="url(#lionFillMask)" />
                  <line x1="88" y1="50" x2="103" y2="48" stroke="#ff4500" strokeWidth="2" mask="url(#lionFillMask)" />
                  <line x1="88" y1="55" x2="103" y2="55" stroke="#ff4500" strokeWidth="2" mask="url(#lionFillMask)" />
                  <line x1="88" y1="60" x2="103" y2="62" stroke="#ff4500" strokeWidth="2" mask="url(#lionFillMask)" />
                  <ellipse cx="45" cy="25" rx="8" ry="12" fill="url(#lion3D)" mask="url(#lionFillMask)" transform="rotate(-20 45 25)" />
                  <ellipse cx="83" cy="25" rx="8" ry="12" fill="url(#lion3D)" mask="url(#lionFillMask)" transform="rotate(20 83 25)" />
                  <ellipse cx="45" cy="25" rx="8" ry="12" fill="none" stroke="#ff4500" strokeWidth="2" transform="rotate(-20 45 25)" />
                  <ellipse cx="83" cy="25" rx="8" ry="12" fill="none" stroke="#ff4500" strokeWidth="2" transform="rotate(20 83 25)" />
                  <ellipse cx="45" cy="25" rx="4" ry="8" fill="#ff8c00" mask="url(#lionFillMask)" transform="rotate(-20 45 25)" />
                  <ellipse cx="83" cy="25" rx="4" ry="8" fill="#ff8c00" mask="url(#lionFillMask)" transform="rotate(20 83 25)" />
                  <circle cx="50" cy="30" r="2" fill="rgba(255,255,255,0.3)" mask="url(#lionFillMask)" />
                  <circle cx="75" cy="25" r="1.5" fill="rgba(255,255,255,0.2)" mask="url(#lionFillMask)" />
                  <circle cx="40" cy="40" r="1.8" fill="rgba(255,255,255,0.25)" mask="url(#lionFillMask)" />
                  <circle cx="85" cy="35" r="1.2" fill="rgba(255,255,255,0.2)" mask="url(#lionFillMask)" />
                  <path d="M45 15 Q50 5, 55 10 Q60 0, 64 5 Q68 0, 73 10 Q78 5, 83 15 Q80 20, 75 18 Q70 25, 64 20 Q58 25, 53 18 Q48 20, 45 15" fill="url(#lion3D)" mask="url(#lionFillMask)" opacity="0.8" />
                  <circle cx="55" cy="85" r="2" fill="rgba(255,255,255,0.2)" mask="url(#lionFillMask)" />
                  <circle cx="75" cy="90" r="1.5" fill="rgba(255,255,255,0.15)" mask="url(#lionFillMask)" />
                  <circle cx="45" cy="95" r="1.8" fill="rgba(255,255,255,0.2)" mask="url(#lionFillMask)" />
                  <circle cx="80" cy="100" r="1.2" fill="rgba(255,255,255,0.15)" mask="url(#lionFillMask)" />
                  <ellipse cx="64" cy="55" rx="1" ry="0.5" fill="rgba(255,255,255,0.4)" mask="url(#lionFillMask)" />
                  <circle cx="55" cy="40" r="1" fill="rgba(255,255,255,0.6)" mask="url(#lionFillMask)" />
                  <circle cx="73" cy="40" r="1" fill="rgba(255,255,255,0.6)" mask="url(#lionFillMask)" />
                  <path d="M35 20 Q30 15, 25 20 Q30 25, 35 20" fill="rgba(255,255,255,0.2)" mask="url(#lionFillMask)" />
                  <path d="M93 20 Q98 15, 103 20 Q98 25, 93 20" fill="rgba(255,255,255,0.2)" mask="url(#lionFillMask)" />
                  <ellipse cx="55" cy="95" rx="15" ry="10" fill="rgba(0,0,0,0.1)" mask="url(#lionFillMask)" />
                  <circle cx="115" cy="90" r="3" fill="url(#lion3D)" mask="url(#lionFillMask)" />
                  <circle cx="115" cy="90" r="3" fill="none" stroke="#ff4500" strokeWidth="1" />
                </svg>
              </motion.div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded whitespace-nowrap">🦁 Lion</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-600">{Math.round(lionFill)}%</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCharacters;