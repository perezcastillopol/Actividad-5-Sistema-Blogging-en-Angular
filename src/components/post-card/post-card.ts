import {Component, Input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {BlogPost} from '../../interfaces/blog-post';

@Component({
  selector: 'app-post-card',
  imports: [
    DatePipe
  ],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css'
})
export class PostCard {
  @Input() post: BlogPost = {
    id: -1,
    title: '',
    urlImage: '',
    body: '',
    date: null
  };
}
