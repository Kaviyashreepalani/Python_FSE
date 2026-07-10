// ===============================
// Local Course Data
// ===============================

const courses = [

{
    id:1,
    name:"HTML & CSS",
    code:"CS101",
    credits:4,
    grade:"A"
},

{
    id:2,
    name:"JavaScript",
    code:"CS102",
    credits:3,
    grade:"A+"
},

{
    id:3,
    name:"React JS",
    code:"CS103",
    credits:5,
    grade:"A"
},

{
    id:4,
    name:"Database Systems",
    code:"CS104",
    credits:4,
    grade:"B+"
},

{
    id:5,
    name:"Machine Learning",
    code:"CS105",
    credits:5,
    grade:"A+"
}

];

// ===============================
// DOM Elements
// ===============================

const courseGrid = document.querySelector(".course-grid");

const loadingCourses = document.getElementById("loadingCourses");

// ===============================
// Task 45
// Promise (.then())
// ===============================

function fetchUser(id){

    return fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    )

    .then(response=>response.json())

    .then(user=>{

        console.log("Promise User :",user.name);

        return user;

    });

}

fetchUser(1);

// ===============================
// Task 46
// async / await
// ===============================

async function fetchUserAsync(id){

    try{

        const response = await fetch(

            `https://jsonplaceholder.typicode.com/users/${id}`

        );

        const user = await response.json();

        console.log("Async User :",user.name);

    }

    catch(error){

        console.log(error);

    }

}

fetchUserAsync(2);

// ===============================
// Task 47
// Simulate Delay
// ===============================

function fetchAllCourses(){

    return new Promise(resolve=>{

        setTimeout(()=>{

            resolve(courses);

        },1000);

    });

}

// ===============================
// Render Courses
// ===============================

function renderCourses(courseList){

    courseGrid.innerHTML="";

    courseList.forEach(course=>{

        const card=document.createElement("article");

        card.className="course-card";

        card.innerHTML=`

        <h3>${course.name}</h3>

        <p><strong>Code :</strong> ${course.code}</p>

        <p><strong>Credits :</strong> ${course.credits}</p>

        <p><strong>Grade :</strong> ${course.grade}</p>

        `;

        courseGrid.appendChild(card);

    });

}

// ===============================
// Task 48
// Loading State
// ===============================

async function loadCourses(){

    loadingCourses.innerHTML="Loading Courses...";

    const data=await fetchAllCourses();

    loadingCourses.style.display="none";

    renderCourses(data);

}

loadCourses();

// ===============================
// Task 49
// Promise.all()
// ===============================

Promise.all([

fetchUser(1),

fetchUser(2)

])

.then(users=>{

console.log(

"Promise.all Users :",

users[0].name,

users[1].name

);

});