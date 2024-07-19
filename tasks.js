let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;

    let arrayOfSalaries = Object.entries(salaries);

    for (let [name, salary] of arrayOfSalaries) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}


topSalary(salaries);




