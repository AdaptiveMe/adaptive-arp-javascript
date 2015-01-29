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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIRequest.ts"/>
///<reference path="APIResponse.ts"/>
///<reference path="BaseSecurityBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseSecurity.ts"/>
///<reference path="ISecurity.ts"/>
///<reference path="ISecurityResultCallback.ts"/>
///<reference path="SecureKeyPair.ts"/>
///<reference path="SecurityResultCallback.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.SecurityBridge
       @extends Adaptive.BaseSecurityBridge
       Interface for Managing the Security operations

       @author Aryslan
       @since v2.0
    */
    var SecurityBridge = (function (_super) {
        __extends(SecurityBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function SecurityBridge() {
            _super.call(this);
        }
        /**
           @method
           Deletes from the device internal storage the entry/entries containing the specified key names.

           @param {string[]} keys keys             Array with the key names to delete.
           @param {string} publicAccessName publicAccessName The name of the shared internal storage object (if needed).
           @param {Adaptive.SecurityResultCallback} callback callback         callback to be executed upon function result.
           @since v2.0
        */
        SecurityBridge.prototype.deleteSecureKeyValuePairs = function (keys, publicAccessName, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(keys));
            arParams.push(JSON.stringify(publicAccessName));
            var apiRequest = new Adaptive.APIRequest("ISecurity", "deleteSecureKeyValuePairs", arParams, callback.getId());
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.0");
            // Add callback reference to local dictionary.
            Adaptive.registeredSecurityResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                        callback.onError(Adaptive.ISecurityResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'SecurityBridge.deleteSecureKeyValuePairs' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                    callback.onError(Adaptive.ISecurityResultCallbackError.Unknown);
                    console.error("ERROR: 'SecurityBridge.deleteSecureKeyValuePairs' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.ISecurityResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'SecurityBridge.deleteSecureKeyValuePairs' request.");
            }
        };
        /**
           @method
           Retrieves from the device internal storage the entry/entries containing the specified key names.

           @param {string[]} keys keys             Array with the key names to retrieve.
           @param {string} publicAccessName publicAccessName The name of the shared internal storage object (if needed).
           @param {Adaptive.SecurityResultCallback} callback callback         callback to be executed upon function result.
           @since v2.0
        */
        SecurityBridge.prototype.getSecureKeyValuePairs = function (keys, publicAccessName, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(keys));
            arParams.push(JSON.stringify(publicAccessName));
            var apiRequest = new Adaptive.APIRequest("ISecurity", "getSecureKeyValuePairs", arParams, callback.getId());
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.0");
            // Add callback reference to local dictionary.
            Adaptive.registeredSecurityResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                        callback.onError(Adaptive.ISecurityResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'SecurityBridge.getSecureKeyValuePairs' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                    callback.onError(Adaptive.ISecurityResultCallbackError.Unknown);
                    console.error("ERROR: 'SecurityBridge.getSecureKeyValuePairs' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.ISecurityResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'SecurityBridge.getSecureKeyValuePairs' request.");
            }
        };
        /**
           @method
           Returns if the device has been modified in anyhow

           @return {boolean} true if the device has been modified; false otherwise
           @since v2.0
        */
        SecurityBridge.prototype.isDeviceModified = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new Adaptive.APIRequest("ISecurity", "isDeviceModified", arParams, -1);
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.0");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'SecurityBridge.isDeviceModified' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'SecurityBridge.isDeviceModified' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'SecurityBridge.isDeviceModified' request.");
            }
            return response;
        };
        /**
           @method
           Stores in the device internal storage the specified item/s.

           @param {Adaptive.SecureKeyPair[]} keyValues keyValues        Array containing the items to store on the device internal memory.
           @param {string} publicAccessName publicAccessName The name of the shared internal storage object (if needed).
           @param {Adaptive.SecurityResultCallback} callback callback         callback to be executed upon function result.
           @since v2.0
        */
        SecurityBridge.prototype.setSecureKeyValuePairs = function (keyValues, publicAccessName, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(keyValues));
            arParams.push(JSON.stringify(publicAccessName));
            var apiRequest = new Adaptive.APIRequest("ISecurity", "setSecureKeyValuePairs", arParams, callback.getId());
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.0");
            // Add callback reference to local dictionary.
            Adaptive.registeredSecurityResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                        callback.onError(Adaptive.ISecurityResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'SecurityBridge.setSecureKeyValuePairs' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                    callback.onError(Adaptive.ISecurityResultCallbackError.Unknown);
                    console.error("ERROR: 'SecurityBridge.setSecureKeyValuePairs' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.ISecurityResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'SecurityBridge.setSecureKeyValuePairs' request.");
            }
        };
        return SecurityBridge;
    })(Adaptive.BaseSecurityBridge);
    Adaptive.SecurityBridge = SecurityBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=SecurityBridge.js.map