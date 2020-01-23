import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchGroup : FormGroup;
  constructor(private fb:FormBuilder, private searchService : SearchService) { }

  ngOnInit() {
    this.searchGroup = this.fb.group({
      'sentiment-key' : ['', Validators.required]
    });
  }

  onSubmit(){
    console.log('search key'+this.searchGroup.get('sentiment-key').value)
    this.searchService.registerSentimentKey(this.searchGroup.get('sentiment-key').value);
  }

  onCancel(){
    this.searchGroup.reset();
  }


}
