export {};
function calculateRectangleArea(length: number, width: number): number {
    if (length < 0 || width < 0) {
        throw new Error("Length and width must be non-negative numbers.");
    }
    return length * width;
}

const length: number = 5;
const width: number = 3;
const area_of_rectangle: number = length * width;
console.log(area_of_rectangle);
