import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cantons',
  templateUrl: './cantons.page.html',
  styleUrls: ['./cantons.page.scss'],
})
export class CantonsPage implements OnInit {

  dataCantons;
  dataFl;
  dataLoaded = false;

  constructor(
    private translate: TranslateService,
    private dataService: DataService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.dataService.parseCantonData().subscribe((data) => {
      (this.dataCantons = data),
        (this.dataLoaded = true)
    });

    this.dataService.parseFLData().subscribe((data) => {
      (this.dataFl = data),
      (this.dataLoaded = true),
      (console.log(this.dataFl['records'][0]))     
    })
  }

}
