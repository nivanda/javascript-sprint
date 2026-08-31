function classifyDate(date) {
    const now = new Date()
    const past = new Date().setFullYear(now.getFullYear() - 1)
    const future = new Date().setFullYear(now.getFullYear + 1)
    const date1 = new Date("Feb 14, 2027 16:10:51")
    const date2 = new Date("Aug 15, 2027 03:44:48")
    const date3 = new Date("Nov 17, 2026 08:21:29")
    if ((date > past && date < now) || date == now) {
        return "past"
    }
    if (date < past) {
        return "ancient"
    }
    if (date < future && date > now) {
        return "future"
    }
    if (date > future) {
        return "distant future"
    }
    if (date == date1 || date == date2 || date == date3) {
        return "future"
    }
}