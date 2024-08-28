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