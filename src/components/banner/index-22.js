import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import classes from './banner-2.module.scss';

function BannerTwoTwo({ bannerTwoTwoItems }) {
    return (
        <div className={classes.bg}>
            <Container fluid className="px-0">
                {bannerTwoTwoItems.map((bannerTwoItem) => (
                    <Row className="g-0" key={bannerTwoItem.id}>
                        <Col lg={{ span: 6 }}>
                            <div>
                                <div className={classes.content}>
                                    <h2
                                        className={classes.title}
                                        dangerouslySetInnerHTML={{
                                            __html: bannerTwoItem.title,
                                        }}
                                    />
                                    <p className={classes.desc}>
                                        {bannerTwoItem?.desc}
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ span: 6 }}>
                            <div className={classes.image}>
                                <img
                                    src="images/hero/clients.jpg"
                                    alt={bannerTwoItem?.alt}
                                    className="img-full"
                                />
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

BannerTwoTwo.propTypes = {
    bannerTwoTwoItems: PropTypes.instanceOf(Object).isRequired,
};

export default BannerTwoTwo;
