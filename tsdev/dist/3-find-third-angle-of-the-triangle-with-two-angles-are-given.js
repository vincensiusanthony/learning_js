"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = 80;
const b = 65;
if (a <= 0 || a >= 180 || b <= 0 || b >= 180 || (a + b) >= 180) {
    console.log("Invalid angles. Angles must be between 0 and 180 degrees, and their sum must be less than 180 degrees.");
}
else {
    const c = 180 - (a + b);
    console.log(c);
}
//# sourceMappingURL=3-find-third-angle-of-the-triangle-with-two-angles-are-given.js.map