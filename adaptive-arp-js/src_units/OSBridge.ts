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

    * @version v2.1.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

///<reference path="APIRequest.ts"/>
///<reference path="APIResponse.ts"/>
///<reference path="BaseSystemBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseSystem.ts"/>
///<reference path="IOS.ts"/>
///<reference path="OSInfo.ts"/>
module Adaptive {

     /**
        @class Adaptive.OSBridge
        @extends Adaptive.BaseSystemBridge
        Interface for Managing the OS operations

        @author Carlos Lozano Diez
        @since v2.0
     */
     export class OSBridge extends BaseSystemBridge implements IOS {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Returns the OSInfo for the current operating system.

             @return {Adaptive.OSInfo} OSInfo with name, version and vendor of the OS.
             @since v2.0
          */
          getOSInfo() : OSInfo {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IOS","getOSInfo",arParams, -1 /* = synchronous call */);
               apiRequest.setApiVersion("v2.1.3");
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : OSInfo = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = OSInfo.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'OSBridge.getOSInfo' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'OSBridge.getOSInfo' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'OSBridge.getOSInfo' request.");
               }
               return response;
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/