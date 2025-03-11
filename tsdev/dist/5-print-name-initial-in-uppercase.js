"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInitials(name) {
    const words = name.trim().split(/\s+/);
    if (words.length < 2) {
        throw new Error("Input must contain at least a first and last name.");
    }
    const firstNameInitial = words[0].charAt(0).toUpperCase();
    const lastNameInitial = words[words.length - 1].charAt(0).toUpperCase();
    return firstNameInitial + lastNameInitial;
}
console.log(getInitials("John Doe"));
//# sourceMappingURL=5-print-name-initial-in-uppercase.js.map