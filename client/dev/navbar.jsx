import React from 'react';

class Navbar extends React.Component {
  
  makeLink( linkdata ){
    return(
      <li><a href={linkdata.url}>{linkdata.name}</a></li>
    )
  }
  
  render() {
    var links = this.props.linkdata.map(this.makeLink);
    return (   
       <ul>
       {links}
       </ul>
    );
  }
}

export default Navbar;
