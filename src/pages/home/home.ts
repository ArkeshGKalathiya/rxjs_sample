import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ApiExampleProvider } from '../../providers/api-example/api-example';
import { UiProvider } from '../../providers/ui/ui';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		public navCtrl: NavController,
		private apiExampleProvider : ApiExampleProvider,
		private uiProvider : UiProvider
	) {
	}



	public success(){

		let observable = this.apiExampleProvider.success();
		observable = this.uiProvider.pipeLoader(observable);
		observable = this.uiProvider.pipeErrorHandler(observable);

		observable.subscribe(()=>{

		},()=>{});

	}
	public error(){

		let observable = this.apiExampleProvider.error();
		observable = this.uiProvider.pipeLoader(observable);
		observable = this.uiProvider.pipeErrorHandler(observable);

		observable.subscribe(()=>{

		},()=>{});

	}
	public networkError(){

		let observable = this.apiExampleProvider.networkError();
		observable = this.uiProvider.pipeLoader(observable);
		observable = this.uiProvider.pipeErrorHandler(observable);

		observable.subscribe(()=>{

		},()=>{});

	}
	public loaderOnly(){

		let observable =  this.apiExampleProvider.success();
		observable = this.uiProvider.pipeLoader(observable);
		

		observable.subscribe(()=>{},(error)=>{});

	}
	public errorOnly(){

		let observable = this.apiExampleProvider.networkError();
		observable = this.uiProvider.pipeErrorHandler(observable);

		observable.subscribe(()=>{

		},()=>{});

	}

}
