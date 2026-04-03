// 👀 This runs on every page you visit.
// It checks if this is a 504 page, then tells the background worker to play the sound!

(function () {
  const title = document.title.toLowerCase();
  const body = document.body ? document.body.innerText.toLowerCase() : "";

  const is504 =
    title.includes("504") ||
    title.includes("gateway time") ||
    body.includes("504 gateway") ||
    body.includes("gateway time-out") ||
    body.includes("gateway timeout");

  if (is504) {
    console.log("504 Fahhh Alert: 504 detected! Telling background to play sound...");
    // 📨 Send a message to the background service worker
    chrome.runtime.sendMessage({ action: "play_fahhh" });
  }
})();
