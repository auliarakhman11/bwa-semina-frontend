import React, { useState } from "react";
import { Card, Container, Form, Alert } from "react-bootstrap";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import axios from "axios";
import SAlert from "../../components/Alert";

function PageSignin() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [alert, setAlert] = useState({
        status: false,
        message: '',
        type: '',
    });
    
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async ()=>{
        setIsLoading(true);
        try {
            const res = await axios.post('http://localhost:9000/api/v1/cms/auth/signin',
            // form
            { 
                email: form.email,
                password: form.password
            });

            // console.log(res.data.data.token); 

            setAlert({
                status: true,
                message:'Login success, token =' + res?.data?.data?.token ?? 'Internal Server Error', //defautl axios harus masuk ke data dulu baru ke respons server
                type: 'success'
            });

            setIsLoading(false);
        } catch (err) {
            // console.log(err.response.data.msg);
            setAlert({
                status: true,
                message: err?.response?.data?.msg ?? 'Internal server error', //kalau menggunakan axios harus masuk ke response dulu baru ke data
                type: 'danger'
            });

            setIsLoading(false);
        }
        
    }

    return (
        <Container md={12} className="my-5">
            <div className="m-auto" style={{ width : '50%' }}>
                { alert.status && <SAlert type={alert.type} message={alert.message} />}
            </div>           
            
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

                    <SButton loading={isLoading} disabled={isLoading} variant="primary" action={handleSubmit} className='mt-3'>
                        Submit
                    </SButton>
                </Form>
                </Card.Body>
            </Card>
            
        </Container>
    )
}

export default PageSignin;