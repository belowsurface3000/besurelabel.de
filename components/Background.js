function Background() {
    return (
        <div className="background">
            <picture>
                <source srcSet={"/pics/bannerSmall.jpg"} media="(max-width: 850px)" />
                <source srcSet={"/pics/bannerMid.jpg"} media="(max-width: 1600px)" />
                <source srcSet={"/pics/bannerHigh.jpg"} />
                <img src={"/pics/banner.JPG"} alt="An artistic banner" />
            </picture>

            <div className="darker"></div>
        </div>
    )
}

export default Background;