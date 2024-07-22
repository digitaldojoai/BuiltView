import React from 'react';
import PropTypes from 'prop-types';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Link,
} from '@chakra-ui/react';
import classes from '../banner/banner-3.module.scss';

export default function Faq({ faqItems }) {
    return (
        <div className="overall-container-main-faq">
            <div className="left-side-from-container">
                {' '}
                <p
                    className="accordion-faq-component-title"
                    style={{ color: '#041242' }}
                >
                    With our Tool we
                    <br />
                    Guarantee Success
                </p>
                <Accordion className="accodion-main-component" allowMultiple>
                    {faqItems.map((faqItem) => (
                        <AccordionItem key={faqItem.id}>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box
                                                as="span"
                                                flex="1"
                                                fontSize={18}
                                                textAlign="left"
                                                color={
                                                    isExpanded
                                                        ? '#0CB9EB'
                                                        : '#041242'
                                                }
                                            >
                                                {faqItem.question}
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon
                                                    fontSize="12px"
                                                    color="#0CB9EB"
                                                />
                                            ) : (
                                                <AddIcon fontSize="12px" />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel color="#4d4d4d" pb={4}>
                                        {faqItem.answer}
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className="sidebar-in-faq-page">
                <h2>
                    Get an appointment <br /> with our Expert
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                </p>
                <Link
                    href="/contact"
                    className={`${classes.link__btn} button-bg-pricing`}
                    style={{ fontWeight: '400' }}
                >
                    Book now{' '}
                    <span
                        style={{
                            fontWeight: '400',
                            fontSize: '30px',
                            height: '33px',
                            marginBottom: '5%',
                        }}
                    >
                        &rarr;
                    </span>
                </Link>
            </div>
        </div>
    );
}

Faq.propTypes = {
    faqItems: PropTypes.instanceOf(Object).isRequired,
};
