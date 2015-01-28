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

///<reference path="APIBean.ts"/>
///<reference path="ContactAddressType.ts"/>

module Adaptive {

     /**
        @class Adaptive.ContactAddress
        @extends Adaptive.APIBean
        Structure representing the address data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactAddress extends APIBean {

          /**
             The address type
          */
          type : ContactAddressType;
          /**
             The Contact address
          */
          address : string;
          /**
             @method constructor
             Constructor with fields

             @param {string} address Address data.
             @param {Adaptive.ContactAddressType} type    Address type.
             @since ARP1.0
          */
          constructor(address: string, type: ContactAddressType) {
               super();
               this.address = address;
               this.type = type;
          }

          /**
             @method
             Returns the type of the address

             @return {Adaptive.ContactAddressType} AddressType Address type.
             @since ARP1.0
          */
          getType() : ContactAddressType {
               return this.type;
          }

          /**
             @method
             Set the address type

             @param {Adaptive.ContactAddressType} type Address type.
             @since ARP1.0
          */
          setType(type: ContactAddressType) {
               this.type = type;
          }

          /**
             @method
             Returns the Contact address

             @return {string} address Address data.
             @since ARP1.0
          */
          getAddress() : string {
               return this.address;
          }

          /**
             @method
             Set the address of the Contact

             @param {string} address Address data.
             @since ARP1.0
          */
          setAddress(address: string) {
               this.address = address;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ContactAddress.
             @return {Adaptive.ContactAddress} Wrapped object instance.
          */
          static toObject(object : any) : ContactAddress {
               var result : ContactAddress = new ContactAddress(null, null);

               // Assign values to bean fields.
               if (object!=null && object.address!=null) result.address = object.address;
               if (object!=null && object.type!=null) {
                    result.type = ContactAddressType.toObject(object.type);
               } else {
                    result.type = ContactAddressType.toObject(null);
               }

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/