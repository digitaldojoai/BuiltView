import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import classes from './index.module.scss';
import ProjectSliderTwo from '../projects/project-slider-2';

function RichText({ richTexts, project }) {
    return (
        <div className={classes.item}>
            {richTexts?.map((richText) => (
                <Row className="pb-35 g-30" key={richText.id}>
                    <Col lg={{ span: 4 }} className="align-self-center">
                        <div className="content">
                            <p className={`${classes.desc} min-lg-w238`}>
                                {richText?.textOne}
                            </p>
                            <p className={`${classes.desc} min-lg-w238`}>
                                {richText?.textTwo}
                            </p>
                            <p className={`${classes.desc} mb-0`}>
                                {richText?.textThree}
                            </p>
                        </div>
                    </Col>
                    <Col lg={{ span: 8 }}>
                        <div className={`${classes.group_image} pb-20`}>
                            <div className={classes.single_image}>
                                <img
                                    src={`/images/projects/${project.slug}/${project?.image}`}
                                    alt={richText?.groupImageAlt}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            ))}
        </div>
    );
}

RichText.propTypes = {
    richTexts: PropTypes.instanceOf(Object).isRequired,
    project: PropTypes.instanceOf(Object).isRequired,
};

export default RichText;
