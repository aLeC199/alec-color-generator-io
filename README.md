Alec Color Generator 

Alec Color Generator is a lightweight, interactive color palette generator designed for developers, designers, and creatives. It allows users to quickly generate random color schemes, copy individual colors, lock colors to preserve them, and share full palettes via a link. This tool helps streamline design workflows and ensures consistency when working with UI, web, or app development projects.

Table of Contents

Features

Demo

Installation

Usage

How It Works

Why Developers Should Use It

Future Improvements

Features

Random Color Generation

Generates unique hex color codes for multiple color bars with a single click.

Perfect for creating harmonious color palettes or exploring color combinations.

Copy Button

Copy any individual color directly to your clipboard.

Simplifies workflow for CSS, Figma, or other design tools.

Lock Button

Lock specific colors to prevent them from changing when generating new palettes.

Ensures you can experiment with new colors without losing key selections.

Share Button

Copy the entire palette along with a shareable link.

Easily collaborate with other developers or designers and reuse color palettes across projects.

Dark/Light Mode Toggle

Switch between dark and light themes for better usability in different environments.

Responsive Design

Works seamlessly on desktop and mobile devices.

Demo

You can view a live demo here: [https://alec199.github.io/alec-color-generator-io/
]

Installation

Clone the repository:

git clone https://github.com/aLeC199/Alec-color-Generator.git


Open index.html in your browser.

No additional dependencies are required — all functionality is built with vanilla HTML, CSS, and JavaScript.

Usage

Click the ReGenerate button to generate a new color palette.

Use the Copy icon to copy an individual color’s hex code.

Use the Lock icon to prevent a color from changing on regeneration.

Use the Share icon to copy all colors and a shareable palette link.

Toggle Dark/Light mode with the sun/moon icon for a comfortable viewing experience.

How It Works

The generator uses an array of hex digits to create random colors.

Each color bar has a data-color attribute to store its current color for easy copy/share functionality.

The lock feature uses a data-locked attribute to prevent changes to locked colors.

The share feature collects all current colors and generates a URL-friendly string, which is copied to the clipboard.

Toast notifications provide smooth, non-intrusive feedback for copy/share actions.

Why Developers Should Use It

Rapid UI Prototyping: Quickly generate and test color schemes for websites, apps, or design systems.

Consistency: Lock essential colors to maintain brand or theme integrity while experimenting with others.

Efficiency: Copy colors and share palettes instantly, saving time in development and design workflows.

Collaboration: Easily share palettes with teammates or clients via links.

Future Improvements

Allow users to add or remove color bars dynamically.

Enable drag-and-drop reordering of color bars.

Persist user preferences using localStorage (e.g., last palette, dark/light mode).

Export palettes directly to CSS, JSON, or Figma formats.

Integrate more advanced color theory tools (complementary, analogous, triadic palettes).


This project is open-source and available under the MIT License
.
