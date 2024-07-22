import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';
import { useRouter } from 'next/navigation';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validateFields = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            errors.email = 'email is required';
        } else if (!password) {
            toast.error('Password is required');
        } else {
            toast.success('Login Successful');
        }
    };
    // function to handle email validation and submit
    const router = useRouter();
    return (
        <div className={classes.parent}>
            <div className={classes.area}>
                <Row className={classes.container}>
                    <Col lg={{ span: 5 }} className={classes.imageContainer}>
                        <img
                            className={classes.image}
                            src="/images/login.jpg"
                            alt="builtview"
                        />
                    </Col>
                    <Col lg={{ span: 6 }}>
                        <form
                            className={`${classes.form}`}
                            onSubmit={validateFields}
                        >
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width={45}
                                height={45}
                                style={{
                                    marginBottom: '10px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    router.back();
                                }}
                            >
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
                            </svg>
                            <h2 className={classes.title}>Sign In</h2>
                            <span className={classes.subtitle}>
                                Welcome Back!
                            </span>
                            <div>
                                <br />
                            </div>
                            <Row>
                                <Col xs={{ span: 12 }}>
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
                                <Col xs={{ span: 12 }}>
                                    <label
                                        htmlFor="LoginPasswordId"
                                        className={classes.label}
                                        value={password}
                                    >
                                        Password
                                    </label>
                                    <input
                                        className={classes.input}
                                        type="password"
                                        placeholder="Password"
                                        id="LoginPasswordId"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </Col>

                                <Col xs={{ span: 12 }}>
                                    <button
                                        className={classes.btn}
                                        type="submit"
                                    >
                                        Sign In
                                    </button>
                                </Col>
                                <Col className={classes.span} xs={{ span: 12 }}>
                                    <span>Or sign in with</span>
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
                                    <span> Don&apos;t have an account?</span>
                                    <Link
                                        href="/register"
                                        style={{
                                            color: '#0CB9EB',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {' '}
                                        Sign up
                                    </Link>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Login;
