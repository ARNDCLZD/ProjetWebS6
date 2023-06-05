import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit{
  public actionValue = "Categorie";
  public categories:any;
  public materiels:any;
  constructor(private apiService:ApiService){}

  ngOnInit():any{
    this.apiService.post("/categorie",null).subscribe(
      response =>{ 
        this.categories = response
        console.log(this.categories)
      }, error => {
        // Handle any errors that occurred during the API request
        console.error(error);
      });
    this.apiService.post("/objet",null).subscribe(
      response =>{ 
        this.materiels = response
        console.log(this.materiels)
      }, error => {
        // Handle any errors that occurred during the API request
        console.error(error);
      });
  }

  onChangedAction(e:any){
    this.actionValue=e.target.value;
    console.log(this.actionValue)
  }
}
