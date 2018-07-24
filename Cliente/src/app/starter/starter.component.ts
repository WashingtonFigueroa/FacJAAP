import { Component, AfterViewInit } from '@angular/core';
@Component({
	templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
	subtitle:string;	
	constructor() {
		this.subtitle = "JUNTA ADMINISTRADORA DE AGUA POTABLE"
	}

	ngAfterViewInit(){}
}