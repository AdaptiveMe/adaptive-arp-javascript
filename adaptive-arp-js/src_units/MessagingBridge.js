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
///<reference path="BasePIMBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBasePIM.ts"/>
///<reference path="IMessaging.ts"/>
///<reference path="IMessagingCallback.ts"/>
///<reference path="MessagingCallback.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.MessagingBridge
       @extends Adaptive.BasePIMBridge
       Interface for Managing the Messaging operations

       @author Francisco Javier Martin Bueno
       @since v2.0
    */
    var MessagingBridge = (function (_super) {
        __extends(MessagingBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function MessagingBridge() {
            _super.call(this);
        }
        /**
           @method
           Send text SMS

           @param {string} number number   to send
           @param {string} text text     to send
           @param {Adaptive.MessagingCallback} callback callback with the result
           @since v2.0
        */
        MessagingBridge.prototype.sendSMS = function (number, text, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(number));
            arParams.push(JSON.stringify(text));
            var apiRequest = new Adaptive.APIRequest("IMessaging", "sendSMS", arParams, callback.getId());
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.0");
            // Add callback reference to local dictionary.
            Adaptive.registeredMessagingCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredMessagingCallback.remove("" + callback.getId());
                        callback.onError(Adaptive.IMessagingCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'MessagingBridge.sendSMS' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredMessagingCallback.remove("" + callback.getId());
                    callback.onError(Adaptive.IMessagingCallbackError.Unknown);
                    console.error("ERROR: 'MessagingBridge.sendSMS' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredMessagingCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IMessagingCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'MessagingBridge.sendSMS' request.");
            }
        };
        return MessagingBridge;
    })(Adaptive.BasePIMBridge);
    Adaptive.MessagingBridge = MessagingBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=MessagingBridge.js.map