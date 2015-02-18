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

    * @version v2.1.6

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

///<reference path="APIRequest.ts"/>
///<reference path="APIResponse.ts"/>
///<reference path="BaseCommunicationBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseCommunication.ts"/>
///<reference path="INetworkStatus.ts"/>
///<reference path="INetworkStatusListener.ts"/>
///<reference path="NetworkStatusListener.ts"/>
module Adaptive {

     /**
        @class Adaptive.NetworkStatusBridge
        @extends Adaptive.BaseCommunicationBridge
        Interface for Managing the Network status

        @author Carlos Lozano Diez
        @since v2.0
     */
     export class NetworkStatusBridge extends BaseCommunicationBridge implements INetworkStatus {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Add the listener for network status changes of the app

             @param {Adaptive.NetworkStatusListener} listener listener Listener with the result
             @since v2.0
          */
          addNetworkStatusListener(listener : INetworkStatusListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("INetworkStatus","addNetworkStatusListener",arParams, listener.getId());
               apiRequest.setApiVersion("v2.1.6");
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               // Add listener reference to local dictionary.
               registeredNetworkStatusListener.add(""+listener.getId(), listener);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove listener reference from local dictionary due to invalid response.
                              registeredNetworkStatusListener.remove(""+listener.getId());
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'NetworkStatusBridge.addNetworkStatusListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove listener reference from local dictionary due to invalid response.
                         registeredNetworkStatusListener.remove(""+listener.getId());
                         console.error("ERROR: 'NetworkStatusBridge.addNetworkStatusListener' incorrect response received.");
                    }
               } else {
                    // Remove listener reference from local dictionary due to invalid response.
                    registeredNetworkStatusListener.remove(""+listener.getId());
                    console.error("ERROR: "+xhr.status+" sending 'NetworkStatusBridge.addNetworkStatusListener' request.");
               }
          }

          /**
             @method
             Un-registers an existing listener from receiving network status events.

             @param {Adaptive.NetworkStatusListener} listener listener Listener with the result
             @since v2.0
          */
          removeNetworkStatusListener(listener : INetworkStatusListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("INetworkStatus","removeNetworkStatusListener",arParams, listener.getId());
               apiRequest.setApiVersion("v2.1.6");
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              // Remove listener reference from local dictionary.
                              registeredNetworkStatusListener.remove(""+listener.getId());
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'NetworkStatusBridge.removeNetworkStatusListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'NetworkStatusBridge.removeNetworkStatusListener' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'NetworkStatusBridge.removeNetworkStatusListener' request.");
               }
          }

          /**
             @method
             Removes all existing listeners from receiving network status events.

             @since v2.0
          */
          removeNetworkStatusListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("INetworkStatus","removeNetworkStatusListeners",arParams, -1 /* = synchronous call */);
               apiRequest.setApiVersion("v2.1.6");
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              // Remove all listeners references from local dictionary.
                              var keys = registeredNetworkStatusListener.keys();
                              for (var key in keys) {
                                   registeredNetworkStatusListener.remove(key);
                              }
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'NetworkStatusBridge.removeNetworkStatusListeners' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'NetworkStatusBridge.removeNetworkStatusListeners' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'NetworkStatusBridge.removeNetworkStatusListeners' request.");
               }
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
