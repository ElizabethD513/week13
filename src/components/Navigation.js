import React from 'react'

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg">Trains Of America
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">History Of American Trains</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Choose Your Destination
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Steam Locomotives</a></li>
                  <li><a className="dropdown-item" href="#">Diesel Locomotives</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Electric Locomotives</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">All Aboard!</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
		
	);
}

export default Navigation