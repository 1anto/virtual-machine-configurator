import React from 'react';
import ImageCard from '../components/ImageCard'

function ChooseImage() {
    return (
        <div>
            <ImageCard
                title="this is the title"
                description="this is the description"
                img="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
            />
        </div>
    )
}

export default ChooseImage;