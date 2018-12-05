import { Injectable } from '@angular/core';
import { DomService } from './dom.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal_state = false;


  // constructor() { }

  // public openModal(){
  //   console.log('in service openmodal');
  // }

  // public closeModal(){
  //   console.log('in service closemodal');
  // }

  constructor(private domService: DomService) { }

  private modalElementId = 'modal-container';
  private overlayElementId = 'overlay';

  init(component: any, inputs: object, outputs: object) {
    const componentConfig = {
      inputs: inputs,
      outputs: outputs
    };
    console.log('componentConfig:', componentConfig);
    this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';
  }

  destroy() {
    this.domService.removeComponent();
    document.getElementById(this.modalElementId).className = 'hidden';
    document.getElementById(this.overlayElementId).className = 'hidden';
  }

}
