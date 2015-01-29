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

module Adaptive {

     /**
        @enum {Adaptive.ContactPhoneType} Adaptive.ContactPhoneType
        Enumeration ContactPhoneType
     */
     export class ContactPhoneType {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ContactPhoneType} [Mobile='Mobile']
          */
          static Mobile = new ContactPhoneType("Mobile");
          /**
             @property {Adaptive.ContactPhoneType} [Work='Work']
          */
          static Work = new ContactPhoneType("Work");
          /**
             @property {Adaptive.ContactPhoneType} [Home='Home']
          */
          static Home = new ContactPhoneType("Home");
          /**
             @property {Adaptive.ContactPhoneType} [Main='Main']
          */
          static Main = new ContactPhoneType("Main");
          /**
             @property {Adaptive.ContactPhoneType} [HomeFax='HomeFax']
          */
          static HomeFax = new ContactPhoneType("HomeFax");
          /**
             @property {Adaptive.ContactPhoneType} [WorkFax='WorkFax']
          */
          static WorkFax = new ContactPhoneType("WorkFax");
          /**
             @property {Adaptive.ContactPhoneType} [Other='Other']
          */
          static Other = new ContactPhoneType("Other");
          /**
             @property {Adaptive.ContactPhoneType} [Unknown='Unknown']
          */
          static Unknown = new ContactPhoneType("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ContactPhoneType}
          */
          static toObject(object : any) : ContactPhoneType {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Mobile":
                              return ContactPhoneType.Mobile;
                         case "Work":
                              return ContactPhoneType.Work;
                         case "Home":
                              return ContactPhoneType.Home;
                         case "Main":
                              return ContactPhoneType.Main;
                         case "HomeFax":
                              return ContactPhoneType.HomeFax;
                         case "WorkFax":
                              return ContactPhoneType.WorkFax;
                         case "Other":
                              return ContactPhoneType.Other;
                         case "Unknown":
                              return ContactPhoneType.Unknown;
                         default:
                              return ContactPhoneType.Unknown;
                    }
               } else {
                    return ContactPhoneType.Unknown;
               }
          }

     }
}