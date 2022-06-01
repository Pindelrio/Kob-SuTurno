import { Component, OnInit } from '@angular/core';
import { RepertorieService } from 'src/app/Services/repertorie.service';

@Component({
  selector: 'app-next-song',
  templateUrl: './next-song.component.html',
  styleUrls: ['./next-song.component.scss']
})
export class NextSongComponent implements OnInit {

  //vars
  nextSongs: any;
  interval: any;
  
  //constructor
  constructor(private reperService: RepertorieService) { 
    this.interval = setInterval(() => {
      this.searchByActive(); // api call
   }, 10000);
  }
  
  //methods
  searchByActive(): void {
    this.reperService.filterByActive(true)
      .subscribe(
        res => {
          this.nextSongs = res;
        },
        error => {
          console.log(error);
        });
  }
  
  ngOnInit(): void {
    this.searchByActive();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
 }
 
}
