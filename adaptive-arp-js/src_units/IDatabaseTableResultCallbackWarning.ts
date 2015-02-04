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

    * @version v2.1.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

module Adaptive {

     /**
        @enum {Adaptive.IDatabaseTableResultCallbackWarning} Adaptive.IDatabaseTableResultCallbackWarning
        Enumeration IDatabaseTableResultCallbackWarning
     */
     export class IDatabaseTableResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IDatabaseTableResultCallbackWarning} [TableExists='TableExists']
          */
          static TableExists = new IDatabaseTableResultCallbackWarning("TableExists");
          /**
             @property {Adaptive.IDatabaseTableResultCallbackWarning} [TableLocked='TableLocked']
          */
          static TableLocked = new IDatabaseTableResultCallbackWarning("TableLocked");
          /**
             @property {Adaptive.IDatabaseTableResultCallbackWarning} [NoResults='NoResults']
          */
          static NoResults = new IDatabaseTableResultCallbackWarning("NoResults");
          /**
             @property {Adaptive.IDatabaseTableResultCallbackWarning} [Unknown='Unknown']
          */
          static Unknown = new IDatabaseTableResultCallbackWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IDatabaseTableResultCallbackWarning}
          */
          static toObject(object : any) : IDatabaseTableResultCallbackWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "TableExists":
                              return IDatabaseTableResultCallbackWarning.TableExists;
                         case "TableLocked":
                              return IDatabaseTableResultCallbackWarning.TableLocked;
                         case "NoResults":
                              return IDatabaseTableResultCallbackWarning.NoResults;
                         case "Unknown":
                              return IDatabaseTableResultCallbackWarning.Unknown;
                         default:
                              return IDatabaseTableResultCallbackWarning.Unknown;
                    }
               } else {
                    return IDatabaseTableResultCallbackWarning.Unknown;
               }
          }

     }
}
