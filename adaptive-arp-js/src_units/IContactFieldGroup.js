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

    * @version v2.1.5

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var Adaptive;
(function (Adaptive) {
    /**
       @enum {Adaptive.IContactFieldGroup} Adaptive.IContactFieldGroup
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
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactFieldGroup}
        */
        IContactFieldGroup.toObject = function (object) {
            var retValue = IContactFieldGroup.Unknown;
            if (object != null && object.value != null && IContactFieldGroup.hasOwnProperty(object.value)) {
                retValue = IContactFieldGroup[object.value];
            }
            return retValue;
        };
        /**
           @property {Adaptive.IContactFieldGroup} [PERSONALINFO='PERSONALINFO']
        */
        IContactFieldGroup.PERSONALINFO = new IContactFieldGroup("PERSONAL_INFO");
        /**
           @property {Adaptive.IContactFieldGroup} [PROFESSIONALINFO='PROFESSIONALINFO']
        */
        IContactFieldGroup.PROFESSIONALINFO = new IContactFieldGroup("PROFESSIONAL_INFO");
        /**
           @property {Adaptive.IContactFieldGroup} [ADDRESSES='ADDRESSES']
        */
        IContactFieldGroup.ADDRESSES = new IContactFieldGroup("ADDRESSES");
        /**
           @property {Adaptive.IContactFieldGroup} [PHONES='PHONES']
        */
        IContactFieldGroup.PHONES = new IContactFieldGroup("PHONES");
        /**
           @property {Adaptive.IContactFieldGroup} [EMAILS='EMAILS']
        */
        IContactFieldGroup.EMAILS = new IContactFieldGroup("EMAILS");
        /**
           @property {Adaptive.IContactFieldGroup} [WEBSITES='WEBSITES']
        */
        IContactFieldGroup.WEBSITES = new IContactFieldGroup("WEBSITES");
        /**
           @property {Adaptive.IContactFieldGroup} [SOCIALS='SOCIALS']
        */
        IContactFieldGroup.SOCIALS = new IContactFieldGroup("SOCIALS");
        /**
           @property {Adaptive.IContactFieldGroup} [TAGS='TAGS']
        */
        IContactFieldGroup.TAGS = new IContactFieldGroup("TAGS");
        /**
           @property {Adaptive.IContactFieldGroup} [Unknown='Unknown']
        */
        IContactFieldGroup.Unknown = new IContactFieldGroup("Unknown");
        return IContactFieldGroup;
    })();
    Adaptive.IContactFieldGroup = IContactFieldGroup;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IContactFieldGroup.js.map