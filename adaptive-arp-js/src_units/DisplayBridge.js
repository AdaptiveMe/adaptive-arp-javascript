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

    * @version v2.1.8

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } }
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIRequest.ts"/>
///<reference path="APIResponse.ts"/>
///<reference path="BaseSystemBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="DisplayOrientationListener.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseSystem.ts"/>
///<reference path="ICapabilitiesOrientation.ts"/>
///<reference path="IDisplay.ts"/>
///<reference path="IDisplayOrientationListener.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.DisplayBridge
       @extends Adaptive.BaseSystemBridge
       Interface for Managing the Display operations

       @author Carlos Lozano Diez
       @since v2.0
    */
    var DisplayBridge = (function (_super) {
        __extends(DisplayBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function DisplayBridge() {
            _super.call(this);
        }
        /**
           @method
           Add a listener to start receiving display orientation change events.

           @param {Adaptive.DisplayOrientationListener} listener listener Listener to add to receive orientation change events.
           @since v2.0.5
        */
        DisplayBridge.prototype.addDisplayOrientationListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new Adaptive.APIRequest("IDisplay", "addDisplayOrientationListener", arParams, listener.getId());
            apiRequest.setApiVersion("v2.1.8");
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            // Add listener reference to local dictionary.
            Adaptive.registeredDisplayOrientationListener.add("" + listener.getId(), listener);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status === 200) {
                if (xhr.responseText != null && xhr.responseText !== '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() === 200) {
                    }
                    else {
                        // Remove listener reference from local dictionary due to invalid response.
                        Adaptive.registeredDisplayOrientationListener.remove("" + listener.getId());
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DisplayBridge.addDisplayOrientationListener' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove listener reference from local dictionary due to invalid response.
                    Adaptive.registeredDisplayOrientationListener.remove("" + listener.getId());
                    console.error("ERROR: 'DisplayBridge.addDisplayOrientationListener' incorrect response received.");
                }
            }
            else {
                // Remove listener reference from local dictionary due to invalid response.
                Adaptive.registeredDisplayOrientationListener.remove("" + listener.getId());
                console.error("ERROR: " + xhr.status + " sending 'DisplayBridge.addDisplayOrientationListener' request.");
            }
        };
        /**
           @method
           Returns the current orientation of the display. Please note that this may be different from the orientation
of the device. For device orientation, use the IDevice APIs.

           @return {Adaptive.ICapabilitiesOrientation} The current orientation of the display.
           @since v2.0.5
        */
        DisplayBridge.prototype.getOrientationCurrent = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new Adaptive.APIRequest("IDisplay", "getOrientationCurrent", arParams, -1);
            apiRequest.setApiVersion("v2.1.8");
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status === 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText !== '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() === 200) {
                        response = Adaptive.ICapabilitiesOrientation.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DisplayBridge.getOrientationCurrent' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'DisplayBridge.getOrientationCurrent' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DisplayBridge.getOrientationCurrent' request.");
            }
            return response;
        };
        /**
           @method
           Remove a listener to stop receiving display orientation change events.

           @param {Adaptive.DisplayOrientationListener} listener listener Listener to remove from receiving orientation change events.
           @since v2.0.5
        */
        DisplayBridge.prototype.removeDisplayOrientationListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new Adaptive.APIRequest("IDisplay", "removeDisplayOrientationListener", arParams, listener.getId());
            apiRequest.setApiVersion("v2.1.8");
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status === 200) {
                if (xhr.responseText != null && xhr.responseText !== '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() === 200) {
                        // Remove listener reference from local dictionary.
                        Adaptive.registeredDisplayOrientationListener.remove("" + listener.getId());
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DisplayBridge.removeDisplayOrientationListener' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'DisplayBridge.removeDisplayOrientationListener' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DisplayBridge.removeDisplayOrientationListener' request.");
            }
        };
        /**
           @method
           Remove all listeners receiving display orientation events.

           @since v2.0.5
        */
        DisplayBridge.prototype.removeDisplayOrientationListeners = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new Adaptive.APIRequest("IDisplay", "removeDisplayOrientationListeners", arParams, -1);
            apiRequest.setApiVersion("v2.1.8");
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status === 200) {
                if (xhr.responseText != null && xhr.responseText !== '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() === 200) {
                        // Remove all listeners references from local dictionary.
                        Adaptive.registeredDisplayOrientationListener.removeAll();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DisplayBridge.removeDisplayOrientationListeners' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'DisplayBridge.removeDisplayOrientationListeners' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DisplayBridge.removeDisplayOrientationListeners' request.");
            }
        };
        return DisplayBridge;
    })(Adaptive.BaseSystemBridge);
    Adaptive.DisplayBridge = DisplayBridge;
})(Adaptive || (Adaptive = {}));
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
//# sourceMappingURL=DisplayBridge.js.map