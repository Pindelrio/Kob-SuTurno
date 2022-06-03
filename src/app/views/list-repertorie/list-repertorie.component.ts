import { Component, OnInit } from '@angular/core';
import { RepertorieService } from 'src/app/Services/repertorie.service';
import { ISong } from 'src/app/Models/song';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-repertorie',
  templateUrl: './list-repertorie.component.html',
  styleUrls: ['./list-repertorie.component.scss']
})
export class ListRepertorieComponent implements OnInit {

  //Vars
  songsList: ISong[] = [];
  searchName = '';
  
  //Constructor
  constructor(
    private reperService: RepertorieService
    ) { }

  //Methods
  ngOnInit(): void {
    this.getAllSongs();
  }

  // Get list
  getAllSongs(): void {
    this.reperService.list().subscribe(
        (songs) => {
          this.songsList = songs;
        },
        (error) => {
          console.log(error);
        });
  }

  // Search items
  searchByName(): void {
    this.reperService.filterByName(this.searchName)
      .subscribe(
        songs => {
          this.songsList = songs;
        },
        error => {
          console.log(error);
        });
  }

  // Clear filter by name and refresh
  clearList(){
    this.searchName ='';
    this.ngOnInit();
  }

  // Active item
  activeSong(song:ISong){

    song.active = true;
    this.reperService.filterByActive(true).subscribe(
      response =>{
        response.forEach(data=>{
          
            //Update to active false
            data.active = false;
            this.reperService.update(data.id, data).subscribe
            ({
                error: (e) => console.error(e),
                complete: () =>{

                  //Update current song
                  this.reperService.update(song.id, song).subscribe({
                    next: (v) => console.log(v),
                    error: (e) => console.error(e),
                    complete: () => {
                      console.info('complete');

                      //refresh page
                      this.ngOnInit();
                    }
                  });
                }
            });
          })
      });
    
  }
}