import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function Register() {
    return (
        <div className={classes.parent}>
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
                        <form className={`${classes.form}`}>
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
                                        name="phone"
                                        id="phone"
                                        required
                                        className={`${classes.input}`}
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
