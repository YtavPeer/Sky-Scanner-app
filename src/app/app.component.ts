import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SkyScanner';

  flightsData:any;

findLeg(legId){
 return this.flightsData.legs.find( leg => leg.id===legId)
}

findStop(number:any){
  if(number==0){
    return "Direct"
  }
  if(number==1){
    return "1 Stop"
  }
}

logoReturn(agentId){
  if(agentId=='WZ'){
    return 'assets/wizz.jpg'
  }
  if(agentId=='BA'){
    return 'assets/british.png'
  }
  if(agentId=='LH'){
    return 'assets/luft.png'
  }
}

time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + "h " + minutes;         
}



  constructor(private http:HttpClient) {

    this.http.get<any>("../assets/flights.json").subscribe(data => {

      this.flightsData=data;
      console.log(this.findLeg("leg_4"))
    })
  }























}






