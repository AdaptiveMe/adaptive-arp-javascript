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
       @enum {Adaptive.IAdaptiveRPGroup} Adaptive.IAdaptiveRPGroup
       Enumeration IAdaptiveRPGroup
    */
    var IAdaptiveRPGroup = (function () {
        function IAdaptiveRPGroup(value) {
            this.value = value;
        }
        IAdaptiveRPGroup.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        IAdaptiveRPGroup.toObject = function (object) {
            var retValue = IAdaptiveRPGroup.Unknown;
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Application":
                        retValue = IAdaptiveRPGroup.Application;
                    case "Commerce":
                        retValue = IAdaptiveRPGroup.Commerce;
                    case "Communication":
                        retValue = IAdaptiveRPGroup.Communication;
                    case "Data":
                        retValue = IAdaptiveRPGroup.Data;
                    case "Media":
                        retValue = IAdaptiveRPGroup.Media;
                    case "Notification":
                        retValue = IAdaptiveRPGroup.Notification;
                    case "PIM":
                        retValue = IAdaptiveRPGroup.PIM;
                    case "Reader":
                        retValue = IAdaptiveRPGroup.Reader;
                    case "Security":
                        retValue = IAdaptiveRPGroup.Security;
                    case "Sensor":
                        retValue = IAdaptiveRPGroup.Sensor;
                    case "Social":
                        retValue = IAdaptiveRPGroup.Social;
                    case "System":
                        retValue = IAdaptiveRPGroup.System;
                    case "UI":
                        retValue = IAdaptiveRPGroup.UI;
                    case "Util":
                        retValue = IAdaptiveRPGroup.Util;
                    case "Kernel":
                        retValue = IAdaptiveRPGroup.Kernel;
                    default:
                        retValue = IAdaptiveRPGroup.Unknown;
                }
            }
            return retValue;
        };
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Application='Application']
        */
        IAdaptiveRPGroup.Application = new IAdaptiveRPGroup("Application");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Commerce='Commerce']
        */
        IAdaptiveRPGroup.Commerce = new IAdaptiveRPGroup("Commerce");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Communication='Communication']
        */
        IAdaptiveRPGroup.Communication = new IAdaptiveRPGroup("Communication");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Data='Data']
        */
        IAdaptiveRPGroup.Data = new IAdaptiveRPGroup("Data");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Media='Media']
        */
        IAdaptiveRPGroup.Media = new IAdaptiveRPGroup("Media");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Notification='Notification']
        */
        IAdaptiveRPGroup.Notification = new IAdaptiveRPGroup("Notification");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [PIM='PIM']
        */
        IAdaptiveRPGroup.PIM = new IAdaptiveRPGroup("PIM");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Reader='Reader']
        */
        IAdaptiveRPGroup.Reader = new IAdaptiveRPGroup("Reader");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Security='Security']
        */
        IAdaptiveRPGroup.Security = new IAdaptiveRPGroup("Security");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Sensor='Sensor']
        */
        IAdaptiveRPGroup.Sensor = new IAdaptiveRPGroup("Sensor");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Social='Social']
        */
        IAdaptiveRPGroup.Social = new IAdaptiveRPGroup("Social");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [System='System']
        */
        IAdaptiveRPGroup.System = new IAdaptiveRPGroup("System");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [UI='UI']
        */
        IAdaptiveRPGroup.UI = new IAdaptiveRPGroup("UI");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Util='Util']
        */
        IAdaptiveRPGroup.Util = new IAdaptiveRPGroup("Util");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Kernel='Kernel']
        */
        IAdaptiveRPGroup.Kernel = new IAdaptiveRPGroup("Kernel");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Unknown='Unknown']
        */
        IAdaptiveRPGroup.Unknown = new IAdaptiveRPGroup("Unknown");
        return IAdaptiveRPGroup;
    })();
    Adaptive.IAdaptiveRPGroup = IAdaptiveRPGroup;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IAdaptiveRPGroup.js.map