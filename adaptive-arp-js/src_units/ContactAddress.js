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
       @class Adaptive.ContactAddress
       @extends Adaptive.APIBean
       Structure representing the address data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since v2.0
       @version 1.0
    */
    var ContactAddress = (function (_super) {
        __extends(ContactAddress, _super);
        /**
           @method constructor
           Constructor with fields

           @param {string} address Address data.
           @param {Adaptive.ContactAddressType} type    Address type.
           @since v2.0
        */
        function ContactAddress(address, type) {
            _super.call(this);
            this.address = address;
            this.type = type;
        }
        Object.defineProperty(ContactAddress.prototype, "typeProperty", {
            /**
               @property {Adaptive.ContactAddressType} typeProperty
               The address type The 'typeProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'type'.
            */
            get: function () {
                return this.type;
            },
            set: function (type) {
                this.type = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactAddress.prototype, "addressProperty", {
            /**
               @property {string} addressProperty
               The Contact address The 'addressProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'address'.
            */
            get: function () {
                return this.address;
            },
            set: function (address) {
                this.address = address;
            },
            enumerable: true,
            configurable: true
        });
        /**
           @method
           Returns the type of the address

           @return {Adaptive.ContactAddressType} AddressType Address type.
           @since v2.0
        */
        ContactAddress.prototype.getType = function () {
            return this.type;
        };
        /**
           @method
           Set the address type

           @param {Adaptive.ContactAddressType} type Address type.
           @since v2.0
        */
        ContactAddress.prototype.setType = function (type) {
            this.type = type;
        };
        /**
           @method
           Returns the Contact address

           @return {string} address Address data.
           @since v2.0
        */
        ContactAddress.prototype.getAddress = function () {
            return this.address;
        };
        /**
           @method
           Set the address of the Contact

           @param {string} address Address data.
           @since v2.0
        */
        ContactAddress.prototype.setAddress = function (address) {
            this.address = address;
        };
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ContactAddress.
           @return {Adaptive.ContactAddress} Wrapped object instance.
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