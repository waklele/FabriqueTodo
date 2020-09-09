import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.page.html',
  styleUrls: ['./addtodo.page.scss'],
})
export class AddtodoPage implements OnInit {
  // public errorMessages = {
  //   title: [
  //     { type: 'required', message: 'Please provide a title and deadline' }
  //   ],
  //   deadline: [
  //     { type: 'required', message: 'Please provide a title and deadline' }
  //   ]
  // }

  // get title() {
  //   return this.createForm.get('title');
  // }

  // get deadline() {
  //   return this.createForm.get('deadline');
  // }

  // get high() {
  //   return this.createForm.get('high');
  // }

  // get done() {
  //   return this.createForm.get("0");
  // }

  title: any = null;
  deadline: any = null;
  high: boolean = false;
  done: boolean = null;

  // private createForm: FormGroup;

  constructor(private todo: TodoService, private router: Router) {
    // this.createForm = this.formBuilder.group({
    //   title: ['',
    //     [Validators.required,
    //     Validators.pattern('^[a-zA-Z]*')]
    //   ],
    //   deadline: ['',
    //     [Validators.required,
    //     Validators.pattern('^[a-zA-Z]*')]
    //   ]
    // });
  }

  ngOnInit() {
  }

  simpanData() {
    var tempData = {
      title: this.title,
      deadline: this.deadline,
      high: this.high,
      done: '0',
    }
    this.todo.simpanData(tempData);
    this.todo.showMessage("Data berhasil disimpan");
    this.router.navigate(['/todo']);
  }

}
