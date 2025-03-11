"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateRectangleArea(length, width) {
    if (length < 0 || width < 0) {
        throw new Error("Length and width must be non-negative numbers.");
    }
    return length * width;
}
const length = 5;
const width = 3;
const area_of_rectangle = length * width;
console.log(area_of_rectangle);
//# sourceMappingURL=1-find-area-of-rectangle.js.map