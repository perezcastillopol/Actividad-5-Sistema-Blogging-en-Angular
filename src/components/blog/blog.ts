import {Component, OnInit} from '@angular/core';
import {BlogPost} from '../../interfaces/blog-post';
import {FormsModule} from '@angular/forms';
import {PostCard} from '../post-card/post-card';

@Component({
  selector: 'app-blog',
  imports: [
    FormsModule,
    PostCard
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit {
  posts: BlogPost[] =  [];
  currentNewId = 3;
  newPost: BlogPost = this.createEmptyPost();


  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'Publicación random 1',
        urlImage: 'https://picsum.photos/500/300',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
          ' Mauris dapibus sapien id volutpat sollicitudin. In ipsum neque, placerat et sapien luctus, aliquam finibus ex. ' +
          'Vestibulum convallis eget tortor vitae auctor. Maecenas ut rhoncus ligula. Sed et nulla id neque tincidunt.',
        date: new Date('2025-06-06')
      },
      {
        id: 2,
        title: 'Publicación random 2',
        urlImage: 'https://picsum.photos/500/300',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sapien id volutpat sollicitudin.',
        date: new Date('2025-04-01')
      }
    ];
  }

  createEmptyPost(): BlogPost {
    return {
      id: this.currentNewId++,
      title: '',
      urlImage: '',
      body: '',
      date: null
    };
  }

  submit() {
    if (
      !this.newPost.title.trim() ||
      !this.newPost.urlImage.trim() ||
      !this.newPost.body.trim() ||
      !this.newPost.date ||
      !this.isValidUrl(this.newPost.urlImage)
    ) {
      alert('Por favor, completa todos los campos correctamente. Asegúrate de que la URL sea válida.');
      return;
    }
    this.posts.push(this.newPost);
    this.newPost = this.createEmptyPost();
  }

  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }
}
