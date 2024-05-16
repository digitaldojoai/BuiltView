import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function Login() {
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
                        <form className={`${classes.form}`}>
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
                                    />
                                </Col>
                                <Col xs={{ span: 12 }}>
                                    <label
                                        htmlFor="LoginPasswordId"
                                        className={classes.label}
                                    >
                                        Password
                                    </label>
                                    <input
                                        className={classes.input}
                                        type="password"
                                        placeholder="Password"
                                        id="LoginPasswordId"
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
