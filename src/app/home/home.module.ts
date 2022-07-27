import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from '@app/todos/components/todos-list/todos-list.component';
import { HeaderComponent } from '@app/shared/header/header.component';



@NgModule({
  declarations: [TodosListComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [TodosListComponent, HeaderComponent]
})
export class HomeModule { }
