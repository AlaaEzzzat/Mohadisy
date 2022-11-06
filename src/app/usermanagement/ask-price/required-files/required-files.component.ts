import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
/* ************************************************************************** */
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { ClientService } from './../../../@core/services/client/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-required-files',
  templateUrl: './required-files.component.html',
  styleUrls: ['./required-files.component.scss'],
})
export class RequiredFilesComponent implements OnInit {
  uploadFilesForm!: FormGroup;
  requiredFilesArray: any;
  uploadedFiles: any = [];
  reuestedProject: any;
  constructor(
    private router: Router,
    private clientService: ClientService,
    private fb: FormBuilder
  ) {
    this.uploadFilesForm = this.fb.group({});
    this.reuestedProject = this.clientService.reuestedProject;
    this.requiredFilesArray = this.clientService.projectRequiredFiles;
  }

  ngOnInit(): void {
    this.requiredFilesArray.map((file: any) => {
      this.uploadFilesForm.addControl(
        `${file.id}`,
        new FormControl('', Validators.required)
      );
    });
  }
  get f() {
    return this.uploadFilesForm.controls;
  }

  uploadFilesFormSubmit() {
    let filesFormData = new FormData();
    this.uploadedFiles.map((uploadedFile: any) => {
      filesFormData.append(uploadedFile.id, uploadedFile.file);
    });
    console.log(filesFormData);
    this.clientService
      .storeProjectFiles(this.clientService.reuestedProject.id, filesFormData)
      .subscribe({
        next: (response: any) => {
          console.log('files sent');
          this.router.navigate(['usermanagement/offers']);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
  onFileUpload(event: any, id: any) {
    console.log('uplaod');
    if (this.uploadedFiles.length > 0) {
      this.uploadedFiles.map((oldfile: any) => {
        if (oldfile.id === id) {
          if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.updateField(oldfile, file);
          }
        }
      });

      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.pushNewFile(id, file);
      }
    } else {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.pushNewFile(id, file);
      }
    }
  }
  pushNewFile(id: any, file: any) {
    var fileObj: any = {};
    fileObj.id = id;
    fileObj.file = file;
    this.uploadedFiles?.push(fileObj);
    console.log('push');
  }
  updateField(oldFile: any, file: any) {
    oldFile.file = file;
    console.log('update');
  }
}
