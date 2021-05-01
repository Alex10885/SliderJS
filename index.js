let showPrewBtn = document.getElementById('showPrev');
let showNextBtn = document.getElementById('showNext');
let slideImg = document.getElementById('slideImg');

showPrewBtn.addEventListener('click', onShowPrewClick);
showNextBtn.addEventListener('click', onShowNextClick);

let imagesURLs = [];
imagesURLs.push('https://static-sl.insales.ru/r/VDpLHrmekCw/fit/360/360/ce/1/plain/images/products/1/5318/427078854/large_4a43378b91674254ac5fd98ed9bc0698.png');
imagesURLs.push('https://monte24.ru/wp-content/uploads/runyi2.jpg');
imagesURLs.push('http://www.slavabogam.ru/products/1066/thumb/2f/obereg-runa-solntsa-soulu_1400_567_567_0_100.jpg');
imagesURLs.push('https://st.depositphotos.com/1010596/1832/v/600/depositphotos_18325149-stock-illustration-set-of-runes.jpg');

let currentImageIndex = 0;

slideImg.src = imagesURLs[currentImageIndex];
showPrewBtn.disabled = true;

function onShowPrewClick() {
    currentImageIndex--;
    slideImg.src = imagesURLs[currentImageIndex];
    showNextBtn.disabled = false;

    if (currentImageIndex === 0){
        showPrewBtn.disabled = true;
    }
}

function onShowNextClick() {
    currentImageIndex++;
    slideImg.src = imagesURLs[currentImageIndex];
    showPrewBtn.disabled = false;

    if (currentImageIndex === (imagesURLs.length - 1)){
        showNextBtn.disabled = true;
    }
}