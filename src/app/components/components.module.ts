import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DxVectorMapModule } from "devextreme-angular";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";

import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { NgbdModalBasic } from "./modal/modal.component";
import { ImageUploadComponent } from "./image-upload/image-upload.component";
import { FileInputComponent } from "./file-input/file-input.component";
import { PictureUploadComponent } from "./picture-upload/picture-upload.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    JwBootstrapSwitchNg2Module,
    NgbModule,
    DxVectorMapModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,

    NgbdModalBasic,
    ImageUploadComponent,
    FileInputComponent,
    PictureUploadComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NgbdModalBasic,
    ImageUploadComponent,
    PictureUploadComponent,
    FileInputComponent
  ]
})
export class ComponentsModule {}
