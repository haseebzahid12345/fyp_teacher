import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ContacusComponent } from './components/contacus/contacus.component';
import { ForgetPinComponent } from './components/forget-pin/forget-pin.component';
import { HomeAfterLoginComponent } from './components/home-after-login/home-after-login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfessionDetailsComponent } from './components/profession-details/profession-details.component';
import { ProfileTeacherComponent } from './components/profile-teacher/profile-teacher.component';
import { SettingTeacherComponent } from './components/setting-teacher/setting-teacher.component';
import { AccountSettingComponent } from './components/account-setting/account-setting.component';
import { PrefrencesComponent } from './components/prefrences/prefrences.component';
import { EarningComponent } from './components/earning/earning.component';
import { GigPageComponent } from './components/gig-page/gig-page.component';
import { GigInfoUploadComponent } from './components/gig-info-upload/gig-info-upload.component';
import { GigPricingComponent } from './components/gig-pricing/gig-pricing.component';

const routes: Routes = [

  {path:"home",
  component:HomeComponent

  },
  {path:"signup",
  component:SignupComponent

  },
  {path:"signin",
  component:SigninComponent

  },
  {path:"contactus",
  component:ContacusComponent

  },
  {
    path:"forget-pin",
    component:ForgetPinComponent
  },
  {
   path:"home-after-login",
   component:HomeAfterLoginComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"profession-details",
    component:ProfessionDetailsComponent

  },
  {
    path:"profile-teacher",
    component:ProfileTeacherComponent
  },
  {
    path:"setting-teacher",
    component:SettingTeacherComponent

  }
  ,
  {
    path:"account-setting",
    component:AccountSettingComponent

  },
  {
    path:"prefrences",
    component:PrefrencesComponent

  },
  {
    path:"earning",
    component:EarningComponent

  }
  ,
  {
    path:"gig-page",
    component:GigPageComponent

  },
  {
    path:"gig-info-upload",
    component:GigInfoUploadComponent

  },
  {
    path:"gig-pricing",
    component:GigPricingComponent

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
