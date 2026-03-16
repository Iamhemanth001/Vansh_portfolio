import React, { useEffect, useRef } from 'react';

const StarParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = [];
    const numStars = 150; // Optimal for subtle background

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5, // 0.5px to 2px
        velocity: Math.random() * 0.5 + 0.1, // Fall speed
        alpha: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        // Colors: soft white, light blue, cyan
        color: Math.random() > 0.6 ? '255, 255, 255' : (Math.random() > 0.5 ? '147, 197, 253' : '207, 250, 254')
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = width / 2;
    let targetY = height / 2;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Smooth mouse interpolation for parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      stars.forEach((star) => {
        // Fall down continuously
        star.y += star.velocity;

        // Slight parallax horizontally and vertically based on mouse
        const dx = (mouseX - width / 2) * 0.003;
        const dy = (mouseY - height / 2) * 0.003;
        
        // Apply parallax (stars closer/bigger move slightly faster)
        star.x -= dx * star.velocity;
        star.y -= dy * star.velocity;

        // Reset if out of bounds (top/bottom/sides)
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        } else if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
        
        if (star.x > width) star.x = 0;
        if (star.x < 0) star.x = width;

        // Twinkle effect
        star.alpha += star.twinkleSpeed;
        if (star.alpha <= 0.1 || star.alpha >= 0.8) {
          star.twinkleSpeed *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, Math.max(0, star.y), star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${Math.max(0, Math.min(1, star.alpha))})`;
        ctx.fill();
        
        // Add subtle glow
        ctx.shadowBlur = Math.max(2, star.radius * 2);
        ctx.shadowColor = `rgba(${star.color}, 0.8)`;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 mix-blend-screen"
      style={{ opacity: 0.8 }}
    />
  );
};

export default StarParticles;
