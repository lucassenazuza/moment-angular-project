import { MomentService } from './../../../services/moment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from '../../Moment';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.scss']
})
export class EditMomentComponent implements OnInit {

  editTxt: string = 'Edit';
  moment !: Moment;
  constructor(private momentSerivce: MomentService, private route: ActivatedRoute, private router: Router, private messagesService: MessagesService) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.momentSerivce.getMoment(id).subscribe((item) => {
      this.moment = item.data;
      console.log('data');
      console.log(this.moment);
    })
  }

  async editSubmit(moment: Moment) {
    const id: number = this.moment.id!;
      const formData = new FormData();

      formData.append("title", moment.title);
      formData.append("description", moment.description);
      if(moment.image){
        formData.append("image", moment.image);
      }

      await this.momentSerivce.updateMoment(id!, formData).subscribe();
      this.messagesService.addMessage("Elemento Alterado");

      this.router.navigate(['/']);
    }
  }

