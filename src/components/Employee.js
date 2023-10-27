import { useContext } from "react";
import { Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const Employee = ({ employees }) => {

    const { deleteEmployee } = useContext(EmployeeContext);

    return (
        <>
            {
                employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.address}</td>
                        <td>{employee.phone}</td>
                        <td>

                            <Button href="#editEmployeeModal" className="btn text-warning btn-act transparent-button" 
                            data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Button>

                            <Button onClick={() => deleteEmployee(employee.id)} href="#deleteEmployeeModal" className="btn text-danger btn-act transparent-button" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></Button>

                        </td>
                    </tr>
                ))
            }
        </>
    )
}

export default Employee;