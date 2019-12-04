import { timer, BehaviorSubject, Subject } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './shared/models';
import { MatPaginator, MatDialog, MatFormField } from '@angular/material';
import { SimpleDialogComponent } from './shared/components/simple-dialog/simple-dialog.component';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoading: boolean;
  public filteredPost: Post[];
  public DISPLAYED_COLUMNS = [
    'title',
    'url',
    'createdAt',
    'author'
  ];
  public titleControl: FormControl;
  private posts: Post[];
  private timer = timer(0, 10000);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private postService: PostService,
  ) {

  }
  ngOnInit(): void {
    this.titleControl = this.fb.control(null, []);
    this.getPosts();
    this.timer.subscribe(() => this.getPosts());
    this.titleControl.valueChanges.subscribe(
      val => this.filter(val)
    );
  }

  getPosts() {
    this.isLoading = true;
    this.postService.getPosts().subscribe(
      (res: any) => {
        console.log('RES', res);
        this.posts = res.hits;
        this.filter(null);
        this.isLoading = false;
      },
      err => {
        console.error('FETCHING POST ERROR', err);
        this.isLoading = false;
      }

    );
  }

  showDialog(post: Post) {
    this.dialog.open(SimpleDialogComponent, {data: post});
  }

  filter(val?: string) {
    if (val) {
      this.filteredPost = this.posts
        .filter(post =>
          post.title.toLowerCase().includes(val.toLowerCase())
        );
    } else {
      this.filteredPost = this.posts;
    }
  }
}
