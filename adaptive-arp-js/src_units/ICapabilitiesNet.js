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
       @class Adaptive.ICapabilitiesNet
       Enumeration ICapabilitiesNet
    */
    var ICapabilitiesNet = (function () {
        function ICapabilitiesNet(value) {
            this.value = value;
        }
        ICapabilitiesNet.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {ICapabilitiesNet}
        */
        ICapabilitiesNet.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "GSM":
                        return ICapabilitiesNet.GSM;
                    case "GPRS":
                        return ICapabilitiesNet.GPRS;
                    case "HSDPA":
                        return ICapabilitiesNet.HSDPA;
                    case "LTE":
                        return ICapabilitiesNet.LTE;
                    case "WIFI":
                        return ICapabilitiesNet.WIFI;
                    case "Ethernet":
                        return ICapabilitiesNet.Ethernet;
                    case "Unavailable":
                        return ICapabilitiesNet.Unavailable;
                    case "Unknown":
                        return ICapabilitiesNet.Unknown;
                    default:
                        return ICapabilitiesNet.Unknown;
                }
            }
            else {
                return ICapabilitiesNet.Unknown;
            }
        };
        /**
           @enum [Adaptive.ICapabilitiesNet.GSM=Adaptive.ICapabilitiesNet.*]
           @static
        */
        ICapabilitiesNet.GSM = new ICapabilitiesNet("GSM");
        /**
           @enum [Adaptive.ICapabilitiesNet.GPRS=Adaptive.ICapabilitiesNet.*]
           @static
        */
        ICapabilitiesNet.GPRS = new ICapabilitiesNet("GPRS");
        /**
           @enum [Adaptive.ICapabilitiesNet.HSDPA=Adaptive.ICapabilitiesNet.*]
           @static
        */
        ICapabilitiesNet.HSDPA = new ICapabilitiesNet("HSDPA");
        /**
           @enum [Adaptive.ICapabilitiesNet.LTE=Adaptive.ICapabilitiesNet.*]
           @static
        */
        ICapabilitiesNet.LTE = new ICapabilitiesNet("LTE");
        /**
           @enum [Adaptive.ICapabilitiesNet.WIFI=Adaptive.ICapabilitiesNet.*]
           @static
        */
        ICapabilitiesNet.WIFI = new ICapabilitiesNet("WIFI");
        /**
           @enum [Adaptive.ICapabilitiesNet.Ethernet=Adaptive.ICapabilitiesNet.*]
           @static
        */
        ICapabilitiesNet.Ethernet = new ICapabilitiesNet("Ethernet");
        /**
           @enum [Adaptive.ICapabilitiesNet.Unavailable=Adaptive.ICapabilitiesNet.*]
           @static
        */
        ICapabilitiesNet.Unavailable = new ICapabilitiesNet("Unavailable");
        /**
           @enum [Adaptive.ICapabilitiesNet.Unknown=Adaptive.ICapabilitiesNet.*]
           @static
        */
        ICapabilitiesNet.Unknown = new ICapabilitiesNet("Unknown");
        return ICapabilitiesNet;
    })();
    Adaptive.ICapabilitiesNet = ICapabilitiesNet;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ICapabilitiesNet.js.map