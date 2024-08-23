import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'sharedd-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

constructor( private gifsService : GifsService){}


get tags () : string[] {
  return this.gifsService.tagHistory;
}
searchTag(tag: string) : void {

  this.gifsService.searchTag(tag);

}


 }
