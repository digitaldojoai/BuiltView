import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './banner-4.module.scss';

function BannerFourFour({ bannerFourFourItems, bannerSection }) {
    return (
        <div className={`${classes.py__140}`}>
            <Container>
                {bannerSection?.map((items) => (
                    <div className={classes.section} key={items.id}>
                        <div className={classes.section__wrap}>
                            <div className={classes.section__title}>
                                <span>{items?.sectionSubtitle}</span>
                                <h2
                                    dangerouslySetInnerHTML={{
                                        __html: items.sectionTitle,
                                    }}
                                />
                            </div>
                            <p
                                className={classes.section__desc}
                                dangerouslySetInnerHTML={{
                                    __html: items.sectionDesc,
                                }}
                            />
                        </div>
                    </div>
                ))}
                <Row className="g-30  ">
                    {bannerFourFourItems?.map((bannerFourFourItem) => (
                        <Col
                            xl={{ span: 4 }}
                            lg={{ span: 6 }}
                            md={{ span: 8 }}
                            key={bannerFourFourItem.id}
                        >
                            <div
                                className={`${bannerFourFourItem.dynamicClassName
                                    .split(' ')
                                    .map((item) => classes[item])
                                    .join(' ')} section-single-main`}
                            >
                                <div
                                    className={classes.content}
                                    data-count={`${bannerFourFourItem?.dataCount}`}
                                >
                                    <h2
                                        className={classes.title}
                                        dangerouslySetInnerHTML={{
                                            __html: bannerFourFourItem?.title,
                                        }}
                                    />
                                    <p className={classes.desc}>
                                        {bannerFourFourItem?.excerpt}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

BannerFourFour.propTypes = {
    bannerFourFourItems: PropTypes.instanceOf(Object).isRequired,
    bannerSection: PropTypes.instanceOf(Object).isRequired,
};

export default BannerFourFour;
