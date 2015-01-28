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
       @class Adaptive.ICapabilitiesSensor
       Enumeration ICapabilitiesSensor
    */
    var ICapabilitiesSensor = (function () {
        function ICapabilitiesSensor(value) {
            this.value = value;
        }
        ICapabilitiesSensor.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {ICapabilitiesSensor}
        */
        ICapabilitiesSensor.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Accelerometer":
                        return ICapabilitiesSensor.Accelerometer;
                    case "AmbientLight":
                        return ICapabilitiesSensor.AmbientLight;
                    case "Barometer":
                        return ICapabilitiesSensor.Barometer;
                    case "Geolocation":
                        return ICapabilitiesSensor.Geolocation;
                    case "Gyroscope":
                        return ICapabilitiesSensor.Gyroscope;
                    case "Magnetometer":
                        return ICapabilitiesSensor.Magnetometer;
                    case "Proximity":
                        return ICapabilitiesSensor.Proximity;
                    case "Unknown":
                        return ICapabilitiesSensor.Unknown;
                    default:
                        return ICapabilitiesSensor.Unknown;
                }
            }
            else {
                return ICapabilitiesSensor.Unknown;
            }
        };
        /**
           @enum [Adaptive.ICapabilitiesSensor.Accelerometer=Adaptive.ICapabilitiesSensor.*]
           @static
        */
        ICapabilitiesSensor.Accelerometer = new ICapabilitiesSensor("Accelerometer");
        /**
           @enum [Adaptive.ICapabilitiesSensor.AmbientLight=Adaptive.ICapabilitiesSensor.*]
           @static
        */
        ICapabilitiesSensor.AmbientLight = new ICapabilitiesSensor("AmbientLight");
        /**
           @enum [Adaptive.ICapabilitiesSensor.Barometer=Adaptive.ICapabilitiesSensor.*]
           @static
        */
        ICapabilitiesSensor.Barometer = new ICapabilitiesSensor("Barometer");
        /**
           @enum [Adaptive.ICapabilitiesSensor.Geolocation=Adaptive.ICapabilitiesSensor.*]
           @static
        */
        ICapabilitiesSensor.Geolocation = new ICapabilitiesSensor("Geolocation");
        /**
           @enum [Adaptive.ICapabilitiesSensor.Gyroscope=Adaptive.ICapabilitiesSensor.*]
           @static
        */
        ICapabilitiesSensor.Gyroscope = new ICapabilitiesSensor("Gyroscope");
        /**
           @enum [Adaptive.ICapabilitiesSensor.Magnetometer=Adaptive.ICapabilitiesSensor.*]
           @static
        */
        ICapabilitiesSensor.Magnetometer = new ICapabilitiesSensor("Magnetometer");
        /**
           @enum [Adaptive.ICapabilitiesSensor.Proximity=Adaptive.ICapabilitiesSensor.*]
           @static
        */
        ICapabilitiesSensor.Proximity = new ICapabilitiesSensor("Proximity");
        /**
           @enum [Adaptive.ICapabilitiesSensor.Unknown=Adaptive.ICapabilitiesSensor.*]
           @static
        */
        ICapabilitiesSensor.Unknown = new ICapabilitiesSensor("Unknown");
        return ICapabilitiesSensor;
    })();
    Adaptive.ICapabilitiesSensor = ICapabilitiesSensor;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ICapabilitiesSensor.js.map