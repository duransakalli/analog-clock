const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const calenderEl = document.querySelector('#calender');
const dayEl = document.querySelector('#day');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const update = () => {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const dayName = days[currentDate.getDay()]
    const monthName = months[currentDate.getMonth()].substring(0,3);
    const monthOfFay = currentDate.getUTCDay();
    const year = currentDate.getFullYear();

    calenderEl.innerHTML = `${monthName} ${monthOfFay}, ${year}`;
    dayEl.innerHTML = dayName;

    const hourDegree = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDegree}deg)`;

    const minuteDegree = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDegree}deg)`;

    const secondDegree = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDegree}deg)`;

    setTimeout(update, 1000)
}

setInterval(update, 1000);