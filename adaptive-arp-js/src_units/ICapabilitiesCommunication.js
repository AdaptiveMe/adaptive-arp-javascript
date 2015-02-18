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
       @enum {Adaptive.ICapabilitiesCommunication} Adaptive.ICapabilitiesCommunication
       Enumeration ICapabilitiesCommunication
    */
    var ICapabilitiesCommunication = (function () {
        function ICapabilitiesCommunication(value) {
            this.value = value;
        }
        ICapabilitiesCommunication.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesCommunication}
        */
        ICapabilitiesCommunication.toObject = function (object) {
            var retValue = ICapabilitiesCommunication.Unknown;
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Calendar":
                        retValue = ICapabilitiesCommunication.Calendar;
                    case "Contact":
                        retValue = ICapabilitiesCommunication.Contact;
                    case "Mail":
                        retValue = ICapabilitiesCommunication.Mail;
                    case "Messaging":
                        retValue = ICapabilitiesCommunication.Messaging;
                    case "Telephony":
                        retValue = ICapabilitiesCommunication.Telephony;
                    default:
                        retValue = ICapabilitiesCommunication.Unknown;
                }
            }
            return retValue;
        };
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Calendar='Calendar']
        */
        ICapabilitiesCommunication.Calendar = new ICapabilitiesCommunication("Calendar");
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Contact='Contact']
        */
        ICapabilitiesCommunication.Contact = new ICapabilitiesCommunication("Contact");
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Mail='Mail']
        */
        ICapabilitiesCommunication.Mail = new ICapabilitiesCommunication("Mail");
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Messaging='Messaging']
        */
        ICapabilitiesCommunication.Messaging = new ICapabilitiesCommunication("Messaging");
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Telephony='Telephony']
        */
        ICapabilitiesCommunication.Telephony = new ICapabilitiesCommunication("Telephony");
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Unknown='Unknown']
        */
        ICapabilitiesCommunication.Unknown = new ICapabilitiesCommunication("Unknown");
        return ICapabilitiesCommunication;
    })();
    Adaptive.ICapabilitiesCommunication = ICapabilitiesCommunication;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ICapabilitiesCommunication.js.map