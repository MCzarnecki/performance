import { Pipe, PipeTransform } from "@angular/core";
import { Post } from '../components/posts/posts.model';
import { Memoize } from 'lodash-decorators';

@Pipe({name: 'postStatus'})
export class PostStatusPipe implements PipeTransform {
    
    @Memoize()
    transform(status: number): string {
    console.log('Status pipe');
    return status === 0 ? 'Bad' : 'Good';
  }
}