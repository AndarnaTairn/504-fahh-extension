// 🔊 This script lives in the hidden offscreen page.
// When it gets the "play_audio" message, it plays the Fahhh sound!

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "play_audio") {
    const audio = document.getElementById("fahhh-audio");
    if (audio) {
      audio.currentTime = 0; // Rewind to start (in case it played before)
      audio.volume = 1.0;
      audio.play().then(() => {
        console.log("504 Fahhh Alert: FAHHHHH! 😂🔊");
      }).catch((err) => {
        console.error("504 Fahhh Alert: Could not play audio:", err);
      });
    }
  }
});
