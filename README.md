🍪 Cookie Replacer Extension
A lightweight browser extension that makes the web a little sweeter by replacing every mention of "cookies" with the 🍪 emoji.

✨ Features
Automatic Detection: Scans webpages in real-time.

Context Aware: Uses a MutationObserver to catch "cookies" even on sites that load content dynamically (like infinite scrolls).

Case Insensitive: Replaces "Cookie", "COOKIE", and "cookies" alike.

🛠️ Installation (Manual/Developer Mode)
Since this project is open-source and free, you can install it directly in Chrome or Edge:

Download this repository as a ZIP file and extract it.

Open your browser and navigate to the extensions page:

Chrome: chrome://extensions

Edge: edge://extensions

Turn on Developer Mode (usually a toggle in the top right).

Click Load unpacked.

Select the folder containing the manifest.json file.

📂 Project Structure
manifest.json: Configuration and permissions for the extension.

content.js: The JavaScript logic that manipulates the webpage text.

🚀 Future Roadmap


[ ] Add a popup menu to toggle the effect on/off.

[ ] Add a counter to show how many cookies have been "eaten" (replaced) on a page.

[ ] Support for more treat-related keywords!