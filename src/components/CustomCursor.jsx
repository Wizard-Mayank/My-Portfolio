import { useEffect, useState } from 'react';

let rippleId = 0;

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [visible, setVisible] = useState(window.innerWidth >= 768);

  // Mouse position
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Hover detection
  useEffect(() => {
    const targets = document.querySelectorAll('button, a, .cursor-hover');
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);
    targets.forEach(el => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });
    return () => {
      targets.forEach(el => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  // Ripple clicks
  useEffect(() => {
    const click = (e) => {
      for (let i = 0; i < 3; i++) {
        const id = rippleId++;
        const { clientX: x, clientY: y } = e;
        setTimeout(() => {
          setRipples(r => [...r, { id, x, y }]);
          setTimeout(() => {
            setRipples(r => r.filter(rp => rp.id !== id));
          }, 600);
        }, i * 100);
      }
    };
    window.addEventListener('mousedown', click);
    return () => window.removeEventListener('mousedown', click);
  }, []);

  // Mobile detection
  useEffect(() => {
    const resize = () => setVisible(window.innerWidth >= 768);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Inner Dot (NO transition) */}
      <div
        className="fixed pointer-events-none z-[10000] rounded-full"
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--cursor-color)',
          left: pos.x,
          top: pos.y,
          marginLeft: '-3px',
          marginTop: '-3px',
          transition: 'none',
        }}
      />

      {/* Outer Ring (trailing with transition) */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full border-2
          ${hovering ? 'border-cyan-400 scale-110' : 'border-white/40 scale-100'}`}
        style={{
          width: '24px',
          height: '24px',
          left: pos.x,
          top: pos.y,
          marginLeft: '-12px',
          marginTop: '-12px',
          transition: 'transform 0.15s ease-out',
          boxShadow: hovering
            ? '0 0 6px #14b8a6'
            : '0 0 4px rgba(255,255,255,0.6)',
        }}
      />

      {/* Ripple Effects */}
      {ripples.map(({ id, x, y }) => (
        <div
          key={id}
          className="fixed pointer-events-none z-[9998] rounded-full ripple border border-cyan-400"
          style={{
            width: '30px',
            height: '30px',
            left: x,
            top: y,
            marginLeft: '-15px',
            marginTop: '-15px',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
