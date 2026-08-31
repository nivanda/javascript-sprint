function classifyDate(date) {
    const now = new Date()
    const past = new Date(now)
    past.setFullYear(now.getFullYear() - 1)
    const future = new Date(now)
    future.setFullYear(now.getFullYear() + 1)
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
}