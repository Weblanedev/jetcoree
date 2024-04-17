import Head from "next/head";
import React, { FC } from "react";

interface MetaTagProps {
    title?: string;
    desc?: string;
    image?: string;
}

const MetaTag: FC<MetaTagProps> = ({ title, desc, image }) => {
    return (
        <>
            <Head>
                <title> {title ? `${title} - ` : ""} West-Gate Services </title>
                <link rel="icon" href="/assets/logowest.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content={
                        desc ??
                        "At Westgate Migration Services, we consider travelling to be more than an experience."
                    }
                />
                {/*  */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://www.westgatemigrationservices.com" />
                <meta
                    property="og:title"
                    content={`${title ? `${title} - ` : ""} West-Gate Services`}
                />
                <meta
                    property="og:description"
                    content={
                        desc ??
                        "At Westgate Migration Services, we consider travelling to be more than an experience."
                    }
                />
                <meta
                    property="og:image"
                    content={
                        image ??
                        "http://www.westgatemigrationservices.com/assets/logowest.png"
                    }
                />

                <meta name="twitter:type" content="website" />
                <meta name="twitter:site" content="@blocathon" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="http://www.westgatemigrationservices.com" />
                <meta
                    name="twitter:title"
                    content={`${title ? `${title} - ` : ""} West-Gate Services`}
                />
                <meta
                    name="twitter:description"
                    content={
                        desc ??
                        "At Westgate Migration Services, we consider travelling to be more than an experience."
                    }
                />
                <meta
                    name="twitter:image"
                    content={
                        image ??
                        "http://www.westgatemigrationservices.com/assets/logowest.png"
                    }
                ></meta>
            </Head>
        </>
    );
};

export default MetaTag;
