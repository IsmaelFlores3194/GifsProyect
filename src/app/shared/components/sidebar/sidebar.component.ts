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


get tags (){
  return this.gifsService.tagHistory;
}


 }