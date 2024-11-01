// Function To Set Hover Colors For Multiple Elements
export const setHoverColors = (elements, property, hoverColors) => {
    elements.forEach((element, index) => {
        // Select Color From Array, Loop Back To Start If Needed
        const color = hoverColors[index % hoverColors.length];

        // Apply Hover Color On Mouse Over
        element.addEventListener('mouseover', () => {
            element.style[property] = color;
        });
        // Reset To White On Mouse Out
        element.addEventListener('mouseout', () => {
            element.style[property] = '#FFF';
        });
    });
}

// Function To Add Colors To Child Elements Of Given Parent Elements
export const setChildElementsColors = (parentElements, childSelector, property, colors) => {
    parentElements.forEach((parentElement, index) => {
        // Find All Matching Child Elements Within The Current Parent
        const childElements = parentElement.querySelectorAll(childSelector);

        // Select Color From Array, Loop Back To Start If Needed
        const color = colors[index % colors.length];

        // Apply Color To Specified Property Of Each Child Element
        childElements.forEach((childElement) => {
            childElement.style[property] = color;
        });
    });
}

// Function To Create An Image Slider With Automatic Sliding And Navigation Dots
export const createImagesSlider = (slides, sliderDots, interval) => {
    // Setting The Initial Active Dot Color
    sliderDots[0].style.backgroundColor = '#8F8F8F';

    // Initializing The Current Slide Index
    let currentIndex = 0;

    // Function To Slide To The Next Slide
    const slide = () => {
        // Resetting The Color Of The Current Navigation Dot
        sliderDots[currentIndex].style.backgroundColor = '#D8D8D8';

        // Moving To The Next Slide (Looping Back To Start If At The End)
        currentIndex = (currentIndex + 1) % slides.length;

        // Setting The Color Of The New Current Navigation Dot
        sliderDots[currentIndex].style.backgroundColor = '#8F8F8F';

        // Moving All Slides To Show The Current Slide
        slides.forEach((slide) => {
            slide.style.transform = `translateX(${-(currentIndex * 100)}%)`;
        });
    }

    // Setting Interval To Automatically Slide Every 2.5s
    setInterval(slide, interval);

    // Adding Click Event Listeners To All Slider Navigation Dots
    sliderDots.forEach((sliderDot, index) => {
        sliderDot.addEventListener('click', () => {
            // Resetting The Color Of The Current Navigation Dot
            sliderDots[currentIndex].style.backgroundColor = '#D8D8D8';
            // Setting The Color Of The Clicked Navigation Dot
            sliderDots[index].style.backgroundColor = '#8F8F8F';

            // Setting The Current Index To One Before The Clicked Index Because slide() Will Immediately Move The Index To The Next Slide
            currentIndex = (index === 0) ? slides.length - 1 : index - 1;
            // Triggering The Slide Function
            slide();
        });
    });
}