// find marks that are 85+

let marks = [82, 83, 87, 89, 90, 84, 99, 86, 78];

const result = marks.filter((val) => {
    return val >= 85
})

console.log(result);