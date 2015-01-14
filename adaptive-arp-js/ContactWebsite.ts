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
        Structure representing the website data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactWebsite extends APIBean {

          /**
             The url of the website
          */
          url : string;
          /**
             Constructor used by the implementation

             @param url Url of the website
             @since ARP1.0
          */
          constructor(url: string) {
               super();
               this.url = url;
          }

          /**
             Returns the url of the website

             @return website url
             @since ARP1.0
          */
          getUrl() : string {
               return this.url;
          }

          /**
             Set the url of the website

             @param url Url of the website
             @since ARP1.0
          */
          setUrl(url: string) {
               this.url = url;
          }

          /**
             Convert JSON parsed object to typed equivalent.
          */
          static toObject(object : any) : ContactWebsite {
               var result : ContactWebsite = new ContactWebsite(null);

               // Assign values to bean fields.
               result.url = object.url;

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/