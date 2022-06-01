import { Component, OnInit } from '@angular/core';
import { RepertorieService } from 'src/app/Services/repertorie.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  apiUrl = this.reperService.apiUrl;

  constructor(private reperService: RepertorieService) { }

  ngOnInit(): void {
  }

}
