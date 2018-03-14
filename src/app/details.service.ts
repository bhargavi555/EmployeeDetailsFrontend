import{Injectable} from '@angular/core';

import 'rxjs/add/operator/map';

import { Http, Response, Headers } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import {Detail} from './details';



@Injectable()

export class DetailsService{
    
    url:string="http://default-environment.tjqgxbtpp9.us-east-2.elasticbeanstalk.com/details.json";
   

constructor(private http :Http){

}

 

  getcatag():Observable<any>{
    console.log("Success");
  
    return this.http.get("http://default-environment.tjqgxbtpp9.us-east-2.elasticbeanstalk.com/details")
    .map(res => res.json());
  
  }
   addDetail(newDetail){
     var headers=new Headers();
     headers.append('content-type','application/json');
     return this.http.post("http://default-environment.tjqgxbtpp9.us-east-2.elasticbeanstalk.com/details",newDetail,{headers:headers})
     
    
   }
  
    deleteDetails(id){
     
      return this.http.delete("http://default-environment.tjqgxbtpp9.us-east-2.elasticbeanstalk.com/details/"+id);
      
    }

    UpdateDetails(id){
      
     var headers=new Headers();
       return this.http.put("http://default-environment.tjqgxbtpp9.us-east-2.elasticbeanstalk.com/details/"+id,{headers:headers})
       .map(res => res.json());
     }

}