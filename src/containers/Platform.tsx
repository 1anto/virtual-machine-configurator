import React from 'react';
import ImageCard from '../components/ImageCard'

// interface propTypes {
//     title: string,
//     description: string,
//     img: string,
//     price: number
//     types: string[]
// }

const machineImages = [
    {
        title: 'Linux 2 image',
        description: 'Linux 2 comes with 5 years of support', 
        img: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
        price: 243.61,
        types: ['64-bit(x86)', '64-bit(ARM)']
    },
    {
        title: 'Red Hat Enterprise Linux 8',
        description: 'Linux 2 comes with 5 years of support',
        img: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
        price: 300,
        types: ['64-bit(x86)', '64-bit(ARM)']
    },
    {
        title: 'Microsoft Windows Server 2019 Base',
        description: 'Linux 2 comes with 5 years of support',
        img: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
        price: 338.77,
        types: ['64-bit(ARM)']
    },
    {
        title: 'SUSE Linux Enterprise Server',
        description: 'Linux 2 comes with 5 years of support',
        img: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
        price: 200.22,
        types: ['64-bit(x86)', '64-bit(ARM)']
    },
];

function Platform() {
    
    return (
        <div>
            {machineImages.map(image => {
                return (
                    <ImageCard
                        title={image.title}
                        description={image.description}
                        img={image.img}
                        types= {image.types}
                    />
                )
            })}
        </div>
    )
}

export default Platform;