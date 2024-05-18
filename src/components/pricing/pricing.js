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
import { FaCheckCircle, FaCheck } from 'react-icons/fa';
import classes from '../banner/banner-3.module.scss';

export default function ThreeTierPricing() {
    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading
                    as="h1"
                    fontSize="4xl"
                    style={{ marginBottom: '50px' }}
                >
                    Plans that fit your needs
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
                    <Box py={4} px={12} className="price-card-title">
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
                        <List
                            className="list-of-services"
                            spacing={3}
                            textAlign="center"
                            px={20}
                        >
                            <ListItem>
                                <FaCheck />
                                Task Tracking
                            </ListItem>
                            <ListItem>
                                <FaCheck />
                                2D Rendering
                            </ListItem>
                            <ListItem>
                                <FaCheck />
                                Limited Customization
                            </ListItem>
                            <ListItem>
                                <FaCheck />
                                Basic Integration
                            </ListItem>
                            <ListItem>
                                <FaCheck />
                                Email Support
                            </ListItem>
                        </List>
                        <Link
                            href="#"
                            className={`${classes.link__btn} button-bg-pricing-sides`}
                        >
                            Buy Now
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
                        <Box py={4} px={12} className="price-card-title">
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
                            <List
                                className="list-of-services"
                                spacing={3}
                                textAlign="center"
                                px={20}
                            >
                                <ListItem>
                                    <FaCheck />
                                    Task Tracking
                                </ListItem>
                                <ListItem>
                                    <FaCheck />
                                    2D Rendering
                                </ListItem>
                                <ListItem>
                                    <FaCheck />
                                    Full Customization
                                </ListItem>
                                <ListItem>
                                    <FaCheck />
                                    Pro Integration
                                </ListItem>
                                <ListItem>
                                    <FaCheck />
                                    Priority Email & Phone Support
                                </ListItem>
                            </List>
                            <Link
                                href="#"
                                className={`${classes.link__btn} button-bg-pricing`}
                            >
                                Buy Now
                            </Link>
                        </VStack>
                    </Box>
                </div>
                <div className="side-price-table">
                    <Box py={4} px={12} className="price-card-title">
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
                        <List
                            className="list-of-services"
                            spacing={3}
                            textAlign="center"
                            px={20}
                        >
                            <ListItem>
                                <FaCheck />
                                Task Tracking
                            </ListItem>
                            <ListItem>
                                <FaCheck />
                                2D Rendering
                            </ListItem>
                            <ListItem>
                                <FaCheck />
                                Enhanced Customization
                            </ListItem>
                            <ListItem>
                                <FaCheck />
                                Advanced Integration
                            </ListItem>
                            <ListItem>
                                <FaCheck />
                                Email & Phone Support
                            </ListItem>
                        </List>
                        <Link
                            href="#"
                            className={`${classes.link__btn} button-bg-pricing-sides`}
                        >
                            Buy Now
                        </Link>
                    </VStack>
                </div>
            </Stack>
        </Box>
    );
}
