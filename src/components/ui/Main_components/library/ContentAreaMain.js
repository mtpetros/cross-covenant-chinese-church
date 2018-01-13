const ContentAreaMain = (props) => {
    const { id, title, textPosition, content } = props;
    return (
        <div id={id} className="content-area content-area-main">
            <div className="main-content-text">
                <h2>{title}</h2>
                <div className={textPosition}>
                    {content}
                </div>
            </div>
            <div className="main-content-parallax"></div>
        </div>
)}

export default ContentAreaMain