import React from 'react';
import ImageCard from '../components/ImageCard'

function ChooseImage() {
    
    const machineImages = [
        { title: 'Linux 2 image', description: 'Linux 2 comes with 5 years of support', img: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg', price: 243.61 },
        { title: 'Red Hat Enterprise Linux 8', description: 'Linux 2 comes with 5 years of support', img: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg', price: 300 },
        { title: 'Microsoft Windows Server 2019 Base', description: 'Linux 2 comes with 5 years of support', img: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg', price: 338.77 },
        { title: 'SUSE Linux Enterprise Server', description: 'Linux 2 comes with 5 years of support', img: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg', price: 200.22 },
    ];

    return (
        <div>
            {machineImages.map(image => {
                return (
                    <ImageCard
                        title={image.title}
                        description={image.description}
                        img={image.img}
                    />
                )
            })}
        </div>
    )
}

export default ChooseImage;