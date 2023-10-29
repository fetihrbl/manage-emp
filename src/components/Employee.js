import { useContext, useState, useEffect } from "react";
import EditForm from './EditForm'
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

const Employee = ({ employee }) => {

    const { deleteEmployee } = useContext(EmployeeContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose();
    }, [employee])


    return (
        <>
        
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>

                <OverlayTrigger
                    overlay={
                        <Tooltip id={'tooltip-top'}>
                            Edit
                        </Tooltip>
                    }>
                    <Button onClick={handleShow} href="#editEmployeeModal" className="btn text-warning btn-act transparent-button"
                        data-toggle="modal"><i className="material-icons">&#xE254;</i></Button>
                </OverlayTrigger>

                <OverlayTrigger
                    overlay={
                        <Tooltip id={'tooltip-top'}>
                            Delete
                        </Tooltip>
                    }>
                    <Button onClick={() => deleteEmployee(employee.id)} href="#deleteEmployeeModal" className="btn text-danger btn-act transparent-button" data-toggle="modal"><i className="material-icons">&#xE872;</i></Button>
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Update Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theEmployee={employee} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Employee;