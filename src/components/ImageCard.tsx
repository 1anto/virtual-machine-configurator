import React from 'react';

type propTypes = {
    title: string,
    description: string,
    img: string,
    types: string[]
}

const handleChange = (event: number) => {
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
                {
                    props.types.map((procType, index) => {
                        return(
                            <label key={index}>
                                <input type="radio" name="procType" value={procType} onChange={() => handleChange(index)}/>
                                {procType}
                            </label>
                        );
                    })
                }
                <button className="fullWidthBtn">Select</button>
            </div>
        </div>
    );
}

export default ImageCard;