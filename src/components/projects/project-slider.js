import PropTypes from 'prop-types';
import Link from 'next/link';

function ProjectSlider({ project }) {
    const imagePath = project.image;
    console.log(imagePath);
    return (
        <div className="project-item">
            <div className="project-img">
                <img src={imagePath} alt="img" />
            </div>
            <div className="project-content">
                <span className="sub-title">{project?.subTitle}</span>
                <span>{project?.duration}</span>
            </div>
        </div>
    );
}

ProjectSlider.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectSlider;
