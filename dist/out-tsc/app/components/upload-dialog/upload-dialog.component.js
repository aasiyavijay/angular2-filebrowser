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
import { MdDialog, MdDialogRef } from '@angular/material';
var UploadDialogComponent = (function () {
    function UploadDialogComponent(dialog) {
        this.dialog = dialog;
    }
    UploadDialogComponent.prototype.openUploadDialog = function () {
        var dialogRef = this.dialog.open(UploadForm, {
            height: '400px',
            width: '600px',
        });
    };
    UploadDialogComponent.prototype.handleFiles = function (event) {
        console.log(event);
        var upFiles = event.target.files;
        var file = {};
        for (var i = 0; i < upFiles.length; i++) {
            var upFile = upFiles[i];
            file = {
                name: upFile.name,
                size: upFile.size,
                date: upFile.lastModifiedDate,
                MimeType: upFile.type
            };
        }
    };
    UploadDialogComponent.prototype.ngOnInit = function () {
    };
    return UploadDialogComponent;
}());
UploadDialogComponent = __decorate([
    Component({
        selector: 'upload-dialog',
        templateUrl: './upload-dialog.component.html',
        styleUrls: ['./upload-dialog.component.css']
    }),
    __metadata("design:paramtypes", [MdDialog])
], UploadDialogComponent);
export { UploadDialogComponent };
var UploadForm = (function () {
    function UploadForm(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return UploadForm;
}());
UploadForm = __decorate([
    Component({
        selector: 'upload-form',
        templateUrl: './upload-form.html',
    }),
    __metadata("design:paramtypes", [MdDialogRef])
], UploadForm);
export { UploadForm };
//# sourceMappingURL=../../../../../src/app/components/upload-dialog/upload-dialog.component.js.map