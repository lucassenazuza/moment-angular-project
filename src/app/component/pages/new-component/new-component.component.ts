import { Moment } from './../../Moment';
import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {
  btnText: string = 'Share';

  constructor(private momentService: MomentService, private messagesService: MessagesService, private router: Router) { }

  ngOnInit(): void {
  }
  // o form enviado é maepado como moment
  async handleFormSubmit(moment: Moment) {
    const formData = new FormData();

    formData.append("title", moment.title);
    formData.append("description", moment.description);
    if(moment.image){
      formData.append("image", moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();
    this.messagesService.addMessage("Elemento Criado");

    this.router.navigate(['/']);
  }
}
