import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Link from 'next/link';
import classes from './project.module.scss';

function ProjectSidebar({ clientName, location, projectsInfo, email, phone }) {
    return (
        <Col lg={{ span: 3 }}>
            <div className="sidebar pt-max-md-25">
                <div className={`${classes.sidebar_widget} mb-30`}>
                    <h2 className={classes.sidebar_widget__title}>
                        Client Details
                    </h2>
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
                            Projects Done:{' '}
                            <span className="text-primary">{projectsInfo}</span>
                        </li>

                        <li>
                            Location:{' '}
                            <span className="text-primary">{location}</span>
                        </li>

                        <li>
                            Email: <span className="text-primary">{email}</span>
                        </li>
                        <li>
                            Phone Number:{' '}
                            <span className="text-primary">{phone}</span>
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
    projectsInfo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};
export default ProjectSidebar;
