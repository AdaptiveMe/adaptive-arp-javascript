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
///<reference path="ContactAddressType.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Structure representing the address data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactAddress = (function (_super) {
        __extends(ContactAddress, _super);
        /**
           Constructor with fields

           @param address Address data.
           @param type    Address type.
           @since ARP1.0
        */
        function ContactAddress(address, type) {
            _super.call(this);
            this.address = address;
            this.type = type;
        }
        /**
           Returns the type of the address

           @return AddressType Address type.
           @since ARP1.0
        */
        ContactAddress.prototype.getType = function () {
            return this.type;
        };
        /**
           Set the address type

           @param type Address type.
           @since ARP1.0
        */
        ContactAddress.prototype.setType = function (type) {
            this.type = type;
        };
        /**
           Returns the Contact address

           @return address Address data.
           @since ARP1.0
        */
        ContactAddress.prototype.getAddress = function () {
            return this.address;
        };
        /**
           Set the address of the Contact

           @param address Address data.
           @since ARP1.0
        */
        ContactAddress.prototype.setAddress = function (address) {
            this.address = address;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ContactAddress.toObject = function (object) {
            var result = new ContactAddress(null, null);
            // Assign values to bean fields.
            if (object != null && object.address != null)
                result.address = object.address;
            if (object != null && object.type != null) {
                result.type = Adaptive.ContactAddressType.toObject(object.type);
            }
            else {
                result.type = Adaptive.ContactAddressType.toObject(null);
            }
            return result;
        };
        return ContactAddress;
    })(Adaptive.APIBean);
    Adaptive.ContactAddress = ContactAddress;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ContactAddress.js.map