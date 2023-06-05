import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
  public arrivages:any;
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.apiService.post("/accueil", null)
      .subscribe(response => {
        // Handle the response from the API
        this.arrivages = response;
        console.log(response)
      }, error => {
        // Handle any errors that occurred during the API request
        console.error(error);
      });
  }

}
