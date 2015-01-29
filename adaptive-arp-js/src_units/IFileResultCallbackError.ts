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

    * @version v2.0.5

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

module Adaptive {

     /**
        @enum {Adaptive.IFileResultCallbackError} Adaptive.IFileResultCallbackError
        Enumeration IFileResultCallbackError
     */
     export class IFileResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IFileResultCallbackError} [FileExists='FileExists']
          */
          static FileExists = new IFileResultCallbackError("FileExists");
          /**
             @property {Adaptive.IFileResultCallbackError} [SourceInexistent='SourceInexistent']
          */
          static SourceInexistent = new IFileResultCallbackError("SourceInexistent");
          /**
             @property {Adaptive.IFileResultCallbackError} [DestionationExists='DestionationExists']
          */
          static DestionationExists = new IFileResultCallbackError("DestionationExists");
          /**
             @property {Adaptive.IFileResultCallbackError} [InsufficientSpace='InsufficientSpace']
          */
          static InsufficientSpace = new IFileResultCallbackError("InsufficientSpace");
          /**
             @property {Adaptive.IFileResultCallbackError} [Unauthorized='Unauthorized']
          */
          static Unauthorized = new IFileResultCallbackError("Unauthorized");
          /**
             @property {Adaptive.IFileResultCallbackError} [Unknown='Unknown']
          */
          static Unknown = new IFileResultCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IFileResultCallbackError}
          */
          static toObject(object : any) : IFileResultCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "FileExists":
                              return IFileResultCallbackError.FileExists;
                         case "SourceInexistent":
                              return IFileResultCallbackError.SourceInexistent;
                         case "DestionationExists":
                              return IFileResultCallbackError.DestionationExists;
                         case "InsufficientSpace":
                              return IFileResultCallbackError.InsufficientSpace;
                         case "Unauthorized":
                              return IFileResultCallbackError.Unauthorized;
                         case "Unknown":
                              return IFileResultCallbackError.Unknown;
                         default:
                              return IFileResultCallbackError.Unknown;
                    }
               } else {
                    return IFileResultCallbackError.Unknown;
               }
          }

     }
}
