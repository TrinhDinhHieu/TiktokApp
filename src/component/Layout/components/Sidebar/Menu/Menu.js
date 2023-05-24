
function Menu({children}) {
  console.log('chiden', children);
    return ( 
       <nav>
        {children}
       </nav>
     );
}

export default Menu;