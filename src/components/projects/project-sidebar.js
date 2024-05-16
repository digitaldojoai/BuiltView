import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Link from 'next/link';
import classes from './project.module.scss';

function ProjectSidebar({
    clientName,
    location,
    area,
    budget,
    architect,
    druration,
}) {
    return (
        <Col lg={{ span: 3 }}>
            <div className="sidebar pt-max-md-25">
                <div className={`${classes.sidebar_widget} mb-30`}>
                    <h2 className={classes.sidebar_widget__title}>title</h2>
                    <ul className={classes.sidebar_list}>
                        <li>
                            Client Name:{' '}
                            <span className="text-primary">{clientName}</span>
                        </li>

                        <li>
                            Location:{' '}
                            <span className="text-primary">{location}</span>
                        </li>

                        <li>
                            Area: <span className="text-primary">{area}</span>
                        </li>

                        <li>
                            Budget:{' '}
                            <span className="text-primary">{budget}</span>
                        </li>

                        <li>
                            Architect:{' '}
                            <span className="text-primary">{architect}</span>
                        </li>
                        <li>
                            Druration:{' '}
                            <span className="text-primary">{druration}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Col>
    );
}

ProjectSidebar.propTypes = {
    clientName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    architect: PropTypes.string.isRequired,
    druration: PropTypes.string.isRequired,
};
export default ProjectSidebar;
