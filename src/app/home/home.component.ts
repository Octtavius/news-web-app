import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news: any;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.newsService.getData('top-headlines?country=us').subscribe(data => {
      this.news = data;
    })
  }
}