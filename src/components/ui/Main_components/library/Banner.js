const Banner = (props) => {
    const { title } = props;
    return (
        <div className="head-banner">
            <div className="banner-contents">
                <h1>{title}</h1>
            </div>
        </div>
)}

export default Banner