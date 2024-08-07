import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Silence your doubts. Work diligently, and let your achievements speak for themselves.
                    </h1>
                    <p>
                        Stop letting self-doubt hold you back. Instead, channel your energy
                        into working hard and consistently towards your goals. You don&#39;t
                        need to announce every step—let your results and achievements be the
                        loudest proof of your efforts. With dedication and persistence, your
                        dreams will eventually become your reality.
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>4</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>2</h1>
                            <h2>Internships </h2>
                        </div>
                        <div className="box">
                            <h1>1</h1>
                            <h2>Semester of Exchange</h2>
                        </div>
                    </div>
                    </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage