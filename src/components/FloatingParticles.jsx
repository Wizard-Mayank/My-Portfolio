import { useEffect, useRef } from "react";

const FloatingParticles = () => {
  const canvasRef = useRef(null);
  const colorRef = useRef("255,255,255"); // Default white for dark mode

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles = [];

    const getThemeColor = () =>
      document.documentElement.classList.contains("dark")
        ? "255,255,255"
        : "0,0,0";

    colorRef.current = getThemeColor();

    const createParticles = (count) => {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6,
      }));
    };

    const drawLine = (p1, p2) => {
      const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(${colorRef.current},${1 - dist / 100})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    };

    let animationId;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorRef.current},0.6)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          drawLine(p, particles[j]);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    createParticles(80);
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles(80);
    };

    const themeObserver = new MutationObserver(() => {
      colorRef.current = getThemeColor(); // update on theme change
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default FloatingParticles;
