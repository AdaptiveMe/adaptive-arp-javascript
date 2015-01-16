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
       Enumeration IContactFieldGroup
    */
    var IContactFieldGroup = (function () {
        function IContactFieldGroup(value) {
            this.value = value;
        }
        IContactFieldGroup.prototype.toString = function () {
            return this.value;
        };
        /**
           Convert JSON parsed object to enumeration.
        */
        IContactFieldGroup.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IContactFieldGroup.Unknown;
            }
        };
        IContactFieldGroup.PERSONAL_INFO = new IContactFieldGroup("PERSONAL_INFO");
        IContactFieldGroup.PROFESSIONAL_INFO = new IContactFieldGroup("PROFESSIONAL_INFO");
        IContactFieldGroup.ADDRESSES = new IContactFieldGroup("ADDRESSES");
        IContactFieldGroup.PHONES = new IContactFieldGroup("PHONES");
        IContactFieldGroup.EMAILS = new IContactFieldGroup("EMAILS");
        IContactFieldGroup.WEBSITES = new IContactFieldGroup("WEBSITES");
        IContactFieldGroup.SOCIALS = new IContactFieldGroup("SOCIALS");
        IContactFieldGroup.TAGS = new IContactFieldGroup("TAGS");
        IContactFieldGroup.Unknown = new IContactFieldGroup("Unknown");
        return IContactFieldGroup;
    })();
    Adaptive.IContactFieldGroup = IContactFieldGroup;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IContactFieldGroup.js.map