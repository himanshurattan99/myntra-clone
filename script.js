// Selecting All List Items Within The Categories Section
const categoryItems = document.querySelectorAll('#categories li');
// Defining Colors For Each Category Item
const categoryColors = ['#E72744', '#F13AB1', '#F05524', '#FD913C', '#0ABAB5', '#E72744'];

// Adding Hover Effects To Each Category Item
categoryItems.forEach((categoryItem, index) => {
    // Adding Bottom Border On Mouse Over
    categoryItem.addEventListener('mouseover', () => {
        categoryItem.style.borderBottom = `0.18rem solid ${categoryColors[index]}`;
    });

    // Removing Bottom Border On Mouse Out
    categoryItem.addEventListener('mouseout', () => {
        categoryItem.style.borderBottom = '';
    });
});

// Selecting All List Items Within The User Menu Section
const userMenuItems = document.querySelectorAll('#user-menu li');
// Defining Colors For Each User Menu Item
const userMenuColors = ['#E72744', '#F13AB1', '#F05524'];

// Adding Hover Effects To Each User Menu Item
userMenuItems.forEach((menuItem, index) => {
    // Adding Bottom Border On Mouse Over
    menuItem.addEventListener('mouseover', () => {
        menuItem.style.borderBottom = `0.18rem solid ${userMenuColors[index]}`;
    });

    // Removing Bottom Border On Mouse Out
    menuItem.addEventListener('mouseout', () => {
        menuItem.style.borderBottom = '';
    });
});

// Selecting All Images In The Spotlight Brands Slider
const spotlightBrandsImages = document.querySelectorAll('#spotlight-brands-slider img');
// Selecting All Navigation Dots For The Spotlight Brands Slider
const spotlightSliderDots = document.querySelectorAll('#spotlight-slider-nav button');

// Setting The Initial Active Dot Color
spotlightSliderDots[0].style.backgroundColor = '#8F8F8F';

// Initializing The Current Slide Index
let currentIndex = 0;

// Function To Slide To The Next Image
const slideSpotlightImage = () => {
    // Resetting The Color Of The Current Navigation Dot
    spotlightSliderDots[currentIndex].style.backgroundColor = '#D8D8D8';

    // Moving To The Next Slide (Looping Back To Start If At The End)
    currentIndex = (currentIndex + 1) % spotlightBrandsImages.length;

    // Setting The Color Of The New Current Navigation Dot
    spotlightSliderDots[currentIndex].style.backgroundColor = '#8F8F8F';

    // Moving All Images To Show The Current Slide
    spotlightBrandsImages.forEach((image) => {
        image.style.transform = `translateX(${-(currentIndex * 100)}%)`;
    });
}

// Setting Interval To Automatically Slide Image Every 2.5s
setInterval(slideSpotlightImage, 2500);

// Adding Click Event Listeners To All Slider Navigation Dots
spotlightSliderDots.forEach((sliderDot, index) => {
    sliderDot.addEventListener('click', () => {
        // Resetting The Color Of The Current Navigation Dot
        spotlightSliderDots[currentIndex].style.backgroundColor = '#D8D8D8';
        // Setting The Color Of The Clicked Navigation Dot
        spotlightSliderDots[index].style.backgroundColor = '#8F8F8F';

        // Setting The Current Index To One Before The Clicked Index Because slideSpotlightImage() Will Immediately Move The Index To The Next Slide
        currentIndex = (index === 0) ? spotlightBrandsImages.length - 1 : index - 1;
        // Triggering The Slide Image Function
        slideSpotlightImage();
    });
});