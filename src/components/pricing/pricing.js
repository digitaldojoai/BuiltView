import { ReactNode } from 'react';
import Link from 'next/link';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import classes from '../banner/banner-3.module.scss';



export default function ThreeTierPricing() {
    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    Plans that fit your need
                </Heading>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}
            >
                <div className="side-price-table">
                    <Box py={4} px={12} className="">
                        <Text fontWeight="500" fontSize="2xl">
                            Basic Plan
                        </Text>
                        <HStack justifyContent="center">
                            <p className="price-text-style">
                                <sup>$</sup>
                                XX
                            </p>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius="xl"
                    >
                        <List spacing={3} textAlign="start" px={20}>
                            <ListItem>
                                <FaCheck />
                                unlimited build minutes
                            </ListItem>
                            <ListItem>
                                <FaCheck />
                                Lorem, ipsum dolor.
                            </ListItem>
                            <ListItem>
                                <FaCheck />
                                5TB Lorem, ipsum dolor.
                            </ListItem>
                        </List>
                        <Link
                            href="#"
                            className={`${classes.link__btn} button-bg-pricing-sides`}
                        >
                            Start trial
                        </Link>
                    </VStack>
                </div>

                <div className="middle  -price-table">
                    <Box position="relative" className="middle-price-table">
                        <Box
                            position="absolute"
                            top="-50px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}
                        />
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Premium Plan{' '}
                            </Text>
                            <HStack justifyContent="center">
                                <p className="price-text-style">
                                    <sup>$</sup>
                                    XXX
                                </p>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius="xl"
                        >
                            <List spacing={3} textAlign="start" px={20}>
                                <ListItem>
                                    <FaCheck />
                                    unlimited build minutes
                                </ListItem>
                                <ListItem>
                                    <FaCheck />
                                    Lorem, ipsum dolor.
                                </ListItem>
                                <ListItem>
                                    <FaCheck />
                                    5TB Lorem, ipsum dolor.
                                </ListItem>
                                <ListItem>
                                    <FaCheck />
                                    5TB Lorem, ipsum dolor.
                                </ListItem>
                                <ListItem>
                                    <FaCheck />
                                    5TB Lorem, ipsum dolor.
                                </ListItem>
                            </List>

                            <Link
                                href="#"
                                className={`${classes.link__btn} button-bg-pricing`}
                            >
                                Start trial
                            </Link>
                        </VStack>
                    </Box>
                </div>
                <div className="side-price-table">
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Standard Plan
                        </Text>

                        <p className="price-text-style">
                            <sup>$</sup>
                            XX
                        </p>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius="xl"
                    >
                        <List spacing={3} textAlign="start" px={20}>
                            <ListItem>
                                <FaCheck />
                                unlimited build minutes
                            </ListItem>
                            <ListItem>
                                <FaCheck />
                                Lorem, ipsum dolor.
                            </ListItem>
                            <ListItem>
                                <FaCheck />
                                5TB Lorem, ipsum dolor.
                            </ListItem>
                        </List>
                        <Link
                            href="#"
                            className={`${classes.link__btn} button-bg-pricing-sides`}
                        >
                            Start trial
                        </Link>
                    </VStack>
                </div>
            </Stack>
        </Box>
    );
}
