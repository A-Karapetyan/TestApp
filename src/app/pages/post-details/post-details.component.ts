import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/api/posts.service';
import { DataItem } from '../posts-list/data-item';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  detailsData: DataItem | null = null;

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = this.activatedRoute.snapshot.params['id'];
    if (postId) {
      this.postsService.getPostDetails(postId).subscribe((res: DataItem) => this.detailsData = res);
    }
  }

}
