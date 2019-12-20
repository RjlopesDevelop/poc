import { Component, OnInit, OnDestroy } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit, OnDestroy {

  files: Set<File>;
  subscription: Subscription;
  valor = '345';
  constructor(private service: UploadFileService) { }

  ngOnInit() {
  }

  onChange(event) {
    console.log(event);
    const selectedFiles = event.srcElement.files as FileList;
    const fileNames = [];
    this.files = new Set();

    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');

  }
  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, environment.BASE_URL + '/upload')
      .subscribe(
        response =>  console.log('Upload Realizado', response )
         );
    }
  }

  ngOnDestroy(): void {
   // this.subscription.unsubscribe();
  }

}
