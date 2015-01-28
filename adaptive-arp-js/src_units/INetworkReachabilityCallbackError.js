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
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.INetworkReachabilityCallbackError
       Enumeration INetworkReachabilityCallbackError
    */
    var INetworkReachabilityCallbackError = (function () {
        function INetworkReachabilityCallbackError(value) {
            this.value = value;
        }
        INetworkReachabilityCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {INetworkReachabilityCallbackError}
        */
        INetworkReachabilityCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return INetworkReachabilityCallbackError.Unknown;
            }
        };
        /**
           @enum [Adaptive.INetworkReachabilityCallbackError.Forbidden=Adaptive.INetworkReachabilityCallbackError.*]
           @static
        */
        INetworkReachabilityCallbackError.Forbidden = new INetworkReachabilityCallbackError("Forbidden");
        /**
           @enum [Adaptive.INetworkReachabilityCallbackError.NotFound=Adaptive.INetworkReachabilityCallbackError.*]
           @static
        */
        INetworkReachabilityCallbackError.NotFound = new INetworkReachabilityCallbackError("NotFound");
        /**
           @enum [Adaptive.INetworkReachabilityCallbackError.MethodNotAllowed=Adaptive.INetworkReachabilityCallbackError.*]
           @static
        */
        INetworkReachabilityCallbackError.MethodNotAllowed = new INetworkReachabilityCallbackError("MethodNotAllowed");
        /**
           @enum [Adaptive.INetworkReachabilityCallbackError.NotAllowed=Adaptive.INetworkReachabilityCallbackError.*]
           @static
        */
        INetworkReachabilityCallbackError.NotAllowed = new INetworkReachabilityCallbackError("NotAllowed");
        /**
           @enum [Adaptive.INetworkReachabilityCallbackError.NotAuthenticated=Adaptive.INetworkReachabilityCallbackError.*]
           @static
        */
        INetworkReachabilityCallbackError.NotAuthenticated = new INetworkReachabilityCallbackError("NotAuthenticated");
        /**
           @enum [Adaptive.INetworkReachabilityCallbackError.TimeOut=Adaptive.INetworkReachabilityCallbackError.*]
           @static
        */
        INetworkReachabilityCallbackError.TimeOut = new INetworkReachabilityCallbackError("TimeOut");
        /**
           @enum [Adaptive.INetworkReachabilityCallbackError.NoResponse=Adaptive.INetworkReachabilityCallbackError.*]
           @static
        */
        INetworkReachabilityCallbackError.NoResponse = new INetworkReachabilityCallbackError("NoResponse");
        /**
           @enum [Adaptive.INetworkReachabilityCallbackError.Unreachable=Adaptive.INetworkReachabilityCallbackError.*]
           @static
        */
        INetworkReachabilityCallbackError.Unreachable = new INetworkReachabilityCallbackError("Unreachable");
        /**
           @enum [Adaptive.INetworkReachabilityCallbackError.Wrong_Params=Adaptive.INetworkReachabilityCallbackError.*]
           @static
        */
        INetworkReachabilityCallbackError.Wrong_Params = new INetworkReachabilityCallbackError("Wrong_Params");
        /**
           @enum [Adaptive.INetworkReachabilityCallbackError.MalformedUrl=Adaptive.INetworkReachabilityCallbackError.*]
           @static
        */
        INetworkReachabilityCallbackError.MalformedUrl = new INetworkReachabilityCallbackError("MalformedUrl");
        /**
           @enum [Adaptive.INetworkReachabilityCallbackError.DomainUnresolvable=Adaptive.INetworkReachabilityCallbackError.*]
           @static
        */
        INetworkReachabilityCallbackError.DomainUnresolvable = new INetworkReachabilityCallbackError("DomainUnresolvable");
        /**
           @enum [Adaptive.INetworkReachabilityCallbackError.Unknown=Adaptive.INetworkReachabilityCallbackError.*]
           @static
        */
        INetworkReachabilityCallbackError.Unknown = new INetworkReachabilityCallbackError("Unknown");
        return INetworkReachabilityCallbackError;
    })();
    Adaptive.INetworkReachabilityCallbackError = INetworkReachabilityCallbackError;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=INetworkReachabilityCallbackError.js.map