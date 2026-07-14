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

// =======================================
// DOM Elements
// =======================================

const notificationList = document.getElementById("notification-list");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");
const retryBtn = document.getElementById("retryBtn");

// =======================================
// Task 50
// Reusable Fetch Function
// =======================================

async function apiFetch(url){

    const response = await fetch(url);

    if(!response.ok){

        throw new Error("Unable to load data. Please try again.");

    }

    return await response.json();

}

// =======================================
// Task 51 & 52
// Fetch Notifications
// =======================================

async function loadNotifications() {

    loading.innerHTML = "<div class='spinner'></div><p>Loading Latest Notifications...</p>";

    notificationList.innerHTML = "";

    errorMessage.innerHTML = "";

    retryBtn.style.display = "none";

    try {

        await apiFetch("https://jsonplaceholder.typicode.com/posts?_limit=6");

        loading.style.display = "none";

        const notifications = [

            {
                title: "Semester Examination Schedule Released",
                body: "The Semester VI examination timetable has been published. Students are requested to check the examination schedule and prepare accordingly."
            },

            {
                title: "Assignment Submission Reminder",
                body: "Submit your Web Development assignment before 25 July 2026 through the Student Portal to avoid late submission penalties."
            },

            {
                title: "Campus Recruitment Drive",
                body: "Cognizant will conduct an on-campus recruitment drive next week. Eligible students should complete their registration."
            },

            {
                title: "Workshop Registration Open",
                body: "Registrations are now open for the Full Stack Development Workshop. Limited seats are available."
            },

            {
                title: "Library Notice",
                body: "The central library will remain open until 9:00 PM during examination week for all students."
            },

            {
                title: "Scholarship Announcement",
                body: "Applications for the Academic Excellence Scholarship are now open. Submit the required documents before the deadline."
            }

        ];

        notifications.forEach(notification => {

            const card = document.createElement("div");

            card.className = "notification";

            card.innerHTML = `

                <div class="notification-header">

                    <span class="badge">NEW</span>

                    <span class="date">${new Date().toLocaleDateString()}</span>

                </div>

                <h3>${notification.title}</h3>

                <p>${notification.body}</p>

            `;

            notificationList.appendChild(card);

        });

    }

    catch (error) {

        loading.style.display = "none";

        errorMessage.textContent = error.message;

        retryBtn.style.display = "block";

    }

}

loadNotifications();


// =======================================
// Task 53
// Simulate 404 Error
// =======================================

async function loadBadURL(){

    try{

        await apiFetch(
            "https://jsonplaceholder.typicode.com/nonexistent"
        );

    }

    catch(error){

        console.log("404 Error Handled Successfully");

    }

}

loadBadURL();


// =======================================
// Task 54
// Retry Button
// =======================================

retryBtn.addEventListener("click",()=>{

    loading.style.display="block";

    loadNotifications();

});


// =======================================
// Task 55
// Axios CDN already added in index.html
// =======================================


// =======================================
// Task 56
// Axios Function
// =======================================

async function axiosFetch(url){

    const response = await axios.get(url);

    return response.data;

}


// =======================================
// Task 57
// Axios Params
// =======================================

async function userPosts(){

    const posts = await axios.get(

        "https://jsonplaceholder.typicode.com/posts",

        {

            params:{

                userId:1

            },

            timeout:5000

        }

    );

    console.log("User 1 Posts");

    console.log(posts.data);

}

userPosts();


// =======================================
// Task 58
// Axios Interceptor
// =======================================

axios.interceptors.request.use(config=>{

    console.log(

        "API Call Started :",

        config.url

    );

    return config;

});


// =======================================
// Example Axios Call
// =======================================

axiosFetch(

"https://jsonplaceholder.typicode.com/users/1"

)

.then(data=>{

console.log(

"Axios User :",

data.name

);

});


// =======================================
// Task 59
// Fetch vs Axios
// =======================================

/*

FETCH vs AXIOS

1.

Fetch requires

response.json()

Axios automatically converts JSON.

----------------------------

2.

Fetch does NOT throw
errors for HTTP 404.

Axios automatically throws
errors for non-2xx responses.

----------------------------

3.

Fetch has no timeout.

Axios supports timeout,
interceptors and request cancellation.

*/