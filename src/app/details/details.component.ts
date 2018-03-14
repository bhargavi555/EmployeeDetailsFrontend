import { Component, OnInit } from '@angular/core';
import {DetailsService} from '../details.service';
import{Detail} from '../details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[DetailsService]
})
export class DetailsComponent implements OnInit {
   fieldArray:Detail[];
  detail:Detail;
  e_id:string;
  e_name:string;
   e_email:string;
  e_salary:string;

  
  constructor( private detailsService: DetailsService) {
   
   
   }

  ngOnInit() {
    this.detailsService.getcatag().subscribe(res =>  this.fieldArray=res );
    console.log(this.fieldArray);
  }

  addDetail(){
  const newDetail={
    e_id:this.e_id,
    e_name:this.e_name,
   e_email:this.e_email,
   e_salary:this.e_salary
 

  };
  this.detailsService.addDetail(newDetail).subscribe();
  
    this.fieldArray.push(newDetail);

  
}


deleteDetails(id:any){  
  var details=this.fieldArray;
  this.detailsService.deleteDetails(id).subscribe();
 
    for(var i=0;i< this.fieldArray.length;i++){
      if(this.fieldArray[i].e_id==id){
              this.fieldArray.splice(i,1);
      }}

}
/*updateDetails(id){
  const newDetail={
   
    e_name:this.e_name,
   e_email:this.e_email,
   e_salary:this.e_salary
 

  };
  this.detailsService.addDetail(newDetail).subscribe(detail=>this.fieldArray.push(detail));
}
*/

}