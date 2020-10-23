import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-switzerland",
  templateUrl: "./switzerland.page.html",
  styleUrls: ["./switzerland.page.scss"],
})
export class SwitzerlandPage implements OnInit {
  dataSwitzerland;
  dataLoaded = false;

  constructor(
    public popoverCtrl: PopoverController,
    private translate: TranslateService,
    private dataService: DataService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.dataService.parseDataCH().subscribe((data) => {
      (this.dataSwitzerland = data),
        (this.dataLoaded = true),
        (this.dataSwitzerland.updated_cantons = this.dataSwitzerland.updated_cantons
          .replace(/, /g, ",")
          .replace(/,/g, ", "));
    });
  }
}
