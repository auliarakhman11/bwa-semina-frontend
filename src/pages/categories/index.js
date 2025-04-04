import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Container, Spinner, Table } from 'react-bootstrap';
import SButton from '../../components/Button';
import SBreadCrumb from '../../components/Breadcrumb';
import SNavbar from '../../components/Navbar';
import axios from 'axios';
import { config } from '../../configs';


export default function PageCategories() {
    const token = localStorage.getItem('token');
    
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(false)

    

    useEffect(() => {
        const getCategoriesAPI = async()=>{
            setIsLoading(true);
            try {
                const res = await axios.get(`${config.api_host_dev}/cms/categories`,{
                    headers: {
                        Authorization: `Bearer ${token}`,
                      },
                });
                setIsLoading(false);
                setData(res.data.data);
            } catch (err) {
                console.log(err);
                setIsLoading(false);
                
            }
        }

        getCategoriesAPI();
    }, []);
    
    
    if (!token) return <Navigate to='/signin' replace={true} />
  return (
    <>
      <SNavbar/>
      <Container className='m-5'>
        <SBreadCrumb textSecound='Categories'/>
        <SButton action={() => navigate('/categories/create')}>Tambah</SButton>

        <Table striped bordered hover variant="dark" className='mt-3' width='100%'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
                <tr>
                    <td colSpan={data.length + 1} style={{ textAlign: 'center' }}>
                        <div className='flex items-center justify-center'>
                            <Spinner animation='border' variant='primary' />
                        </div>
                    </td>
                </tr>
            ) : (
                data.map((data, index)=>(
                    <tr key={data._id}>
                        <td>{index += 1}</td>
                        <td>{data.name}</td>
                        <td>Otto</td>
                    </tr>
                ))
            )}
            


          </tbody>
        </Table>

      </Container>
      
    </>
  )
}
