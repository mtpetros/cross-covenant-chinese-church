import styles from '../../../../styling/components/library/contentAreaMain.scss';

const ContentAreaMain = (props) => {
    const { id, title, textPosition, content } = props;
    return textPosition === "text-left" ? (
        <div id={id} className="content-area content-area-main">
            <div className="main-content-parallax"></div>
            <div className="main-content-text">
                <h2>{title}</h2>
                <div className="text-left" style={styles}>
                    {content}
                </div>
            </div>
        </div>
    ) : (
        <div id={id} className="content-area content-area-main">
            <div className="main-content-text">
                <h2>{title}</h2>
                <div className="text-right" style={styles}>
                    {content}
                </div>
            </div>
            <div className="main-content-parallax"></div>
        </div>
    )
}

export default ContentAreaMain