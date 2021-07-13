import React, {useEffect, useState} from 'react';
import {getPhotos} from "./utils";
import Container from "@material-ui/core/Container";
import ImageGallery from "react-image-gallery";

const Gallery = () => {

    const [photos, setPhotos] = useState([]);

    const images = photos.map(photo => {
        return {
            original: `https://picsum.photos/id/${photo.id}/1000/600`,
            thumbnail: `https://picsum.photos/id/${photo.id}/400/250`,
            description : photo.author,
        }
    })

    console.log(images)

    // Get the images on load
    useEffect(() => {
        (async () => {
            setPhotos(await getPhotos())
        })()
    }, [])

    if (!!photos.length) {
        return (
            <Container maxWidth="lg">
                <ImageGallery items={images} lazyLoad={true} showFullscreenButton={false} showPlayButton={false}/>
            </Container>
        );
    } else return null;

};

export default Gallery;
