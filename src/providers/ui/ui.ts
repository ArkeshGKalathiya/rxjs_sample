
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { mergeMap, catchError } from 'rxjs/operators';




@Injectable()
export class UiProvider {

	constructor(
		private loadingCtrl : LoadingController,
		private toastCtrl : ToastController
	) {
		
	}


	pipeLoader(observable : Observable<any>){


		let loader = this.loadingCtrl.create();
		loader.present();

		return observable.pipe(mergeMap((data)=>{

			return new Observable((observer)=>{

				loader.dismiss().then(()=>{
					observer.next(data);
					observer.complete();
				})
				
			})

		}),catchError((error)=>{
			
			return new Observable((observer)=>{

				loader.dismiss().then(()=>{
					observer.error(error);
					observer.complete();
				})
				

			});
		}));
		


	}


	pipeErrorHandler(observable){


		return observable.pipe(catchError((error)=>{

			
			return new Observable((observer)=>{

				this.toastCtrl.create({
					message : error,
					duration : 3000
				}).present();


				observer.error(error);
				observer.complete();

			});

		}));
	}

}
