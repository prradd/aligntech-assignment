const randomPhotos = (arr, num ) => {
    if (num < arr.length) {
        const set = new Set(); // Set of random indexes
        while (set.size < num) {
            set.add(Math.floor(Math.random() * arr.length))
        }
        return Array.from(set).map(i => arr[i]);
    }
    return [];
}

module.exports = randomPhotos;