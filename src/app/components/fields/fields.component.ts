import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {
  @Input() data;
  @Input() saved;
  @Output() savedChange = new EventEmitter<any>();
  @Output() dataChange = new EventEmitter<any>();
  title = 'Редактирование данных';
  keys;
  popupShow: boolean;
  editIndex;

  ngOnInit() {
    this.keys = Object.keys(this.data[0]);
  }

  editItem(i: number) {
    // Устанавливаем номер редактируемой записи и открываем окно редактирования
    this.editIndex = i;
    this.popupShow = true;
  }

  deleteItem(i: number) {
    // Удаляем запись
    this.data.splice(i, 1);
  }

  addItem() {
    // Открываем окно создания новой записи
    this.editIndex = null;
    this.popupShow = true;
  }

  saveData() {
    // Таблицу с записями отправляем на компонент с textarea
    this.dataChange.emit(this.data);
    this.saved = true;
    this.savedChange.emit(this.saved);
  }

  newItemLoaded() {
    // Закрываем компонент создания/редактирования
    this.popupShow = false;
  }
}


