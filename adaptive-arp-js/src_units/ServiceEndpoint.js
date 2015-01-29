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

    * @version v2.1.0

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
///<reference path="IServiceCertificateValidation.ts"/>
///<reference path="ServicePath.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.ServiceEndpoint
       Structure representing a remote or local service access end-point.

       @author Aryslan
       @since v2.0
       @version 1.0
    */
    var ServiceEndpoint = (function () {
        /**
           @method constructor
           Constructor with parameters

           @param {string} hostURI Remote service hostURI
           @param {Adaptive.ServicePath[]} paths   Remote service Paths
           @since v2.0.6
        */
        function ServiceEndpoint(hostURI, paths) {
            this.hostURI = hostURI;
            this.paths = paths;
        }
        Object.defineProperty(ServiceEndpoint.prototype, "validationTypeProperty", {
            /**
               @property {Adaptive.IServiceCertificateValidation} validationTypeProperty
               Type of validation to be performed for SSL hosts. The 'validationTypeProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'validationType'.
            */
            get: function () {
                return this.validationType;
            },
            set: function (validationType) {
                this.validationType = validationType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceEndpoint.prototype, "hostURIProperty", {
            /**
               @property {string} hostURIProperty
               The remote service hostURI URI (alias or IP) composed of scheme://hostURI:port (http://hostURI:8080). The 'hostURIProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'hostURI'.
            */
            get: function () {
                return this.hostURI;
            },
            set: function (hostURI) {
                this.hostURI = hostURI;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceEndpoint.prototype, "pathsProperty", {
            /**
               @property {Adaptive.ServicePath[]} pathsProperty
               The remote service paths (to be added to the hostURI and port url). The 'pathsProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'paths'.
            */
            get: function () {
                return this.paths;
            },
            set: function (paths) {
                this.paths = paths;
            },
            enumerable: true,
            configurable: true
        });
        /**
           @method
           Gets the validation type for the certificate of a SSL host.

           @return {Adaptive.IServiceCertificateValidation} Type of validation.
           @since v2.0.6
        */
        ServiceEndpoint.prototype.getValidationType = function () {
            return this.validationType;
        };
        /**
           @method
           Sets the validation type for the certificate of a SSL host.

           @param {Adaptive.IServiceCertificateValidation} validationType Type of validation.
           @since v2.0.6
        */
        ServiceEndpoint.prototype.setValidationType = function (validationType) {
            this.validationType = validationType;
        };
        /**
           @method
           Returns the Remote service hostURI

           @return {string} Remote service hostURI
           @since v2.0
        */
        ServiceEndpoint.prototype.getHostURI = function () {
            return this.hostURI;
        };
        /**
           @method
           Set the Remote service hostURI

           @param {string} hostURI Remote service hostURI
           @since v2.0
        */
        ServiceEndpoint.prototype.setHostURI = function (hostURI) {
            this.hostURI = hostURI;
        };
        /**
           @method
           Returns the Remote service Paths

           @return {Adaptive.ServicePath[]} Remote service Paths
           @since v2.0
        */
        ServiceEndpoint.prototype.getPaths = function () {
            return this.paths;
        };
        /**
           @method
           Set the Remote service Paths

           @param {Adaptive.ServicePath[]} paths Remote service Paths
           @since v2.0
        */
        ServiceEndpoint.prototype.setPaths = function (paths) {
            this.paths = paths;
        };
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ServiceEndpoint.
           @return {Adaptive.ServiceEndpoint} Wrapped object instance.
        */
        ServiceEndpoint.toObject = function (object) {
            var result = new ServiceEndpoint(null, null);
            // Assign values to bean fields.
            if (object != null && object.validationType != null) {
                result.validationType = Adaptive.IServiceCertificateValidation.toObject(object.validationType);
            }
            else {
                result.validationType = Adaptive.IServiceCertificateValidation.toObject(null);
            }
            if (object != null && object.hostURI != null)
                result.hostURI = object.hostURI;
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
            return result;
        };
        return ServiceEndpoint;
    })();
    Adaptive.ServiceEndpoint = ServiceEndpoint;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ServiceEndpoint.js.map