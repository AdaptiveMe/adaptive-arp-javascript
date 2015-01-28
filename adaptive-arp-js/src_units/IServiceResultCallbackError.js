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
       @class Adaptive.IServiceResultCallbackError
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
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {IServiceResultCallbackError}
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
        /**
           @enum [Adaptive.IServiceResultCallbackError.Forbidden=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        IServiceResultCallbackError.Forbidden = new IServiceResultCallbackError("Forbidden");
        /**
           @enum [Adaptive.IServiceResultCallbackError.NotFound=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        IServiceResultCallbackError.NotFound = new IServiceResultCallbackError("NotFound");
        /**
           @enum [Adaptive.IServiceResultCallbackError.MethodNotAllowed=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        IServiceResultCallbackError.MethodNotAllowed = new IServiceResultCallbackError("MethodNotAllowed");
        /**
           @enum [Adaptive.IServiceResultCallbackError.NotAllowed=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        IServiceResultCallbackError.NotAllowed = new IServiceResultCallbackError("NotAllowed");
        /**
           @enum [Adaptive.IServiceResultCallbackError.NotAuthenticated=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        IServiceResultCallbackError.NotAuthenticated = new IServiceResultCallbackError("NotAuthenticated");
        /**
           @enum [Adaptive.IServiceResultCallbackError.TimeOut=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        IServiceResultCallbackError.TimeOut = new IServiceResultCallbackError("TimeOut");
        /**
           @enum [Adaptive.IServiceResultCallbackError.NoResponse=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        IServiceResultCallbackError.NoResponse = new IServiceResultCallbackError("NoResponse");
        /**
           @enum [Adaptive.IServiceResultCallbackError.ServerError=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        IServiceResultCallbackError.ServerError = new IServiceResultCallbackError("ServerError");
        /**
           @enum [Adaptive.IServiceResultCallbackError.Unreachable=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        IServiceResultCallbackError.Unreachable = new IServiceResultCallbackError("Unreachable");
        /**
           @enum [Adaptive.IServiceResultCallbackError.MalformedUrl=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        IServiceResultCallbackError.MalformedUrl = new IServiceResultCallbackError("MalformedUrl");
        /**
           @enum [Adaptive.IServiceResultCallbackError.NotRegisteredService=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        IServiceResultCallbackError.NotRegisteredService = new IServiceResultCallbackError("NotRegisteredService");
        /**
           @enum [Adaptive.IServiceResultCallbackError.Unknown=Adaptive.IServiceResultCallbackError.*]
           @static
        */
        IServiceResultCallbackError.Unknown = new IServiceResultCallbackError("Unknown");
        return IServiceResultCallbackError;
    })();
    Adaptive.IServiceResultCallbackError = IServiceResultCallbackError;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IServiceResultCallbackError.js.map