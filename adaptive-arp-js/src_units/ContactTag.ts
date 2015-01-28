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
        @class Adaptive.ContactTag
        @extends Adaptive.APIBean
        Structure representing the assigned tags data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactTag extends APIBean {

          /**
             The tagName of the Tag
          */
          tagName : string;
          /**
             The tagValue of the Tag
          */
          tagValue : string;
          /**
             @method constructor
             Constructor used by the implementation

             @param {string} tagValue Value of the tag
             @param {string} tagName  Name of the tag
             @since ARP1.0
          */
          constructor(tagName: string, tagValue: string) {
               super();
               this.tagName = tagName;
               this.tagValue = tagValue;
          }

          /**
             @method
             Returns the tagName of the Tag

             @return {string} tagName
             @since ARP1.0
          */
          getTagName() : string {
               return this.tagName;
          }

          /**
             @method
             Set the tagName of the Tag

             @param {string} tagName Name of the tag
             @since ARP1.0
          */
          setTagName(tagName: string) {
               this.tagName = tagName;
          }

          /**
             @method
             Returns the tagValue of the Tag

             @return {string} tagValue
             @since ARP1.0
          */
          getTagValue() : string {
               return this.tagValue;
          }

          /**
             @method
             Set the tagValue of the Tag

             @param {string} tagValue Value of the tag
             @since ARP1.0
          */
          setTagValue(tagValue: string) {
               this.tagValue = tagValue;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ContactTag.
             @return {Adaptive.ContactTag} Wrapped object instance.
          */
          static toObject(object : any) : ContactTag {
               var result : ContactTag = new ContactTag(null, null);

               // Assign values to bean fields.
               if (object!=null && object.tagName!=null) result.tagName = object.tagName;
               if (object!=null && object.tagValue!=null) result.tagValue = object.tagValue;

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/