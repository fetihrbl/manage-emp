import { Button, Form } from "react-bootstrap"
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {

    const { addEmployee } = useContext(EmployeeContext);

    const [newemployee, setNewemployee] = useState({
        name:"", email:"", address:"", phone:""
    })

    const { name, email, address, phone } = newemployee;

    const onInputChance = (e) => {
        setNewemployee({...newemployee, [e.target.name]: e.target.value})
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone);
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Control 
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={e => onInputChance(e)}
                    required 
                    />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control 
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={e => onInputChance(e)}
                    required 
                    />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control 
                    as="textarea"
                    placeholder="Address *"
                    name="address"
                    value={address}
                    onChange={e => onInputChance(e)}
                    rows={3} 
                    />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control 
                    type="text"
                    placeholder="Phone"
                    name="phone" 
                    value={phone}
                    onChange={e => onInputChance(e)}
                    />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="success" type="submit" size="lg" >
                        Add New Employess
                </Button>
            </div>
        </Form>
    )
}

export default AddForm;