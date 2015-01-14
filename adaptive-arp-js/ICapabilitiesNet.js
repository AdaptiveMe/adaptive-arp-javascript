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
           Convert JSON parsed object to enumeration.
        */
        ICapabilitiesNet.toObject = function (object) {
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
        };
        ICapabilitiesNet.GSM = new ICapabilitiesNet("GSM");
        ICapabilitiesNet.GPRS = new ICapabilitiesNet("GPRS");
        ICapabilitiesNet.HSDPA = new ICapabilitiesNet("HSDPA");
        ICapabilitiesNet.LTE = new ICapabilitiesNet("LTE");
        ICapabilitiesNet.WIFI = new ICapabilitiesNet("WIFI");
        ICapabilitiesNet.Ethernet = new ICapabilitiesNet("Ethernet");
        ICapabilitiesNet.Unavailable = new ICapabilitiesNet("Unavailable");
        ICapabilitiesNet.Unknown = new ICapabilitiesNet("Unknown");
        return ICapabilitiesNet;
    })();
    Adaptive.ICapabilitiesNet = ICapabilitiesNet;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ICapabilitiesNet.js.map