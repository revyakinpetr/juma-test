import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  editForm: FormGroup;

  @Input() keys;
  @Input() data;
  @Input() editIndex;
  @Output() loadNewItem = new EventEmitter();
  formControls = {};


  ngOnInit(): void {
    // Формируем форму и при редактировании устанавливаем значение
    this.keys.forEach(this.getFormControl, this);
    this.editForm = new FormGroup(this.formControls);
    if (this.editIndex != null) {
      this.editForm.setValue(this.data[this.editIndex]);
    }
  }

  getFormControl(e) {
    this.formControls[e] = new FormControl('');
  }

  saveItem() {
    // Сохраняем изменения в записи или новую запись
    if (this.editIndex != null) {
      this.data[this.editIndex] = this.editForm.value;
    } else {
      this.data.push(this.editForm.value);
    }
    this.loadNewItem.emit();
  }

}
