function recentDay(){
    const day = document.getElementById('day');
    const now = new Date();
    const time = now.toUTCString();
    day.innerText = `${time}`;

}
recentDay();
setInterval(recentDay, 1000);