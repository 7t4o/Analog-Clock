function updateClock() {
    let hour = document.querySelector(".hour")
    let mint = document.querySelector(".mint")
    let scnd = document.querySelector(".scnd")
    
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const mints = now.getMinutes()
    const scnds = now.getSeconds()
    
    hour.style.transform = `translate(-50%, -77%) rotate(${30*hours}deg)`;
    mint.style.transform = `translate(-50%, -82%) rotate(${6*mints}deg)`;
    scnd.style.transform = `translate(-50%, -82%) rotate(${6*scnds}deg)`;
}

setInterval(updateClock, 1000);
updateClock();