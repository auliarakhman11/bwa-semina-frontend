import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

function PageSignin() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    };

    return (
        <Container md={12}>
            <Card style={{ width: '50%' }} className="m-auto mt-5">
            
                <Card.Body>
                <Card.Title className="text-center">Login Page</Card.Title>
                <Form>

                    <TextInputWithLabel
                        label='Email Addres'
                        name="email"
                        value={form.email} 
                        type="email" 
                        placeholder="Enter email"
                        onChange={handleChange}
                    />

                    <TextInputWithLabel
                        label='Password'
                        name="password"
                        value={form.password} 
                        type="password" 
                        placeholder="Password"
                        onChange={handleChange}
                    />

                    <SButton variant="primary" type="submit" className='mt-3'>
                        Submit
                    </SButton>
                </Form>
                </Card.Body>
            </Card>
            
        </Container>
    )
}

export default PageSignin;