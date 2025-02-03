function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    const utcTime = now.toUTCString();
    utcTimeElement.textContent = utcTime;
}

// Update time when the page loads
updateUTCTime();
