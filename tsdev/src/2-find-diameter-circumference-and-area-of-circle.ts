export{};
interface CircleMetrics {
    diameter: number;
    circumference: number;
    area: number;
}

function calculateCircleMetrics(radius: number): CircleMetrics {
    if (radius <= 0) {
        throw new Error("Radius must be greater than zero.");
    }
    let diameter: number = 2 * radius;
    let circumference: number = 2 * Math.PI * radius;
    let area: number = Math.PI * Math.pow(radius, 2);
    circumference = Math.floor(circumference * 10000) / 10000;
    area = Math.floor(area * 1000) / 1000;
    return { diameter, circumference, area };
}

const metrics = calculateCircleMetrics(5);
console.log(`diameter = ${metrics.diameter}, circumference = ${metrics.circumference}, area = ${metrics.area}`);