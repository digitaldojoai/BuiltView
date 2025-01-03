import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import classes from './blog.module.scss';

function BlogLeftSidebarItem({ blog }) {
    const imagePath = `/images/blogs/${blog?.mediumImage}`;
    const linkPath = `/blogs/${blog?.slug}`;

    return (
        <Col md={{ span: 6 }}>
            <div className={classes.blog_item}>
                <Link href={linkPath} className={classes.blog_img}>
                    <img
                        className="img-full"
                        src={imagePath}
                        alt={blog?.title}
                    />
                </Link>
                <div className={classes.blog_content}>
                    <span className={classes.blog_meta}>{blog?.blogMeta}</span>
                    <h3 className={classes.blog_title}>
                        <Link href={linkPath}>{blog?.title}</Link>
                    </h3>
                    <p className={classes.blog_desc}>{blog?.excerpt}</p>
                    <ul className={classes.blog_btn__wrap}>
                        <li>
                            <Link
                                href={linkPath}
                                className={classes.blog_btn__link}
                            >
                                Read more
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Col>
    );
}

BlogLeftSidebarItem.propTypes = {
    blog: PropTypes.instanceOf(Object).isRequired,
};

export default BlogLeftSidebarItem;
