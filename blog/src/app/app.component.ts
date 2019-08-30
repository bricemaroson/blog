import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  lastDate = new Date();
  loveInit=0;
  posts =[
    {
      title: "Mon premier post",
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
      loveIts: this.loveInit,
      dontLoveIts: this.loveInit,
      created_at: this.lastDate
    },
    {
      title: "Mon deuxième post",
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
      loveIts: this.loveInit,
      dontLoveIts: this.loveInit,
      created_at: this.lastDate
    },
    {
      title: "Mon troisième post",
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
      loveIts: this.loveInit,
      dontLoveIts: this.loveInit,
      created_at: this.lastDate
    }
  ]
  
}

