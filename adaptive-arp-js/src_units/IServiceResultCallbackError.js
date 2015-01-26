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
       Enumeration IServiceResultCallbackError
    */
    var IServiceResultCallbackError = (function () {
        function IServiceResultCallbackError(value) {
            this.value = value;
        }
        IServiceResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           Convert JSON parsed object to enumeration.
        */
        IServiceResultCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Forbidden":
                        return IServiceResultCallbackError.Forbidden;
                    case "NotFound":
                        return IServiceResultCallbackError.NotFound;
                    case "MethodNotAllowed":
                        return IServiceResultCallbackError.MethodNotAllowed;
                    case "NotAllowed":
                        return IServiceResultCallbackError.NotAllowed;
                    case "NotAuthenticated":
                        return IServiceResultCallbackError.NotAuthenticated;
                    case "TimeOut":
                        return IServiceResultCallbackError.TimeOut;
                    case "NoResponse":
                        return IServiceResultCallbackError.NoResponse;
                    case "ServerError":
                        return IServiceResultCallbackError.ServerError;
                    case "Unreachable":
                        return IServiceResultCallbackError.Unreachable;
                    case "MalformedUrl":
                        return IServiceResultCallbackError.MalformedUrl;
                    case "NotRegisteredService":
                        return IServiceResultCallbackError.NotRegisteredService;
                    case "Unknown":
                        return IServiceResultCallbackError.Unknown;
                    default:
                        return IServiceResultCallbackError.Unknown;
                }
            }
            else {
                return IServiceResultCallbackError.Unknown;
            }
        };
        IServiceResultCallbackError.Forbidden = new IServiceResultCallbackError("Forbidden");
        IServiceResultCallbackError.NotFound = new IServiceResultCallbackError("NotFound");
        IServiceResultCallbackError.MethodNotAllowed = new IServiceResultCallbackError("MethodNotAllowed");
        IServiceResultCallbackError.NotAllowed = new IServiceResultCallbackError("NotAllowed");
        IServiceResultCallbackError.NotAuthenticated = new IServiceResultCallbackError("NotAuthenticated");
        IServiceResultCallbackError.TimeOut = new IServiceResultCallbackError("TimeOut");
        IServiceResultCallbackError.NoResponse = new IServiceResultCallbackError("NoResponse");
        IServiceResultCallbackError.ServerError = new IServiceResultCallbackError("ServerError");
        IServiceResultCallbackError.Unreachable = new IServiceResultCallbackError("Unreachable");
        IServiceResultCallbackError.MalformedUrl = new IServiceResultCallbackError("MalformedUrl");
        IServiceResultCallbackError.NotRegisteredService = new IServiceResultCallbackError("NotRegisteredService");
        IServiceResultCallbackError.Unknown = new IServiceResultCallbackError("Unknown");
        return IServiceResultCallbackError;
    })();
    Adaptive.IServiceResultCallbackError = IServiceResultCallbackError;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IServiceResultCallbackError.js.map