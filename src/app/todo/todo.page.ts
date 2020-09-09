import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {


  listDataTodo: any = [];

  constructor(public router: Router, public todo: TodoService) {
    setTimeout(() => {
      this.listDataTodo = this.todo.listDataTodo;
    }, 1000);
  }

  ngOnInit() {
    console.log(this.listDataTodo);
  }

  goTambahTodo() {
    this.router.navigate(['/todo/addtodo']);
  }

  hapusDataTodo(item) {
    this.todo.hapusData(item);
    this.todo.showMessage("Data berhasil dihapus");
  }

  hapusSemuaDataTodo() {
    this.todo.hapusSemuaData();
    this.listDataTodo = [];
  }

}
