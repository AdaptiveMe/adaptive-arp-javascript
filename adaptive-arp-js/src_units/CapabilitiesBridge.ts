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

///<reference path="APIRequest.ts"/>
///<reference path="APIResponse.ts"/>
///<reference path="BaseSystemBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseSystem.ts"/>
///<reference path="ICapabilities.ts"/>
///<reference path="ICapabilitiesButton.ts"/>
///<reference path="ICapabilitiesCommunication.ts"/>
///<reference path="ICapabilitiesData.ts"/>
///<reference path="ICapabilitiesMedia.ts"/>
///<reference path="ICapabilitiesNet.ts"/>
///<reference path="ICapabilitiesNotification.ts"/>
///<reference path="ICapabilitiesOrientation.ts"/>
///<reference path="ICapabilitiesSensor.ts"/>
module Adaptive {

     /**
        @class Adaptive.CapabilitiesBridge
        @extends Adaptive.BaseSystemBridge
        Interface for testing the Capabilities operations

        @author Carlos Lozano Diez
        @since v2.0
     */
     export class CapabilitiesBridge extends BaseSystemBridge implements ICapabilities {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Obtains the default orientation of the device/display. If no default orientation is available on
the platform, this method will return the current orientation. To capture device or display orientation
changes please use the IDevice and IDisplay functions and listeners API respectively.

             @return {Adaptive.ICapabilitiesOrientation} The default orientation for the device/display.
             @since v2.0.5
          */
          getOrientationDefault() : ICapabilitiesOrientation {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("ICapabilities","getOrientationDefault",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.2");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : ICapabilitiesOrientation = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = ICapabilitiesOrientation.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.getOrientationDefault' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.getOrientationDefault' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.getOrientationDefault' request.");
               }
               return response;
          }

          /**
             @method
             Provides the device/display orientations supported by the platform. A platform will usually
support at least one orientation. This is usually PortaitUp.

             @return {Adaptive.ICapabilitiesOrientation[]} The orientations supported by the device/display of the platform.
             @since v2.0.5
          */
          getOrientationsSupported() : Array<ICapabilitiesOrientation> {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("ICapabilities","getOrientationsSupported",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.2");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : Array<ICapabilitiesOrientation> = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = new Array<ICapabilitiesOrientation>();
                              var responseArray : [any] = JSON.parse(apiResponse.getResponse());
                              for(var __key__ in responseArray) {
                                   response.push(ICapabilitiesOrientation.toObject(responseArray[__key__]));
                              }
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.getOrientationsSupported' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.getOrientationsSupported' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.getOrientationsSupported' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether a specific hardware button is supported for interaction.

             @param {Adaptive.ICapabilitiesButton} type type Type of feature to check.
             @return {boolean} true is supported, false otherwise.
             @since v2.0
          */
          hasButtonSupport(type : ICapabilitiesButton) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasButtonSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.2");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasButtonSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasButtonSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasButtonSupport' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether a specific Communication capability is supported by
the device.

             @param {Adaptive.ICapabilitiesCommunication} type type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since v2.0
          */
          hasCommunicationSupport(type : ICapabilitiesCommunication) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasCommunicationSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.2");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasCommunicationSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasCommunicationSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasCommunicationSupport' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether a specific Data capability is supported by the device.

             @param {Adaptive.ICapabilitiesData} type type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since v2.0
          */
          hasDataSupport(type : ICapabilitiesData) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasDataSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.2");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasDataSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasDataSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasDataSupport' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether a specific Media capability is supported by the
device.

             @param {Adaptive.ICapabilitiesMedia} type type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since v2.0
          */
          hasMediaSupport(type : ICapabilitiesMedia) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasMediaSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.2");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasMediaSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasMediaSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasMediaSupport' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether a specific Net capability is supported by the device.

             @param {Adaptive.ICapabilitiesNet} type type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since v2.0
          */
          hasNetSupport(type : ICapabilitiesNet) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasNetSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.2");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasNetSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasNetSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasNetSupport' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether a specific Notification capability is supported by the
device.

             @param {Adaptive.ICapabilitiesNotification} type type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since v2.0
          */
          hasNotificationSupport(type : ICapabilitiesNotification) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasNotificationSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.2");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasNotificationSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasNotificationSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasNotificationSupport' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether the device/display supports a given orientation.

             @param {Adaptive.ICapabilitiesOrientation} orientation orientation Orientation type.
             @return {boolean} True if the given orientation is supported, false otherwise.
             @since v2.0.5
          */
          hasOrientationSupport(orientation : ICapabilitiesOrientation) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(orientation));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasOrientationSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.2");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasOrientationSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasOrientationSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasOrientationSupport' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether a specific Sensor capability is supported by the
device.

             @param {Adaptive.ICapabilitiesSensor} type type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since v2.0
          */
          hasSensorSupport(type : ICapabilitiesSensor) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasSensorSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.1.2");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasSensorSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasSensorSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasSensorSupport' request.");
               }
               return response;
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
