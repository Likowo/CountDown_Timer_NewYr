const newYear = " 1 Jan 2024";
const countdown = () => {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000; // (1000 milliseconds equals 1 second)

    console.log(totalSeconds)


}

countdown()

setInterval(countdown, 1000); //initial countdown every second (1000 milliseconds equals 1 second)