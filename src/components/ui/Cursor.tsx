import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const Cursor = () => {
    const { themeConfig } = useTheme();
    const [isPointer, setIsPointer] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Optimized Mouse Tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth Physics (Springs)
    // Higher stiffness = faster. Lower damping = more responsive.
    const springConfig = { damping: 50, stiffness: 1000, mass: 0.1 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            
            // Show cursor only after first move to prevent 0,0 jump
            if (!isVisible) setIsVisible(true);

            // Efficient Pointer Check
            const target = e.target as HTMLElement;
            // Only check up to 3 levels up to save perf
            const isClickable = 
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' || 
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null;
            
            setIsPointer(!!isClickable);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', updateMousePosition, { passive: true });
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [mouseX, mouseY, isVisible]);

    // Global CSS Injection for Cursor Hiding
    useEffect(() => {
        if (!themeConfig.cursor || themeConfig.cursor.style !== 'none') return;
        
        const styleId = 'cursor-hide-global';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.innerHTML = `
                * { cursor: none !important; }
                body { cursor: none !important; }
            `;
            document.head.appendChild(style);
        }

        return () => {
            const style = document.getElementById(styleId);
            if (style) style.remove();
        };
    }, [themeConfig.cursor]);

    if (!themeConfig.cursor || themeConfig.cursor.style !== 'none' || !isVisible) return null;

    const { custom, color } = themeConfig.cursor;
    const cursorColor = color || themeConfig.colors.primary;

    // --- SHARED VARIANTS ---
    // All cursors are centered by default using x: '-50%', y: '-50%' logic in CSS or transform
    
    // 1. GLITCH (Cyber / Synthwave)
    if (custom === 'glitch') {
        return (
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{ x: springX, y: springY }}
            >
                 <motion.div 
                    className="relative -top-2 -left-2 w-4 h-4 border border-[var(--color-cyber-primary)]"
                    animate={{
                        scale: isClicking ? 0.8 : (isPointer ? 1.5 : 1),
                        rotate: isPointer ? 45 : 0,
                    }}
                 >
                    <div className="absolute inset-0 bg-[var(--color-cyber-primary)] opacity-20" />
                    {isPointer && <div className="absolute -top-1 -left-1 w-full h-full border border-[var(--color-cyber-secondary)] opacity-50 animate-ping" />}
                 </motion.div>
            </motion.div>
        );
    }

    // 2. UNDERSCORE (Terminal)
    if (custom === 'underscore') {
        return (
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] text-[var(--color-terminal-primary)] font-mono font-bold text-xl select-none"
                style={{ x: springX, y: springY }}
            >
                 <div className="relative -top-3 -left-1.5 animate-pulse">_</div>
            </motion.div>
        );
    }

    // 3. CROSSHAIR (Gamer) - High visibility neon green
    if (custom === 'crosshair') {
        return (
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{ x: springX, y: springY }}
            >
                <div className={`relative -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ${isClicking ? 'scale-75' : ''}`}>
                    {/* Center dot - highly visible */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full shadow-[0_0_8px_#39FF14] ${isPointer ? 'bg-red-500 shadow-red-500' : 'bg-[#39FF14]'}`} />
                    {/* Vertical line */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-8 shadow-[0_0_6px_#39FF14] ${isPointer ? 'bg-red-500 h-10' : 'bg-[#39FF14]'}`} />
                    {/* Horizontal line */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[2px] shadow-[0_0_6px_#39FF14] ${isPointer ? 'bg-red-500 w-10' : 'bg-[#39FF14]'}`} />
                    {/* Outer ring on hover */}
                    {isPointer && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500 rounded-full opacity-60 animate-ping" />}
                </div>
            </motion.div>
        );
    }

    // 4. BUBBLE (Ocean)
    if (custom === 'bubble') {
        return (
             <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{ x: springX, y: springY }}
            >
                <motion.div 
                    className="w-4 h-4 rounded-full border border-[var(--color-ocean-primary)] bg-[var(--color-ocean-primary)]/30 backdrop-blur-sm -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        scale: isPointer ? 2.5 : 1,
                        borderRadius: isPointer ? "40%" : "50%",
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                />
            </motion.div>
        );
    }

    // 5. LEAF (Forest)
    if (custom === 'leaf') {
        return (
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] text-lg select-none"
                style={{ x: springX, y: springY }}
            >
                <motion.div 
                    className="-translate-x-1/2 -translate-y-1/2"
                    animate={{ rotate: isPointer ? 45 : 0 }}
                >
                    🌱
                </motion.div>
            </motion.div>
        );
    }

    // 6. FANG (Dracula)
    if (custom === 'fang') {
         return (
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{ x: springX, y: springY }}
            >
                <motion.div
                    className="-translate-x-1/2 -translate-y-[20%] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[14px] border-t-[var(--color-dracula-primary)] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    animate={{ 
                        scale: isPointer ? 1.5 : 1,
                        rotate: isPointer ? 180 : 0
                    }}
                />
            </motion.div>
         );
    }

    // 7. GUIDE (Blueprint)
    if (custom === 'guide') {
         return (
            <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
                {/* We use standard styling for full screen guides to avoid layout thrashing */}
                <motion.div 
                    className="absolute top-0 w-[1px] h-full bg-[var(--color-blueprint-primary)] opacity-40"
                    style={{ x: mouseX }}
                />
                <motion.div 
                    className="absolute left-0 w-full h-[1px] bg-[var(--color-blueprint-primary)] opacity-40"
                    style={{ y: mouseY }}
                />
                {/* Center marker */}
                <motion.div 
                    className="absolute w-4 h-4 border border-[var(--color-blueprint-primary)] opacity-80 -translate-x-1/2 -translate-y-1/2"
                    style={{ x: mouseX, y: mouseY }}
                    animate={{ rotate: isPointer ? 90 : 0 }}
                />
            </div>
         );
    }

    // 8. RING / FOCUS (Minimal, Noir, Nordic)
    if (custom === 'ring' || custom === 'focus') {
        return (
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{ x: springX, y: springY }}
            >
                {/* Center dot */}
                <div className="absolute w-1 h-1 bg-current rounded-full -translate-x-1/2 -translate-y-1/2" style={{ color: cursorColor }} />
                
                {/* Outer Ring */}
                <motion.div
                    className="absolute border border-current rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{ color: cursorColor }}
                    animate={{
                        width: isPointer ? 40 : 20,
                        height: isPointer ? 40 : 20,
                        opacity: isPointer ? 1 : 0.4
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            </motion.div>
        );
    }
    
    // 9. STEAM (Coffee)
    if (custom === 'steam') {
         return (
             <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{ x: springX, y: springY }}
             >
                <div className="w-3 h-3 bg-[#6F4E37] rounded-full opacity-80 -translate-x-1/2 -translate-y-1/2" />
             </motion.div>
         );
    }

    // DEFAULT / PETAL / BLOCK fallback
    // For Petal and Block we use a refined default wrapper to keep it smooth
    
    const isPetal = custom === 'petal';
    const isBlock = custom === 'block';

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{ x: springX, y: springY }}
        >
             {isPetal ? (
                 <motion.div 
                    className="text-lg select-none -translate-x-1/2 -translate-y-1/2"
                    animate={{ rotate: isPointer ? 90 : 0 }}
                 >🌸</motion.div>
             ) : isBlock ? (
                 <motion.div 
                    className="w-3 h-5 bg-[var(--color-cyber-primary)] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
                    style={{ backgroundColor: cursorColor }}
                    animate={{ opacity: isPointer ? 0.3 : 1, scale: isPointer ? 1.5 : 1 }}
                 />
             ) : (
                <>
                    <div className="w-2 h-2 bg-current rounded-full -translate-x-1/2 -translate-y-1/2" style={{ color: cursorColor }} />
                    <motion.div 
                        className="absolute border border-current rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2"
                        style={{ color: cursorColor }}
                        animate={{
                             width: isPointer ? 48 : 24,
                             height: isPointer ? 48 : 24,
                        }}
                    />
                </>
             )}
        </motion.div>
    );
};

export default Cursor;
