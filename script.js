import { setHoverColors, createImagesSlider } from './utils.js';

// Selecting All List Items Within The Categories Section
const categoryItems = document.querySelectorAll('#categories li');
// Defining Colors For Each Category Item
const categoryColors = ['#E72744', '#F13AB1', '#F05524', '#FD913C', '#0ABAB5', '#E72744'];
// Selecting All List Items Within The User Menu Section
const userMenuItems = document.querySelectorAll('#user-menu li');
// Defining Colors For Each User Menu Item
const userMenuColors = ['#E72744', '#F13AB1', '#F05524'];

// Applying Hover Effects To border-bottom-color Property Of Category And User Menu Items
setHoverColors(categoryItems, 'borderBottomColor', categoryColors);
setHoverColors(userMenuItems, 'borderBottomColor', userMenuColors);

// Selecting All Images In The Spotlight Brands Slider
const spotlightBrandsImages = document.querySelectorAll('#spotlight-brands-slider img');
// Selecting All Navigation Dots For The Spotlight Brands Slider
const spotlightSliderDots = document.querySelectorAll('#spotlight-slider-nav button');

// Initializing Image Slider For Spotlight Brands
createImagesSlider(spotlightBrandsImages, spotlightSliderDots, 2500);