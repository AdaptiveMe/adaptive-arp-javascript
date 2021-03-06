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

    * @version v2.2.15

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="APIBean.ts"/>
///<reference path="IServiceCertificateValidation.ts"/>
///<reference path="ServicePath.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.ServiceEndpoint
       @extends Adaptive.APIBean
       Structure representing a remote or local service access end-point.

       @author Aryslan
       @since v2.0
       @version 1.0
    */
    var ServiceEndpoint = (function (_super) {
        __extends(ServiceEndpoint, _super);
        /**
           @method constructor
           Constructor with parameters

           @param {string} hostURI Remote service hostURI
           @param {Adaptive.ServicePath[]} paths   Remote service Paths
           @since v2.0.6
        */
        function ServiceEndpoint(hostURI, paths) {
            _super.call(this);
            this.hostURI = hostURI;
            this.paths = paths;
        }
        Object.defineProperty(ServiceEndpoint.prototype, "validationTypeProperty", {
            /**
               @property {Adaptive.IServiceCertificateValidation} validationType
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
               @property {string} hostURI
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
               @property {Adaptive.ServicePath[]} paths
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
            if (object != null) {
                // Assign values to bean fields.
                result.validationType = Adaptive.IServiceCertificateValidation.toObject(object.validationType);
                result.hostURI = object.hostURI;
                result.paths = Adaptive.ServicePath.toObjectArray(object.paths);
            }
            return result;
        };
        /**
           @method
           @static
           Convert JSON parsed object array to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ServiceEndpoint[].
           @return {Adaptive.ServiceEndpoint[]} Wrapped object array instance.
        */
        ServiceEndpoint.toObjectArray = function (object) {
            var resultArray = new Array();
            if (object != null) {
                for (var i = 0; i < object.length; i++) {
                    resultArray.push(ServiceEndpoint.toObject(object[i]));
                }
            }
            return resultArray;
        };
        return ServiceEndpoint;
    })(Adaptive.APIBean);
    Adaptive.ServiceEndpoint = ServiceEndpoint;
})(Adaptive || (Adaptive = {}));
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
//# sourceMappingURL=ServiceEndpoint.js.map