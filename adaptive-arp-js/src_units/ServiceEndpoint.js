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
///<reference path="ServicePath.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.ServiceEndpoint
       @extends Adaptive.APIBean
       Structure representing a remote or local service access end-point.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var ServiceEndpoint = (function (_super) {
        __extends(ServiceEndpoint, _super);
        /**
           @method constructor
           Constructor with parameters

           @param {string} host   Remote service host
           @param {Adaptive.ServicePath[]} paths  Remote service Paths
           @param {number} port   Remote service Port
           @param {string} proxy  Proxy url "http://IP_ADDRESS:PORT_NUMBER"
           @param {string} scheme Remote service scheme
           @since ARP1.0
        */
        function ServiceEndpoint(host, paths, port, proxy, scheme) {
            _super.call(this);
            this.host = host;
            this.paths = paths;
            this.port = port;
            this.proxy = proxy;
            this.scheme = scheme;
        }
        /**
           @method
           Returns the Remote service host

           @return {string} Remote service host
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getHost = function () {
            return this.host;
        };
        /**
           @method
           Set the Remote service host

           @param {string} host Remote service host
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setHost = function (host) {
            this.host = host;
        };
        /**
           @method
           Returns the Remote service Paths

           @return {Adaptive.ServicePath[]} Remote service Paths
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getPaths = function () {
            return this.paths;
        };
        /**
           @method
           Set the Remote service Paths

           @param {Adaptive.ServicePath[]} paths Remote service Paths
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setPaths = function (paths) {
            this.paths = paths;
        };
        /**
           @method
           Returns the Remote service Port

           @return {number} Remote service Port
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getPort = function () {
            return this.port;
        };
        /**
           @method
           Set the Remote service Port

           @param {number} port Remote service Port
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setPort = function (port) {
            this.port = port;
        };
        /**
           @method
           Return the Proxy url

           @return {string} Proxy url
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getProxy = function () {
            return this.proxy;
        };
        /**
           @method
           Set the Proxy url

           @param {string} proxy Proxy url
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setProxy = function (proxy) {
            this.proxy = proxy;
        };
        /**
           @method
           Returns the Remote service scheme

           @return {string} Remote service scheme
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getScheme = function () {
            return this.scheme;
        };
        /**
           @method
           Set the Remote service scheme

           @param {string} scheme Remote service scheme
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setScheme = function (scheme) {
            this.scheme = scheme;
        };
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ServiceEndpoint.
           @return {Adaptive.ServiceEndpoint} Wrapped object instance.
        */
        ServiceEndpoint.toObject = function (object) {
            var result = new ServiceEndpoint(null, null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.host != null)
                result.host = object.host;
            if (object != null && object.paths != null) {
                result.paths = new Array();
                for (var i = 0; i < object.paths.length; i++) {
                    var __value__ = object.paths[i];
                    if (__value__ != null) {
                        result.paths.push(Adaptive.ServicePath.toObject(__value__));
                    }
                    else {
                        result.paths.push(Adaptive.ServicePath.toObject(null));
                    }
                }
            }
            if (object != null && object.port != null)
                result.port = object.port;
            if (object != null && object.proxy != null)
                result.proxy = object.proxy;
            if (object != null && object.scheme != null)
                result.scheme = object.scheme;
            return result;
        };
        return ServiceEndpoint;
    })(Adaptive.APIBean);
    Adaptive.ServiceEndpoint = ServiceEndpoint;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ServiceEndpoint.js.map