import PropTypes from 'prop-types';
import Link from 'next/link';
import classes from './blog.module.scss';

function LatestBlogItem({ blog }) {
    const imagePath = `/images/blogs/${blog?.mediumImage}`;
    const linkPath = `/blogs/${blog?.slug}`;

    return (
        <div className={classes.blog_item}>
            <Link href={linkPath} className={classes.blog_img}>
                <img className="img-full" src={imagePath} alt={blog?.title} />
            </Link>
            <div
                className={classes.blog_content}
                style={{
                    height: '22.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <div>
                    <span className={classes.blog_meta}>{blog?.blogMeta}</span>
                    <h3 className={classes.blog_title}>
                        <Link href={linkPath}>{blog?.title}</Link>
                    </h3>
                    <p className={classes.blog_desc}>{blog?.excerpt}</p>
                </div>
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
    );
}

LatestBlogItem.propTypes = {
    blog: PropTypes.instanceOf(Object).isRequired,
};

export default LatestBlogItem;
