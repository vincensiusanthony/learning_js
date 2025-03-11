"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateCircleMetrics(radius) {
    if (radius <= 0) {
        throw new Error("Radius must be greater than zero.");
    }
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * Math.pow(radius, 2);
    circumference = Math.floor(circumference * 10000) / 10000;
    area = Math.floor(area * 1000) / 1000;
    return { diameter, circumference, area };
}
const metrics = calculateCircleMetrics(5);
console.log(`diameter = ${metrics.diameter}, circumference = ${metrics.circumference}, area = ${metrics.area}`);
//# sourceMappingURL=2-find-diameter-circumference-and-area-of-circle.js.map