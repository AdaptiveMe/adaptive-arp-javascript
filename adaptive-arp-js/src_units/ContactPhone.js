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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIBean.ts"/>
///<reference path="ContactPhoneType.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.ContactPhone
       @extends Adaptive.APIBean
       Structure representing the phone data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactPhone = (function (_super) {
        __extends(ContactPhone, _super);
        /**
           Constructor used by implementation to set the contact Phone

           @param phone     Phone number
           @param phoneType Type of Phone number
           @since ARP1.0
        */
        function ContactPhone(phone, phoneType) {
            _super.call(this);
            this.phone = phone;
            this.phoneType = phoneType;
        }
        /**
           Returns the phone phoneType

           @return phoneType
           @since ARP1.0
        */
        ContactPhone.prototype.getPhoneType = function () {
            return this.phoneType;
        };
        /**
           Set the phoneType of the phone number

           @param phoneType Type of Phone number
           @since ARP1.0
        */
        ContactPhone.prototype.setPhoneType = function (phoneType) {
            this.phoneType = phoneType;
        };
        /**
           Returns the phone number

           @return phone number
           @since ARP1.0
        */
        ContactPhone.prototype.getPhone = function () {
            return this.phone;
        };
        /**
           Set the phone number

           @param phone number
           @since ARP1.0
        */
        ContactPhone.prototype.setPhone = function (phone) {
            this.phone = phone;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ContactPhone.toObject = function (object) {
            var result = new ContactPhone(null, null);
            // Assign values to bean fields.
            if (object != null && object.phone != null)
                result.phone = object.phone;
            if (object != null && object.phoneType != null) {
                result.phoneType = Adaptive.ContactPhoneType.toObject(object.phoneType);
            }
            else {
                result.phoneType = Adaptive.ContactPhoneType.toObject(null);
            }
            return result;
        };
        return ContactPhone;
    })(Adaptive.APIBean);
    Adaptive.ContactPhone = ContactPhone;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ContactPhone.js.map