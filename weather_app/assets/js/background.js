window.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://upload.wikimedia.org/wikipedia/commons/d/d5/Scenic_view_of_a_town_on_a_lake_%28Unsplash%29.jpg',
        'https://images.pexels.com/photos/16533909/pexels-photo-16533909/free-photo-of-scenic-view-of-mountains-and-forest.jpeg',
        'https://images.pexels.com/photos/733031/pexels-photo-733031.jpeg',
    ];
    
    const bgImage = document.querySelector('.bg-image img');
    const randomIndex = Math.floor(Math.random() * images.length);

    bgImage.src = images[randomIndex];

    console.log(bgImage.src)
});
