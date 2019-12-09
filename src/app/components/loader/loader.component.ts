import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input() data;
  @Input() saved;
  @Output() dataChange = new EventEmitter();
  @Output() savedChange = new EventEmitter();
  title = 'Загружайте данные';
  notValid = false;

  static isJsonString(str) {
    // Проверка валидного JSON
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.title = this.saved ? 'Ваши измененные данные. Можете скорректировать снова.' : 'Введите данные.';
    this.data = JSON.stringify(this.data);
  }

  loadText(text: string) {
    // При валидности данных загружаем их и показываем компонент с таблицей
    if (LoaderComponent.isJsonString(text)) {
      const jsonText = JSON.parse(text);
      this.data = jsonText;
      this.dataChange.emit(jsonText);
      this.savedChange.emit(false);
    } else {
      // Иначе выводим пользователю ошибку
      this.notValid = true;
    }
  }


}
