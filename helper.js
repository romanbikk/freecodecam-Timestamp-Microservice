const getDate = (dateString) => {
    const timestamp = Date.parse(dateString)
    if(isNaN(timestamp)) {
        return { error : "Invalid Date" };
    }

    return {
        unix: timestamp,
        utc: new Date(dateString)
    };
}

module.exports = {getDate};