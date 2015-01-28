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
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.APIRequest
       Structure representing a HTML5 request to the native API.

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    var APIRequest = (function () {
        /**
           @method constructor
           Constructor with all the parameters

           @param {string} bridgeType Name of the bridge to be invoked.
           @param {string} methodName Name of the method
           @param {string[]} parameters Array of parameters as JSON formatted strings.
           @param {number} asyncId    Id of callback or listener or zero if none for synchronous calls.
           @since ARP1.0
        */
        function APIRequest(bridgeType, methodName, parameters, asyncId) {
            this.bridgeType = bridgeType;
            this.methodName = methodName;
            this.parameters = parameters;
            this.asyncId = asyncId;
        }
        /**
           @method
           Returns the callback or listener id assigned to this request OR zero if there is no associated callback or
listener.

           @return {number} long with the unique id of the callback or listener, or zero if there is no associated async event.
        */
        APIRequest.prototype.getAsyncId = function () {
            return this.asyncId;
        };
        /**
           @method
           Sets the callback or listener id to the request.

           @param {number} asyncId The unique id of the callback or listener.
        */
        APIRequest.prototype.setAsyncId = function (asyncId) {
            this.asyncId = asyncId;
        };
        /**
           @method
           Bridge Type Getter

           @return {string} Bridge Type
           @since ARP1.0
        */
        APIRequest.prototype.getBridgeType = function () {
            return this.bridgeType;
        };
        /**
           @method
           Bridge Type Setter

           @param {string} bridgeType Bridge Type
           @since ARP1.0
        */
        APIRequest.prototype.setBridgeType = function (bridgeType) {
            this.bridgeType = bridgeType;
        };
        /**
           @method
           Method name Getter

           @return {string} Method name
           @since ARP1.0
        */
        APIRequest.prototype.getMethodName = function () {
            return this.methodName;
        };
        /**
           @method
           Method name Setter

           @param {string} methodName Method name
           @since ARP1.0
        */
        APIRequest.prototype.setMethodName = function (methodName) {
            this.methodName = methodName;
        };
        /**
           @method
           Parameters Getter

           @return {string[]} Parameters
           @since ARP1.0
        */
        APIRequest.prototype.getParameters = function () {
            return this.parameters;
        };
        /**
           @method
           Parameters Setter

           @param {string[]} parameters Parameters, JSON formatted strings of objects.
           @since ARP1.0
        */
        APIRequest.prototype.setParameters = function (parameters) {
            this.parameters = parameters;
        };
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.APIRequest.
           @return {Adaptive.APIRequest} Wrapped object instance.
        */
        APIRequest.toObject = function (object) {
            var result = new APIRequest(null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.bridgeType != null)
                result.bridgeType = object.bridgeType;
            if (object != null && object.methodName != null)
                result.methodName = object.methodName;
            if (object != null && object.parameters != null) {
                result.parameters = new Array();
                for (var i = 0; i < object.parameters.length; i++) {
                    var __value__ = object.parameters[i];
                    if (__value__ != null)
                        result.parameters.push(__value__);
                }
            }
            if (object != null && object.asyncId != null)
                result.asyncId = object.asyncId;
            return result;
        };
        return APIRequest;
    })();
    Adaptive.APIRequest = APIRequest;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=APIRequest.js.map