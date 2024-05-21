import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './newsletter.module.scss';

function Newsletter({ newsletterItems }) {
    const [email, setEmail] = useState('');
    // function to handle email validation and submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            toast.error('email is required');
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            toast.error('Invalid email address');
        }
    };
    return (
        <div className={`${classes.bg} margin-for-newsletter`}>
            <Container>
                <Row>
                    {newsletterItems?.map((newsletterItem) => (
                        <Col lg={{ span: 12 }} key={newsletterItem.id}>
                            <div className={classes.item}>
                                <h2 className={classes.title}>
                                    {newsletterItem?.title}
                                </h2>
                                <form
                                    className={classes.form}
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        className={classes.input_field}
                                        type="email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="To get update, enter your email"
                                    />
                                    <div className={classes.btn__wrap}>
                                        <button
                                            type="submit"
                                            className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__white}`}
                                        >
                                            Subscribe now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

Newsletter.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
};

export default Newsletter;
