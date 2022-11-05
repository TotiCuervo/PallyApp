// functions commonly used

export function sanitizeDate(date: Date) {
    date.setHours(0, 0, 0, 0);
    return date;
}
