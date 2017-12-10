import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const endpoint = '/api/videos/'

@Injectable()
export class VideoService {
  constructor(private http: Http) { }

  list(){
      return this.http.get(endpoint)
              .map(response=>response.json())
              .catch(this.handleError)
  }
  get(slug){
      return this.http.get(endpoint + slug + "/")
              .map(response=>response.json())
              .catch(this.handleError)
  }

  search(query){
    return this.http.get(endpoint)
              .map(response=>{
                     let data = []
                     let req = response.json().filter(item=>{
                                    if (item.name.indexOf(query) >=0) {
                                         data.push(item)
                                    }
                                })

                     return data
               })
              .catch(this.handleError)

  }

  private handleError(error:any, caught:any): any{
      console.log(error, caught)
  }

}
