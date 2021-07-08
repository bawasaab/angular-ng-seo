import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from "@angular/platform-browser";
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from "../services/post.service";

@Component({
	selector: 'app-post-details',
	templateUrl: './post-details.component.html',
	styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

	public details = {
		title: '',
		body: ''
	};
	postId: any;
	isPostIdProvidedFlag: any;
	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private titleService: Title,
		private metaService: Meta,
		private postService: PostService
	) {

		// this.details.title = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
		// this.details.body = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto";
		// this.titleService.setTitle( this.details.title );
		// this.metaService.addTag( { name:'description', content:this.details.body});
	}

	ngOnInit(): void {
		this.setUserId();
	}

	setUserId() {
		try {
			this.activatedRoute.params.subscribe((params : any) => {
				this.postId = params.postId;
				this.isPostIdProvidedFlag = this.postId ? true : false;

				if (this.isPostIdProvidedFlag) {
					this.getDetail();
				} else {
				}
			});
		} catch (ex) {
			console.log('ex', ex);
		}
	}

	getDetail() {

		try {

			console.log('postId', this.postId);

			this.postService.getUserById(this.postId).subscribe((result) => {
				console.log('getDetail result', result);

				this.details.title = result.title;
				this.details.body = result.body;
				this.titleService.setTitle(this.details.title);
				this.metaService.addTag({ name: 'description', content: this.details.body });
			});
		} catch (ex) {
			console.log('ex', ex);
		}
	}

}
