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

    * @version v2.1.7

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
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseSystem.ts"/>
///<reference path="IRuntime.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.RuntimeBridge
       @extends Adaptive.BaseSystemBridge
       Interface for Managing the Runtime operations

       @author Carlos Lozano Diez
       @since v2.0
    */
    var RuntimeBridge = (function (_super) {
        __extends(RuntimeBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function RuntimeBridge() {
            _super.call(this);
        }
        /**
           @method
           Dismiss the current Application

           @since v2.0
        */
        RuntimeBridge.prototype.dismissApplication = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new Adaptive.APIRequest("IRuntime", "dismissApplication", arParams, -1);
            apiRequest.setApiVersion("v2.1.7");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status === 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'RuntimeBridge.dismissApplication' request.");
            }
        };
        /**
           @method
           Whether the application dismiss the splash screen successfully or not

           @return {boolean} true if the application has dismissed the splash screen;false otherwise
           @since v2.0
        */
        RuntimeBridge.prototype.dismissSplashScreen = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new Adaptive.APIRequest("IRuntime", "dismissSplashScreen", arParams, -1);
            apiRequest.setApiVersion("v2.1.7");
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status === 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText !== '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() === 200) {
                        response = JSON.parse(apiResponse.getResponse());
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'RuntimeBridge.dismissSplashScreen' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'RuntimeBridge.dismissSplashScreen' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'RuntimeBridge.dismissSplashScreen' request.");
            }
            return response;
        };
        return RuntimeBridge;
    })(Adaptive.BaseSystemBridge);
    Adaptive.RuntimeBridge = RuntimeBridge;
})(Adaptive || (Adaptive = {}));
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
//# sourceMappingURL=RuntimeBridge.js.map