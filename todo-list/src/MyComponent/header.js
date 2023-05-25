import propTypes from 'prop-types'
function Header({title, searchBar})
{
    return (
        <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="falseTodos"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
            </ul>
           {searchBar  ?
           
            <form className="d-fTodoslex" role="search" >
           <div className='row'>
            <div className='col-md-8'>
              <input style={{float:'right'}}
                className="form-control me-2 col"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              </div>
              <div className='col-md-4'>
              <button className="btn btn-outline-success col" type="submit" style={{float:'left'}}>
                Search
              </button>
              </div>
              </div>  
            </form> 
            : <h1></h1>}
          </div>
        </div>
      </nav>
    </div>
    )
}
Header.defaultProps={
  title:"Todos",
  searchBar : true
}

Header.propTypes={
  title : propTypes.string,
  searchBar:propTypes.bool.isRequired
}
export default Header;