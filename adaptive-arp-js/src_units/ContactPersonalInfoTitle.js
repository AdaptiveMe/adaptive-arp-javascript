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

    * @version v2.0.8

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var Adaptive;
(function (Adaptive) {
    /**
       @enum {Adaptive.ContactPersonalInfoTitle} Adaptive.ContactPersonalInfoTitle
       Enumeration ContactPersonalInfoTitle
    */
    var ContactPersonalInfoTitle = (function () {
        function ContactPersonalInfoTitle(value) {
            this.value = value;
        }
        ContactPersonalInfoTitle.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ContactPersonalInfoTitle}
        */
        ContactPersonalInfoTitle.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Mr":
                        return ContactPersonalInfoTitle.Mr;
                    case "Mrs":
                        return ContactPersonalInfoTitle.Mrs;
                    case "Ms":
                        return ContactPersonalInfoTitle.Ms;
                    case "Dr":
                        return ContactPersonalInfoTitle.Dr;
                    case "Unknown":
                        return ContactPersonalInfoTitle.Unknown;
                    default:
                        return ContactPersonalInfoTitle.Unknown;
                }
            }
            else {
                return ContactPersonalInfoTitle.Unknown;
            }
        };
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Mr='Mr']
        */
        ContactPersonalInfoTitle.Mr = new ContactPersonalInfoTitle("Mr");
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Mrs='Mrs']
        */
        ContactPersonalInfoTitle.Mrs = new ContactPersonalInfoTitle("Mrs");
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Ms='Ms']
        */
        ContactPersonalInfoTitle.Ms = new ContactPersonalInfoTitle("Ms");
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Dr='Dr']
        */
        ContactPersonalInfoTitle.Dr = new ContactPersonalInfoTitle("Dr");
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Unknown='Unknown']
        */
        ContactPersonalInfoTitle.Unknown = new ContactPersonalInfoTitle("Unknown");
        return ContactPersonalInfoTitle;
    })();
    Adaptive.ContactPersonalInfoTitle = ContactPersonalInfoTitle;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ContactPersonalInfoTitle.js.map