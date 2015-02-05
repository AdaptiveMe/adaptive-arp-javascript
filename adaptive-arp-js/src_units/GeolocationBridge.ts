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

    * @version v2.1.5

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

///<reference path="APIRequest.ts"/>
///<reference path="APIResponse.ts"/>
///<reference path="BaseSensorBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="GeolocationListener.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseSensor.ts"/>
///<reference path="IGeolocation.ts"/>
///<reference path="IGeolocationListener.ts"/>
module Adaptive {

     /**
        @class Adaptive.GeolocationBridge
        @extends Adaptive.BaseSensorBridge
        Interface for Managing the Geolocation operations

        @author Francisco Javier Martin Bueno
        @since v2.0
     */
     export class GeolocationBridge extends BaseSensorBridge implements IGeolocation {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Register a new listener that will receive geolocation events.

             @param {Adaptive.GeolocationListener} listener listener to be registered.
             @since v2.0
          */
          addGeolocationListener(listener : IGeolocationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IGeolocation","addGeolocationListener",arParams, listener.getId());
               apiRequest.setApiVersion("v2.1.5");
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               // Add listener reference to local dictionary.
               registeredGeolocationListener.add(""+listener.getId(), listener);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove listener reference from local dictionary due to invalid response.
                              registeredGeolocationListener.remove(""+listener.getId());
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'GeolocationBridge.addGeolocationListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove listener reference from local dictionary due to invalid response.
                         registeredGeolocationListener.remove(""+listener.getId());
                         console.error("ERROR: 'GeolocationBridge.addGeolocationListener' incorrect response received.");
                    }
               } else {
                    // Remove listener reference from local dictionary due to invalid response.
                    registeredGeolocationListener.remove(""+listener.getId());
                    console.error("ERROR: "+xhr.status+" sending 'GeolocationBridge.addGeolocationListener' request.");
               }
          }

          /**
             @method
             De-registers an existing listener from receiving geolocation events.

             @param {Adaptive.GeolocationListener} listener listener to be registered.
             @since v2.0
          */
          removeGeolocationListener(listener : IGeolocationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IGeolocation","removeGeolocationListener",arParams, listener.getId());
               apiRequest.setApiVersion("v2.1.5");
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
                              registeredGeolocationListener.remove(""+listener.getId());
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'GeolocationBridge.removeGeolocationListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'GeolocationBridge.removeGeolocationListener' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GeolocationBridge.removeGeolocationListener' request.");
               }
          }

          /**
             @method
             Removed all existing listeners from receiving geolocation events.

             @since v2.0
          */
          removeGeolocationListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IGeolocation","removeGeolocationListeners",arParams, -1 /* = synchronous call */);
               apiRequest.setApiVersion("v2.1.5");
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
                              var keys = registeredGeolocationListener.keys();
                              for (var key in keys) {
                                   registeredGeolocationListener.remove(key);
                              }
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'GeolocationBridge.removeGeolocationListeners' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'GeolocationBridge.removeGeolocationListeners' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GeolocationBridge.removeGeolocationListeners' request.");
               }
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
