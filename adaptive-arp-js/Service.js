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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIBean.ts"/>
///<reference path="IServiceMethod.ts"/>
///<reference path="IServiceType.ts"/>
///<reference path="ServiceEndpoint.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Represents an instance of a service.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var Service = (function (_super) {
        __extends(Service, _super);
        /**
           Constructor used by the implementation

           @param serviceEndpoint Endpoint of the service
           @param name            Name of the service
           @param method          Method of the service
           @param type            Type of the service
           @since ARP1.0
        */
        function Service(serviceEndpoint, name, method, type) {
            _super.call(this);
            this.serviceEndpoint = serviceEndpoint;
            this.name = name;
            this.method = method;
            this.type = type;
        }
        /**
           Returns the method

           @return method
           @since ARP1.0
        */
        Service.prototype.getMethod = function () {
            return this.method;
        };
        /**
           Set the method

           @param method Method of the service
           @since ARP1.0
        */
        Service.prototype.setMethod = function (method) {
            this.method = method;
        };
        /**
           Returns the type

           @return type
           @since ARP1.0
        */
        Service.prototype.getType = function () {
            return this.type;
        };
        /**
           Set the type

           @param type Type of the service
           @since ARP1.0
        */
        Service.prototype.setType = function (type) {
            this.type = type;
        };
        /**
           Returns the name

           @return name
           @since ARP1.0
        */
        Service.prototype.getName = function () {
            return this.name;
        };
        /**
           Set the name

           @param name Name of the service
           @since ARP1.0
        */
        Service.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Returns the serviceEndpoint

           @return serviceEndpoint
           @since ARP1.0
        */
        Service.prototype.getServiceEndpoint = function () {
            return this.serviceEndpoint;
        };
        /**
           Set the serviceEndpoint

           @param serviceEndpoint Endpoint of the service
           @since ARP1.0
        */
        Service.prototype.setServiceEndpoint = function (serviceEndpoint) {
            this.serviceEndpoint = serviceEndpoint;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        Service.toObject = function (object) {
            var result = new Service(null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.serviceEndpoint != null) {
                result.serviceEndpoint = Adaptive.ServiceEndpoint.toObject(object.serviceEndpoint);
            }
            else {
                result.serviceEndpoint = Adaptive.ServiceEndpoint.toObject(null);
            }
            if (object != null && object.name != null)
                result.name = object.name;
            if (object != null && object.method != null) {
                result.method = Adaptive.IServiceMethod.toObject(object.method);
            }
            else {
                result.method = Adaptive.IServiceMethod.toObject(null);
            }
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