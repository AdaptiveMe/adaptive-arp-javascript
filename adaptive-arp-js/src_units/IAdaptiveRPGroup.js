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
       @class Adaptive.IAdaptiveRPGroup
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
           @return {IAdaptiveRPGroup}
        */
        IAdaptiveRPGroup.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Application":
                        return IAdaptiveRPGroup.Application;
                    case "Commerce":
                        return IAdaptiveRPGroup.Commerce;
                    case "Communication":
                        return IAdaptiveRPGroup.Communication;
                    case "Data":
                        return IAdaptiveRPGroup.Data;
                    case "Media":
                        return IAdaptiveRPGroup.Media;
                    case "Notification":
                        return IAdaptiveRPGroup.Notification;
                    case "PIM":
                        return IAdaptiveRPGroup.PIM;
                    case "Reader":
                        return IAdaptiveRPGroup.Reader;
                    case "Security":
                        return IAdaptiveRPGroup.Security;
                    case "Sensor":
                        return IAdaptiveRPGroup.Sensor;
                    case "Social":
                        return IAdaptiveRPGroup.Social;
                    case "System":
                        return IAdaptiveRPGroup.System;
                    case "UI":
                        return IAdaptiveRPGroup.UI;
                    case "Util":
                        return IAdaptiveRPGroup.Util;
                    case "Kernel":
                        return IAdaptiveRPGroup.Kernel;
                    case "Unknown":
                        return IAdaptiveRPGroup.Unknown;
                    default:
                        return IAdaptiveRPGroup.Unknown;
                }
            }
            else {
                return IAdaptiveRPGroup.Unknown;
            }
        };
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Application=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.Application = new IAdaptiveRPGroup("Application");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Commerce=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.Commerce = new IAdaptiveRPGroup("Commerce");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Communication=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.Communication = new IAdaptiveRPGroup("Communication");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Data=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.Data = new IAdaptiveRPGroup("Data");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Media=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.Media = new IAdaptiveRPGroup("Media");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Notification=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.Notification = new IAdaptiveRPGroup("Notification");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.PIM=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.PIM = new IAdaptiveRPGroup("PIM");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Reader=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.Reader = new IAdaptiveRPGroup("Reader");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Security=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.Security = new IAdaptiveRPGroup("Security");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Sensor=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.Sensor = new IAdaptiveRPGroup("Sensor");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Social=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.Social = new IAdaptiveRPGroup("Social");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.System=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.System = new IAdaptiveRPGroup("System");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.UI=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.UI = new IAdaptiveRPGroup("UI");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Util=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.Util = new IAdaptiveRPGroup("Util");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Kernel=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.Kernel = new IAdaptiveRPGroup("Kernel");
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Unknown=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        IAdaptiveRPGroup.Unknown = new IAdaptiveRPGroup("Unknown");
        return IAdaptiveRPGroup;
    })();
    Adaptive.IAdaptiveRPGroup = IAdaptiveRPGroup;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IAdaptiveRPGroup.js.map