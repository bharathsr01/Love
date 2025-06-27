# Birthday Gallery Web App for Ruchitha

This is a beautiful, birthday-themed web page and image gallery dedicated to Ruchitha. It features a responsive image grid, fullscreen Instagram-like modal view, live countdown to the next birthday, confetti animation, background music, and a live-updating date/time below the profile picture.

## Features

- **Profile Section:**
  - Shows profile picture, username, and current date/time (auto-updating).
- **Background Music:**
  - Loops automatically, with a toggle button.
- **Confetti Animation:**
  - Festive confetti effect on page load and resize.
- **Birthday Countdown:**
  - Live countdown to the next birthday (June 27).
- **Gallery:**
  - Responsive grid (3 per row desktop, 2 tablet, 1 mobile).
  - Each image has a romantic quote.
  - Click any image to open fullscreen modal with:
    - Centered image
    - Quote/caption below
    - Close (×) button
    - Heart icon and today's date ("Shared with love • ...")
    - Keyboard navigation: Escape to close, arrows to move next/prev
- **Modern, Romantic Design:**
  - Pastel gradient background, soft shadows, rounded corners, handwritten and modern fonts.

## How to Use

1. **Open the App:**
   - Open `ruchitha.html` (or `index.html`) in your browser, e.g. `http://127.0.0.1:5500/ruchitha.html`.
2. **Gallery:**
   - Click any image to view it fullscreen with its quote.
   - Use left/right arrow keys to navigate images in fullscreen.
   - Press Escape or click the background/close button to exit fullscreen.
3. **Profile Date/Time:**
   - The date/time below the profile picture updates every second.
4. **Countdown:**
   - See the live countdown to the next birthday at the top.
5. **Music:**
   - Use the speaker button to mute/unmute background music.

## Customization

- **Add/Change Images:**
  - Add your images to the project folder and update the `images` array in `script.js`.
- **Change Quotes:**
  - Edit the `quote` property for each image in `script.js`.
- **Change Birthday Date:**
  - Update the date in the `getNextBirthday` function in `script.js`.
- **Change Profile Info:**
  - Edit the profile section in `index.html`.

## Tech Stack

- HTML5, CSS3 (with Google Fonts)
- JavaScript (vanilla, no frameworks)

## Credits

- Designed and coded with love for Ruchitha.
- Fonts: [Google Fonts](https://fonts.google.com/)
- Confetti effect inspired by open-source canvas confetti scripts.

---

Enjoy and Happy Birthday, Ruchitha! 🎉💕
