const Loader = ({ className }) => {
  const svgStyles = {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    strokeLinejoin: 'round',
    strokeMiterlimit: 2,
  };

  const animationStyles = {
    animation: 'spin 2s linear infinite',
    transformOrigin: 'center',
  };

  const animationStylesCopies = {
    animation: 'spinCopies 2s linear infinite',
    transformOrigin: 'center',
  };

  const pathStylesA = {
    fill: 'url(#a)',
  };

  const pathStylesB = {
    fill: 'url(#b)',
  };

  const pathStylesC = {
    ...animationStyles,
    fill: 'url(#c)',
  };

  const pathStylesD = {
    ...animationStyles,
    fill: 'url(#d)',
  };

  const pathStylesE = {
    ...animationStyles,
    fill: 'url(#e)',
  };

  const pathStylesC2 = {
    ...animationStylesCopies,
    fill: 'url(#c)',
  };

  const pathStylesD2 = {
    ...animationStylesCopies,
    fill: 'url(#d)',
  };

  const pathStylesE2 = {
    ...animationStylesCopies,
    fill: 'url(#e)',
  };

  const pathStylesF = {
    ...animationStyles,
    fill: 'url(#f)',
  };

  const pathStylesG = {
    ...animationStyles,
    fill: 'url(#g)',
  };

  const pathStylesH = {
    ...animationStyles,
    fill: 'url(#h)',
  };

  const pathStylesI = {
    ...animationStyles,
    fill: 'url(#i)',
  };

  const pathStylesJ = {
    ...animationStyles,
    fill: 'url(#j)',
  };

  const pathStylesJ2 = {
    ...animationStylesCopies,
    fill: 'url(#j)',
  };

  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={svgStyles}
      className={className}
    >
      <path d="M15.25 2v2a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-1.5 0" style={pathStylesC} />
      <path d="m22.35 3.501-1 1.732a.751.751 0 0 0 1.3.75l1-1.732a.75.75 0 0 0-1.3-.75" style={pathStylesD} />
      <path d="m27.749 8.35-1.732 1a.751.751 0 0 0 .75 1.3l1.732-1a.75.75 0 0 0-.75-1.3" style={pathStylesE} />
      <path d="M30 15.25h-2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5" style={pathStylesF} />
      <path d="m28.499 22.35-1.732-1a.751.751 0 0 0-.75 1.3l1.732 1a.75.75 0 0 0 .75-1.3" style={pathStylesG} />
      <path d="M2 16.75h2a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5" style={pathStylesH} />
      <path d="m3.501 9.65 1.732 1a.751.751 0 0 0 .75-1.3l-1.732-1a.75.75 0 0 0-.75 1.3" style={pathStylesI} />
      <path d="m8.35 4.251 1 1.732a.751.751 0 0 0 1.3-.75l-1-1.732a.75.75 0 0 0-1.3.75" style={pathStylesJ} />

      <path d="M15.25 2v2a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-1.5 0" style={pathStylesC2} />
      <path d="m22.35 3.501-1 1.732a.751.751 0 0 0 1.3.75l1-1.732a.75.75 0 0 0-1.3-.75" style={pathStylesD2} />
      <path d="m27.749 8.35-1.732 1a.751.751 0 0 0 .75 1.3l1.732-1a.75.75 0 0 0-.75-1.3" style={pathStylesE2} />
      <path d="m8.35 4.251 1 1.732a.751.751 0 0 0 1.3-.75l-1-1.732a.75.75 0 0 0-1.3.75" style={pathStylesJ2} />

      <path
        d="M6.144 19.267a.749.749 0 0 0 .804.529 4.877 4.877 0 0 1 .837-.022.748.748 0 0 0 .7-.382 5.153 5.153 0 0 1 9.616 1.907.75.75 0 0 0 .745.663 3.645 3.645 0 0 1 3.072 1.684.75.75 0 0 0 1.147.14 10.258 10.258 0 0 0 3.223-7.476c0-5.678-4.61-10.288-10.288-10.288S5.712 10.632 5.712 16.31c0 1.028.151 2.02.432 2.957"
        style={pathStylesA}
      />
      <path
        d="M7.415 18.266a6.245 6.245 0 0 0-6.165 6.242c0 2.301 1.221 6.242 5.879 6.242h11.717c1.676 0 2.954-.595 3.82-1.526.863-.927 1.324-2.203 1.324-3.618a5.145 5.145 0 0 0-4.502-5.104 6.657 6.657 0 0 0-6.503-5.252c-2.33 0-4.382 1.2-5.57 3.016"
        style={pathStylesB}
      />

      <defs>
        <linearGradient
          id="a"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(-18.269) rotate(-75.997 -1.006 .213)"
        >
          <stop offset="0" style={{ stopColor: '#fcd935', stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: '#dbb500', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient
          id="b"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 -5.61 19.61) scale(19.2789)"
        >
          <stop offset="0" style={{ stopColor: '#e2f4fd', stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: '#4dc4ff', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient
          id="c"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 6.45 9.576) scale(8.37437)"
        >
          <stop offset="0" style={{ stopColor: '#fcd935', stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: '#c19f00', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient
          id="d"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(116.763 9.928 9.215) scale(8.0542)"
        >
          <stop offset="0" style={{ stopColor: '#fcd935', stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: '#c19f00', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient
          id="e"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-5.44457 3.5 -3.5 -5.44457 27.445 9.5)"
        >
          <stop offset="0" style={{ stopColor: '#fcd935', stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: '#c19f00', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient
          id="f"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 14.627 8) scale(10.0251)"
        >
          <stop offset="0" style={{ stopColor: '#fcd935', stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: '#c19f00', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient
          id="g"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-140.264 17.565 6.372) scale(5.68683)"
        >
          <stop offset="0" style={{ stopColor: '#fcd935', stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: '#c19f00', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient
          id="h"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(18.2573 0 0 18.2573 2.743 16)"
        >
          <stop offset="0" style={{ stopColor: '#fcd935', stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: '#c19f00', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient
          id="i"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(10.0304 6.5 -6.5 10.0304 4.555 9.5)"
        >
          <stop offset="0" style={{ stopColor: '#fcd935', stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: '#c19f00', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient
          id="j"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(4.87166 7.797 -7.797 4.87166 9.5 4.703)"
        >
          <stop offset="0" style={{ stopColor: '#fcd935', stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: '#c19f00', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Loader;
