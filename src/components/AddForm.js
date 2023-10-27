import { Button, Form } from "react-bootstrap"

const AddForm = () => {

    return (
        <Form>

            <Form.Group className="mb-3">
                <Form.Control 
                    type="text"
                    placeholder="Name *"
                    required 
                    />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control 
                    type="email"
                    placeholder="Email *"
                    required 
                    />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control 
                    as="textarea"
                    placeholder="Address *"
                    rows={3} 
                    />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control 
                    type="text"
                    placeholder="Phone" 
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