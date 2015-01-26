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

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

module Adaptive {

     /**
        Enumeration IGeolocationListenerError
     */
     export class IGeolocationListenerError {

          constructor(public value:string){}
          toString(){return this.value;}

          static Disabled = new IGeolocationListenerError("Disabled");
          static RestrictedAccess = new IGeolocationListenerError("RestrictedAccess");
          static DeniedAccess = new IGeolocationListenerError("DeniedAccess");
          static StatusNotDetermined = new IGeolocationListenerError("StatusNotDetermined");
          static Unknown = new IGeolocationListenerError("Unknown");

          /**
             Convert JSON parsed object to enumeration.
          */
          static toObject(object : any) : IGeolocationListenerError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Disabled":
                              return IGeolocationListenerError.Disabled;
                         case "RestrictedAccess":
                              return IGeolocationListenerError.RestrictedAccess;
                         case "DeniedAccess":
                              return IGeolocationListenerError.DeniedAccess;
                         case "StatusNotDetermined":
                              return IGeolocationListenerError.StatusNotDetermined;
                         case "Unknown":
                              return IGeolocationListenerError.Unknown;
                         default:
                              return IGeolocationListenerError.Unknown;
                    }
               } else {
                    return IGeolocationListenerError.Unknown;
               }
          }

     }
}