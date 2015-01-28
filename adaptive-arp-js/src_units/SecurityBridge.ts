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

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

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
module Adaptive {

     /**
        @class Adaptive.SecurityBridge
        @extends Adaptive.BaseSecurityBridge
        Interface for Managing the Security operations

        @author Aryslan
        @since ARP1.0
     */
     export class SecurityBridge extends BaseSecurityBridge implements ISecurity {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Deletes from the device internal storage the entry/entries containing the specified key names.

             @param keys             Array with the key names to delete.
             @param publicAccessName The name of the shared internal storage object (if needed).
             @param callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          deleteSecureKeyValuePairs(keys : Array<string>, publicAccessName : string, callback : ISecurityResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(keys));
               arParams.push(JSON.stringify(publicAccessName));
               var apiRequest : APIRequest = new APIRequest("ISecurity","deleteSecureKeyValuePairs",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredSecurityResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredSecurityResultCallback.remove(""+callback.getId());
                              callback.onError(ISecurityResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'SecurityBridge.deleteSecureKeyValuePairs' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredSecurityResultCallback.remove(""+callback.getId());
                         callback.onError(ISecurityResultCallbackError.Unknown)
                         console.error("ERROR: 'SecurityBridge.deleteSecureKeyValuePairs' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredSecurityResultCallback.remove(""+callback.getId());
                    callback.onError(ISecurityResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'SecurityBridge.deleteSecureKeyValuePairs' request.");
               }
          }

          /**
             Retrieves from the device internal storage the entry/entries containing the specified key names.

             @param keys             Array with the key names to retrieve.
             @param publicAccessName The name of the shared internal storage object (if needed).
             @param callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          getSecureKeyValuePairs(keys : Array<string>, publicAccessName : string, callback : ISecurityResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(keys));
               arParams.push(JSON.stringify(publicAccessName));
               var apiRequest : APIRequest = new APIRequest("ISecurity","getSecureKeyValuePairs",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredSecurityResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredSecurityResultCallback.remove(""+callback.getId());
                              callback.onError(ISecurityResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'SecurityBridge.getSecureKeyValuePairs' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredSecurityResultCallback.remove(""+callback.getId());
                         callback.onError(ISecurityResultCallbackError.Unknown)
                         console.error("ERROR: 'SecurityBridge.getSecureKeyValuePairs' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredSecurityResultCallback.remove(""+callback.getId());
                    callback.onError(ISecurityResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'SecurityBridge.getSecureKeyValuePairs' request.");
               }
          }

          /**
             Returns if the device has been modified in anyhow

             @return {boolean} true if the device has been modified; false otherwise
             @since ARP1.0
          */
          isDeviceModified() : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("ISecurity","isDeviceModified",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
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
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'SecurityBridge.isDeviceModified' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'SecurityBridge.isDeviceModified' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'SecurityBridge.isDeviceModified' request.");
               }
               return response;
          }

          /**
             Stores in the device internal storage the specified item/s.

             @param keyValues        Array containing the items to store on the device internal memory.
             @param publicAccessName The name of the shared internal storage object (if needed).
             @param callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          setSecureKeyValuePairs(keyValues : Array<SecureKeyPair>, publicAccessName : string, callback : ISecurityResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(keyValues));
               arParams.push(JSON.stringify(publicAccessName));
               var apiRequest : APIRequest = new APIRequest("ISecurity","setSecureKeyValuePairs",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredSecurityResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredSecurityResultCallback.remove(""+callback.getId());
                              callback.onError(ISecurityResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'SecurityBridge.setSecureKeyValuePairs' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredSecurityResultCallback.remove(""+callback.getId());
                         callback.onError(ISecurityResultCallbackError.Unknown)
                         console.error("ERROR: 'SecurityBridge.setSecureKeyValuePairs' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredSecurityResultCallback.remove(""+callback.getId());
                    callback.onError(ISecurityResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'SecurityBridge.setSecureKeyValuePairs' request.");
               }
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
