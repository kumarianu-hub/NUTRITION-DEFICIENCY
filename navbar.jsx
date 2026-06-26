import React from "react";

function Navbar() {
return (

<nav
style={{
display:"flex",
justifyContent:"space-between",
padding:"15px",
background:"#2e7d32",
color:"white"
}}
>

<h2>Nutrition Assistant</h2>

<div>

<a
href="/"
style={{
color:"white",
marginRight:"20px"
}}
>
Home
</a>

<a
href="/result"
style={{
color:"white"
}}
>
Results
</a>

</div>

</nav>

)
}

export default Navbar