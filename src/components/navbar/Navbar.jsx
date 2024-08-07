import "./navbar.scss"

function Navbar() {
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt=""/>
                    <span>mimiyazaki</span>
                </a>    
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Others</a>
            </div>
            <div className="right">
                <a href="/">Sign In</a>
                <a href="/" className="register">Sign Up</a>
            </div>
        </nav>
    )

}

export default Navbar;