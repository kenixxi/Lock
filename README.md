# Lock website for Cloudflare Pages

This is a static website folder for the Lock desktop app.

## Files

- `index.html` — main page
- `download.html` — download page
- `info.html` — empty information sections for later
- `styles.css` — all design/styling
- `script.js` — mobile navigation and active page highlighting
- `assets/lock-logo.svg` — logo
- `assets/favicon.svg` — browser icon
- `downloads/` — place your app ZIP here

## How to add your app download

1. Build Lock on Windows with:

   `build_Lock_exe.bat`

2. Go to:

   `dist\Lock`

3. Zip the whole `Lock` folder.

   Important: zip the full folder, not only `Lock.exe`.

4. Rename the zip file to:

   `Lock.zip`

5. Put it inside:

   `lock-website/downloads/Lock.zip`

6. Upload the full `lock-website` folder to Cloudflare Pages.

The download button on `download.html` already points to:

`downloads/Lock.zip`

## Editing text

You can edit the pages with Notepad, VS Code, or any text editor.

Most text is inside:
- `index.html`
- `download.html`
- `info.html`

Most colors/layout are inside:
- `styles.css`


## GitHub Release download

The download button now points to:

https://github.com/kenixxi/Lock/releases/download/v1.0.0/Lock.zip

This means the Cloudflare Pages website stays small, while the app ZIP downloads from GitHub Releases.
