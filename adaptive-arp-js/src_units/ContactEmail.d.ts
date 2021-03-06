/// <reference path="APIBean.d.ts" />
/// <reference path="ContactEmailType.d.ts" />
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

    * @version v2.2.15

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       @class Adaptive.ContactEmail
       @extends Adaptive.APIBean
       Structure representing the email data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since v2.0
       @version 1.0
    */
    class ContactEmail extends APIBean {
        /**
           @property {Adaptive.ContactEmailType} type
           The type of the email
        */
        type: ContactEmailType;
        /**
           @property {Adaptive.ContactEmailType} type
           The type of the email The 'typeProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'type'.
        */
        typeProperty: ContactEmailType;
        /**
           @property {string} email
           Email of the Contact
        */
        email: string;
        /**
           @property {string} email
           Email of the Contact The 'emailProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'email'.
        */
        emailProperty: string;
        /**
           @property {boolean} primary
           Whether the email is the primary one or not
        */
        primary: boolean;
        /**
           @property {boolean} primary
           Whether the email is the primary one or not The 'primaryProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'primary'.
        */
        primaryProperty: boolean;
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.ContactEmailType} type    Type of the email
           @param {boolean} primary Is email primary
           @param {string} email   Email of the contact
           @since v2.0
        */
        constructor(type: ContactEmailType, primary: boolean, email: string);
        /**
           @method
           Returns the type of the email

           @return {Adaptive.ContactEmailType} EmailType
           @since v2.0
        */
        getType(): ContactEmailType;
        /**
           @method
           Set the type of the email

           @param {Adaptive.ContactEmailType} type Type of the email
           @since v2.0
        */
        setType(type: ContactEmailType): void;
        /**
           @method
           Returns the email of the Contact

           @return {string} email
           @since v2.0
        */
        getEmail(): string;
        /**
           @method
           Set the email of the Contact

           @param {string} email Email of the contact
           @since v2.0
        */
        setEmail(email: string): void;
        /**
           @method
           Returns if the email is primary

           @return {boolean} true if the email is primary; false otherwise
           @since v2.0
        */
        getPrimary(): boolean;
        /**
           @method
           Set if the email

           @param {boolean} primary true if the email is primary; false otherwise
           @since v2.0
        */
        setPrimary(primary: boolean): void;
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ContactEmail.
           @return {Adaptive.ContactEmail} Wrapped object instance.
        */
        static toObject(object: any): ContactEmail;
        /**
           @method
           @static
           Convert JSON parsed object array to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ContactEmail[].
           @return {Adaptive.ContactEmail[]} Wrapped object array instance.
        */
        static toObjectArray(object: any): ContactEmail[];
    }
}
