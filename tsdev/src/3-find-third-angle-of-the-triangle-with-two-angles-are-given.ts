export{};
const a: number = 80;
const b: number = 65;

if (a <= 0 || a >= 180 || b <= 0 || b >= 180 || (a + b) >= 180) {
    console.log("Invalid angles. Angles must be between 0 and 180 degrees, and their sum must be less than 180 degrees.");
} else {
    const c: number = 180 - (a + b);
    console.log(c);
}