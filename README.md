# 504 Fahhh Alert

> Because suffering in silence is so last year.

---

## What is this?

You're sitting there, **waiting for your KTU results** like a good student.  
You click the link. You wait. You pray.  
And then...

**504 Gateway Time-out.**

Again.

AGAIN.

**FOR THE 10TH TIME TODAY.**

Well now at least your laptop will scream for you.

---

## What does it do?

Every time Chrome loads a **504 Gateway Timeout** page,  
this extension will play the **FAHHH** sound automatically.

No setup. No clicking. Just instant emotional validation.

---

## How to Install

1. Download or clone this repo
2. Open Chrome and go to `chrome://extensions`
3. Turn on **Developer Mode** (top right toggle)
4. Click **"Load unpacked"**
5. Select the `fahhh-v2` folder
6. Visit any 504 page and enjoy

---

## Project Structure

```
fahhh-v2/
├── manifest.json     # The ID card of the extension
├── content.js        # Watches the page for 504
├── background.js     # The middleman
├── offscreen.html    # Secret room where audio plays
├── offscreen.js      # Actually blasts the sound
└── fahhh.mp3         # The star of the show
```

---

## How it works

```
You open a 504 page
        |
content.js spots "504 Gateway Time-out"
        |
Sends a message to background.js
        |
background.js opens a hidden offscreen page
        |
offscreen.js plays fahhh.mp3
```

---

## Built for

KTU students who check their results 47 times a day  
and get a 504 error 46 of those times.

---

## Contributing

Found a bug? The server probably timed out while you were reporting it.  
But seriously — PRs are welcome!

---

## License

MIT — do whatever you want with it.  
Just know that this extension was born out of **pure academic pain**.

---

*Made with a lot of 504 errors.*
