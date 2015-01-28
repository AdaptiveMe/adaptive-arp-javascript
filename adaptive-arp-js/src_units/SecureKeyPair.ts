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

module Adaptive {

     /**
        @class Adaptive.SecureKeyPair
        @extends Adaptive.APIBean
        Represents a single secureKey-value pair.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class SecureKeyPair extends APIBean {

          /**
             Value of the secured element
          */
          secureData : string;
          /**
             Key of the secured element
          */
          secureKey : string;
          /**
             @method constructor
             Constructor with parameters

             @param {string} secureKey  name of the keypair
             @param {string} secureData value of the keypair
             @since ARP1.0
          */
          constructor(secureKey: string, secureData: string) {
               super();
               this.secureKey = secureKey;
               this.secureData = secureData;
          }

          /**
             @method
             Returns the object value

             @return {string} Value.
             @since ARP 1.0
          */
          getSecureData() : string {
               return this.secureData;
          }

          /**
             @method
             Sets the value for this object

             @param {string} secureData value to set.
             @since ARP 1.0
          */
          setSecureData(secureData: string) {
               this.secureData = secureData;
          }

          /**
             @method
             Returns the object secureKey name.

             @return {string} Key name.
             @since ARP 1.0
          */
          getSecureKey() : string {
               return this.secureKey;
          }

          /**
             @method
             Sets the secureKey name for this object.

             @param {string} secureKey Key name.
             @since ARP 1.0
          */
          setSecureKey(secureKey: string) {
               this.secureKey = secureKey;
          }

          /**
             Convert JSON parsed object to typed equivalent.
          */
          static toObject(object : any) : SecureKeyPair {
               var result : SecureKeyPair = new SecureKeyPair(null, null);

               // Assign values to bean fields.
               if (object!=null && object.secureKey!=null) result.secureKey = object.secureKey;
               if (object!=null && object.secureData!=null) result.secureData = object.secureData;

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
