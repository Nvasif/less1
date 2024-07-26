// Employee objects
const employee1 = {
    name: "John",
    lastName: "Doe",
    age: 30,
    companies: ["Company A", "Company B", "Company C"]
};

const employee2 = {
    name: "Jane",
    lastName: "Smith",
    age: 28,
    companies: ["Company X", "Company Y"]
};

// Function to compare employees
function compareEmployees(emp1, emp2) {
    if (emp1.companies.length > emp2.companies.length) {
        console.log("${emp1.name} has worked in more companies.");
    } else if (emp1.companies.length < emp2.companies.length) {
        console.log("${emp2.name} has worked in more companies.");
    } else {
        console.log("Both ${emp1.name} and ${emp2.name} have worked in the same number of companies.");
    }
    
    console.log("Full list of companies ${emp1.name} has worked in:");
    for (let company of emp1.companies) {
        console.log(company);
    }

    console.log("Full list of companies ${emp2.name} has worked in:");
    for (let company of emp2.companies) {
        console.log(company);
    }
}

// Comparing employees
compareEmployees(employee1, employee2);