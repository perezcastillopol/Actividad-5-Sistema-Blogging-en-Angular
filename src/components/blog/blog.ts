import {Component, OnInit} from '@angular/core';
import {BlogPost} from '../../interfaces/blog-post';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [
    DatePipe
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit {
  posts: BlogPost[] =  [];
  currentNewId = 3;


  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'Noticia random 1',
        urlImage: 'https://picsum.photos/500/300',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
          ' Mauris dapibus sapien id volutpat sollicitudin. In ipsum neque, placerat et sapien luctus, aliquam finibus ex. ' +
          'Vestibulum convallis eget tortor vitae auctor. Maecenas ut rhoncus ligula. Sed et nulla id neque tincidunt.',
        date: new Date('2025-06-06')
      },
      {
        id: 2,
        title: 'Noticia random 2',
        urlImage: 'https://picsum.photos/500/300',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sapien id volutpat sollicitudin.',
        date: new Date('2025-04-01')
      }
    ]
  }
}
