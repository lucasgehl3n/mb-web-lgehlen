function isDateValid(dateStr) {
    const dateReg = /^(?:\d{4}-\d{2}-\d{2}|\d{2}[./-]\d{2}[./-]\d{4})$/;

    if (!dateReg.test(dateStr)) {
        console.error('Invalid format:', dateStr);
        return false;
    }

    let day, month, year;

    [year, month, day] = dateStr.split('-').map(Number);


    const date = new Date(year, month - 1, day);

    return date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day;
}

module.exports = isDateValid;
