// Global variables for user statistics and state
let userCount = 0;
let currentUser = null;
let isLoading = false;

// DOM elements cache
const elements = {
    userName: document.getElementById('userName'),
    designation: document.getElementById('designation'),
    userImage: document.getElementById('userImage'),
    userCard: document.getElementById('userCard'),
    loadingSpinner: document.getElementById('loadingSpinner'),
    randomUserBtn: document.getElementById('randomUserBtn'),
    refreshBtn: document.getElementById('refreshBtn'),
    userMeta: document.getElementById('userMeta'),
    userAge: document.getElementById('userAge'),
    userCountry: document.getElementById('userCountry'),
    statsContainer: document.getElementById('statsContainer'),
    userCountDisplay: document.getElementById('userCount')
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('User Profile Cards Application Initialized');
    updateUserCount();
});

// Enhanced randomUser function with loading states and error handling
function randomUser() {
    if (isLoading) return;
    
    setLoadingState(true);
    
    // Clear previous user data
    clearUserData();
    
    // Fetch random user data from API
    fetch("https://randomuser.me/api/")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (!data.results || data.results.length === 0) {
                throw new Error('No user data received');
            }
            
            const user = data.results[0];
            displayUserData(user);
            updateUserCount();
            showRefreshButton();
            
            // Add animation to card
            animateCard();
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
            showErrorMessage(error.message);
        })
        .finally(() => {
            setLoadingState(false);
        });
}

// Refresh user function for getting new data
function refreshUser() {
    randomUser();
}

// Display user data in the UI
function displayUserData(user) {
    try {
        // Extract user information
        const fullName = `${user.name.first} ${user.name.last}`;
        const gender = user.gender;
        const image = user.picture.medium;
        const age = user.dob.age;
        const country = user.location.country;
        
        // Determine designation based on gender
        let designation;
        if (gender === "male") {
            designation = user.location.city;
        } else {
            designation = user.location.state;
        }
        
        // Update DOM elements with user data
        elements.userName.innerHTML = `<b>${capitalizeWords(fullName)}</b>`;
        elements.designation.textContent = capitalizeWords(designation);
        elements.userImage.src = image;
        elements.userImage.alt = `Portrait of ${fullName}`;
        
        // Update additional user metadata
        elements.userAge.textContent = `${age} years old`;
        elements.userCountry.textContent = country;
        elements.userMeta.style.display = 'flex';
        
        // Store current user
        currentUser = user;
        
        console.log('User data displayed successfully:', user);
    } catch (error) {
        console.error('Error displaying user data:', error);
        showErrorMessage('Error displaying user information');
    }
}

// Helper function to capitalize words
function capitalizeWords(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

// Set loading state
function setLoadingState(loading) {
    isLoading = loading;
    
    if (loading) {
        elements.loadingSpinner.style.display = 'flex';
        elements.randomUserBtn.disabled = true;
        elements.randomUserBtn.classList.add('loading');
        elements.userCard.style.opacity = '0.7';
    } else {
        elements.loadingSpinner.style.display = 'none';
        elements.randomUserBtn.disabled = false;
        elements.randomUserBtn.classList.remove('loading');
        elements.userCard.style.opacity = '1';
    }
}

// Clear user data
function clearUserData() {
    elements.userName.innerHTML = '<b>Loading...</b>';
    elements.designation.textContent = 'Fetching user information...';
    elements.userMeta.style.display = 'none';
}

// Show refresh button after first user is loaded
function showRefreshButton() {
    if (elements.refreshBtn) {
        elements.refreshBtn.style.display = 'inline-flex';
    }
}

// Update user count statistics
function updateUserCount() {
    userCount++;
    if (elements.statsContainer && elements.userCountDisplay) {
        elements.statsContainer.style.display = 'block';
        elements.userCountDisplay.textContent = userCount;
    }
}

// Animate card when new user is loaded
function animateCard() {
    elements.userCard.style.transform = 'scale(0.95)';
    setTimeout(() => {
        elements.userCard.style.transform = 'scale(1)';
    }, 100);
}

// Show error message to user
function showErrorMessage(message) {
    elements.userName.innerHTML = '<b>Error</b>';
    elements.designation.textContent = message || 'Failed to load user data';
    elements.userImage.src = './img_john_doe.png'; // Fallback image
    elements.userMeta.style.display = 'none';
    
    // Also log to console for debugging
    console.error('Application Error:', message);
}

// Keyboard shortcuts for better UX
document.addEventListener('keydown', function(event) {
    // Space bar or Enter key to generate new user
    if (event.code === 'Space' || event.code === 'Enter') {
        if (!isLoading && document.activeElement.tagName !== 'INPUT') {
            event.preventDefault();
            randomUser();
        }
    }
    
    // 'R' key to refresh
    if (event.code === 'KeyR' && !event.ctrlKey && !event.metaKey) {
        if (!isLoading && document.activeElement.tagName !== 'INPUT') {
            event.preventDefault();
            refreshUser();
        }
    }
});

// Add touch support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

elements.userCard.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

elements.userCard.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    // Swipe left to get new user
    if (Math.abs(diff) > swipeThreshold && diff > 0) {
        if (!isLoading) {
            randomUser();
        }
    }
}

// Fallback function for legacy support (maintains original API reference)
function showNextUser() {
    console.log('Legacy showNextUser function called - redirecting to randomUser');
    randomUser();
}

// Export functions for potential external use
window.UserProfileApp = {
    randomUser,
    refreshUser,
    getCurrentUser: () => currentUser,
    getUserCount: () => userCount,
    isLoading: () => isLoading
};

console.log('User Profile Cards JavaScript loaded successfully');