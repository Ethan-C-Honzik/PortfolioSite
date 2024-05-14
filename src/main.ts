const VANTA = window['VANTA'];
VANTA.NET({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1,
  scaleMobile: 1.00,
  color: 'hsl(0, 100%, 74%)',
  backgroundColor: 'hsl(220, 24%, 5%)'
})
let canvas = <HTMLElement>document.querySelector('.vanta-canvas');
canvas.style.position = 'fixed';


