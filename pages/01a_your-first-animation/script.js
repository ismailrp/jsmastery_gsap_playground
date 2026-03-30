gsap.to(".card", {
  duration: 5,
  scale: 1,
  opacity: 1,
  onComplete: () => {
    gsap.to(".card", {
      duration: 1,
      // rotation: 360,
      repeat: -1,
      yoyo: true,
      y: -20,
    });
  },
});
