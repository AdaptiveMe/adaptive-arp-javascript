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

module Adaptive {

     /**
        @enum {Adaptive.IServiceProtocolVersion} Adaptive.IServiceProtocolVersion
        Enumeration IServiceProtocolVersion
     */
     export class IServiceProtocolVersion {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IServiceProtocolVersion} [HttpProtocolVersion10='HttpProtocolVersion10']
          */
          static HttpProtocolVersion10 = new IServiceProtocolVersion("HttpProtocolVersion10");
          /**
             @property {Adaptive.IServiceProtocolVersion} [HttpProtocolVersion11='HttpProtocolVersion11']
          */
          static HttpProtocolVersion11 = new IServiceProtocolVersion("HttpProtocolVersion11");
          /**
             @property {Adaptive.IServiceProtocolVersion} [Unknown='Unknown']
          */
          static Unknown = new IServiceProtocolVersion("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IServiceProtocolVersion}
          */
          static toObject(object : any) : IServiceProtocolVersion {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "HttpProtocolVersion10":
                              return IServiceProtocolVersion.HttpProtocolVersion10;
                         case "HttpProtocolVersion11":
                              return IServiceProtocolVersion.HttpProtocolVersion11;
                         case "Unknown":
                              return IServiceProtocolVersion.Unknown;
                         default:
                              return IServiceProtocolVersion.Unknown;
                    }
               } else {
                    return IServiceProtocolVersion.Unknown;
               }
          }

     }
}
