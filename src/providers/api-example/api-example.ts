import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';


@Injectable()
export class ApiExampleProvider {

	constructor(
		private api : ApiProvider
	) {
		
	}


	success(){
		return this.api.post('success',{});
	}

	error(){
		return this.api.post('error',{});
	}

	networkError(){
		return this.api.post('network_error',{});
	}



	

}
