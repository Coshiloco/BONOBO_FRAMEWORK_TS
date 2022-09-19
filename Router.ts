import HttpMethods  from "./HttpMethod"

class Router {
    protected routes: Array<Object> = [];
    public constructor() {
      for(let methods in HttpMethods) {
          this.routes[methods] = []
      }
    }
    
    public get(uri:string, action) {
      this.routes[HttpMethods.GET][uri] = action
    }
}