import { Component, OnInit, OnDestroy } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit, OnDestroy {

  files: Set<File>;
  subscription: Subscription;
  valor = '345';
  progress = 0;
  constructor(private service: UploadFileService) { }

  ngOnInit() {
  }

  onChange(event) {
    console.log(event);
    const selectedFiles = event.srcElement.files as FileList;
    const fileNames = [];
    this.files = new Set();

    for (const key in selectedFiles) {
    if (selectedFiles.hasOwnProperty(key)) {
      const element = selectedFiles[key];
      // console.log('name', element.name);
      // console.log('element', element);
      fileNames.push(element.name);
      this.files.add(element);
    }
  }
    // for (let i = 0; i < selectedFiles.length; i++) {
    //   fileNames.push(selectedFiles[i].name);
    //   this.files.add(selectedFiles[i]);
    // }
    document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');
    this.progress = 0;

  }
  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, environment.BASE_URL + '/upload')
        .subscribe((event: HttpEvent<Object>) => {
          if (event.type === HttpEventType.Response) {
            console.log('Upload Realizado', event);
          } else if (event.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round((event.loaded * 100) / event.total);
            this.progress = percentDone;
          }
        });
    }
  }

  ngOnDestroy(): void {
   // this.subscription.unsubscribe();
  }

}
