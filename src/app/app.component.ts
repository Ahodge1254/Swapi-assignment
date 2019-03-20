import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SWAPI';
  api = [
    'People',
    'Film',
    'Ship'
  ]

  constructor(private fb: FormBuilder, private apiService: APIService) {}

  ngOnInit() {}
}