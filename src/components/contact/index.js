import Link from 'next/link';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function Contact({ contactItems }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('');
    const [service, setService] = useState('');

    const validateFields = (name, email, tel, message) => {
        const errors = {};

        // Name validation: should not be empty and should contain only letters
        if (!name.trim()) {
            errors.name = 'Name is required';
            toast.error('Name is required!');
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            errors.name = 'Name should contain only letters';
            toast.error('Name should contain only letters');
        }

        // Email validation: should not be empty and should be a valid email
        if (!email.trim()) {
            errors.email = 'Email is required';
            toast.error('email is required');
        } else if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        ) {
            errors.email = 'Invalid email address';
            toast.error('Invalid email address');
        }

        // Phone number validation: should not be empty and should be a valid phone number
        if (!tel.trim()) {
            errors.tel = 'Phone number is required';
            toast.error('Phone number is required');
        } else if (!/^[+\-()0-9\s]{8,15}$/.test(tel)) {
            errors.tel = 'Invalid phone number';
            toast.error('Invalid phone number');
        }

        // Message validation: should not be empty
        if (!message.trim()) {
            errors.message = 'Message is required';
            toast.error('message is required');
        }

        return errors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceID = 'service_irnr39a';
        const templateID = 'template_hlzkqrw';
        const errors = validateFields(name, email, tel, message);
        if (Object.keys(errors).length === 0) {
            emailjs
                .send(
                    serviceID,
                    templateID,
                    {
                        from_name: name,
                        email,
                        number: tel,
                        message,
                        service,
                    },
                    'T_C3BzEWCQLCh8TqI'
                )
                .then(
                    () => {
                        setName('');
                        setEmail('');
                        setTel('');
                        setMessage('');
                        setService('');
                        toast.success('Message was sent!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
        }
    };
    return (
        <main>
            {contactItems?.map((contactItem) => (
                <Container key={contactItem.id}>
                    <div className={classes.form_area}>
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <h2 className={classes.form_title}>
                                    {contactItem?.formTitle}
                                </h2>
                                <p className={`${classes.form_desc} mb-0`}>
                                    {contactItem?.formDesc}
                                </p>
                                <form
                                    className={classes.form}
                                    onSubmit={handleSubmit}
                                    method="post"
                                >
                                    <div className={classes.form_group__input}>
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            id="name"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            placeholder="Your Name*"
                                            required
                                            className={`${classes.form_input__field} me-30`}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            id="email"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            placeholder="Your Email*"
                                            required
                                            className={
                                                classes.form_input__field
                                            }
                                        />
                                    </div>
                                    <div className={classes.form_group__input}>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={tel}
                                            id="phone"
                                            onChange={(e) =>
                                                setTel(e.target.value)
                                            }
                                            placeholder="Phone Number*"
                                            required
                                            className={`${classes.form_input__field}  me-30`}
                                        />
                                        <div
                                            className={`${classes.select_wrapper} `}
                                        >
                                            <select
                                                name="service"
                                                id="service"
                                                value={service}
                                                required
                                                onChange={(e) =>
                                                    setService(e.target.value)
                                                }
                                                className={`${classes.form_input__field__select} ${classes.form_input__field__select}`}
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                >
                                                    Services
                                                </option>
                                                <option value="Construction">
                                                    Construction
                                                </option>
                                                <option value="Plugin">
                                                    Plugin
                                                </option>
                                                <option value="">Other</option>{' '}
                                            </select>
                                        </div>
                                    </div>
                                    <textarea
                                        type="text"
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        className={`${classes.form_textarea__field} mt-30`}
                                    />
                                    <div className={classes.form_btn__wrap}>
                                        <button
                                            className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__primary}`}
                                            type="submit"
                                        >
                                            {contactItem?.btnText}
                                        </button>
                                    </div>
                                </form>
                            </Col>
                            <Col lg={{ span: 6 }} className="">
                                <div className={classes.content}>
                                    <span className={classes.subtitle}>
                                        {contactItem?.subTitle}
                                    </span>
                                    <h2 className={classes.title}>
                                        {contactItem?.title}
                                    </h2>
                                    <p className={classes.desc}>
                                        {contactItem?.desc}
                                    </p>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.addressTitle}
                                        </h3>
                                        <p className={classes.info_desc}>
                                            {contactItem?.addressDesc}
                                        </p>
                                    </div>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.infoTitle}
                                        </h3>
                                        <ul className={classes.info_list}>
                                            {contactItem?.infoList?.map(
                                                (item) => (
                                                    <li key={item.id}>
                                                        {item.listText}
                                                        <Link href={item.path}>
                                                            {item.listValue}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            ))}
        </main>
    );
}

Contact.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default Contact;
