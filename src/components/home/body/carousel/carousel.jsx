function Carousel() {
    return (
        <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide p-2" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
                <img src="images/carousel/film1.webp" className="d-block w-100 rounded" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <img src="images/carousel/film1poster.webp" className="carousel-img" alt="..."/>
                    <h5 className="crousel-discription">پرده خانه</h5>
                    <p className="crousel-discription">این نمایش به کارگردانی گلاب ادینه و نویسندگی بهرام بیضایی</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
                <img src="images/carousel/film2.webp" className="d-block w-100 rounded" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <img src="images/carousel/film2poster.webp" className="carousel-img" alt="..."/>
                    <h5 className="crousel-discription">پرده خانه</h5>
                    <p className="crousel-discription">این نمایش به کارگردانی گلاب ادینه و نویسندگی بهرام بیضایی</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
                <img src="images/carousel/film3.webp" className="d-block w-100 rounded" alt="..."/>
                <div className="carousel-caption ">
                    <img src="images/carousel/film3poster.webp" className="carousel-img" alt="..."/>
                    <h5 className="crousel-discription">بخارست</h5>
                    <p className="crousel-discription">بخارست فیلمی است به کارگردانی مسعود اطیایی و تهیه کنندگی علی ظلویی</p>
                </div>
            </div>
            </div>
            <div className="carousel-button">
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        </>

    )
}

export default Carousel;