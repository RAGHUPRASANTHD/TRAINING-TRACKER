import { Routes,RouterModule } from '@angular/router';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';
import { StudentprofileComponent } from './student/studentprofile/studentprofile.component';
import { AddskillComponent } from './student/addskill/addskill.component';
import { ViewprojectComponent } from './student/viewproject/viewproject.component';
import { ViewskillComponent } from './student/viewskill/viewskill.component';
import { FormComponent } from './student/form/form.component';
import { LoginComponent } from './login/login.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { FindstudentsComponent } from './admin/findstudents/findstudents.component';
import { MapstudentComponent } from './admin/mapstudent/mapstudent.component';
import { AdminSupportdeskComponent } from './admin/admin-supportdesk/admin-supportdesk.component';
import { NotificationComponent } from './admin/notification/notification.component';
export const routes: Routes = [
    {path:'student-home',component:StudenthomeComponent},
    { path: '', redirectTo: '/student-home', pathMatch: 'full' }, // Redirect to student list by default
    {path:'student-profile',component:StudentprofileComponent},
    {path:'add-newskill',component:AddskillComponent},
    {path:'viewproject',component:ViewprojectComponent},
    {path:'viewskill',component:ViewskillComponent},
    {path:'form',component:FormComponent},
    {path:'login',component:LoginComponent},
    {path:'admin-home',component:AdminhomeComponent},
    {path:'find-student',component:FindstudentsComponent},
    {path:'map-student',component:MapstudentComponent},
    {path:'admin-supportdesk',component:AdminSupportdeskComponent},
    {path:'admin-notification',component:NotificationComponent}
];

