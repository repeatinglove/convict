document.addEventListener("DOMContentLoaded", () => {
  const enterScreen = document.getElementById("enter-screen");
  const audio = document.getElementById("bg-audio");
  const dollWrapper = document.querySelector(".doll-wrapper");

  // Hide doll initially
  dollWrapper.style.display = "none";

  // Cycle tab title fast for a haunted vibe
  const titles = [
    "guilty",
    "cared",
    "forgotten",
    "death",
    "ego"
  ];
  let i = 0;
  setInterval(() => {
    document.title = titles[i];
    i = (i + 1) % titles.length;
  }, 500); // changes every 500ms

  // Click enter screen to start everything
  enterScreen.addEventListener("click", () => {
    // Play audio at 70% volume
    audio.volume = 0.7;
    audio.play().catch(err => console.log(err));

    // Show doll with glitch effect
    dollWrapper.style.display = "block";

    // Fade out enter screen
    enterScreen.style.opacity = "0";
    setTimeout(() => enterScreen.remove(), 500);
  });

  // Optional subtle background flicker for more creepiness
  setInterval(() => {
    document.body.style.backgroundColor = Math.random() > 0.985 ? "#111" : "";
  }, 1000);
});