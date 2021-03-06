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
///<reference path="APIRequest.ts"/>
///<reference path="APIResponse.ts"/>
///<reference path="IBaseListener.ts"/>
///<reference path="IBaseCallback.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @private
       @property {number} registeredCounter
       Global unique id for listeners and callbacks.
    */
    Adaptive.registeredCounter = 0;
    /**
       @private
       @property {string} bridgePath
       Base url used internally to POST and intercept JSON requests by the platform.
    */
    Adaptive.bridgePath = "https://adaptiveapp";
    if (window.hasOwnProperty("_emulatorBridgePath_")) {
        var emulatorBridgePath = window["_emulatorBridgePath_"];
        Adaptive.bridgePath = emulatorBridgePath();
    }
    /**
       @private
       @property {string} bridgeApiVersion
       The Adaptive Runtime Platform API specification version.
    */
    Adaptive.bridgeApiVersion = "v2.2.15";
    /**
       @private
       @class Adaptive.Dictionary
       Utility class for Dictionary type support.
    */
    var Dictionary = (function () {
        function Dictionary(init) {
            this._keys = new Array();
            this._values = new Array();
            for (var x = 0; x < init.length; x++) {
                this[init[x].key] = init[x].value;
                this._keys.push(init[x].key);
                this._values.push(init[x].value);
            }
        }
        Dictionary.prototype.add = function (key, value) {
            this[key] = value;
            this._keys.push(key);
            this._values.push(value);
        };
        Dictionary.prototype.remove = function (key) {
            var index = this._keys.indexOf(key, 0);
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            delete this[key];
        };
        Dictionary.prototype.removeAll = function () {
            this._keys = new Array();
            this._values = new Array();
        };
        Dictionary.prototype.keys = function () {
            return this._keys;
        };
        Dictionary.prototype.values = function () {
            return this._values;
        };
        Dictionary.prototype.containsKey = function (key) {
            if (typeof this[key] === "undefined") {
                return false;
            }
            return true;
        };
        Dictionary.prototype.toLookup = function () {
            return this;
        };
        return Dictionary;
    })();
    Adaptive.Dictionary = Dictionary;
    /**
       @private
       @param {Adaptive.APIRequest} apiRequest the request to be processed.
       @param {Adaptive.IBaseListener} listener to add or remove from the dictionary or null if removing all listeners.
       @param {Adaptive.Dictionary} listenerDictionary dictionary of listeners for the operation.
       @since v2.1.10
       Send request for methods that manage listeners.
    */
    function postRequestListener(apiRequest, listener, listenerDictionary) {
        apiRequest.setApiVersion(Adaptive.bridgeApiVersion);
        var apiResponse = new Adaptive.APIResponse("", 200, "");
        // Create and send JSON request.
        var xhr = new XMLHttpRequest();
        xhr.open("POST", Adaptive.bridgePath, false);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        if (apiRequest.getMethodName().indexOf("add") > -1) {
            // Add listener reference to local dictionary.
            listenerDictionary.add("" + listener.getId(), listener);
        }
        if (typeof window['quirksMode'] !== "undefined") {
            xhr.setRequestHeader("Content-Body", JSON.stringify(apiRequest));
            xhr.send();
        }
        else {
            xhr.send(JSON.stringify(apiRequest));
        }
        // Check response.
        if (xhr.status === 200) {
            if (xhr.responseText != null && xhr.responseText !== '') {
                apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                if (apiResponse != null && apiResponse.getStatusCode() === 200) {
                    manageRequestListener(apiRequest, listener, listenerDictionary, false);
                }
                else {
                    manageRequestListener(apiRequest, listener, listenerDictionary, true);
                    console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in '" + apiRequest.getBridgeType() + "." + apiRequest.getMethodName() + "' [" + apiResponse.getStatusMessage() + "].");
                }
            }
            else {
                manageRequestListener(apiRequest, listener, listenerDictionary, true);
                console.error("ERROR: '" + apiRequest.getBridgeType() + "." + apiRequest.getMethodName() + "' incorrect response received.");
            }
        }
        else {
            manageRequestListener(apiRequest, listener, listenerDictionary, true);
            console.error("ERROR: " + xhr.status + " sending '" + apiRequest.getBridgeType() + "." + apiRequest.getMethodName() + "' request.");
        }
    }
    Adaptive.postRequestListener = postRequestListener;
    function manageRequestListener(apiRequest, listener, listenerDictionary, isError) {
        if (apiRequest.getMethodName().indexOf("remove") > -1 && apiRequest.getMethodName().indexOf("Listeners") === -1) {
            listenerDictionary.remove("" + listener.getId());
        }
        else if (apiRequest.getMethodName().indexOf("remove") > -1 && apiRequest.getMethodName().indexOf("Listeners") > -1) {
            listenerDictionary.removeAll();
        }
        else if (isError && apiRequest.getMethodName().indexOf("add") > -1) {
            listenerDictionary.remove("" + listener.getId());
        }
    }
    Adaptive.manageRequestListener = manageRequestListener;
    /**
       @private
       @param {Adaptive.APIRequest} apiRequest the request to be processed.
       @param {Adaptive.IBaseCallback} callback to receive responses.
       @param {Adaptive.Dictionary} callbackDictionary dictionary of callbacks for the operation.
       @since v2.1.10
       Send request for methods that use callbacks.
    */
    function postRequestCallback(apiRequest, callback, callbackDictionary) {
        apiRequest.setApiVersion(Adaptive.bridgeApiVersion);
        var apiResponse = new Adaptive.APIResponse("", 200, "");
        // Create and send JSON request.
        var xhr = new XMLHttpRequest();
        xhr.open("POST", Adaptive.bridgePath, false);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        // Add callback reference to local dictionary.
        callbackDictionary.add("" + callback.getId(), callback);
        if (typeof window['quirksMode'] !== "undefined") {
            xhr.setRequestHeader("Content-Body", JSON.stringify(apiRequest));
            xhr.send();
        }
        else {
            xhr.send(JSON.stringify(apiRequest));
        }
        // Check response.
        if (xhr.status === 200) {
            if (xhr.responseText != null && xhr.responseText !== '') {
                apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                if (apiResponse != null && apiResponse.getStatusCode() === 200) {
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    callbackDictionary.remove("" + callback.getId());
                    console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in '" + apiRequest.getBridgeType() + "." + apiRequest.getMethodName() + "' [" + apiResponse.getStatusMessage() + "].");
                }
            }
            else {
                // Remove callback reference from local dictionary due to invalid response.
                callbackDictionary.remove("" + callback.getId());
                console.error("ERROR: '" + apiRequest.getBridgeType() + "." + apiRequest.getMethodName() + "' incorrect response received.");
            }
        }
        else {
            // Unknown error - remove from dictionary.
            callbackDictionary.remove("" + callback.getId());
            console.error("ERROR: " + xhr.status + " sending '" + apiRequest.getBridgeType() + "." + apiRequest.getMethodName() + "' request.");
        }
    }
    Adaptive.postRequestCallback = postRequestCallback;
    /**
       @private
       @param {Adaptive.APIRequest} apiRequest the request to be processed.
       @return {Adaptive.APIResponse} Response to the request.
       @since v2.1.10
       Send request and receives responses synchronously.
    */
    function postRequest(apiRequest) {
        apiRequest.setApiVersion(Adaptive.bridgeApiVersion);
        var apiResponse = new Adaptive.APIResponse("", 200, "");
        // Create and send JSON request.
        var xhr = new XMLHttpRequest();
        xhr.open("POST", Adaptive.bridgePath, false);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        if (typeof window['quirksMode'] !== "undefined") {
            xhr.setRequestHeader("Content-Body", JSON.stringify(apiRequest));
            xhr.send();
        }
        else {
            xhr.send(JSON.stringify(apiRequest));
        }
        // Check response.
        if (xhr.status === 200) {
            if (xhr.responseText != null && xhr.responseText !== '') {
                apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                if (apiResponse != null && apiResponse.getStatusCode() !== 200) {
                    console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in '" + apiRequest.getBridgeType() + "." + apiRequest.getMethodName() + "' [" + apiResponse.getStatusMessage() + "].");
                }
            }
            else {
                apiResponse = new Adaptive.APIResponse("", 400, "");
                console.error("ERROR: '" + apiRequest.getBridgeType() + "." + apiRequest.getMethodName() + "' incorrect response received.");
            }
        }
        else {
            apiResponse = new Adaptive.APIResponse("", xhr.status, "");
            console.error("ERROR: " + xhr.status + " sending '" + apiRequest.getBridgeType() + "." + apiRequest.getMethodName() + "' request.");
        }
        return apiResponse;
    }
    Adaptive.postRequest = postRequest;
})(Adaptive || (Adaptive = {}));
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
//# sourceMappingURL=CommonUtil.js.map