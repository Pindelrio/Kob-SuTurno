import { Component, OnInit } from '@angular/core';
import { ISong } from 'src/app/Models/song';
import { RepertorieService } from 'src/app/Services/repertorie.service';

@Component({
  selector: 'app-create-repertorie',
  templateUrl: './create-repertorie.component.html',
  styleUrls: ['./create-repertorie.component.scss']
})
export class CreateRepertorieComponent implements OnInit {
  
  //Vars
  public song: ISong = <ISong>{};
  isSongAdded = false;

  //Constructor
  constructor(private reperService: RepertorieService){
  }

  //Methods
  ngOnInit(): void { }

  // Add New
  addSong(): void {
    const data = {
      id: this.song.id,
      name: this.song.name,
      number: this.song.number,
      active: false,
      comments: this.song.comments
    };
    if (!data.name) {
      alert('Please add name!');
      return;
    }

    this.reperService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isSongAdded = true;
        },
        error => {
          console.log(error);
        });
    this.newSong();
  }

  // Reset on adding new
  newSong(): void {
    this.isSongAdded = false;
    this.song = {
      id: 0,
      number: 0,
      name:'',
      comments:'',
      active: false
    };
  }

}
