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

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIBean.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.Geolocation
       @extends Adaptive.APIBean
       Structure representing the data a single geolocation reading.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Geolocation = (function (_super) {
        __extends(Geolocation, _super);
        /**
           @method constructor
           Constructor with parameters

           @param {number} latitude  Latitude of the measurement
           @param {number} longitude Longitude of the measurement
           @param {number} altitude  Altitude of the measurement
           @param {number} xDoP      Dilution of precision on the X measurement
           @param {number} yDoP      Dilution of precision on the Y measurement
           @param {number} timestamp Timestamp of the measurement
           @since ARP1.0
        */
        function Geolocation(latitude, longitude, altitude, xDoP, yDoP, timestamp) {
            _super.call(this);
            this.latitude = latitude;
            this.longitude = longitude;
            this.altitude = altitude;
            this.xDoP = xDoP;
            this.yDoP = yDoP;
            this.timestamp = timestamp;
        }
        /**
           @method
           Returns altitude in meters

           @return {number} Altitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.getAltitude = function () {
            return this.altitude;
        };
        /**
           @method
           Set altitude in meters

           @param {number} altitude Altitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.setAltitude = function (altitude) {
            this.altitude = altitude;
        };
        /**
           @method
           Returns the latitude in degrees

           @return {number} Latitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.getLatitude = function () {
            return this.latitude;
        };
        /**
           @method
           Set the latitude in degrees

           @param {number} latitude Latitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.setLatitude = function (latitude) {
            this.latitude = latitude;
        };
        /**
           @method
           Returns the longitude in degrees

           @return {number} Longitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.getLongitude = function () {
            return this.longitude;
        };
        /**
           @method
           Returns the latitude in degrees

           @param {number} longitude Longitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.setLongitude = function (longitude) {
            this.longitude = longitude;
        };
        /**
           @method
           Timestamp Getter

           @return {number} Timestamp
           @since ARP1.0
        */
        Geolocation.prototype.getTimestamp = function () {
            return this.timestamp;
        };
        /**
           @method
           Timestamp Setter

           @param {number} timestamp Timestamp
           @since ARP1.0
        */
        Geolocation.prototype.setTimestamp = function (timestamp) {
            this.timestamp = timestamp;
        };
        /**
           @method
           Gets Dilution of precision on the X measurement. Measured in meters.

           @return {number} xDoP Dilution of precision on the X measurement. Measured in meters.
        */
        Geolocation.prototype.getXDoP = function () {
            return this.xDoP;
        };
        /**
           @method
           Sets Dilution of precision on the X measurement. Measured in meters.

           @param {number} xDoP Dilution of precision on the X measurement. Measured in meters.
        */
        Geolocation.prototype.setXDoP = function (xDoP) {
            this.xDoP = xDoP;
        };
        /**
           @method
           Gets Dilution of precision on the Y measurement. Measured in meters.

           @return {number} yDoP Dilution of precision on the Y measurement. Measured in meters.
        */
        Geolocation.prototype.getYDoP = function () {
            return this.yDoP;
        };
        /**
           @method
           Sets Dilution of precision on the Y measurement. Measured in meters.

           @param {number} yDoP Dilution of precision on the Y measurement. Measured in meters.
        */
        Geolocation.prototype.setYDoP = function (yDoP) {
            this.yDoP = yDoP;
        };
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.Geolocation.
           @return {Adaptive.Geolocation} Wrapped object instance.
        */
        Geolocation.toObject = function (object) {
            var result = new Geolocation(null, null, null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.latitude != null)
                result.latitude = object.latitude;
            if (object != null && object.longitude != null)
                result.longitude = object.longitude;
            if (object != null && object.altitude != null)
                result.altitude = object.altitude;
            if (object != null && object.xDoP != null)
                result.xDoP = object.xDoP;
            if (object != null && object.yDoP != null)
                result.yDoP = object.yDoP;
            if (object != null && object.timestamp != null)
                result.timestamp = object.timestamp;
            return result;
        };
        return Geolocation;
    })(Adaptive.APIBean);
    Adaptive.Geolocation = Geolocation;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Geolocation.js.map