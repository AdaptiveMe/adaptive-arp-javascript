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

module Adaptive {

     /**
        Enumeration INetworkReachabilityCallbackWarning
     */
     export class INetworkReachabilityCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static IncorrectScheme = new INetworkReachabilityCallbackWarning("IncorrectScheme");
          static NotSecure = new INetworkReachabilityCallbackWarning("NotSecure");
          static NotTrusted = new INetworkReachabilityCallbackWarning("NotTrusted");
          static Redirected = new INetworkReachabilityCallbackWarning("Redirected");
          static NotRegisteredService = new INetworkReachabilityCallbackWarning("NotRegisteredService");
          static Unknown = new INetworkReachabilityCallbackWarning("Unknown");

          /**
             Convert JSON parsed object to enumeration.
          */
          static toObject(object : any) : INetworkReachabilityCallbackWarning {
               switch(object.value) {
                    case "IncorrectScheme":
                         return INetworkReachabilityCallbackWarning.IncorrectScheme;
                    case "NotSecure":
                         return INetworkReachabilityCallbackWarning.NotSecure;
                    case "NotTrusted":
                         return INetworkReachabilityCallbackWarning.NotTrusted;
                    case "Redirected":
                         return INetworkReachabilityCallbackWarning.Redirected;
                    case "NotRegisteredService":
                         return INetworkReachabilityCallbackWarning.NotRegisteredService;
                    case "Unknown":
                         return INetworkReachabilityCallbackWarning.Unknown;
                    default:
                         return INetworkReachabilityCallbackWarning.Unknown;
               }
          }

     }
}