let scrollText = <NodeListOf<HTMLParagraphElement>>(
  document.querySelectorAll('.ScrollContainer .scroll .RightToLeft p')
);
let skills = [
  "Backend",
  "Graphics Programming",
  "Embedded",
  "PCB Design",
  "Frontend",
  "GameDev",
  "IOT",
  "Creative Coding",
  "Lighting Design",
  "Blender",
  "CAD",
  "Visual Effects",
  "Music Videos",
  "Music Production",
  "Shaders",
];
let skillStr = '';
skills.forEach(skill => {
  skillStr += skill + '    ';
});
scrollText.forEach((p) => {
  p.style.whiteSpace = "pre";
  p.textContent = skillStr;
});


const VANTA = window["VANTA"];
VANTA.NET({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1,
  scaleMobile: 1.0,
  color: "#3DC7F5",
  backgroundColor: "hsl(220, 24%, 5%)",
});
let canvas = <HTMLElement>document.querySelector(".vanta-canvas");
canvas.style.position = "fixed";



