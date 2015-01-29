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

    * @version v2.0.6

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
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.ServiceToken
       @extends Adaptive.APIBean
       Object representing a specific service, path, function and invocation method for accessing external services.

       @author Carlos Lozano Diez
       @since v2.0.6
       @version 1.0
    */
    var ServiceToken = (function (_super) {
        __extends(ServiceToken, _super);
        /**
           @method constructor
           Convenience constructor.

           @param {string} serviceName      Name of the configured service.
           @param {string} endpointName     Name of the endpoint configured for the service.
           @param {string} functionName     Name of the function configured for the endpoint.
           @param {Adaptive.IServiceMethod} invocationMethod Method type configured for the function.
           @since v2.0.6
        */
        function ServiceToken(serviceName, endpointName, functionName, invocationMethod) {
            _super.call(this);
            this.serviceName = serviceName;
            this.endpointName = endpointName;
            this.functionName = functionName;
            this.invocationMethod = invocationMethod;
        }
        /**
           @method
           Get token's invocation method type.

           @return {Adaptive.IServiceMethod} Invocation method type.
           @since v2.0.6
        */
        ServiceToken.prototype.getInvocationMethod = function () {
            return this.invocationMethod;
        };
        /**
           @method
           Sets the invocation method type.

           @param {Adaptive.IServiceMethod} invocationMethod Method type.
           @since v2.0.6
        */
        ServiceToken.prototype.setInvocationMethod = function (invocationMethod) {
            this.invocationMethod = invocationMethod;
        };
        /**
           @method
           Get token's endpoint name.

           @return {string} Endpoint name.
           @since v2.0.6
        */
        ServiceToken.prototype.getEndpointName = function () {
            return this.endpointName;
        };
        /**
           @method
           Set the endpoint name.

           @param {string} endpointName Endpoint name.
           @since v2.0.6
        */
        ServiceToken.prototype.setEndpointName = function (endpointName) {
            this.endpointName = endpointName;
        };
        /**
           @method
           Get token's function name.

           @return {string} Function name.
           @since v2.0.6
        */
        ServiceToken.prototype.getFunctionName = function () {
            return this.functionName;
        };
        /**
           @method
           Sets the function name.

           @param {string} functionName Function name.
           @since v2.0.6
        */
        ServiceToken.prototype.setFunctionName = function (functionName) {
            this.functionName = functionName;
        };
        /**
           @method
           Get token's service name.

           @return {string} Service name.
           @since v2.0.6
        */
        ServiceToken.prototype.getServiceName = function () {
            return this.serviceName;
        };
        /**
           @method
           Sets token's service name.

           @param {string} serviceName Service name.
           @since v2.0.6
        */
        ServiceToken.prototype.setServiceName = function (serviceName) {
            this.serviceName = serviceName;
        };
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ServiceToken.
           @return {Adaptive.ServiceToken} Wrapped object instance.
        */
        ServiceToken.toObject = function (object) {
            var result = new ServiceToken(null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.serviceName != null)
                result.serviceName = object.serviceName;
            if (object != null && object.endpointName != null)
                result.endpointName = object.endpointName;
            if (object != null && object.functionName != null)
                result.functionName = object.functionName;
            if (object != null && object.invocationMethod != null) {
                result.invocationMethod = Adaptive.IServiceMethod.toObject(object.invocationMethod);
            }
            else {
                result.invocationMethod = Adaptive.IServiceMethod.toObject(null);
            }
            return result;
        };
        return ServiceToken;
    })(Adaptive.APIBean);
    Adaptive.ServiceToken = ServiceToken;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ServiceToken.js.map