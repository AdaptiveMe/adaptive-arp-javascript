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

    * @version v2.2.9

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       @enum {Adaptive.ICapabilitiesCommunication} Adaptive.ICapabilitiesCommunication
       Enumeration ICapabilitiesCommunication
    */
    class ICapabilitiesCommunication {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Calendar='Calendar']
        */
        static Calendar: ICapabilitiesCommunication;
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Contact='Contact']
        */
        static Contact: ICapabilitiesCommunication;
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Mail='Mail']
        */
        static Mail: ICapabilitiesCommunication;
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Messaging='Messaging']
        */
        static Messaging: ICapabilitiesCommunication;
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Telephony='Telephony']
        */
        static Telephony: ICapabilitiesCommunication;
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Unknown='Unknown']
        */
        static Unknown: ICapabilitiesCommunication;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesCommunication}
        */
        static toObject(object: any): ICapabilitiesCommunication;
    }
}
