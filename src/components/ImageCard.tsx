import React from 'react';

type propTypes = {
    title: string,
    description: string,
    img: string
}

const handleChange = (event: string) => {
    console.log(event);
}

function ImageCard(props: propTypes) {
    return (
        <div className="ImageCard">
            <div>
                <img src={props.img} alt="the vm" className="ImageIcon" />
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="procContainer">
                <label>
                <input type="radio" name="procType" value="86" onChange={() => handleChange('86')} />
                64-bit(x86)
                </label>
                <label>
                <input type="radio" name="procType" value="ARM" onChange={() => handleChange('ARM')} />
                64-bit(ARM)
                </label>
                <button className="fullWidthBtn">Select</button>
            </div>
        </div>
    );
}

export default ImageCard;