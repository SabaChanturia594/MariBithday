for (let i = 0; i < 60; i++) {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
  confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
  document.body.appendChild(confetti);
}
window.addEventListener("DOMContentLoaded", () => {
  const song = document.getElementById("birthdaySong");
  
  // სცადე დაკვრა როგორც კი გვერდი ჩაიტვირთება
  song.volume = 0.6;
  song.play().catch((e) => {
    console.warn("Autoplay was blocked. Will play on user interaction.");
    
    // fallback: ითამაშოს როგორც კი მომხმარებელი დააკლიკებს სადმე
    document.body.addEventListener("click", () => {
      song.play();
    }, { once: true });
  });
});
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // Hue — განსხვავებული ფერები
  balloon.style.setProperty('--hue', Math.floor(Math.random() * 360));

  // შემთხვევითი მარცხნიდან პოზიცია
  balloon.style.left = Math.random() * 100 + "vw";

  // შემთხვევითი ზომა
  const scale = Math.random() * 0.5 + 0.5;
  balloon.style.transform = `scale(${scale})`;

  document.querySelector(".balloon-container").appendChild(balloon);

  // წაშალე როცა აინიმაცია მთავრდება
  setTimeout(() => {
    balloon.remove();
  }, 8000);
}

// რეგულარული ბუშტების გაშვება
setInterval(createBalloon, 500);
