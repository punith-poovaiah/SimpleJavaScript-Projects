function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
  
    // Format the time
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    // .toString()
    // .padStart(2, "0");
  
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    timeElement.textContent = formattedTime;
  }
  
  // Call the function to set the initial time
  updateTime();
  
  // Update the time every second
  setInterval(updateTime, 1000);
  