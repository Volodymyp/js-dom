const images = [
    'img/baby-yoda.svg',
    'img/banana.svg',
    'img/girl.svg',
    'img/viking.svg'
]

let currIdx = 0;

function showCurrentImage() {
    const imgContainer = document.querySelector('.current');
    imgContainer.src = images[currIdx];
}

showCurrentImage();

function nextImage() {
    currIdx++;
    if (currIdx >= images.length) currIdx = 0;
    showCurrentImage();
}

function prevImage() {
    currIdx--;
    if (currIdx < 0) currIdx = images.length - 1;
    showCurrentImage();
}

document.querySelector('.prev').addEventListener('click', prevImage);
document.querySelector('.next').addEventListener('click', nextImage);

setInterval(nextImage, 3000);





// class Carousel {
//     constructor(images) {
//         this.images = images;
//         this.currIdx = 0;
//         this.showCurrentImage();
//         document.querySelector('.prev').addEventListener('click', 
//              () => this.prevImage() );
//         document.querySelector('.next').addEventListener('click', 
//             () => this.nextImage() );
//         setInterval(() => this.nextImage(), 3000);
//     }
//     showCurrentImage() {
//         document.querySelector('.current').src = this.images[this.currIdx];
//     }
//     nextImage() {
//         if (++this.currIdx >= this.images.length) this.currIdx = 0;
//         this.showCurrentImage();
//     }
//     prevImage() {
//         if (--this.currIdx < 0) this.currIdx = this.images.length - 1;
//         this.showCurrentImage();
//     }
// }

// new Carousel([
//     'img/baby-yoda.svg',
//     'img/banana.svg',
//     'img/girl.svg',
//     'img/viking.svg'
// ]);









