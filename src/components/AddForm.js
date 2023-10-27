import { Button, Form } from "react-bootstrap"
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {

    const { addEmployee } = useContext(EmployeeContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

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
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required 
                    />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control 
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required 
                    />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control 
                    as="textarea"
                    placeholder="Address *"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    rows={3} 
                    />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control 
                    type="text"
                    placeholder="Phone" 
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
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