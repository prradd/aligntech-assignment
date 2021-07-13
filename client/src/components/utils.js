// Get 5 random photos from api
export const getPhotos = async () => {
    const res = await fetch('http://localhost:5000/api/random', {
        method: 'GET',
        mode: 'cors'
    });

    const result = await res.json()
    return await result;
}