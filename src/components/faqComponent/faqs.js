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
                                            Can I upgrade or downgrade my plan
                                            at any time?
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
                                    Flexibility is key! You have the freedom to
                                    adjust your plan whenever you like, ensuring
                                    that you always have the right features to
                                    support your needs, whether they grow or
                                    change over time.
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
                                            Is there a free trial available?
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
                                    Dive right in! Experience our offerings
                                    firsthand with our complimentary trial
                                    period. It&apos;s the perfect opportunity to
                                    explore our services and see how they can
                                    benefit you before making any commitments.
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
                                            Are there any setup fees?
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
                                    No hidden costs here! When you sign up,
                                    there are no additional fees for setup. You
                                    can get started without worrying about any
                                    unexpected expenses.
                                </AccordionPanel>

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
                                                        Can I cancel my
                                                        subscription at any
                                                        time?
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
                                            <AccordionPanel
                                                color="#4d4d4d"
                                                pb={4}
                                            >
                                                Your convenience is our
                                                priority. You have the liberty
                                                to cancel your subscription at
                                                any point, giving you peace of
                                                mind knowing that you&apos;re in
                                                control of your commitment to
                                                our services.
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
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
                            fontWeight: '400',
                            fontSize: '30px',
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
