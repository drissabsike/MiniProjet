import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class ConvertisseurComponent implements OnInit {
  resultEur: string = "0.096";
  resultUsd: string = "0.11";
  resultLivre: string = "0.082";
  resultLira: string = "1.49";
  msg: string = "";

  getValueDH(value: string){
    if (value==""){
      this.msg="Le champ est vide !";
      this.resultEur ="0";
      this.resultUsd ="0";
      this.resultLivre ="0";
      this.resultLira ="0";
    }else {
      this.msg="";
        const val= Number(value)*0.096
        const val2= Number(value)*0.11
        const val3= Number(value)*0.082
        const val4= Number(value)*1.49

        this.resultEur = (val).toFixed(3);
        this.resultUsd = (val2).toFixed(3);
        this.resultLivre = (val3).toFixed(3);
        this.resultLira = (val4).toFixed(3);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
