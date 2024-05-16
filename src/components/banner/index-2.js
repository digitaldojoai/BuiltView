import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import classes from './banner-2.module.scss';

function BannerTwo({ bannerTwoItems }) {
    return (
       

<div className={`${classes.bg} `}>
            
            <Container fluid className="px-0">

                {bannerTwoItems?.map((bannerTwoItem) => (
                    // console.log('inside the map banner: ', bannerTwoItem),
                    <Row className="g-0" key={bannerTwoItem.id}>
                        <Col lg={{ span: 6 }}>
                            <div className={classes.image}>
                                <img
                                    src={bannerTwoItem?.image}
                                    alt={bannerTwoItem?.alt}
                                    className="img-full"
                                />
                            </div>
                        </Col>
                        <Col lg={{ span: 6 }}>
                            <div className={classes.with__sticker}>
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
                    </Row>
                ))}
            </Container>
        </div>

  
    );
}

BannerTwo.propTypes = {
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
};

export default BannerTwo;
