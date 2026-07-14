function Header(props){

return(

<header className="header">

<h1>

{props.siteName}

</h1>

<nav>

<a href="#">Home</a>

<a href="#">Courses</a>

<a href="#">Profile</a>

<span className="count">

Enrolled : {props.count}

</span>

</nav>

</header>

);

}

export default Header;