import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';
import { SampleComponent } from './sample/sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base-project';
  photos = [
    {id: 1, photoUrl: 'https://via.placeholder.com/150', text: 'photo 1'},
    {id: 2, photoUrl: 'https://via.placeholder.com/150', text: 'photo 2'},
    {id: 3, photoUrl: 'https://via.placeholder.com/150', text: 'photo 3'},
    {id: 4, photoUrl: 'https://via.placeholder.com/150', text: 'photo 4'},
    {id: 5, photoUrl: 'https://via.placeholder.com/150', text: 'photo 5'}
  ];

  constructor(private modalServ: ModalService){}

  // initLoginModal() {
  //   let inputs = {
  //     isMobile: false
  //   }
  //   this.modalService.init(LoginComponent, inputs, {});
  // }
  closeModal(){
    // console.log('closeModal');
    // this.modalServ.closeModal();
  }
  openModal(photo){

    const inputs = {
      isMobile: false,
      photo: photo
    };
    this.modalServ.init(SampleComponent, inputs, {});
    // console.log('openModal');
    // this.modalServ.openModal();
  }
}
