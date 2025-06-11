import { useEffect, useRef, useState } from 'react';

let rippleId = 0;

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [ripples, setRipples] = useState([]);

  // Track mouse position
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Hover state on interactive elements
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

  // Generate 3 staggered ripples on click
  useEffect(() => {
    const click = (e) => {
      for (let i = 0; i < 3; i++) {
        const id = rippleId++;
        const { clientX: x, clientY: y } = e;
        setTimeout(() => {
          setRipples(r => [...r, { id, x, y }]);
          // remove after animation
          setTimeout(() => {
            setRipples(r => r.filter(rp => rp.id !== id));
          }, 600);
        }, i * 100);
      }
    };
    window.addEventListener('mousedown', click);
    return () => window.removeEventListener('mousedown', click);
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full border-2 transition-transform duration-150 ease-out
          ${hovering ? 'scale-110 border-cyan-400' : 'scale-100 border-white/40'}`}
        style={{
          width: '24px',
          height: '24px',
          left: pos.x,
          top: pos.y,
          marginLeft: '-12px',
          marginTop: '-12px',
          boxShadow: hovering
            ? '0 0 6px #14b8a6'
            : '0 0 4px rgba(255,255,255,0.6)',
        }}
      />

      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none z-[10000] rounded-full"
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: '#14b8a6',
          left: pos.x,
          top: pos.y,
          marginLeft: '-3px',
          marginTop: '-3px',
        }}
      />

      {/* Ripples */}
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
