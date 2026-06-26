import React,{useState} from "react"

function UploadFood(){

const[file,setFile]=useState(null)

function upload(){

if(file){

alert(
"Food uploaded successfully"
)

}

}

return(

<div
style={{
textAlign:"center",
marginTop:"50px"
}}
>

<h2>
Upload Food Image
</h2>

<input
type="file"
onChange={(e)=>
setFile(
e.target.files[0]
)}
/>

<br/>
<br/>

<button
onClick={upload}
>

Analyze

</button>

</div>

)

}

export default UploadFood