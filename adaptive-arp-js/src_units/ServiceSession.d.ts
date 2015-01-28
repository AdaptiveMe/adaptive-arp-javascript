/// <reference path="APIBean.d.ts" />
/// <reference path="ServiceCookie.d.ts" />
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
declare module Adaptive {
    /**
       @class Adaptive.ServiceSession
       @extends Adaptive.APIBean
       Represents a session object for HTTP request and responses

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    class ServiceSession extends APIBean {
        /**
           The attributes of the response
        */
        attributes: string[];
        /**
           The cookies of the response
        */
        cookies: ServiceCookie[];
        /**
           @method constructor
           Constructor with fields

           @param {Adaptive.ServiceCookie[]} cookies    The cookies of the response
           @param {string[]} attributes Attributes of the response
           @since ARP1.0
        */
        constructor(cookies: ServiceCookie[], attributes: string[]);
        /**
           @method
           Gets the attributes of the response

           @return {string[]} Attributes of the response
           @since ARP1.0
        */
        getAttributes(): string[];
        /**
           @method
           Sets the attributes for the response

           @param {string[]} attributes Attributes of the response
           @since ARP1.0
        */
        setAttributes(attributes: string[]): void;
        /**
           @method
           Returns the cookies of the response

           @return {Adaptive.ServiceCookie[]} The cookies of the response
           @since ARP1.0
        */
        getCookies(): ServiceCookie[];
        /**
           @method
           Sets the cookies of the response

           @param {Adaptive.ServiceCookie[]} cookies The cookies of the response
           @since ARP1.0
        */
        setCookies(cookies: ServiceCookie[]): void;
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ServiceSession.
           @return {Adaptive.ServiceSession} Wrapped object instance.
        */
        static toObject(object: any): ServiceSession;
    }
}