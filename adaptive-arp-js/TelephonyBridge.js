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

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIRequest.ts"/>
///<reference path="BaseCommunicationBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseCommunication.ts"/>
///<reference path="ITelephony.ts"/>
///<reference path="ITelephonyStatus.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Telephony operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    var TelephonyBridge = (function (_super) {
        __extends(TelephonyBridge, _super);
        /**
           Default constructor.
        */
        function TelephonyBridge() {
            _super.call(this);
        }
        /**
           Invoke a phone call

           @param number to call
           @return Status of the call
           @since ARP1.0
        */
        TelephonyBridge.prototype.call = function (number) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(number));
            var ar = new Adaptive.APIRequest("ITelephony", "call", arParams, -1);
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.send(JSON.stringify(ar));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    response = Adaptive.ITelephonyStatus.toObject(JSON.parse(xhr.responseText));
                }
                else {
                    console.error("ERROR: 'TelephonyBridge.call' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'TelephonyBridge.call' request.");
            }
            return response;
        };
        return TelephonyBridge;
    })(Adaptive.BaseCommunicationBridge);
    Adaptive.TelephonyBridge = TelephonyBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=TelephonyBridge.js.map