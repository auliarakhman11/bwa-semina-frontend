import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import axios from "axios";
import SAlert from "../../components/Alert";
import {useNavigate} from 'react-router-dom';
import SForm from './form'

import { config } from '../../configs'

function PageSignin() {

    const navigate = useNavigate();

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
            const res = await axios.post(`${config.api_host_dev}/cms/auth/signin`,
            form // kalau sama pakai ini

            // { 
            //     email: form.email,
            //     password: form.password
            // } // kalau custome pakai ini
            );

            // console.log(res.data.data.token); //defautl axios harus masuk ke data dulu baru ke respons server

            navigate('/');

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
                <SForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} />
                
                </Card.Body>
            </Card>
            
        </Container>
    )
}

export default PageSignin;