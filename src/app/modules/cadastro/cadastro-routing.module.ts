import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const rotasCadastro: Routes = [
    { path: '', component: CadastroComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(rotasCadastro)
    ],
    exports: [
        RouterModule
    ]
})
export class CadastroRoutingModule { }
