import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import classes from './project.module.scss';
import ProjectFullwidthItem from './fullwidth-item';

function ProjectFullwidthGrid({ projects }) {
    const [noOfElement, setNoOfElement] = useState(4);
    const slice = projects.slice(0, noOfElement);

    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement);
    };

    return (
        <div className={classes.project}>
            <Container>
                <Row className="g-5">
                    {slice.map((project) => (
                        <ProjectFullwidthItem
                            key={project.slug}
                            project={project}
                        />
                    ))}
                </Row>
                {noOfElement < projects.length && (
                    <div className={classes.project_btn__wrap}>
                        <button
                            type="button"
                            className={classes.loadmore_btn}
                            onClick={loadMore}
                        >
                            View more
                        </button>
                    </div>
                )}
                {noOfElement > projects.length && (
                    <div className={classes.project_btn__wrap}>
                        <span className={classes.loadedText}>{}</span>
                    </div>
                )}
            </Container>
        </div>
    );
}

ProjectFullwidthGrid.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectFullwidthGrid;
