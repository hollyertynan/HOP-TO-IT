function NavigationBar() {
    return (
        <nav>
            <header className="border border-3 border-success">Navigation</header>
        </nav>
    )
}

function SubHeader() {
    return (
        <div className="border border-3 border-alert">
            <div>Get Started</div>
        </div>
    )
}
// GoogleMap React Component
function GoogleMap() {
    return (
        <div>
            <div>Google Map Container</div>
        </div>
    )
}
// HomeInformationBox React Component
function HomeInformationBox() {
    return (
        <div>
            <p>Temporary Text...</p>
        </div>
    )
}
// MainTemplate React Component
function MainTemplate() {
    return (
        <div>
            <NavigationBar />
            <SubHeader />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 border border-3 border-info p-5">
                        <GoogleMap />
                    </div>
                    <div className="col-md-6 border border-3 border-warning p-5">
                        <HomeInformationBox />
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<MainTemplate />, document.getElementById('root'))