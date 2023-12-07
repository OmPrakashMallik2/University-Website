var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}


// notice bar 
// const noticeBar = document.querySelector('.notice-bar');

// function updateNotice() {
//     // fetch notice
//     const newNotice = "new notice update";
//     noticeBar.querySelector('p').textContent = newNotice;
// }

// setInterval(updateNotice, 1000);


// Function to display the current date and time
function displayCurrentDateTime() {
    // Get the current date and time
    const currentDateTime = new Date();

    // Format the date as desired (e.g., "Month Day, Year")
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = currentDateTime.toLocaleDateString('en-US', dateOptions);

    // Format the time as desired (e.g., "HH:MM:SS AM/PM")
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = currentDateTime.toLocaleTimeString('en-US', timeOptions);

    // Update the content of the "currentDate" and "currentTime" divs
    document.getElementById('currentDate').textContent = `${formattedDate}`;
    document.getElementById('currentTime').textContent = `Time - ${formattedTime}`;
}

// Call the function to display the current date and time when the page loads
window.onload = displayCurrentDateTime;
