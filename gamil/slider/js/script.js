function gallery(cssSelector) {
    let currentGallery = document.querySelector(cssSelector);
    let galleryList = currentGallery.querySelector(".gallery__list");
    galleryList.addEventListener("click", (event) => {
        let currentElement = event.target;
        if(currentElement.tagName != "IMG") return;

        galleryList.querySelector(".selected").classList.remove("selected");
        currentElement.classList.add("selected");

        let largeImg = currentGallery.querySelector(".large__img").firstElementChild;
        largeImg.src = currentElement.src;
    });

    let prevBtn = currentGallery.querySelector(".gallery__prev-btn");
    let nextBtn = currentGallery.querySelector(".gallery__next-btn");

    let step = 400;
    let galleryCarousel = currentGallery.querySelector(".gallery__carousel");
    let containerWidth;
    let leftMargin;
    let rightShift;

    prevBtn.addEventListener("click", () => {
        calculateSize();
        let position = leftMargin + step;
        
        if(position > 0) position = 0;
        if(leftMargin == 0) position = leftMargin - rightShift;;

        moveAt(position);
    });

    nextBtn.addEventListener("click", () => {
        calculateSize();
        let position = leftMargin - step;

        if(rightShift < step) position = leftMargin - rightShift;
        if(rightShift == 0) position = 0;

        moveAt(position);
    });

    function moveAt(y) {
        galleryList.style.marginLeft = y + "px";
    }

    function calculateSize() {
        let li = galleryList.querySelector("li");
        let padding = parseFloat(getComputedStyle(li).paddingLeft);
        let widthList = galleryList.scrollWidth - padding;
        containerWidth = galleryCarousel.clientWidth;
        leftMargin = parseFloat(getComputedStyle(galleryList).marginLeft);
        rightShift = widthList + leftMargin - containerWidth;
    }

    let playBtn = currentGallery.querySelector(".play-btn");
    let pauseBtn = currentGallery.querySelector(".pause-btn");
    let idInterval;

    playBtn.onclick = () => {
        clearInterval(idInterval);
        currentGallery.querySelector(".selected-btn")?.classList.remove("selected-btn");
        playBtn.classList.add("selected-btn");

        idInterval = setInterval(() => {
            let currentImg = galleryList.querySelector(".selected");
            let galleryImg = currentImg.closest(".gallery__img");
            let nextImg = galleryImg.nextElementSibling?.firstElementChild;
            if(!nextImg) nextImg = galleryList.querySelector(".gallery__img").firstElementChild;
    
            let event = new Event("click", {bubbles: true});
            nextImg.dispatchEvent(event);
        }, 3000)
    }

    pauseBtn.onclick = () => {
        currentGallery.querySelector(".selected-btn")?.classList.remove("selected-btn");
        pauseBtn.classList.add("selected-btn");
        clearInterval(idInterval);
    }

    playBtn.dispatchEvent(new Event("click"));
}


gallery(".gallery-1");
gallery(".gallery-2");