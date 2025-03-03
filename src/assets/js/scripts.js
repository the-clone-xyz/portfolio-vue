export function initTypingEffect(displayedText) {
  const words = [
    "Yogi Syahputra",
    "Programming",
    "Editing",
    "Software Engineer",
    "Web Development",
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    let currentWord = words[wordIndex];
    let speed = isDeleting ? 80 : 150;

    if (!isDeleting) {
      displayedText.value = currentWord.substring(0, charIndex++);
    } else {
      displayedText.value = currentWord.substring(0, charIndex--);
    }

    if (!isDeleting && charIndex === currentWord.length + 1) {
      isDeleting = true;
      speed = 1000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
  }

  setTimeout(typeEffect, 500);
}

window.initTypingEffect = initTypingEffect; // Agar bisa dipanggil dari Vue
