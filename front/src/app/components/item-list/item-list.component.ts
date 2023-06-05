import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
  public nbElements = 10;
  public listType = "Materiel";
  public modalAction = "Emprunter";
  public categoriesDispo: any;
  public categoriesEmprunt: any;
  public etudiants: any;
  public responsables: any;
  public currentBarCode: any;
  constructor(private apiService: ApiService){}

  ngOnInit(): void {

    this.apiService.post("/categorie/all", null)
      .subscribe(response => {
        // Handle the response from the API
        this.categoriesDispo = response;
        for(let categorieDispo of this.categoriesDispo){
          this.apiService.post("/materiel/dispo", {type:categorieDispo.id})
            .subscribe(response => {
              this.categoriesDispo[categorieDispo.id-1].materiels = response;
            }, error => {
              // Handle any errors that occurred during the API request
              console.error(error);
            });
        }
      }, error => {
        // Handle any errors that occurred during the API request
        console.error(error);
      });
    
      this.apiService.post("/categorie/all", null)
      .subscribe(response => {
        // Handle the response from the API
        this.categoriesEmprunt = response;
        for(let categoriesEmprunt of this.categoriesEmprunt){
          this.apiService.post("/materiel/emprunt", {type:categoriesEmprunt.id})
            .subscribe(response => {
              this.categoriesEmprunt[categoriesEmprunt.id-1].materiels = response;
            }, error => {
              // Handle any errors that occurred during the API request
              console.error(error);
            });
        }
        console.log(this.categoriesEmprunt);
      }, error => {
        // Handle any errors that occurred during the API request
        console.error(error);
      });
    
    this.apiService.post("/etudiant", null)
      .subscribe(response => {
        this.etudiants = response;
      }, error => {
        // Handle any errors that occurred during the API request
        console.error(error);
      });
    
    this.apiService.post("/user", null)
    .subscribe(response => {
      this.responsables = response;
    }, error => {
      // Handle any errors that occurred during the API request
      console.error(error);
      });
  }

  onRangeChanged(e: any) {
    this.nbElements = e.target.value;
  }

  onListTypeChanged(e: any) {
    this.listType = e.target.value;
  }

  onModalActionChanged(e: any){
    this.modalAction = e.target.value;
    console.log("Modal : ",this.modalAction)
  }

  onChangeCurrentBarCode(e: any){
    this.currentBarCode = e;
    console.log(this.currentBarCode);
  }

  onEmprunt(eleveNom:string){
    this.apiService.post("/emprunt/add",{code:this.currentBarCode,etudiant:eleveNom.split(" ")[0],date_emprunt:formatDate(Date.now(), "dd/MM/yyyy", "en"),date_retour:formatDate(Date.now(), "dd/MM/yyyy", "en")})
      .subscribe(response => {
        window.location.reload();
      }, error => {
        // Handle any errors that occurred during the API request
        console.error(error);
      });
  }
}
