import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';
import { Moment } from '../../Moment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.scss']
})
export class MomentComponent implements OnInit {

  momentId: number = 0;
  moment !: Moment;
  photoUrl: string = `${environment.baseUrl}/uploads`;
  constructor(private momentSerivce: MomentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.momentId = Number(this.route.snapshot.paramMap.get('id'));
    this.momentSerivce.getMoment(this.momentId).subscribe((data) =>{
      this.moment = data.data;
    });
  }


}
