# Birthday Surprise Website

Flow (matches the reference video): passcode keypad → wrong-code screen → "I have made something for you" (YES / NO → "How dare you!?") → "Are you really excited?" → 5 gift boxes → Happy Birthday · Make a Wish · Memories · My fav person (letter) · Cutie, in Frame → "Us in every universe" collage → final message.

## 1. What to add (replace files, keep the exact names)
| File | What it is |
|---|---|
| `photos/passcode.jpg` | Photo inside the golden heart on the lock screen |
| `photos/birthday.jpg` | Polaroid on the Happy Birthday screen |
| `photos/memory-1.jpg` … `memory-5.jpg` | 5 hanging polaroids (portrait works best) |
| `photos/frame-1.jpg` … `frame-5.jpg` | "Cutie, in frame" slideshow (landscape 4:3 best) |
| `photos/universe-1.jpg` … `universe-6.jpg` | Collage (duos, funny pairs, anything you two) |
| `audio/song.mp3` | Your favourite song (a placeholder music-box tune is included) |

Photos are placeholders now, so nothing is broken. Keep each photo under ~500 KB for fast loading on phones.

**All text lives in `js/config.js`:** `[BEST FRIEND'S NAME]`, `[NICKNAME]`, `[MY NAME]`, `[BIRTHDAY DATE]`, `[PERSONAL BIRTHDAY MESSAGE]` and the `[MEMORY / INSIDE JOKE]` notes (shown when a polaroid is tapped), the **passcode** (default `1234`; tip: use their birthday as DDMM), and the final line.

## 2. Preview locally
```
cd birthday-site
python3 -m http.server 8000     # then open http://localhost:8000
```
(Or VS Code "Live Server".) Opening index.html by double-click also works, but a local server is closest to the real thing.

## 3. Deploy free on Netlify
1. Go to https://app.netlify.com/drop and sign in (free).
2. Drag the whole `birthday-site` folder onto the page.
3. You get a public URL like `https://random-name.netlify.app`. Rename it in Site settings → Change site name.
No build command. Publish directory = the folder root (`.`).

## 4. Test checklist
**Phone (open the shared link, hold in portrait, then landscape)**
- [ ] Wrong code → "Wrong passcode" → Try again works; correct code advances
- [ ] YES and NO both work; the music starts after the first tap; ♪ button mutes
- [ ] All 5 gifts open and return (pink heart or ❯); opened gifts dim
- [ ] Letter types out and scrolls; polaroid tap shows photo + note; slideshow auto-advances
- [ ] ❯ → collage → tap → final message; no text cut off; no horizontal scroll
**Desktop:** same flow at full-screen and a narrow window; check browser console is clean.
**Before sending:** replace every `[PLACEHOLDER]`, test the passcode, test on the friend's likely phone/browser.

## Notes
- The mascot is an original bear drawn in `js/app.js` (`bear()`); swap that SVG for your own art if you want.
- Fonts load from Google Fonts (needs internet; fallbacks are built in).

## Using your own character images
Put transparent PNGs in `mascot/` and set their paths in `js/config.js` under `mascot` (sign, stand, mad, back, balloon). Any pose left as "" keeps the built-in bear. Roughly 400–600 px tall is plenty.

## Custom mascot images
Put transparent PNGs in `mascot/` and list them in `js/config.js` under `mascot` (stand, sign, mad, back, balloon). Any pose left as `""` keeps the built-in bear. Roughly 400px tall PNGs work well.
