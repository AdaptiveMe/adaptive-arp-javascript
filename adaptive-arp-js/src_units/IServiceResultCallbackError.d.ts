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

    * @version v2.1.1

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       @enum {Adaptive.IServiceResultCallbackError} Adaptive.IServiceResultCallbackError
       Enumeration IServiceResultCallbackError
    */
    class IServiceResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IServiceResultCallbackError} [Forbidden='Forbidden']
        */
        static Forbidden: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [NotFound='NotFound']
        */
        static NotFound: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [MethodNotAllowed='MethodNotAllowed']
        */
        static MethodNotAllowed: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [NotAllowed='NotAllowed']
        */
        static NotAllowed: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [NotAuthenticated='NotAuthenticated']
        */
        static NotAuthenticated: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [PaymentRequired='PaymentRequired']
        */
        static PaymentRequired: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [TimeOut='TimeOut']
        */
        static TimeOut: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [NoResponse='NoResponse']
        */
        static NoResponse: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [ServerError='ServerError']
        */
        static ServerError: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [Unreachable='Unreachable']
        */
        static Unreachable: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [MalformedUrl='MalformedUrl']
        */
        static MalformedUrl: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [NotRegisteredService='NotRegisteredService']
        */
        static NotRegisteredService: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [Unknown='Unknown']
        */
        static Unknown: IServiceResultCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IServiceResultCallbackError}
        */
        static toObject(object: any): IServiceResultCallbackError;
    }
}
