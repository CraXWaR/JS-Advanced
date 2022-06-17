function attachEventsListeners() {

    //console.log('TODO:...');
    let dayBtn = document.getElementById("daysBtn");
    let hourBtn = document.getElementById("hoursBtn");
    let minuteBtn = document.getElementById("minutesBtn");
    let secondBtn = document.getElementById("secondsBtn");

    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };
    dayBtn.addEventListener("click", onConvert);
    hourBtn.addEventListener("click", onConvert);
    minuteBtn.addEventListener("click", onConvert);
    secondBtn.addEventListener("click", onConvert);

    function convert(value, unit) {
        let days = value / rations[unit];
        return {
            days: days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds,
        };
    }
    function onConvert(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id);

        days.value = time.days
        hours.value = time.hours
        minutes.value = time.minutes
        seconds.value = time.seconds
    }
}