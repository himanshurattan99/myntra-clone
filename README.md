# Myntra Clone

A pixel-perfect clone of Myntra's e-commerce website home page frontend, showcasing modern web development practices and responsive design principles.

## 🚀 Features

- **Interactive Navigation Menu**
  - Dynamic color-coded dropdown menus
  - Responsive backdrop overlay for enhanced UI/UX

- **Dynamic Image Sliders**
  - Auto-sliding functionality
  - Interactive navigation dots
  - Multiple independent sliders for different products sections

## 🛠️ Technical Stack

- **HTML5**
  - Semantic markup
  - Modern HTML structure
  - Accessibility considerations

- **CSS3**
  - Flexbox layout system
  - CSS transitions
  - Responsive design principles

- **JavaScript**
  - ES6+ features
  - Module system
  - Event handling
  - DOM manipulation
  - Utility functions

## 📁 Project Structure

```
├── index.html         # Main HTML file
├── style.css          # Global styles
├── script.js          # Main JavaScript file
└── utils.js           # Utility functions
```

## 🔧 Core Functionalities

### Color Management System
```javascript
const setHoverColors = (elements, property, hoverColors) => {
    elements.forEach((element, index) => {
        const color = hoverColors[index % hoverColors.length];
        // Hover state management
    });
}
```

### Images Slider Implementation
```javascript
const createImagesSlider = (slides, sliderDots, interval) => {
    // Automatic sliding functionality
    // Navigation dot integration
    // Transition handling
}
```

## 🎨 Styling Highlights

- **Color Palette**
  - Background : `#FFF`, `#F5F5F666`, `rgba(0, 0, 0, .3)`, `#FAFBFC`, `#F5F5F5`
  - Text : `#232323`, `#282C3F`, `#535766`, `#FF3F6C`, `#808080`, `#696B79`, `#000000`, `#526CD0`
  - Border : `#FFF`, `#F5F5F5`, `#D4D5D8`, `#EAEAEC`, `#D8D8D8`
  - Hover/Active State : `#8F8F8F`, `#FF3F6C`, `#EE5F73`, `#FB56C1`, `#F26A10`, `#F2C21`', `#0DB7AF`, `#FF3F6C`,  
                         `#F16565`, `#F13AB1`, `#F05524`
  - Box Shadow : `rgba(0, 0, 0, 0.05)`

- **Typography**
  - Primary Font: "Roboto", sans-serif
  - Various font weights for different UI elements
  - Responsive font sizing

## 🔍 Key Components

1. **Header Navigation**
   - Sticky positioning
   - Shadow effects

2. **Dropdown Menus**
   - Multi-column layout
   - Hover states
   - Backdrop overlay

3. **Search Bar**
   - Stylized search bar with icon
   - Focus state for better UI/UX

4. **Product Sections**
   - Images Sliders
   - Grid-based layouts

5. **Footer**
   - Multi-section layout

## 🙏 Acknowledgments

- Original design inspiration from [Myntra](https://www.myntra.com)
- Icons and assets used in this project belong to their respective owners