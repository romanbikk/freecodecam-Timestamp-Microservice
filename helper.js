
const getDate = (dateString) => {
    const date = isNaN(dateString) ? new Date(dateString) : new Date(+dateString);
    if(isNaN(date)) {
        return { error : "Invalid Date" };
    }

    return {
        unix: Date.parse(date),
        utc: date.toUTCString()
    };
}

module.exports = {getDate};