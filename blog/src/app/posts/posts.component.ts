import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDontLoveIts: number;
  @Input() postCreatedAt: string;

  
  constructor() { }

  ngOnInit() {
  }
  getTitle(){
    return this.postTitle;
  }
  getContent(){
    return this.postContent;
  }
  getLoveIts(){
    return this.postLoveIts;
  }
  getDontLoveIts(){
    return this.postDontLoveIts;
  }
  getCreatedAt(){
    return this.postCreatedAt;
  }
  
  getColor(){
    if(this.postLoveIts >0){
      return 'green';
    }
    else if(this.postLoveIts ==0){
      return 'white';
    }
    else if(this.postLoveIts <0 ){
      return 'red';
    }
  }

  getColorText(){
    if((this.postLoveIts-this.postDontLoveIts) >0){
      return 'green';
    }
    else if((this.postLoveIts-this.postDontLoveIts) ==0){
      return 'black';
    }
    else if((this.postLoveIts-this.postDontLoveIts) <0 ){
      return 'red';
    }
  }
  compteurPlus(){
    this.postLoveIts =this.postLoveIts +1;
  }
compteurMoins(){
  this.postDontLoveIts =this.postDontLoveIts +1;
}
}
