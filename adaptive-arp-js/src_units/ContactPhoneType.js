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
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.ContactPhoneType
       Enumeration ContactPhoneType
    */
    var ContactPhoneType = (function () {
        function ContactPhoneType(value) {
            this.value = value;
        }
        ContactPhoneType.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {ContactPhoneType}
        */
        ContactPhoneType.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ContactPhoneType.Unknown;
            }
        };
        /**
           @enum [Adaptive.ContactPhoneType.Mobile=Adaptive.ContactPhoneType.*]
           @static
        */
        ContactPhoneType.Mobile = new ContactPhoneType("Mobile");
        /**
           @enum [Adaptive.ContactPhoneType.Work=Adaptive.ContactPhoneType.*]
           @static
        */
        ContactPhoneType.Work = new ContactPhoneType("Work");
        /**
           @enum [Adaptive.ContactPhoneType.Home=Adaptive.ContactPhoneType.*]
           @static
        */
        ContactPhoneType.Home = new ContactPhoneType("Home");
        /**
           @enum [Adaptive.ContactPhoneType.Main=Adaptive.ContactPhoneType.*]
           @static
        */
        ContactPhoneType.Main = new ContactPhoneType("Main");
        /**
           @enum [Adaptive.ContactPhoneType.HomeFax=Adaptive.ContactPhoneType.*]
           @static
        */
        ContactPhoneType.HomeFax = new ContactPhoneType("HomeFax");
        /**
           @enum [Adaptive.ContactPhoneType.WorkFax=Adaptive.ContactPhoneType.*]
           @static
        */
        ContactPhoneType.WorkFax = new ContactPhoneType("WorkFax");
        /**
           @enum [Adaptive.ContactPhoneType.Other=Adaptive.ContactPhoneType.*]
           @static
        */
        ContactPhoneType.Other = new ContactPhoneType("Other");
        /**
           @enum [Adaptive.ContactPhoneType.Unknown=Adaptive.ContactPhoneType.*]
           @static
        */
        ContactPhoneType.Unknown = new ContactPhoneType("Unknown");
        return ContactPhoneType;
    })();
    Adaptive.ContactPhoneType = ContactPhoneType;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ContactPhoneType.js.map