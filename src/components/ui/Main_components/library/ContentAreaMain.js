import contentAreaMainStyles from '../../../../styling/components/library/contentAreaMain.scss';

const ContentAreaMain = (props) => {
    const { id, title, position, parallaxImage, content } = props;
  if (position === "left") {
    return (
        <div id={id} className="content-area content-area-main" style={contentAreaMainStyles}>
            <div className="main-content-parallax" style={{backgroundPosition: "bottom left", backgroundImage: `url(${parallaxImage})`}}></div>
            <div className="main-content-text">
                <h2>{title}</h2>
                <div className="text-left">
                    {content}
                </div>
            </div>
        </div>
    );
  } else if (position === "right") {
    return (
        <div id={id} className="content-area content-area-main" style={contentAreaMainStyles}>
            <div className="main-content-text">
                <h2>{title}</h2>
                <div className="text-right">
                    {content}
                </div>
            </div>
            <div className="main-content-parallax" style={{backgroundPosition: "bottom left", backgroundImage: `url(${parallaxImage})`}}></div>
        </div>
    );
  } else if (position === "no-parallax") {
    return (
        <div id={id} className="content-area content-area-main" style={contentAreaMainStyles}>
            <div className="main-content-text">
                <h2>{title}</h2>
                <div className="text-left">
                    {content}
                </div>
            </div>
        </div>
    );  
  }
}

export default ContentAreaMain
