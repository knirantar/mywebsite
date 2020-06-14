import React from 'react'

class MenuComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log("Menu components constructor invoked");
  }

  componentDidMount()
  {
    console.log("MenuComponent componentDidMount invoked");
  }

  render () {
    console.log("Menu components render invoked");
    const menu = this.props.dishes.map((dish)=>{
      return(<div key={dish.id}>
        {dish.id}<br />
        {dish.name}
      </div>
    );
  });
    return(
      <div>
            These are all dishes
        {menu}
      </div>
    )
  }
}

export default MenuComponent;
