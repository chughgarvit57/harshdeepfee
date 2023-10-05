
export default function NavBar() {
    return (
        <nav className="navigation_bar">
            <div className="left-logo">
                <h1>home</h1>
            </div>
            <div className="right-nav">
                <ul>
                    <li><a href="#" className="active">home</a></li>
                    <li><a href="#" className="active">shop</a></li>
                    <li><a href="#" className="active">contact</a></li>
                    <li><a href="#"><i className="fas fa-bars"></i></a></li>
                </ul>
            </div>
        </nav>
    )
}