import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './pipes/filter.pipe';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilterPipe, DataService],
})
export class AppComponent {
  title = 'Angular2 File Browser';
  folders = [];
  files = [];
  currentFolderId = '90';
  constructor(private dataService: DataService) { };

  viewFiles(id){
     this.currentFolderId = id;
      this.dataService.fetchFileData(this.currentFolderId).subscribe(
      (data => this.files = data)
    );
  }

  OnInit(){

  }
  ngOnInit(){
    this.dataService.fetchFolderData().subscribe(
      (data => this.folders = data)
    );
    this.dataService.fetchFileData(this.currentFolderId).subscribe(
      (data => this.files = data)
    );
  }

}
