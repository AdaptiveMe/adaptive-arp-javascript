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
///<reference path="IServiceType.ts"/>
///<reference path="ServiceEndpoint.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.Service
       @extends Adaptive.APIBean
       Represents an instance of a service.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var Service = (function (_super) {
        __extends(Service, _super);
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.ServiceEndpoint[]} serviceEndpoints Endpoints of the service
           @param {string} name             Name of the service
           @param {Adaptive.IServiceType} type             Type of the service
           @since ARP1.0
        */
        function Service(serviceEndpoints, name, type) {
            _super.call(this);
            this.serviceEndpoints = serviceEndpoints;
            this.name = name;
            this.type = type;
        }
        /**
           @method
           Returns the type

           @return {Adaptive.IServiceType} type
           @since ARP1.0
        */
        Service.prototype.getType = function () {
            return this.type;
        };
        /**
           @method
           Set the type

           @param {Adaptive.IServiceType} type Type of the service
           @since ARP1.0
        */
        Service.prototype.setType = function (type) {
            this.type = type;
        };
        /**
           @method
           Returns the name

           @return {string} name
           @since ARP1.0
        */
        Service.prototype.getName = function () {
            return this.name;
        };
        /**
           @method
           Set the name

           @param {string} name Name of the service
           @since ARP1.0
        */
        Service.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           @method
           Returns the serviceEndpoints

           @return {Adaptive.ServiceEndpoint[]} serviceEndpoints
           @since ARP1.0
        */
        Service.prototype.getServiceEndpoints = function () {
            return this.serviceEndpoints;
        };
        /**
           @method
           Set the serviceEndpoints

           @param {Adaptive.ServiceEndpoint[]} serviceEndpoints Endpoint of the service
           @since ARP1.0
        */
        Service.prototype.setServiceEndpoints = function (serviceEndpoints) {
            this.serviceEndpoints = serviceEndpoints;
        };
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.Service.
           @return {Adaptive.Service} Wrapped object instance.
        */
        Service.toObject = function (object) {
            var result = new Service(null, null, null);
            // Assign values to bean fields.
            if (object != null && object.serviceEndpoints != null) {
                result.serviceEndpoints = new Array();
                for (var i = 0; i < object.serviceEndpoints.length; i++) {
                    var __value__ = object.serviceEndpoints[i];
                    if (__value__ != null) {
                        result.serviceEndpoints.push(Adaptive.ServiceEndpoint.toObject(__value__));
                    }
                    else {
                        result.serviceEndpoints.push(Adaptive.ServiceEndpoint.toObject(null));
                    }
                }
            }
            if (object != null && object.name != null)
                result.name = object.name;
            if (object != null && object.type != null) {
                result.type = Adaptive.IServiceType.toObject(object.type);
            }
            else {
                result.type = Adaptive.IServiceType.toObject(null);
            }
            return result;
        };
        return Service;
    })(Adaptive.APIBean);
    Adaptive.Service = Service;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Service.js.map