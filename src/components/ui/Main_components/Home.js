const Home = () => (
    <div className="home-container">
        <div className="welcome-banner">
            <div className="banner-contents">
                <h1>welcome to</h1>
                <img src="/assets/img/cccctitle-2.png" id="cccc-title-image" />
                <h2>Cross Covenant Chinese Church</h2>
            </div>
        </div>

        <div className="content-area" id="content-area-primary">
            <h2>Phasellus placerat mi vel finibus dapibus</h2>
            <p>Sed rhoncus accumsan congue. Proin tempus sem tellus, ac luctus urna maximus a.</p><p>Integer vel convallis felis, et hendrerit libero.</p><p>Morbi placerat condimentum orci, eu placerat quam cursus consequat.</p>
        </div>

        <div className="content-areas-container">
            <div className="content-area" id="content-area-times">
                <h2>Meeting Times</h2>
                <div id="times-container">
                    <p>Sunday School - 9:00am</p>
                    <p>Sunday Worship - 9:30am</p>
                    <p>Wednesday Fellowship - 6:30pm</p>
                </div>
            </div>

            <div className="content-area" id="content-area-location">
                <h2>Location</h2>
                <div id="location-container">
                    <p>We meet on Sunday mornings in the chapel at Christ Covenant Church in Matthews, NC.</p>
                </div>
            </div>
        </div>

        <div className="content-area" id="content-area-contact">
            <div><p>ph: (123) 456-78910</p></div><div><p>physical address: 123 Happy Ln. Matthew, NC 28226</p></div><div><p>mailing address: 123 Happy Ln. Matthew, NC 28226</p></div>
        </div>
    </div>
)

export default Home