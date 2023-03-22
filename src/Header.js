import React from 'react'

const Header = (props) => {
  // const headerStyle={
  //   backgroundColor:'royalblue',
  //   color: '#fff'
  // }
  return (
    <header>
      {/* <h1>Groceries List</h1> */}
      <h1>{props.title}</h1>
    </header>
  )
}

// Header.defaultProps = {
//   title: "Default Title"
// }

export default Header
