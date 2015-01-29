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

///<reference path="APIBean.ts"/>

module Adaptive {

     /**
        @class Adaptive.ServiceSessionCookie
        @extends Adaptive.APIBean
        Structure representing the cookieValue of a http cookie.

        @author Aryslan
        @since v2.0
        @version 1.0
     */
     export class ServiceSessionCookie extends APIBean {

          /**
             @property {string} cookieName
             Name ot the cookie.
          */
          cookieName : string;

          /**
             @property {string} cookieName
             Name ot the cookie. The 'cookieNameProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'cookieName'.
          */
          get cookieNameProperty() : string {
               return this.cookieName;
          }

          set cookieNameProperty(cookieName:string) {
               this.cookieName = cookieName;
          }

          /**
             @property {string} cookieValue
             Value of the ServiceCookie.
          */
          cookieValue : string;

          /**
             @property {string} cookieValue
             Value of the ServiceCookie. The 'cookieValueProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'cookieValue'.
          */
          get cookieValueProperty() : string {
               return this.cookieValue;
          }

          set cookieValueProperty(cookieValue:string) {
               this.cookieValue = cookieValue;
          }

          /**
             @property {number} creation
             ServiceCookie creation timestamp in milliseconds.
          */
          creation : number;

          /**
             @property {number} creation
             ServiceCookie creation timestamp in milliseconds. The 'creationProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'creation'.
          */
          get creationProperty() : number {
               return this.creation;
          }

          set creationProperty(creation:number) {
               this.creation = creation;
          }

          /**
             @property {string} domain
             Domain for which the cookie is valid.
          */
          domain : string;

          /**
             @property {string} domain
             Domain for which the cookie is valid. The 'domainProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'domain'.
          */
          get domainProperty() : string {
               return this.domain;
          }

          set domainProperty(domain:string) {
               this.domain = domain;
          }

          /**
             @property {number} expiry
             ServiceCookie expiry in milliseconds or -1 for session only.
          */
          expiry : number;

          /**
             @property {number} expiry
             ServiceCookie expiry in milliseconds or -1 for session only. The 'expiryProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'expiry'.
          */
          get expiryProperty() : number {
               return this.expiry;
          }

          set expiryProperty(expiry:number) {
               this.expiry = expiry;
          }

          /**
             @property {string} path
             URI path for which the cookie is valid.
          */
          path : string;

          /**
             @property {string} path
             URI path for which the cookie is valid. The 'pathProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'path'.
          */
          get pathProperty() : string {
               return this.path;
          }

          set pathProperty(path:string) {
               this.path = path;
          }

          /**
             @property {string} scheme
             Scheme of the domain - http/https - for which the cookie is valid.
          */
          scheme : string;

          /**
             @property {string} scheme
             Scheme of the domain - http/https - for which the cookie is valid. The 'schemeProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'scheme'.
          */
          get schemeProperty() : string {
               return this.scheme;
          }

          set schemeProperty(scheme:string) {
               this.scheme = scheme;
          }

          /**
             @property {boolean} secure
             ServiceCookie is secure (https only).
          */
          secure : boolean;

          /**
             @property {boolean} secure
             ServiceCookie is secure (https only). The 'secureProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'secure'.
          */
          get secureProperty() : boolean {
               return this.secure;
          }

          set secureProperty(secure:boolean) {
               this.secure = secure;
          }

          /**
             @method constructor
             Contructor with fields

             @param {string} cookieName  Name of the cookie
             @param {string} cookieValue Value of the cookie
             @param {string} domain      Domain of the cookie
             @param {string} path        Path of the cookie
             @param {string} scheme      Scheme of the cookie
             @param {boolean} secure      Privacy of the cookie
             @param {number} expiry      Expiration date of the cookie
             @param {number} creation    Creation date of the cookie
             @since v2.0
          */
          constructor(cookieName: string, cookieValue: string, domain: string, path: string, scheme: string, secure: boolean, expiry: number, creation: number) {
               super();
               this.cookieName = cookieName;
               this.cookieValue = cookieValue;
               this.domain = domain;
               this.path = path;
               this.scheme = scheme;
               this.secure = secure;
               this.expiry = expiry;
               this.creation = creation;
          }

