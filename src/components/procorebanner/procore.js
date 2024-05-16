import Link from 'next/link';
import React from 'react';

function Procore() {
    return (
        <div className="overeall-container-procore-main">
            <h1 className="title-for-procore">Procore Pricing</h1>
            <div className="Container-procore-main">
                <h2>BuiltView: Enhance Your Procore Experience</h2>
                <h4>
                    BuitView is a robust plugin available in the Procore
                    Marketplace, designed to enhance the functionality of
                    Procore&apos;s construction management platform.This plugin
                    is tailored to meet the needs of various enterprise levels,
                    offering a suite of features that streamlines project
                    management tasks, improve data visualization, and facilitate
                    better decision-making.
                </h4>
                <span className="span-size-for-procore">
                    For detailed pricing and to see how BuiltView can fit into
                    your organization&apos;s Procore ecosystem, please visit the
                    Procore Marketplace or contact the BuiltView sales team
                    directly.This approach will ensure that potential clients
                    receive the most accurate and relevant information tailored
                    to their specific organizational requirements
                </span>
                <Link
                    href="#"
                    className="margin-for-contact-btn button-bg-pricing"
                >
                    Start trial
                </Link>
            </div>
        </div>
    );
}

export default Procore;
