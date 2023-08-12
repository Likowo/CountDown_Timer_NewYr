const newYear = " 1 Jan 2024";
const countdown = () => {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000; // The difference between the dates is in milliseconds, so divide by 1000 to get seconds. (1000 milliseconds equals 1 second)
        // console.log(totalSeconds) give 12207679.518 seconds until 1 Jan 2024

    const days = Math.floor(totalSeconds / 3600 /24);  //i.e total seconds till new year divided by 3600 seconds in an hour (i.e.60 seconds * 60 minutes), then divided by 24 hours in a day, to get the days from the seconds

    //===>>> i.e const days = Math.floor(12207679.518/ 3600 /24);
    // console.log(days) gives 141 days as  of today. You will get a diffent number of days based on when you run the function

    const hours = Math.floor(totalSeconds / 3600) % 24;  // using modulos; i.e total seconds till new year divided by 3600 seconds in an hour (i.e.60 seconds * 60 minutes), to get the hours; and then use modulo function to get the remainder after dividing by 24 hours, that gives the number of hours on the final day.

    const minutes = Math.floor(totalSeconds / 60) % 60;  // using modulos;i.e total seconds till new year divided by 60 minutes in an hour, to get the minutes; and then use modulo function to get the remainder after dividing by 60 seconds, that gives the number of minutes on the final day.

    const seconds = Math.floor(totalSeconds ) % 60; /// use modulo function to get the remainder after dividing  total seconds until new year by 60 seconds, that gives the number of seconds on the final day.

    // console.log(days,hours,minutes,seconds)

}

countdown()

setInterval(countdown, 1000); //initial countdown every second (1000 milliseconds equals 1 second)