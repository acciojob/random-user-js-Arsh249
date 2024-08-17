//your code here
let userData = {}; // Object to store user data

// Function to fetch a new user and display their name and photo
function getUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            userData = {
                fullName: `${user.name.first} ${user.name.last}`,
                age: user.dob.age,
                email: user.email,
                phone: user.phone,
                photo: user.picture.large
            };
            displayUser();
        })
        .catch(error => console.error('Error fetching user:', error));
}

// Function to display the user's full name and photo
function displayUser() {
    document.getElementById('userPhoto').src = userData.photo;
    document.getElementById('userName').textContent = userData.fullName;
    document.getElementById('infoDisplay').textContent = ''; // Clear additional info
}

// Function to show the additional info based on the button clicked
function showInfo(infoType) {
    const infoDisplay = document.getElementById('infoDisplay');
    infoDisplay.textContent = userData[infoType] || 'Info not available';
}

// Fetch and display a user when the page loads
getUser();
