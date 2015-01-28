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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIBean.ts"/>
///<reference path="ContactPersonalInfoTitle.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.ContactPersonalInfo
       @extends Adaptive.APIBean
       Structure representing the personal info data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactPersonalInfo = (function (_super) {
        __extends(ContactPersonalInfo, _super);
        /**
           @method constructor
           The Constructor used by the implementation

           @param {string} name       of the Contact
           @param {string} middleName of the Contact
           @param {string} lastName   of the Contact
           @param {Adaptive.ContactPersonalInfoTitle} title      of the Contact
           @since ARP1.0
        */
        function ContactPersonalInfo(name, middleName, lastName, title) {
            _super.call(this);
            this.name = name;
            this.middleName = middleName;
            this.lastName = lastName;
            this.title = title;
        }
        /**
           @method
           Returns the title of the Contact

           @return {Adaptive.ContactPersonalInfoTitle} Title
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getTitle = function () {
            return this.title;
        };
        /**
           @method
           Set the Title of the Contact

           @param {Adaptive.ContactPersonalInfoTitle} title of the Contact
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setTitle = function (title) {
            this.title = title;
        };
        /**
           @method
           Returns the last name of the Contact

           @return {string} lastName
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getLastName = function () {
            return this.lastName;
        };
        /**
           @method
           Set the last name of the Contact

           @param {string} lastName of the Contact
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setLastName = function (lastName) {
            this.lastName = lastName;
        };
        /**
           @method
           Returns the middle name of the Contact

           @return {string} middelName
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getMiddleName = function () {
            return this.middleName;
        };
        /**
           @method
           Set the middle name of the Contact

           @param {string} middleName of the Contact
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setMiddleName = function (middleName) {
            this.middleName = middleName;
        };
        /**
           @method
           Returns the name of the Contact

           @return {string} name
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getName = function () {
            return this.name;
        };
        /**
           @method
           Set the name of the Contact

           @param {string} name of the Contact
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ContactPersonalInfo.toObject = function (object) {
            var result = new ContactPersonalInfo(null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.name != null)
                result.name = object.name;
            if (object != null && object.middleName != null)
                result.middleName = object.middleName;
            if (object != null && object.lastName != null)
                result.lastName = object.lastName;
            if (object != null && object.title != null) {
                result.title = Adaptive.ContactPersonalInfoTitle.toObject(object.title);
            }
            else {
                result.title = Adaptive.ContactPersonalInfoTitle.toObject(null);
            }
            return result;
        };
        return ContactPersonalInfo;
    })(Adaptive.APIBean);
    Adaptive.ContactPersonalInfo = ContactPersonalInfo;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ContactPersonalInfo.js.map