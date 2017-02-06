import React from 'react';

class SubMenu extends React.Component {
  
  makeSublink( linkdata ){
    return ( <li><a href={linkdata.url}>{linkdata.name}</a></li> );
  }
  render(){
    var sublinks = this.props.linkdata.map(this.makeSublink);
    return (
      <ul>
      {sublinks}
      </ul>
    )
  }
}

class Navbar extends React.Component {
  
  makeLink( linkdata ){
    if( linkdata.submenu ){
      return(
        <li><a href={linkdata.url}>{linkdata.name}</a>
          <ul>
            <SubMenu linkdata={linkdata.submenu} />
          </ul>
        </li>
      )
    } else {
      return(
        <li><a href={linkdata.url}>{linkdata.name}</a></li>
      )
    }
  }
  
  render() {
    var links = this.props.navdata.map(this.makeLink);
    return (   
       <ul>
       {links}
       </ul>
    );
  }
}

export default Navbar;
