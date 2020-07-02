import React from "react";

import Modal from "./Modal";

const users = [
  {
    id: "1",
    employee_name: "Tiger Nixon",
    employee_salary: "320800",
    employee_age: "61",
    profile_image: "",
  },
  {
    id: "2",
    employee_name: "Garrett Winters",
    employee_salary: "170750",
    employee_age: "63",
    profile_image: "",
  },
  {
    id: "3",
    employee_name: "Ashton Cox",
    employee_salary: "86000",
    employee_age: "66",
    profile_image: "",
  },
  {
    id: "4",
    employee_name: "Cedric Kelly",
    employee_salary: "433060",
    employee_age: "22",
    profile_image: "",
  },
  {
    id: "5",
    employee_name: "Airi Satou",
    employee_salary: "162700",
    employee_age: "33",
    profile_image: "",
  },
  {
    id: "6",
    employee_name: "Brielle Williamson",
    employee_salary: "372000",
    employee_age: "61",
    profile_image: "",
  },
];
class Employee extends React.Component {
  // TODO:: Call this REST API to get list of employees
  // http://dummy.restapiexample.com/api/v1/employees
  render() {
    return (
      <main>
        <h1>List of Employee</h1>
        <ul>
          {users.map((user) => {
            return <li>{user.employee_name}</li>;
          })}
        </ul>
      </main>
    );
  }
}

export default Employee;
