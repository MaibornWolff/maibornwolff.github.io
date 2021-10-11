import React, { useEffect, useState } from 'react';

function httpGetAsync(theUrl: string | URL) {
    return new Promise(function (resolve) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', theUrl, true); // true for asynchronous
        xmlHttp.responseType = 'text';
        xmlHttp.onload = function () {
            if (
                xmlHttp.readyState === XMLHttpRequest.DONE &&
                xmlHttp.status === 200
            )
                resolve(xmlHttp.responseText);
        };
        xmlHttp.send(null);
    });
}

interface Props {
    url: string;
    className: string;
}

const ZenQuote: React.FC<Props> = (props) => {
    const [quote, setQuote] = useState<string | undefined>();

    useEffect(() => {
        httpGetAsync(props.url).then(function (quote: any) {
            setQuote(quote);
        });
    });
    return <p className={props.className}>{quote}</p>;
};

export default ZenQuote;
