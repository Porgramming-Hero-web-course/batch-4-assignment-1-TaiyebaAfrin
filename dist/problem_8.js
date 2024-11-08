"use strict";
function validateKeys(obj, keys) {
    for (const key of keys) {
        if (!obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
//# sourceMappingURL=problem_8.js.map