import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';

@Component({
  selector: 'app-sp-projects',
  templateUrl: './sp-projects.component.html',
  styleUrls: ['./sp-projects.component.scss'],
})
export class SpProjectsComponent implements OnInit {
  pagenation: any = [];

  Listprojects: Array<any> = [];
  projectComponent: Array<any> = [];
  AllProjectComponent: Array<any> = [];
  RequiredWorks: Array<any> = [];
  selectProject: any = [];
  select: any = 0;
  descComponent: Array<any> = [];
  descWork: Array<any> = [];
  documents: Array<any> = [];
  descDocument: Array<any> = [];
  page: number = 1;
  totalpages: any = 0;
  pages: Array<any> = [];
  result: any = 0;
  _RequiredWorks: Array<any> = [];
  index: any = 0;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .get('https://app.mohandisy.com/api/PriceQuotes/getSPNewProjects/Page/1')
      .subscribe((data) => {
        this.Listprojects = data.data.priceQuotes;
        this.totalpages = data.data.totalPages;

        for (let i = 1; i <= this.totalpages; i++) this.pages.push(i);

        if (this.Listprojects.length > 0) {
          this.result = 1;
          //  console.log(this.Listprojects);

          this.api
            .get(
              'https://app.mohandisy.com/api/RequiredWorks/GetAllRequiredWorks'
            )
            .subscribe((data) => {
              console.log(data);
              for (let project of this.Listprojects) {
                for (let work of data.data) {
                  let f = 0;

                  for (let w of project.projectRequiredWorks) {
                    if (w.requiredWorkId == work.id) {
                      this._RequiredWorks.push({
                        name: work.name,
                      });

                      f = 1;
                      break;
                    }
                  }
                  if (f) break;
                }
              }
            });
        }
      });
  }

  showData(idProject: number) {
    this.select = idProject;

    for (let project of this.Listprojects) {
      if (project.id == this.select) {
        this.selectProject = project;

        break;
      }
    }

    (this.projectComponent = []), (this.RequiredWorks = []);
    this.api
      .get('https://app.mohandisy.com/api/Project/getAllProjectComponents')
      .subscribe((data) => {
        this.AllProjectComponent = data.data;

        for (let component of this.AllProjectComponent) {
          for (let c of this.selectProject.projectComponents) {
            if (c.componentId == component.id) {
              this.projectComponent.push({
                name: component.name,
                id: component.id,
                description: component.description,
              });
            }
          }
        }
      });

    /**************Requied work******************* */

    this.api
      .get('https://app.mohandisy.com/api/RequiredWorks/GetAllRequiredWorks')
      .subscribe((data) => {
        for (let work of data.data) {
          for (let w of this.selectProject.projectRequiredWorks) {
            if (w.requiredWorkId == work.id) {
              this.RequiredWorks.push({
                name: work.name,
                id: work.id,
                requiredDocuments: work.requiredDocuments,
              });
            }
          }
        }
      });
  }

  downloadFile(filepath: any, file: any) {
    var FileSaver = require('file-saver');
    FileSaver.saveAs(filepath, file);
  }

  changepage(e: any) {
    this.page = e;
    console.log(this.page);
    this.api
      .get(
        `https://app.mohandisy.com/api/PriceQuotes/getSPNewProjects/Page/${this.page}`
      )
      .subscribe((data) => {
        this.Listprojects = data.data.priceQuotes;
      });
  }

  addIdProject(idProject: any) {
    localStorage.setItem('idproject', idProject);
    localStorage.setItem('page', `${this.page}`);
  }
}
