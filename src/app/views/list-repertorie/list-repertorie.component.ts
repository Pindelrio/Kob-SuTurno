import { Component, OnInit } from '@angular/core';
import { RepertorieService } from 'src/app/Services/repertorie.service';
import {song} from 'src/app/Models/song';

@Component({
  selector: 'app-list-repertorie',
  templateUrl: './list-repertorie.component.html',
  styleUrls: ['./list-repertorie.component.scss']
})
export class ListRepertorieComponent implements OnInit {

  songs: any;
  currentSong:any;
  currentIndex = -1;
  searchTitle = '';

  constructor(private reperService: RepertorieService) { }

  ngOnInit(): void {
    this.getAllSongs();
  }

  // Get list
  getAllSongs(): void {
    this.reperService.list()
      .subscribe(
        (songs: any) => {
          this.songs = songs;
        },
        (error: any) => {
          console.log(error);
        });
  }

  // Search items
  searchByTitle(): void {
    this.reperService.filterByTitle(this.searchTitle)
      .subscribe(
        songs => {
          this.songs = songs;
        },
        error => {
          console.log(error);
        });
  }

  clearList(){
    this.searchTitle ='';
    this.ngOnInit();
  }
  // Active item
  activeSong(song:song){
    // var oldSongs = this.reperService.filterByActive(true);
    // oldSongs.subscribe(data=>{

    //   console.log(data);
    // });

      // this.reperService.update(data.id, data).subscribe(
      //   response =>{
      //     console.log(response);
      //   },
      //   error =>{
      //     console.log(error);
      //   }
      // );

      this.reperService.update(song.id, song).subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(error);
      }
      );
  }
}