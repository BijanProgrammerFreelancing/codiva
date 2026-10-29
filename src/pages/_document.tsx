import {ReactElement} from 'react';

import {Html, Head, Main, NextScript} from 'next/document';

export default function Document(): ReactElement {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <meta name="theme-color" content="#ffffff" />

                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
