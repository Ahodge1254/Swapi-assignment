import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  findData: FormGroup;
    data = [];
    api = [
    'people',
    'starships',
    'films'
    ]
 
      
  constructor(private fb: FormBuilder, private apiService: APIService) {}

  ngOnInit() {
    this.findData = this.fb.group({
      search: new FormControl(),
      searching: new FormControl()
    })

    this.findingData();
  }

  onFindData() : void {
    console.log('https://swapi.co/api/' + 'people' + '/?=' + 'luke')
    console.log(this.findData.get('searching').value)
    this.data = []
    this.data.push(this.findData.value)
    console.log(this.data)
    this.apiService.searchPeople(this.findData.get('searching').value, this.findData.get('search').value).subscribe(Data => {
      this.data[0] = Data;
    })
  };

  findingData() : void {
  };
}

