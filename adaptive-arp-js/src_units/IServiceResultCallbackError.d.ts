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
declare module Adaptive {
    /**
       @class Adaptive.IServiceResultCallbackError
       Enumeration IServiceResultCallbackError
    */
    class IServiceResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @enum [Adaptive.IServiceResultCallbackError.Forbidden=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        static Forbidden: IServiceResultCallbackError;
        /**
           @enum [Adaptive.IServiceResultCallbackError.NotFound=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        static NotFound: IServiceResultCallbackError;
        /**
           @enum [Adaptive.IServiceResultCallbackError.MethodNotAllowed=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        static MethodNotAllowed: IServiceResultCallbackError;
        /**
           @enum [Adaptive.IServiceResultCallbackError.NotAllowed=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        static NotAllowed: IServiceResultCallbackError;
        /**
           @enum [Adaptive.IServiceResultCallbackError.NotAuthenticated=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        static NotAuthenticated: IServiceResultCallbackError;
        /**
           @enum [Adaptive.IServiceResultCallbackError.TimeOut=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        static TimeOut: IServiceResultCallbackError;
        /**
           @enum [Adaptive.IServiceResultCallbackError.NoResponse=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        static NoResponse: IServiceResultCallbackError;
        /**
           @enum [Adaptive.IServiceResultCallbackError.ServerError=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        static ServerError: IServiceResultCallbackError;
        /**
           @enum [Adaptive.IServiceResultCallbackError.Unreachable=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        static Unreachable: IServiceResultCallbackError;
        /**
           @enum [Adaptive.IServiceResultCallbackError.MalformedUrl=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        static MalformedUrl: IServiceResultCallbackError;
        /**
           @enum [Adaptive.IServiceResultCallbackError.NotRegisteredService=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        static NotRegisteredService: IServiceResultCallbackError;
        /**
           @enum [Adaptive.IServiceResultCallbackError.Unknown=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        static Unknown: IServiceResultCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {IServiceResultCallbackError}
        */
        static toObject(object: any): IServiceResultCallbackError;
    }
}
