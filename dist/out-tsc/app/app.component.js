var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FilterPipe } from './pipes/filter.pipe';
import { DataService } from './data.service';
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.title = 'Angular2 File Browser';
        this.folders = [];
        this.files = [];
        this.currentFolderId = '90';
    }
    ;
    AppComponent.prototype.viewFiles = function (id) {
        var _this = this;
        this.currentFolderId = id;
        this.dataService.fetchFileData(this.currentFolderId).subscribe((function (data) { return _this.files = data; }));
    };
    AppComponent.prototype.OnInit = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.fetchFolderData().subscribe((function (data) { return _this.folders = data; }));
        this.dataService.fetchFileData(this.currentFolderId).subscribe((function (data) { return _this.files = data; }));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [FilterPipe, DataService],
    }),
    __metadata("design:paramtypes", [DataService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../src/app/app.component.js.map