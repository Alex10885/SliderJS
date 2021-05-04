let sliderFactory = {
     createNewSlider: function(){
    let newSlider = {
        currentImageIndex: 0,
        imagesURLs: [],
        showPrewBtn: null,//document.querySelector('.showPrev'),
        showNextBtn: null, //document.querySelector('.showNext'),
        slideImg: null, // document.querySelector('.slideImg'),

        init: function (elId) {

            let that = this;

            let elSelector = '#' + elId

            let el = document.querySelector( elSelector );

            this.showPrewBtn = el.querySelector('.showPrev');
            this.showNextBtn = el.querySelector('.showNext');
            this.slideImg = el.querySelector('.slideImg');

            this.showPrewBtn.addEventListener('click', function (e) {
                that.onShowPrewClick(e);
            });
            this.showNextBtn.addEventListener('click', function (e) {
                that.onShowNextClick(e);
            });



            this.imagesURLs.push('https://static-sl.insales.ru/r/VDpLHrmekCw/fit/360/360/ce/1/plain/images/products/1/5318/427078854/large_4a43378b91674254ac5fd98ed9bc0698.png');
            this.imagesURLs.push('https://monte24.ru/wp-content/uploads/runyi2.jpg');
            this.imagesURLs.push('http://www.slavabogam.ru/products/1066/thumb/2f/obereg-runa-solntsa-soulu_1400_567_567_0_100.jpg');
            this.imagesURLs.push('https://st.depositphotos.com/1010596/1832/v/600/depositphotos_18325149-stock-illustration-set-of-runes.jpg');

            this.slideImg.src = this.imagesURLs[this.currentImageIndex];
            this.showPrewBtn.disabled = true;

        },
        ///////
        onShowPrewClick: function (e) {
            this.currentImageIndex--;
            this.slideImg.src = this.imagesURLs[this.currentImageIndex];
            this.showNextBtn.disabled = false;

            if (this.currentImageIndex === 0) {
                this.showPrewBtn.disabled = true;
            }
        },
        ////////
        onShowNextClick: function (e) {
            this.currentImageIndex++;
            this.slideImg.src = this.imagesURLs[this.currentImageIndex];
            this.showPrewBtn.disabled = false;

            if (this.currentImageIndex === (this.imagesURLs.length - 1)) {
                this.showNextBtn.disabled = true;

            }
        }
    };

    return newSlider;
}
};




