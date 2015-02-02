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

    * @version v2.1.2

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
///<reference path="BaseSystemBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseSystem.ts"/>
///<reference path="IOS.ts"/>
///<reference path="OSInfo.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.OSBridge
       @extends Adaptive.BaseSystemBridge
       Interface for Managing the OS operations

       @author Carlos Lozano Diez
       @since v2.0
    */
    var OSBridge = (function (_super) {
        __extends(OSBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function OSBridge() {
            _super.call(this);
        }
        /**
           @method
           Returns the OSInfo for the current operating system.

           @return {Adaptive.OSInfo} OSInfo with name, version and vendor of the OS.
           @since v2.0
        */
        OSBridge.prototype.getOSInfo = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new Adaptive.APIRequest("IOS", "getOSInfo", arParams, -1);
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.2");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = Adaptive.OSInfo.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'OSBridge.getOSInfo' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'OSBridge.getOSInfo' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'OSBridge.getOSInfo' request.");
            }
            return response;
        };
        return OSBridge;
    })(Adaptive.BaseSystemBridge);
    Adaptive.OSBridge = OSBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=OSBridge.js.map