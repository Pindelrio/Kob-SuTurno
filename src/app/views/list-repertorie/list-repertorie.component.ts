import { Component, OnInit } from '@angular/core';
import { RepertorieService } from 'src/app/Services/repertorie.service';
import { ISong } from 'src/app/Models/song';

@Component({
  selector: 'app-list-repertorie',
  templateUrl: './list-repertorie.component.html',
  styleUrls: ['./list-repertorie.component.scss']
})
export class ListRepertorieComponent implements OnInit {

  songs: ISong[] = [];
  currentSong:ISong = <ISong>{};
  currentIndex = -1;
  searchTitle = '';
  
  constructor(private reperService: RepertorieService) { }

  ngOnInit(): void {
    this.getAllSongs();
  }

  // Get list
  getAllSongs(): void {
    this.reperService.list().subscribe(
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
  activeSong(song:ISong){

    song.active = true;
    console.log(song);
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
                      window.location.reload();
                    }
                  });
                }
            });
          })
      });
    
  }
}