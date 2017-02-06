import React from 'react';

class NavLink extends React.Component{
  render(){
    return (
      <a href={this.props.url}>{this.props.linktext}</a>
    )
  }
}

class NavItem extends React.Component {
  makeLink(){
    return <NavLink url={this.props.url} linktext={this.props.linktext} />;
  }
  
  makeSubMenu(){
    return <NavBar items={this.props.submenu} />;
  }
  
  makeNavContent(){
    var content = [this.makeLink()];
    if(this.props.submenu){
      content.push(this.makeSubMenu());
    }
    return content;
  }
  
  render(){
    var content = this.makeNavContent();
    return (
      <li>
        {content}
      </li>
    );
  }
}

class NavBar extends React.Component {
  makeItem(item){
    return ( <NavItem linktext={item.linktext} url={item.url} submenu={item.submenu} /> )
  }
  
  render(){
    var items = this.props.items.map(this.makeItem);
    return (
      <ul>
        {items}
      </ul>
    )
  }
}

export default NavBar;
