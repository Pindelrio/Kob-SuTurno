import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepertorieService } from 'src/app/Services/repertorie.service';

@Component({
  selector: 'app-detail-repertorie',
  templateUrl: './detail-repertorie.component.html',
  styleUrls: ['./detail-repertorie.component.scss']
})
export class DetailRepertorieComponent implements OnInit {

  currentSong: any;
  message = '';

  constructor(
    private reperService: RepertorieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getSong(this.route.snapshot.paramMap.get('id'));
  }

  getSong(id: string | null): void {
    this.reperService.getItem(id)
      .subscribe(
        (song: null) => {
          this.currentSong = song;
          console.log(song);
        },
        (error: any) => {
          console.log(error);
        });
  }

  setAvailableStatus(status: any): void {
    const data = {
      id: this.currentSong.id,
      name: this.currentSong.name,
      active: this.currentSong.active,
      comments: this.currentSong.comments,
      available: status
    };

    this.reperService.update(this.currentSong.id, data)
      .subscribe(
        response => {
          this.currentSong.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateSong(): void {
    this.reperService.update(this.currentSong.id, this.currentSong)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The song was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteSong(): void {
    this.reperService.delete(this.currentSong.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/list']);
        },
        error => {
          console.log(error);
        });
  }
}
