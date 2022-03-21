import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/posts.model';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  posts: Post[];

  constructor(
    private apiService: ApiCallService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id'];

    this.apiService.getPosts(id).subscribe((_posts) => {
      this.posts = _posts;
    });
  }
}
