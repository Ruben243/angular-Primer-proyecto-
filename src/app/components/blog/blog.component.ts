import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles:Article[];
  public url:string;

  constructor(
    private _articleService: ArticleService,
    
  ) {
    this.articles=[];
    this.url=Global.url;
   }

  ngOnInit() {
    console.log(this._articleService.getArticles().subscribe(
      response => {
        if (response.articles) {
          this.articles=response.articles;
        
          
          
          
        }else{

        }

      },
      error => {
        console.error(error);

      }
    ));

  }

}