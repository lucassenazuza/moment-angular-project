import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from '../../Moment';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allMomentsOrigin: Moment[] = [];
  allMoments: Moment[] = [];
  faSearch: IconDefinition = faSearch;
  photoUrl: string = `${environment.baseUrl}/uploads`
  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService.getAllMoments().subscribe((data) => {
      const items = data.data;
      //console.log(data);
      items.map((item: any) => {
        item.created_at = new Date(item.created_at).toLocaleDateString('pt-br');

      });
      this.allMoments = items;
      this.allMomentsOrigin = items;
    });
  }
  deleteMoment(moment: Moment): void{
    this.momentService.deleteMoment(moment.id).subscribe();
    this.allMoments = this.allMoments.filter((element) => { return element.id !== moment.id;});
    this.allMomentsOrigin = this.allMoments;
  }
  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (value === ''){
      this.allMoments = this.allMomentsOrigin;
    }
    this.allMoments = this.allMoments.filter(moment => { return moment.title.toLowerCase().includes(value) });
  }

}
