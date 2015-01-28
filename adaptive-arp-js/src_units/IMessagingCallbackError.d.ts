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
       @class Adaptive.IMessagingCallbackError
       Enumeration IMessagingCallbackError
    */
    class IMessagingCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @enum [Adaptive.IMessagingCallbackError.SIMNotPresent=Adaptive.IMessagingCallbackError.*]
           @static
        */
        static SIMNotPresent: IMessagingCallbackError;
        /**
           @enum [Adaptive.IMessagingCallbackError.EmailAccountNotFound=Adaptive.IMessagingCallbackError.*]
           @static
        */
        static EmailAccountNotFound: IMessagingCallbackError;
        /**
           @enum [Adaptive.IMessagingCallbackError.NotSent=Adaptive.IMessagingCallbackError.*]
           @static
        */
        static NotSent: IMessagingCallbackError;
        /**
           @enum [Adaptive.IMessagingCallbackError.WrongParams=Adaptive.IMessagingCallbackError.*]
           @static
        */
        static WrongParams: IMessagingCallbackError;
        /**
           @enum [Adaptive.IMessagingCallbackError.NotSupported=Adaptive.IMessagingCallbackError.*]
           @static
        */
        static NotSupported: IMessagingCallbackError;
        /**
           @enum [Adaptive.IMessagingCallbackError.Unknown=Adaptive.IMessagingCallbackError.*]
           @static
        */
        static Unknown: IMessagingCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {IMessagingCallbackError}
        */
        static toObject(object: any): IMessagingCallbackError;
    }
}
