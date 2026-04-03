// 🏭 This is the background worker — always running behind the scenes.
// When content.js finds a 504, it sends a message here.
// This worker creates a hidden "offscreen" page and plays the sound from there!

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "play_fahhh") {
    playFahhhSound();
  }
});

async function playFahhhSound() {
  try {
    // Check if an offscreen document already exists
    const existingContexts = await chrome.runtime.getContexts({
      contextTypes: ["OFFSCREEN_DOCUMENT"],
    });

    if (existingContexts.length === 0) {
      // 🏗️ Create the hidden offscreen page (like a secret room that plays audio!)
      await chrome.offscreen.createDocument({
        url: chrome.runtime.getURL("offscreen.html"),
        reasons: ["AUDIO_PLAYBACK"],
        justification: "Play Fahhh sound when 504 Gateway Timeout is detected",
      });
    }

    // 📨 Tell the offscreen page to play the sound
    chrome.runtime.sendMessage({ action: "play_audio" });

  } catch (err) {
    console.error("504 Fahhh Alert: Error playing sound:", err);
  }
}
