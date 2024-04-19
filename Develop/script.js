// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // i created an array called 'employees'
  let employees = [];
  // i then declared a variable called 'employeesData' and assigned to true boolean
  let empolyeesData = true;
  // i then added 'employeesData as the condition of this while
  // in this while im just collecting the employee's data like their first and last name as well as the salary
  while (empolyeesData) {
    let firstName = prompt("Enter employee's first name:");
    let lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");
    let salaryInt;
    // i used a isNan function for when if entering the salary data, one adds
    // anything other than an number than it will default to 0
    if (isNaN(salary)) {
      salaryInt = 0;
    } else {
      salaryInt = parseInt(salary);
    }

    // here i am pushing the data collected into the array called Employees
    employees.push({ firstName, lastName, salary: salaryInt });
    // here i am asking the enduser if they would like to add another employee
    const addAnother = confirm("Do you want to add another employee?");
    // in this if statement if the enduser decides to not enter another
    // employee then prompt will cancel
    if (!addAnother) {
      empolyeesData = false;
    }
  }
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // in this if statement i am just checkin to see if the array is empty
  if (employeesArray.length === 0) {
    console.log("The employees array is empty.");
    return 0; 
  }

  let sumOfsalary = 0;
  //  here i am summing up all the salaries in the array and 
  // then dividing by the number of employees to find the average.
  for (let i = 0; i < employeesArray.length; i++)
    sumOfsalary += employeesArray[i].salary;
  const salaryAverage = sumOfsalary / employeesArray.length;
  // console logging the average salary
  console.log(
    "The average employee salary between our employee(s) is $",
    salaryAverage,
  );
  return salaryAverage;
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // here i used the math.floor Math.random to generate a random
  // employee from the array
  const index = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[index];
  // console logging out a congratulations text with the exployee's name
  console.log( "Congratulations! ", randomEmployee.firstName , randomEmployee.lastName , 
  "you are our random drawing winner!");
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
