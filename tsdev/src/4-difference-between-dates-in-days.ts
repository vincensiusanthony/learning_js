export{};
function getDateDifference(date1: string, date2: string): number {
    const startDate = new Date(date1);
    const endDate = new Date(date2);
    const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);
    return Math.abs(differenceInDays);
}

const date1 = "2024-03-19";
const date2 = "2024-03-21";
const difference = getDateDifference(date1, date2);
console.log(difference);