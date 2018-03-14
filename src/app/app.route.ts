import{Route,Routes,RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import{DetailsComponent} from './details/details.component';

export const routes:Routes = [
     
    {
        path:'',
        redirectTo:'/details',
        pathMatch:'full'
    },
    {
        path:'details',
        component: DetailsComponent,
      
    }
    
]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
