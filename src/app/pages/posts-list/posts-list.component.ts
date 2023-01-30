import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/api/posts.service';
import { DataItem } from './data-item';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  isEditMode: boolean = false;
  data: DataItem[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data: DataItem[]) => {
      this.data = data;
    });
  }

  editItem(item: DataItem) {
    this.postsService.editPost(item).subscribe(() => {
      alert('Edited successfully');
      item.isEditMode = false;
    });
  }

  deleteItem(index: number) {
    this.data.splice(index, 1);
  }
}

