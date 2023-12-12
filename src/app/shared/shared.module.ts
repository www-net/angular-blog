import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { QuillModule } from "ngx-quill";



@NgModule({
imports: [
  HttpClientModule,
  CommonModule,
  FormsModule,
  QuillModule.forRoot()
],
exports: [
  HttpClientModule,
  QuillModule
]
})

export class SharedModule {

}
