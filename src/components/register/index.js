import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [state, setState] = useState('');
    const [adminName, setAdminName] = useState('');
    const [phone, setPhone] = useState('');
    const [numberOf, setNumberOf] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [text, setText] = useState('');

    const validateFields = () => {
        const errors = {};

        if (!email.trim()) {
            errors.email = 'Email is required';
            toast.error('Email is required');
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            errors.email = 'Invalid email address';
            toast.error('Invalid email address');
        }

        if (!password.trim()) {
            errors.password = 'Password is required';
            toast.error('Password is required');
        } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                password
            )
        ) {
            toast.error(
                'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character'
            );
        }

        if (!companyName.trim()) {
            errors.companyName = 'Company name is required';
            toast.error('Company name is required');
        }

        if (!location.trim()) {
            errors.location = 'Location is required';
            toast.error('Location is required');
        }

        if (!state.trim()) {
            errors.state = 'State is required';
            toast.error('State is required');
        }

        if (!adminName.trim()) {
            errors.adminName = 'Admin name is required';
            toast.error('Admin name is required');
        }

        if (!phone.trim()) {
            errors.phone = 'Phone number is required';
            toast.error('Phone number is required');
        } else if (!/^[+\-()0-9\s]{8,15}$/.test(phone)) {
            errors.phone = 'Invalid phone number';
            toast.error('Invalid phone number');
        }

        if (!numberOf.trim()) {
            errors.numberOf = 'Number of is required';
            toast.error('Number of is required');
        }

        if (!confirmPass.trim()) {
            errors.confirmPass = 'Confirm password is required';
            toast.error('Confirm password is required');
        } else if (password !== confirmPass) {
            errors.confirmPass = 'Passwords do not match';
            toast.error('Passwords do not match');
        }

        if (!text.trim()) {
            errors.text = 'Text is required';
            toast.error('Text is required');
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateFields();
        console.log('here is the result:', Object.keys(errors).length === 0);
    };
    return (
        <div className={`${classes.parent}`}>
            <div className={classes.area}>
                <Row className={classes.container}>
                    <Col lg={{ span: 5 }}>
                        <img
                            className={classes.image}
                            src="/images/login.jpg"
                            alt="builtview"
                        />
                    </Col>
                    <Col lg={{ span: 6 }}>
                        <form
                            className={`${classes.form}  ${classes.registerContainer}`}
                            onSubmit={handleSubmit}
                        >
                            <h2 className={classes.title}>Sign Up</h2>
                            <span className={classes.subtitle}>
                                Enter all the information below to start your
                                account with us
                            </span>
                            <div>
                                <br />
                            </div>

                            <Row>
                                <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                                    <label
                                        htmlFor="companyName"
                                        className={classes.label}
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        className={classes.input}
                                        type="text"
                                        placeholder="Enter Company Name"
                                        id="companyName"
                                        onChange={(e) =>
                                            setCompanyName(e.target.value)
                                        }
                                        value={companyName}
                                    />
                                </Col>

                                <Col xs={{ span: 12 }} lg={{ span: 3 }}>
                                    <label
                                        htmlFor="country"
                                        className={classes.label}
                                    >
                                        Location
                                    </label>
                                    <select
                                        name="location"
                                        id="location"
                                        required
                                        className={`${classes.input}`}
                                        onChange={(e) =>
                                            setLocation(e.target.value)
                                        }
                                        value={location}
                                    >
                                        <option value="" disabled selected>
                                            USA
                                        </option>
                                        <option value="Construction">
                                            France
                                        </option>
                                        <option value="Construction">
                                            England
                                        </option>
                                        <option value="">Other</option>{' '}
                                    </select>
                                </Col>
                                <Col xs={{ span: 12 }} lg={{ span: 3 }}>
                                    <label
                                        htmlFor="state"
                                        className={classes.label}
                                    >
                                        state/city
                                    </label>
                                    <select
                                        name="state"
                                        id="state"
                                        required
                                        className={`${classes.input}`}
                                        onChange={(e) =>
                                            setState(e.target.value)
                                        }
                                        value={state}
                                    >
                                        <option value="" disabled selected>
                                            california
                                        </option>
                                        <option value="Construction">
                                            florida
                                        </option>
                                        <option value="Construction">
                                            miami
                                        </option>
                                        <option value="">Other</option>{' '}
                                    </select>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                                    <label
                                        htmlFor="adminName"
                                        className={classes.label}
                                    >
                                        Company Admin Full Name
                                    </label>
                                    <input
                                        className={classes.input}
                                        type="text"
                                        placeholder="Enter Full Name"
                                        id="adminName"
                                        onChange={(e) =>
                                            setAdminName(e.target.value)
                                        }
                                        value={adminName}
                                    />
                                </Col>
                                <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                                    <label
                                        htmlFor="LoginEmailId"
                                        className={classes.label}
                                    >
                                        Email Address*
                                    </label>
                                    <input
                                        className={classes.input}
                                        type="email"
                                        placeholder="Email Address"
                                        id="LoginEmailId"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                                    <label
                                        htmlFor="Phone"
                                        className={classes.label}
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        className={classes.input}
                                        type="text"
                                        placeholder="Enter Phone number"
                                        id="Phone"
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        value={phone}
                                    />
                                </Col>
                                <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                                    <label
                                        htmlFor="numberOf"
                                        className={classes.label}
                                    >
                                        Projects currently under construction
                                    </label>
                                    <input
                                        className={classes.input}
                                        type="number"
                                        placeholder="Enter Number"
                                        id="numberOf"
                                        onChange={(e) =>
                                            setNumberOf(e.target.value)
                                        }
                                        value={numberOf}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                                    <label
                                        htmlFor="LoginPasswordId"
                                        className={classes.label}
                                    >
                                        Password
                                    </label>
                                    <input
                                        className={classes.input}
                                        type="password"
                                        placeholder="Enter Password"
                                        id="LoginPasswordId"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        value={password}
                                    />
                                </Col>
                                <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                                    <label
                                        htmlFor="confirmPass"
                                        className={classes.label}
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        className={classes.input}
                                        type="password"
                                        placeholder="Confirm Password"
                                        id="confirmPass"
                                        onChange={(e) =>
                                            setConfirmPass(e.target.value)
                                        }
                                        value={confirmPass}
                                    />
                                </Col>
                            </Row>
                            <Col xs={{ span: 12 }}>
                                <label htmlFor="text" className={classes.label}>
                                    How did you hear about us?
                                </label>
                                <textarea
                                    className={classes.input}
                                    type="text"
                                    placeholder="Enter Text"
                                    id="text"
                                    onChange={(e) => setText(e.target.value)}
                                    value={text}
                                />
                            </Col>
                            <Col xs={{ span: 12 }}>
                                <button className={classes.btn} type="submit">
                                    Sign up
                                </button>
                            </Col>
                            <Col className={classes.span} xs={{ span: 12 }}>
                                <span>Or Sign up with</span>
                            </Col>
                            <Col xs={{ span: 12 }}>
                                <button
                                    className={classes.procore}
                                    type="submit"
                                >
                                    <img
                                        style={{ marginRight: '10px' }}
                                        src="/images/procore-logo.png"
                                        width={20}
                                        height={20}
                                        alt="procore"
                                    />
                                    Procore
                                </button>
                            </Col>

                            <Col
                                className={classes.containerBtn}
                                xs={{ span: 12 }}
                            >
                                <button
                                    className={classes.OauthBtn}
                                    type="submit"
                                >
                                    <img
                                        src="/images/search.png"
                                        width={30}
                                        height={30}
                                        alt="google"
                                    />
                                </button>
                                <button
                                    className={classes.OauthBtn}
                                    type="submit"
                                >
                                    <img
                                        src="/images/facebook.png"
                                        width={30}
                                        height={30}
                                        alt="facebook"
                                    />
                                </button>
                                <button
                                    className={classes.OauthBtn}
                                    type="submit"
                                >
                                    <img
                                        src="/images/apple-logo.png"
                                        width={30}
                                        height={30}
                                        alt="apple"
                                    />
                                </button>
                            </Col>
                            <Col
                                className={classes.containerSpan}
                                xs={{ span: 12 }}
                            >
                                <span>Already have an account?</span>
                                <Link
                                    href="/login"
                                    style={{
                                        color: '#0CB9EB',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {' '}
                                    Sign in
                                </Link>
                            </Col>
                        </form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Register;
