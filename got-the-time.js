function printPrettyDate(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const OGHours = date.getHours()
    let AMPM = ""
    if (OGHours > 11) {
        AMPM = "PM"
    } else {
        AMPM = "AM"
    }
    let hours = OGHours % 12
    if (hours == 0) {
        hours = 12
    }
    if (hours > 0 && hours < 10) {
        hours = "0" + hours
    }
    let minutes = date.getMinutes()
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    let seconds = date.getSeconds()
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    const outString = "Today is " + 
            days[date.getDay()] + 
            ", " + 
            months[date.getMonth()] +
            " " +
            date.getDate() +
            ", " +
            date.getFullYear() +
            ", and the time is " +
            hours +
            ":" +
            minutes +
            ":" +
            seconds +
            " " +
            AMPM
    console.log(outString)
}