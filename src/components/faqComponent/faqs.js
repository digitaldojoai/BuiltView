import React from 'react';
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

export default function Faq() {
    return (
        <div className="overall-container-main-faq">
            <div className="left-side-from-container">
                {' '}
                <p
                    className="subtitle-accordion-main"
                    style={{ color: '#0CB9EB' }}
                >
                    About us
                </p>
                <p
                    className="accordion-faq-component-title"
                    style={{ color: '#041242' }}
                >
                    With our tool we
                    <br />
                    guarantee success
                </p>
                <Accordion className="accodion-main-component" allowMultiple>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                            color={
                                                isExpanded
                                                    ? '#0CB9EB'
                                                    : '#041242'
                                            }
                                        >
                                            Section 2 title
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
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>

                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                            color={
                                                isExpanded
                                                    ? '#0CB9EB'
                                                    : '#041242'
                                            }
                                        >
                                            Section 2 title
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon
                                                className="inside-the-accordion"
                                                fontSize="12px"
                                                color="#0CB9EB"
                                            />
                                        ) : (
                                            <AddIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel
                                    className="inside-the-accordion"
                                    color="#4d4d4d"
                                    pb={4}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>

                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                            color={
                                                isExpanded
                                                    ? '#0CB9EB'
                                                    : '#041242'
                                            }
                                        >
                                            Section 2 title
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
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
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
                    href="#"
                    className={`${classes.link__btn} button-bg-pricing`}
                    style={{ fontWeight: '900' }}
                >
                    Book now{' '}
                    <span
                        style={{
                            fontWeight: 'bold',
                            fontSize: '30px',
                            marginBottom: '5px',
                        }}
                    >
                        &rarr;
                    </span>
                </Link>
            </div>
        </div>
    );
}
