import gsap from "gsap";

// A timeline allows us to sequence or overlap animations easily.
// Here we use it for a simple pulse effect that loops infinitely.
const tl = gsap.timeline({ repeat: -1, yoyo: true });

// 1. Animating Numeric Values (scale) & Colors (backgroundColor)
// The iris pulses slightly and gets a brighter red glow.
tl.to(".iris", {
  scale: 1.05,
  duration: 1.5,
  ease: "sine.inOut",
  backgroundColor: "#ff0000",
});

// 2. Animating Rotation
// The Mangekyou pattern spins continuously.
gsap.to(".pattern", {
  rotation: 360,
  duration: 4,
  ease: "none", // Linear rotation
  repeat: -1,
});

// 3. Animating Complex String Properties (boxShadow)
// We animate the outer glow of the eye to make it look "active".
gsap.to(".sharingan", {
  boxShadow: "0 0 80px rgba(255, 0, 0, 0.8)",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

// 4. Using Callbacks and State (scaleY for blinking)
// We use a function to trigger a random blink effect using scaleY.
const blink = () => {
  gsap.to(".sharingan", {
    scaleY: 0.1, // Squash the eye to simulate a blink
    duration: 0.1,
    yoyo: true,
    repeat: 1,
    onComplete: () => {
      // Schedule the next blink at a random interval
      setTimeout(blink, Math.random() * 5000 + 2000);
    },
  });
};

blink();
