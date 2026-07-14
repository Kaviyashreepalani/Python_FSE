import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { CourseCard } from '../course-card/course-card';

import { CourseService } from '../../services/course.service';

@Component({

selector:'app-course-list',

standalone:true,

imports:[

CommonModule,

FormsModule,

CourseCard

],

templateUrl:'./course-list.html',

styleUrl:'./course-list.css'

})

export class CourseList implements OnInit{

searchTerm='';

loading=true;

courses:any[]=[];

constructor(

private courseService:CourseService

){}

ngOnInit(){

this.courseService.getCourses().subscribe(data=>{

this.courses=data.map((item,index)=>({

name:item.title,

code:"CS10"+(index+1),

credits:4,

grade:"A"

}));

this.loading=false;

});

}

get filteredCourses(){

return this.courses.filter(course=>

course.name.toLowerCase()

.includes(

this.searchTerm.toLowerCase()

)

);

}

}

