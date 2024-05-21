import PropTypes from 'prop-types';
import Link from 'next/link';

function ProjectSliderItem({ project }) {
    // const { title, subTitle, duration, image, slug } = props.project;

    const imagePath = `${project?.image}`;
    const linkPath = `/projects/${project?.slug}`;

    return (
        <div className="project-item">
            <div className="project-img">
                <img src={imagePath} alt={project?.title} />
            </div>
            <div className="project-content">
                <span className="sub-title">{project?.subTitle}</span>
                <h3 className="title mb-0">{project?.title}</h3>
                <span>Duration: {project?.duration}</span>
            </div>
        </div>
    );
}

ProjectSliderItem.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectSliderItem;
