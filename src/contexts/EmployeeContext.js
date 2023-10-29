import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
    
    const [employees, setEmployees] = useState([

        

    ]);

    useEffect(() => {
        const emloyess = localStorage.getItem('employees');
        setEmployees(JSON.parse(emloyess))
    }, [])

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    })


    const sortedEmployees = employees.sort((a,b) => (a.name < b.name ? -1 : 1));

    const addEmployee = (name, email, address, phone) => {
        setEmployees([...employees, {id:uuidv4(), name, email, address, phone}]);
    }   

    const deleteEmployee = (id) => {
        setEmployees(employees.filter((employee) => employee.id !== id))
    }

    const updateEmployee = (id, updateEmployee) => {
        setEmployees(employees.map((employee) => (employee.id === id ? updateEmployee : employee)))
    }
    
    return(
        <EmployeeContext.Provider value={{sortedEmployees, addEmployee, deleteEmployee, updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;