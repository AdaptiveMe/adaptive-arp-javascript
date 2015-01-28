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
       @class Adaptive.ICapabilitiesNotification
       Enumeration ICapabilitiesNotification
    */
    var ICapabilitiesNotification = (function () {
        function ICapabilitiesNotification(value) {
            this.value = value;
        }
        ICapabilitiesNotification.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {ICapabilitiesNotification}
        */
        ICapabilitiesNotification.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Alarm":
                        return ICapabilitiesNotification.Alarm;
                    case "LocalNotification":
                        return ICapabilitiesNotification.LocalNotification;
                    case "RemoteNotification":
                        return ICapabilitiesNotification.RemoteNotification;
                    case "Vibration":
                        return ICapabilitiesNotification.Vibration;
                    case "Unknown":
                        return ICapabilitiesNotification.Unknown;
                    default:
                        return ICapabilitiesNotification.Unknown;
                }
            }
            else {
                return ICapabilitiesNotification.Unknown;
            }
        };
        /**
           @enum [Adaptive.ICapabilitiesNotification.Alarm=Adaptive.ICapabilitiesNotification.*]
           @static
        */
        ICapabilitiesNotification.Alarm = new ICapabilitiesNotification("Alarm");
        /**
           @enum [Adaptive.ICapabilitiesNotification.LocalNotification=Adaptive.ICapabilitiesNotification.*]
           @static
        */
        ICapabilitiesNotification.LocalNotification = new ICapabilitiesNotification("LocalNotification");
        /**
           @enum [Adaptive.ICapabilitiesNotification.RemoteNotification=Adaptive.ICapabilitiesNotification.*]
           @static
        */
        ICapabilitiesNotification.RemoteNotification = new ICapabilitiesNotification("RemoteNotification");
        /**
           @enum [Adaptive.ICapabilitiesNotification.Vibration=Adaptive.ICapabilitiesNotification.*]
           @static
        */
        ICapabilitiesNotification.Vibration = new ICapabilitiesNotification("Vibration");
        /**
           @enum [Adaptive.ICapabilitiesNotification.Unknown=Adaptive.ICapabilitiesNotification.*]
           @static
        */
        ICapabilitiesNotification.Unknown = new ICapabilitiesNotification("Unknown");
        return ICapabilitiesNotification;
    })();
    Adaptive.ICapabilitiesNotification = ICapabilitiesNotification;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ICapabilitiesNotification.js.map