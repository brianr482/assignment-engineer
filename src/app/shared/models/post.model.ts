export interface Post {
  title: string;
  url: string;
  author: string;
  points: number;
  created_at: Date;
  num_comments: number;
  created_at_i: number;
  objectID: string;
  _tags: string[];
  story_text?: string;
  comment_text?: string;
  story_id?: number; /* Assuming it's a number */
  story_title?: string;
  story_url?: string;
  parent_id?: number; /* Assuming it's a number */
}
