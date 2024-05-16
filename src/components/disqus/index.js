import { DiscussionEmbed } from 'disqus-react';
import classes from './index.module.scss';

function DisqusForm() {
    const disqusShortname = 'BuiltView';

    const disqusConfig = {
        url: 'https://BuiltView.disqus.com/',
        identifier: '123',
        title: 'BuiltView-post',
    };
    return (
        <div className={classes.area}>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    );
}

export default DisqusForm;
