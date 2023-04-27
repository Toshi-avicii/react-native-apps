export default function getFormattedDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export const convertToDate = (timestamp) => {
    const date = new Date(timestamp * 1000)
    const formattedDate = date.toLocaleDateString('en-US');
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    let anotherFormat = `${year}-${month}-${day}`;
    return anotherFormat;
}

export const recentExpenses = (array) => {
    const currentDate = new Date();
    const oneWeekAgo = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000));
    const filteredArray = array.filter((obj) => {
        const objDate = new Date(obj.date * 1000);
        return objDate > oneWeekAgo;
    });

    return filteredArray;
}