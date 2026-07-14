<template>

<div class="dashboard">

    <!-- Hero Section -->

    <section class="hero">

        <div class="hero-left">

            <h1>

                Welcome Back 👋

            </h1>

            <p>

                Manage your courses, monitor your credits and
                stay on top of your academic journey.

            </p>

            <RouterLink to="/courses">

                <button>

                    Explore Courses

                </button>

            </RouterLink>

        </div>

        <div class="hero-right">

            🎓

        </div>

    </section>

    <!-- Statistics -->

    <section class="stats">

        <div class="card">

            <h2>📚</h2>

            <h3>5</h3>

            <p>Courses</p>

        </div>

        <div class="card">

            <h2>⭐</h2>

            <h3>18</h3>

            <p>Credits</p>

        </div>

        <div class="card">

            <h2>🏆</h2>

            <h3>8.9</h3>

            <p>GPA</p>

        </div>

        <div class="card">

            <h2>👨‍🎓</h2>

            <h3>250</h3>

            <p>Students</p>

        </div>

    </section>

    <!-- Features -->

    <section class="features">

        <div class="feature">

            <h2>📖 Course Management</h2>

            <p>

                Browse all available courses and enroll instantly.

            </p>

        </div>

        <div class="feature">

            <h2>📊 Progress Tracking</h2>

            <p>

                Monitor enrolled credits and academic performance.

            </p>

        </div>

        <div class="feature">

            <h2>⚡ Fast API</h2>

            <p>

                Axios powered centralized API integration.

            </p>

        </div>

    </section>

</div>

</template>

<script setup>

</script>

<style scoped>

.dashboard{

display:flex;

flex-direction:column;

gap:45px;

}

/* Hero */

.hero{

display:flex;

justify-content:space-between;

align-items:center;

background:linear-gradient(135deg,#5D4037,#8D6E63);

padding:50px;

border-radius:25px;

color:white;

box-shadow:0 15px 35px rgba(0,0,0,.15);

}

.hero-left{

width:55%;

}

.hero h1{

font-size:50px;

margin-bottom:20px;

}

.hero p{

font-size:18px;

line-height:1.8;

margin-bottom:25px;

}

.hero button{

padding:15px 30px;

border:none;

border-radius:40px;

background:white;

color:#5D4037;

font-size:18px;

font-weight:bold;

cursor:pointer;

transition:.3s;

}

.hero button:hover{

transform:translateY(-4px);

box-shadow:0 10px 20px rgba(0,0,0,.2);

}

.hero-right{

font-size:140px;

}

/* Stats */

.stats{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(220px,1fr));

gap:25px;

}

.card{

background:white;

padding:30px;

text-align:center;

border-radius:20px;

box-shadow:0 8px 18px rgba(0,0,0,.08);

transition:.3s;

}

.card:hover{

transform:translateY(-8px);

}

.card h2{

font-size:45px;

}

.card h3{

font-size:34px;

margin:10px 0;

color:#5D4037;

}

/* Features */

.features{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

gap:25px;

}

.feature{

background:white;

padding:30px;

border-radius:20px;

box-shadow:0 8px 18px rgba(0,0,0,.08);

}

.feature h2{

color:#5D4037;

margin-bottom:15px;

}

.feature p{

line-height:1.7;

color:#555;

}

@media(max-width:900px){

.hero{

flex-direction:column;

text-align:center;

}

.hero-left{

width:100%;

}

.hero-right{

margin-top:25px;

font-size:90px;

}

}

</style>