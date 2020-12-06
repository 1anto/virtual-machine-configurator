import * as React from 'react';
import ImageCard from '../components/ImageCard'

function Summary(){
    const image = {
        title: 'Linux 2 image',
        description: 'Linux 2 comes with 5 years of support', 
        img: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
        price: 243.61,
        types: ['64-bit(x86)', '64-bit(ARM)']
    }

    return (
        <ImageCard
            title={image.title}
            description={image.description}
            img={image.img}
            types= {image.types}
        />
    )
}

export default Summary;