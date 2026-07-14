function CourseCard({

id,

name,

code,

credits,

grade,

onEnroll

}){

return(

<div className="card">

<h2>{name}</h2>

<p>

<b>Code :</b> {code}

</p>

<p>

<b>Credits :</b> {credits}

</p>

<p>

<b>Grade :</b> {grade}

</p>

<button

onClick={()=>onEnroll(id)}

>

Enroll

</button>

</div>

);

}

export default CourseCard;