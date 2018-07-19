import {Component, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-program-create',
  templateUrl: './program-create.component.html',
  styleUrls: ['./program-create.component.scss']
})
export class ProgramCreateComponent implements OnInit {
  @Input() opening: Subject<boolean>;

  constructor(
    private elRef: ElementRef,

  ) {}

  ngOnInit() {
    this.opening.subscribte(v => {
      console.log('value is changing', v);
    });
  }

  openModal(id: string){
    console.log(this.elRef.nativeElement.querySelector(`#${id}`));
  }

  closeModal(id: string){
    this.modalService.close(id);
  }

}
