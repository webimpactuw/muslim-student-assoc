function Carousel({imgs, length}) {
    const pics = imgs.map((src, index) =>   
        <div class="mySlides fade">
        <div class="numbertext">{index} / {length}</div>
        <img className="" src={src} />
        <div class="text">Caption Text</div>
      </div>
    );
    
    let dots = [];
    for (let i = 0; i < length; i++){
        dots[i]="currentSlide("+i+")";
    }
    dots = dots.map((slide) => <span class="dot" onclick={slide}>.</span>);

    return (
        <div className="Carousel">
            {pics}
            <a class="prev" onClick="plusSlides(-1)">&#10094;</a>
            <a class="next" onClick="plusSlides(1)">&#10095;</a>
    
            <div className="centered">
                {dots}
            </div>
        </div>
    );
}

export default Carousel;