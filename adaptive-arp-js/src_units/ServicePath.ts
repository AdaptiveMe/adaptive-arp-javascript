/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

///<reference path="IServiceMethod.ts"/>

module Adaptive {

     /**
        @class Adaptive.ServicePath
        Structure representing a service path for one endpoint

        @author fnva
        @since ARP1.0
        @version 1.0
     */
     export class ServicePath {

          /**
             The methods for calling a path
          */
          methods : Array<IServiceMethod>;
          /**
             The path for the endpoint
          */
          path : string;
          /**
             @method constructor
             Constructor with parameters

             @param {string} path    The path for the endpoint
             @param {Adaptive.IServiceMethod[]} methods The methods for calling a path
          */
          constructor(path: string, methods: Array<IServiceMethod>) {
               this.path = path;
               this.methods = methods;
          }

          /**
             @method
             Endpoint's path methods setter

             @return {Adaptive.IServiceMethod[]} Endpoint's path methods
          */
          getMethods() : Array<IServiceMethod> {
               return this.methods;
          }

          /**
             @method
             Endpoint's path methods setter

             @param {Adaptive.IServiceMethod[]} methods Endpoint's path methods
          */
          setMethods(methods: Array<IServiceMethod>) {
               this.methods = methods;
          }

          /**
             @method
             Endpoint's Path Getter

             @return {string} Endpoint's Path
          */
          getPath() : string {
               return this.path;
          }

          /**
             @method
             Endpoint's path setter

             @param {string} path Endpoint's path
          */
          setPath(path: string) {
               this.path = path;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ServicePath.
             @return {Adaptive.ServicePath} Wrapped object instance.
          */
          static toObject(object : any) : ServicePath {
               var result : ServicePath = new ServicePath(null, null);

               // Assign values to bean fields.
               if (object!=null && object.path!=null) result.path = object.path;
               if (object != null && object.methods != null) {
                    result.methods = new Array<IServiceMethod>();
                    for(var i = 0; i < object.methods.length; i++) {
                         var __value__ = object.methods[i];
                         if (__value__ != null) {
                              result.methods.push(IServiceMethod.toObject(__value__));
                         } else {
                              result.methods.push(IServiceMethod.toObject(null));
                         }
                    }
               }

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/