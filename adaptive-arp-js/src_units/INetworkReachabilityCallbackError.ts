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

    * @version v2.0.5

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

module Adaptive {

     /**
        @enum {Adaptive.INetworkReachabilityCallbackError} Adaptive.INetworkReachabilityCallbackError
        Enumeration INetworkReachabilityCallbackError
     */
     export class INetworkReachabilityCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [Forbidden='Forbidden']
          */
          static Forbidden = new INetworkReachabilityCallbackError("Forbidden");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [NotFound='NotFound']
          */
          static NotFound = new INetworkReachabilityCallbackError("NotFound");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [MethodNotAllowed='MethodNotAllowed']
          */
          static MethodNotAllowed = new INetworkReachabilityCallbackError("MethodNotAllowed");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [NotAllowed='NotAllowed']
          */
          static NotAllowed = new INetworkReachabilityCallbackError("NotAllowed");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [NotAuthenticated='NotAuthenticated']
          */
          static NotAuthenticated = new INetworkReachabilityCallbackError("NotAuthenticated");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [TimeOut='TimeOut']
          */
          static TimeOut = new INetworkReachabilityCallbackError("TimeOut");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [NoResponse='NoResponse']
          */
          static NoResponse = new INetworkReachabilityCallbackError("NoResponse");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [Unreachable='Unreachable']
          */
          static Unreachable = new INetworkReachabilityCallbackError("Unreachable");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [Wrong_Params='Wrong_Params']
          */
          static Wrong_Params = new INetworkReachabilityCallbackError("Wrong_Params");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [MalformedUrl='MalformedUrl']
          */
          static MalformedUrl = new INetworkReachabilityCallbackError("MalformedUrl");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [DomainUnresolvable='DomainUnresolvable']
          */
          static DomainUnresolvable = new INetworkReachabilityCallbackError("DomainUnresolvable");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [Unknown='Unknown']
          */
          static Unknown = new INetworkReachabilityCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.INetworkReachabilityCallbackError}
          */
          static toObject(object : any) : INetworkReachabilityCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Forbidden":
                              return INetworkReachabilityCallbackError.Forbidden;
                         case "NotFound":
                              return INetworkReachabilityCallbackError.NotFound;
                         case "MethodNotAllowed":
                              return INetworkReachabilityCallbackError.MethodNotAllowed;
                         case "NotAllowed":
                              return INetworkReachabilityCallbackError.NotAllowed;
                         case "NotAuthenticated":
                              return INetworkReachabilityCallbackError.NotAuthenticated;
                         case "TimeOut":
                              return INetworkReachabilityCallbackError.TimeOut;
                         case "NoResponse":
                              return INetworkReachabilityCallbackError.NoResponse;
                         case "Unreachable":
                              return INetworkReachabilityCallbackError.Unreachable;
                         case "Wrong_Params":
                              return INetworkReachabilityCallbackError.Wrong_Params;
                         case "MalformedUrl":
                              return INetworkReachabilityCallbackError.MalformedUrl;
                         case "DomainUnresolvable":
                              return INetworkReachabilityCallbackError.DomainUnresolvable;
                         case "Unknown":
                              return INetworkReachabilityCallbackError.Unknown;
                         default:
                              return INetworkReachabilityCallbackError.Unknown;
                    }
               } else {
                    return INetworkReachabilityCallbackError.Unknown;
               }
          }

     }
}
