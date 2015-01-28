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

module Adaptive {

     /**
        @enum {Adaptive.IContactFieldGroup} Adaptive.IContactFieldGroup
        Enumeration IContactFieldGroup
     */
     export class IContactFieldGroup {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IContactFieldGroup} [PERSONAL_INFO='PERSONAL_INFO']
          */
          static PERSONAL_INFO = new IContactFieldGroup("PERSONAL_INFO");
          /**
             @property {Adaptive.IContactFieldGroup} [PROFESSIONAL_INFO='PROFESSIONAL_INFO']
          */
          static PROFESSIONAL_INFO = new IContactFieldGroup("PROFESSIONAL_INFO");
          /**
             @property {Adaptive.IContactFieldGroup} [ADDRESSES='ADDRESSES']
          */
          static ADDRESSES = new IContactFieldGroup("ADDRESSES");
          /**
             @property {Adaptive.IContactFieldGroup} [PHONES='PHONES']
          */
          static PHONES = new IContactFieldGroup("PHONES");
          /**
             @property {Adaptive.IContactFieldGroup} [EMAILS='EMAILS']
          */
          static EMAILS = new IContactFieldGroup("EMAILS");
          /**
             @property {Adaptive.IContactFieldGroup} [WEBSITES='WEBSITES']
          */
          static WEBSITES = new IContactFieldGroup("WEBSITES");
          /**
             @property {Adaptive.IContactFieldGroup} [SOCIALS='SOCIALS']
          */
          static SOCIALS = new IContactFieldGroup("SOCIALS");
          /**
             @property {Adaptive.IContactFieldGroup} [TAGS='TAGS']
          */
          static TAGS = new IContactFieldGroup("TAGS");
          /**
             @property {Adaptive.IContactFieldGroup} [Unknown='Unknown']
          */
          static Unknown = new IContactFieldGroup("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IContactFieldGroup}
          */
          static toObject(object : any) : IContactFieldGroup {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "PERSONAL_INFO":
                              return IContactFieldGroup.PERSONAL_INFO;
                         case "PROFESSIONAL_INFO":
                              return IContactFieldGroup.PROFESSIONAL_INFO;
                         case "ADDRESSES":
                              return IContactFieldGroup.ADDRESSES;
                         case "PHONES":
                              return IContactFieldGroup.PHONES;
                         case "EMAILS":
                              return IContactFieldGroup.EMAILS;
                         case "WEBSITES":
                              return IContactFieldGroup.WEBSITES;
                         case "SOCIALS":
                              return IContactFieldGroup.SOCIALS;
                         case "TAGS":
                              return IContactFieldGroup.TAGS;
                         case "Unknown":
                              return IContactFieldGroup.Unknown;
                         default:
                              return IContactFieldGroup.Unknown;
                    }
               } else {
                    return IContactFieldGroup.Unknown;
               }
          }

     }
}
