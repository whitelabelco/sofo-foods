"use client";

import React, { useState } from 'react';
import Button from './Button';


const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        store: "",
        customer: "",
      });
    const [status, setStatus] = useState("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    console.log(id, value);
    setFormData({
        ...formData,
        [id]: value,
    });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
    try {
        // TODO: Add fetch URL
        const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        });

        if (res.ok) {
        setStatus("Form submitted successfully!");
        } else {
        setStatus("Submission failed. Please try again.");
        }
    } catch (error) {
        setStatus("An error occurred. Please try again.");
    }
    console.log(status);
    };

    const commonStyles ="shadow-sm border border-darkest/10 text-darkest/70 text-sm rounded-lg block w-full p-2.5 focus:outline-none";

  return (
    <form className="w-full mx-auto font-roboto-condensed" onSubmit={handleSubmit}>
        <div className="mb-8">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-darkest">*Your Full Name</label>
            <input type="name" id="name" className={commonStyles} value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-8">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-darkest">*Email Address</label>
            <input type="email" id="email" className={commonStyles} value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-8">
            <label htmlFor="tel" className="block mb-2 text-sm font-medium text-darkest">*Phone Number</label>
            <input type="tel" id="tel" className={commonStyles} value={formData.tel} onChange={handleChange} required />
        </div>
        <div className="mb-8">
            <label htmlFor="store" className="block mb-2 text-sm font-medium text-darkest">*Store Name</label>
            <input type="text" id="store" className={commonStyles} value={formData.store} onChange={handleChange} required />
        </div>
        <div className="mb-8">
            <label htmlFor="customer" className="block mb-2 text-sm font-medium text-darkest">*Sofo Customer Number</label>
            <input type="text" id="customer" className={commonStyles} value={formData.customer} onChange={handleChange} required />
        </div>
        <Button type="submit" variant="blue" onClick={() => {}}>Submit</Button>
    </form>

  )
};

export default SignUpForm;