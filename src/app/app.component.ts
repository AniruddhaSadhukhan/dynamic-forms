import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pages = ['Form Builder', 'Form Renderer', 'Form Reader'];
  currentPage = 'Form Builder';
  form: Object;
  submission: Object;
  initialForm: Object;
  currentSubmission = {};

  changePage(page: string) {
    this.currentPage = page;
  }

  ngOnInit(): void {
    let jsonForm = localStorage.getItem('jsonForm');
    let submissionStr = localStorage.getItem('jsonFormSubmission');
    if (jsonForm) {
      this.form = JSON.parse(jsonForm);
    }
    if (submissionStr) {
      this.submission = JSON.parse(submissionStr);
    }
    this.initialForm = JSON.parse(JSON.stringify(this.form));
  }

  onFormSave(event) {
    this.form = event;
    localStorage.setItem('jsonForm', JSON.stringify(event));
  }

  onSubmission(event) {
    this.submission = event;
    this.currentSubmission = event;
    localStorage.setItem('jsonFormSubmission', JSON.stringify(event));
  }
}
