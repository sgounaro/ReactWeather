var React = require('react')
var {Link} = require('react-router')


var Nav = React.createClass({

  onSearch: function(e) {
    e.preventDefault();
    alert('Not yet wired up');
  },

  render: function() {


          return (
            <div className="top-bar">
              <div className="top-bar-left">
                 <ul className = "menu">
                   <li className = "menu-text">Weather App </li>

                  <li>
                      <Link to="/">Get Weather</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                     <Link to="/examples">Examples</Link>

                  </li>

                 </ul>


              </div>
              <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                   <ul className="menu">
                       <li><input type="search" placeholder="Search"></input></li>
                       <li><button type="submit" className="button">Get Weather</button></li>
                   </ul>
                 </form>
              </div>

            </div>
          );




  }
});


module.exports = Nav;


// var old = (
//   <div>
//   <h2>Nav Component</h2>
//   <Link to="/">Get Weather</Link>
//   <Link to="/about">About</Link>
//   <Link to="/examples">Examples</Link>
//   </div>
// )
