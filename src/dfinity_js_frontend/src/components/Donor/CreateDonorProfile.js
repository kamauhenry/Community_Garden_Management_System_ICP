import React, { useState } from "react";
import { Container, Button, Form, FloatingLabel } from "react-bootstrap";
import { createDonorProfile } from "../../utils/foodshare";

const CreateDonorProfile = ({ fetchDonor }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [businessType, setBusinessType] = useState("");

    const handlePublishProfile = async (event) => {
        event.preventDefault();
        try {
            const donor = {
                name,
                email,
                phoneNumber,
                address,
                businessType: { [businessType]: businessType } // Adjust for variant format
            };
            await createDonorProfile(donor).then(res => {
                console.log(res);
                fetchDonor();
            });
        } catch (error) {
            console.log("Failed to create donor profile:", error);
        }
    };

    const isFormFilled = () =>
        name && email && phoneNumber && address && businessType;

    return (
        <Container className="d-flex flex-column align-items-center mt-4 w-50">
            <h1 className="text-center mb-4">Create Donor Profile</h1>
            <Form className="w-75 p-3" onSubmit={handlePublishProfile}>
                <FloatingLabel controlId="formName" label="Name" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </FloatingLabel>
                <FloatingLabel controlId="formEmail" label="Email" className="mb-3">
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FloatingLabel>
                <FloatingLabel controlId="formPhoneNumber" label="Phone Number" className="mb-3">
                    <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />
                </FloatingLabel>
                <FloatingLabel controlId="formAddress" label="Address" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Enter your address"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </FloatingLabel>
                <FloatingLabel controlId="formBusinessType" label="Business Type" className="mb-4">
                    <Form.Control
                        as="select"
                        value={businessType}
                        onChange={e => setBusinessType(e.target.value)}
                    >
                        <option value="">Select Business Type</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Other">Other</option>
                    </Form.Control>
                </FloatingLabel>
                <div className="text-center">
                    <Button variant="dark" type="submit" disabled={!isFormFilled()}>
                        Publish Profile
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default CreateDonorProfile;
