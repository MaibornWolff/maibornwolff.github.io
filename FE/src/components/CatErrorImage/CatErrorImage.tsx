import React from 'react';

interface Props {
    errCode: number;
}

const CatErrorImage: React.FC<Props> = (props) => {
    let source = 'https://http.cat/' + props.errCode.toString();
    return (
        <>
            <img
                className="cat-error-img"
                src={source}
                alt={'Error: ' + props.errCode.toString()}
            ></img>
        </>
    );
};
export default CatErrorImage;
