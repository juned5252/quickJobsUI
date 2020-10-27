import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { JobComponent } from './job/job.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobslistComponent } from './jobslist/jobslist.component';


const routes: Routes = [
    {path:'', redirectTo: '/jobs', pathMatch: 'full'},
    {path:'jobs',component: JobslistComponent},
    {path:'signin',component: SigninComponent},
    {path:'signup',component: SignupComponent},
    {path:'job',component: JobComponent},
    {path:'**',component: PageNotFoundComponent}
];

@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
)

export class AppRoutingModule {}