import { Routes } from '@angular/router';

import { CourseList } from './components/course-list/course-list';
import { StudentProfile } from './components/student-profile/student-profile';

export const routes: Routes = [

  {
    path:'',
    component:CourseList
  },

  {
    path:'profile',
    component:StudentProfile
  },

  {
    path:'**',
    redirectTo:''
  }

];