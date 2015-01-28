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

///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseCallback.ts"/>
///<reference path="IFileDataLoadResultCallbackError.ts"/>
///<reference path="IFileDataLoadResultCallbackWarning.ts"/>

module Adaptive {

     /**
        Interface for Managing the File loading callback responses

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IFileDataLoadResultCallback
        @extends Adaptive.IBaseCallback
     */
     export interface IFileDataLoadResultCallback extends IBaseCallback {
          /**
             @method
             Error processing data retrieval/storage operation.
             @param error Error condition encountered.
             @since ARP1.0
          */
          onError(error:IFileDataLoadResultCallbackError);
          /**
             @method
             Result of data retrieval operation.
             @param data Data loaded.
             @since ARP1.0
          */
          onResult(data:Array<number>);
          /**
             @method
             Result with warning of data retrieval/storage operation.
             @param data    File being loaded.
             @param warning Warning condition encountered.
             @since ARP1.0
          */
          onWarning(data:Array<number>, warning:IFileDataLoadResultCallbackWarning);
     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
