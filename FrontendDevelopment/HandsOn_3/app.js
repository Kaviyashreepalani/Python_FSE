// ======================
// Course Data
// ======================

const courses = [

{
id:1,
name:"Data Structures",
code:"CS101",
credits:4,
grade:"A"
},

{
id:2,
name:"Java Programming",
code:"CS102",
credits:3,
grade:"A+"
},

{
id:3,
name:"HTML & CSS",
code:"CS103",
credits:4,
grade:"A"
},

{
id:4,
name:"React JS",
code:"CS104",
credits:5,
grade:"A+"
},

{
id:5,
name:"Database Systems",
code:"CS105",
credits:4,
grade:"B+"
}

];

// ======================
// ES6 Practice
// ======================

courses.forEach(({name,credits})=>{
    console.log(`${name} (${credits} Credits)`);
});

const formattedCourses = courses.map(course =>
`${course.code} - ${course.name} (${course.credits} Credits)`
);

console.log(formattedCourses);

const filteredCourses = courses.filter(course => course.credits >= 4);

console.log(filteredCourses);

const totalCredits = courses.reduce((sum,course)=>sum+course.credits,0);

console.log(totalCredits);

// ======================
// DOM Elements
// ======================

const grid=document.querySelector(".course-grid");

const total=document.getElementById("total-credits");

const search=document.getElementById("search-courses");

const selected=document.getElementById("selected-course");

// ======================
// Render Courses
// ======================

function renderCourses(courseArray){

grid.innerHTML="";

if(courseArray.length===0){

grid.innerHTML="<h3>No Course Found</h3>";

total.textContent="";

selected.textContent="";

return;

}

courseArray.forEach(course=>{

const article=document.createElement("article");

article.className="course-card";

article.dataset.id=course.id;

article.innerHTML=`

<h3>${course.name}</h3>

<p><strong>Course Code :</strong> ${course.code}</p>

<p><strong>Credits :</strong> ${course.credits}</p>

<p><strong>Grade :</strong> ${course.grade}</p>

`;

grid.appendChild(article);

});

const credits=courseArray.reduce((sum,c)=>sum+c.credits,0);

total.textContent=`Total Credits : ${credits}`;

}

renderCourses(courses);

// ======================
// Search Courses
// ======================

search.addEventListener("input",()=>{

const keyword=search.value.toLowerCase();

const result=courses.filter(course=>

course.name.toLowerCase().includes(keyword)

);

renderCourses(result);

});

// ======================
// Click Course Card
// ======================

grid.addEventListener("click",(event)=>{

const card=event.target.closest(".course-card");

if(!card) return;

const id=parseInt(card.dataset.id);

const course=courses.find(c=>c.id===id);

selected.innerHTML=`

<h3>Selected Course</h3>

<p><strong>Name :</strong> ${course.name}</p>

<p><strong>Code :</strong> ${course.code}</p>

<p><strong>Credits :</strong> ${course.credits}</p>

<p><strong>Grade :</strong> ${course.grade}</p>

`;

});