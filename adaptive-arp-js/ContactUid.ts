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

///<reference path="APIBean.ts"/>

module Adaptive {

     /**
        Structure representing the internal unique identifier data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactUid extends APIBean {

          /**
             The id of the Contact
          */
          contactId : string;
          /**
             Constructor used by implementation to set the Contact id.

             @param contactId Internal unique contact id.
             @since ARP1.0
          */
          constructor(contactId: string) {
               super();
               this.contactId = contactId;
          }

          /**
             Returns the contact id

             @return Contactid Internal unique contact id.
             @since ARP1.0
          */
          getContactId() : string {
               return this.contactId;
          }

          /**
             Set the id of the Contact

             @param contactId Internal unique contact id.
             @since ARP1.0
          */
          setContactId(contactId: string) {
               this.contactId = contactId;
          }

          /**
             Convert JSON parsed object to typed equivalent.
          */
          static toObject(object : any) : ContactUid {
               var result : ContactUid = new ContactUid(null);

               // Assign values to bean fields.
               result.contactId = object.contactId;

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/