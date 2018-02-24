import bannerStyles from '../../../../styling/components/library/banner.scss';

const Banner = (props) => {
    const { title, parallaxImage } = props;
    return (
        <div className="head-banner" style={bannerStyles, {backgroundImage: `url(${parallaxImage})`}}>
            <div className="banner-contents">
              <div className="banner-title">
                <h1>{title}</h1>
              </div>
            </div>
        </div>
)}

export default Banner
