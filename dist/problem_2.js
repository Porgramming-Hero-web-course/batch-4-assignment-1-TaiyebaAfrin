"use strict";
function removeDuplicates(numbers) {
    return numbers.filter((value, index, self) => self.indexOf(value) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
//# sourceMappingURL=problem_2.js.map