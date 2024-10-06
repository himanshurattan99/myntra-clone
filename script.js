import { setHoverColors, createImagesSlider } from './utils.js';

// Selecting All List Items Within The Categories Section
const categoryItems = document.querySelectorAll('#categories>li');
// Defining Colors For Each Category Item
const categoryColors = ['#EE5F73', '#FB56C1', '#F26A10', '#F2C210', '#0DB7AF', '#FF3F6C'];
// Selecting All List Items Within The User Menu Section
const userMenuItems = document.querySelectorAll('#user-menu>li');
// Defining Colors For Each User Menu Item
const userMenuColors = ['#F16565', '#F13AB1', '#F05524'];

// Applying Hover Effects To border-bottom-color Property Of Category And User Menu Items
setHoverColors(categoryItems, 'borderBottomColor', categoryColors);
setHoverColors(userMenuItems, 'borderBottomColor', userMenuColors);

// Selecting All Images In The Spotlight Brands Slider
const spotlightBrandsImages = document.querySelectorAll('#spotlight-brands-slider img');
// Selecting All Navigation Dots For The Spotlight Brands Slider
const spotlightSliderDots = document.querySelectorAll('#spotlight-slider-nav button');

// Initializing Image Slider For Spotlight Brands
createImagesSlider(spotlightBrandsImages, spotlightSliderDots, 2500);

// Selecting All Images In The Featured Brands Slider
const featuredBrandsSlides = document.querySelectorAll('.featured-brands-slide');
// Selecting All Navigation Dots For The Featured Brands Slider
const featuredSliderDots = document.querySelectorAll('#featured-slider-nav button');
// Selecting All Images In The Global Brands Slider
const globalBrandsSlides = document.querySelectorAll('.global-brands-slide');
// Selecting All Navigation Dots For The Global Brands Slider
const globalSliderDots = document.querySelectorAll('#global-slider-nav button');

// Initializing Images Slider For Featured Brands And Global Brands Slider
createImagesSlider(featuredBrandsSlides, featuredSliderDots, 5000);
createImagesSlider(globalBrandsSlides, globalSliderDots, 5000);