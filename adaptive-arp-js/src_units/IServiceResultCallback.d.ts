/// <reference path="IAdaptiveRPGroup.d.ts" />
/// <reference path="IBaseCallback.d.ts" />
/// <reference path="IServiceResultCallbackError.d.ts" />
/// <reference path="IServiceResultCallbackWarning.d.ts" />
/// <reference path="ServiceResponse.d.ts" />
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

    * @version v2.1.0

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       Interface for Managing the Services operations

       @author Francisco Javier Martin Bueno
       @since v2.0
       @version 1.0
    */
    /**
       @class Adaptive.IServiceResultCallback
    */
    interface IServiceResultCallback extends IBaseCallback {
        /**
           @method
           This method is called on Error
           @param error returned by the platform
           @since v2.0
        */
        onError(error: IServiceResultCallbackError): any;
        /**
           @method
           This method is called on Result
           @param response data
           @since v2.0
        */
        onResult(response: ServiceResponse): any;
        /**
           @method
           This method is called on Warning
           @param response data
           @param warning  returned by the platform
           @since v2.0
        */
        onWarning(response: ServiceResponse, warning: IServiceResultCallbackWarning): any;
    }
}