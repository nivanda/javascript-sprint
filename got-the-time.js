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
            date.getMinutes() +
            ":" +
            date.getSeconds() +
            " " +
            AMPM
    return outString
}

console.log(printPrettyDate(new Date()))