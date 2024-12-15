import React from 'react'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import SButton from '../../components/Button'
import { Form } from 'react-bootstrap'

export default function SForm({form, handleChange, handleSubmit, isLoading}) {
  return (
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
  )
}
