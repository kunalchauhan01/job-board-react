import './Navbar.css';
function Navbar(){
    return(
        <header>
            <nav className="navbar">
                <h1>Job Board</h1>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/create">New Job</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/login">Login/sign up</a>
                    <a href="/profile">Profile</a>
                </div>
            </nav>
        </header>
        
    )
}
export default Navbar;