          /**
             @method
             Returns the cookie cookieName

             @return {string} cookieName Name of the cookie
             @since v2.0
          */
          getCookieName() : string {
               return this.cookieName;
          }

          /**
             @method
             Set the cookie cookieName

             @param {string} cookieName Name of the cookie
             @since v2.0
          */
          setCookieName(cookieName: string) {
               this.cookieName = cookieName;
          }

          /**
             @method
             Returns the cookie cookieValue

             @return {string} Value of the cookie
             @since v2.0
          */
          getCookieValue() : string {
               return this.cookieValue;
          }

          /**
             @method
             Set the cookie cookieValue

             @param {string} cookieValue Value of the cookie
             @since v2.0
          */
          setCookieValue(cookieValue: string) {
               this.cookieValue = cookieValue;
          }

          /**
             @method
             Returns the creation date

             @return {number} Creation date of the cookie
             @since v2.0
          */
          getCreation() : number {
               return this.creation;
          }

          /**
             @method
             Sets the creation date

             @param {number} creation Creation date of the cookie
             @since v2.0
          */
          setCreation(creation: number) {
               this.creation = creation;
          }

          /**
             @method
             Returns the domain

             @return {string} domain
             @since v2.0
          */
          getDomain() : string {
               return this.domain;
          }

          /**
             @method
             Set the domain

             @param {string} domain Domain of the cookie
             @since v2.0
          */
          setDomain(domain: string) {
               this.domain = domain;
          }

          /**
             @method
             Returns the expiration date in milis

             @return {number} expiry
             @since v2.0
          */
          getExpiry() : number {
               return this.expiry;
          }

          /**
             @method
             Set the expiration date in milis

             @param {number} expiry Expiration date of the cookie
             @since v2.0
          */
          setExpiry(expiry: number) {
               this.expiry = expiry;
          }

          /**
             @method
             Returns the path

             @return {string} path
             @since v2.0
          */
          getPath() : string {
               return this.path;
          }

          /**
             @method
             Set the path

             @param {string} path Path of the cookie
             @since v2.0
          */
          setPath(path: string) {
               this.path = path;
          }

          /**
             @method
             Returns the scheme

             @return {string} scheme
             @since v2.0
          */
          getScheme() : string {
               return this.scheme;
          }

          /**
             @method
             Set the scheme

             @param {string} scheme Scheme of the cookie
             @since v2.0
          */
          setScheme(scheme: string) {
               this.scheme = scheme;
          }

          /**
             @method
             Returns whether the cookie is secure or not

             @return {boolean} true if the cookie is secure; false otherwise
             @since v2.0
          */
          getSecure() : boolean {
               return this.secure;
          }

          /**
             @method
             Set whether the cookie is secure or not

             @param {boolean} secure Privacy of the cookie
             @since v2.0
          */
          setSecure(secure: boolean) {
               this.secure = secure;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ServiceSessionCookie.
             @return {Adaptive.ServiceSessionCookie} Wrapped object instance.
          */
          static toObject(object : any) : ServiceSessionCookie {
               var result : ServiceSessionCookie = new ServiceSessionCookie(null, null, null, null, null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.cookieName!=null) result.cookieName = object.cookieName;
               if (object!=null && object.cookieValue!=null) result.cookieValue = object.cookieValue;
               if (object!=null && object.domain!=null) result.domain = object.domain;
               if (object!=null && object.path!=null) result.path = object.path;
               if (object!=null && object.scheme!=null) result.scheme = object.scheme;
               if (object!=null && object.secure!=null) result.secure = object.secure;
               if (object!=null && object.expiry!=null) result.expiry = object.expiry;
               if (object!=null && object.creation!=null) result.creation = object.creation;

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/