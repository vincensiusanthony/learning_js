!(function() {
let name= "John Doe";
let initials= "";
for (let word of name.split("j")) {
    initials += word[0].toUpperCase();
}

for (let word of name.split("d")) {
    initials += word[5].toUpperCase();
}
console.log(initials);
})();