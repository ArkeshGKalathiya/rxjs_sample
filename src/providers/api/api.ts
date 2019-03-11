import { Injectable } from '@angular/core';
import { from } from 'rxjs/Observable/from';
import { mergeMap, catchError } from 'rxjs/operators';
import { DeferObservable } from 'rxjs/Observable/DeferObservable';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiProvider {

	constructor() {

	}



	post(url,data){


	




		// we are using DeferObservable instead of creating
		// promise with "from" operator like below
		// 
		// let observable = from(new Promise((resolve, reject)=>{resolve()}))
		//
		// what above method will do is it will immediately execute promise as soon as called
		// even though observable is not subscribed
		// but we only want to execute promise 
		// when observable will be subscribed

		return new DeferObservable(()=>{

			// this is our promise ( in reality it will be promise returned from firebase )

			return new Promise((resolve, reject)=>{



				let response = {
					status : null,
					msg : '',
					data : {}
				}
		
		
				if(url == 'success'){
					response.status = true;
					response.data = {};
					response.msg = '';
				}else if(url == 'error'){
					response.status = false;
					response.data = {};
					response.msg = 'Something went wrong! Please try again later....';
				}


				// random timeout to simulate latency


				let timeout = Math.ceil(Math.random()*5000);

				setTimeout(()=>{

					if(url == 'success'){
						// resolves a promise
						return resolve(response);
					}else if(url == 'error'){
						// resolves a promise but infact error is there from server
						// so we need to extract error from response parser
						return resolve(response);
					}else if(url == 'network_error'){
						// rejects the promise, some network error occurred
						return reject("Serve is down..");
					}



				},timeout)

	
				
	
	
	
	
			});

		}).pipe(mergeMap((data)=>{
			
			// This callback only will be called if promise resolved successfully
			// If promise rejects then we have to handle error in pipe
			// using catchError function

			// now there are two cases
			// if promise resolve it ONLY MEANS REQUEST IS COMPLETED successfully
			// it doesn't mean that task we wanted to perform is completed on backend


			// ex : this two cases will resolve promise ( because request made successfully )


			// {
			// 	status : false,
			// 	data : null,
			// 	msg : "Oops! you dont have permission to team."
			// }

			// {
			// 	status : true,
			// 	data : [{x:y},{z:w}],
			// 	msg : ''
			// }


			// below case will reject promise 
			
			// suppose server returns 404, or 403 or any other like 500 (depends on backend)
			// then you have to handle those error using adding catchError in pipe



			// here we are parsing response
			// as we have static data we dont need to parse the response
			// but you can put some parsing logic according to your application
			// ex : maybe you want to show some different error message 
			// or if backend guy changes the response structure you can handle it from responseParser function

			



			return this.responseParser(data);


		}),catchError((error)=>{
			return new Observable((observer)=>{


				// in practice you have to parse proper error over here
				// i.e error.status == 403 then message could be "Unauthorized access"
				//
				// but here we know that error will be string ( reject method from above )

				observer.error(error);
				observer.complete();
			});
		}));





	}



	private responseParser(data){

		return new Observable((observer)=>{

			if(data.status){

				// extracting data and passing that data ahead
				// in pipe


				observer.next(data.data);
				observer.complete();

			}else{

				// passing data


				observer.error(data.msg);
				observer.complete();
			}


		})

	}

}
