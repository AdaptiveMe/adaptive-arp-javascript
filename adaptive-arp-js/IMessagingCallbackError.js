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
       Enumeration IMessagingCallbackError
    */
    var IMessagingCallbackError = (function () {
        function IMessagingCallbackError(value) {
            this.value = value;
        }
        IMessagingCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           Convert JSON parsed object to enumeration.
        */
        IMessagingCallbackError.toObject = function (object) {
            switch (object.value) {
                case "SIMNotPresent":
                    return IMessagingCallbackError.SIMNotPresent;
                case "EmailAccountNotFound":
                    return IMessagingCallbackError.EmailAccountNotFound;
                case "NotSent":
                    return IMessagingCallbackError.NotSent;
                case "WrongParams":
                    return IMessagingCallbackError.WrongParams;
                case "NotSupported":
                    return IMessagingCallbackError.NotSupported;
                case "Unknown":
                    return IMessagingCallbackError.Unknown;
                default:
                    return IMessagingCallbackError.Unknown;
            }
        };
        IMessagingCallbackError.SIMNotPresent = new IMessagingCallbackError("SIMNotPresent");
        IMessagingCallbackError.EmailAccountNotFound = new IMessagingCallbackError("EmailAccountNotFound");
        IMessagingCallbackError.NotSent = new IMessagingCallbackError("NotSent");
        IMessagingCallbackError.WrongParams = new IMessagingCallbackError("WrongParams");
        IMessagingCallbackError.NotSupported = new IMessagingCallbackError("NotSupported");
        IMessagingCallbackError.Unknown = new IMessagingCallbackError("Unknown");
        return IMessagingCallbackError;
    })();
    Adaptive.IMessagingCallbackError = IMessagingCallbackError;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IMessagingCallbackError.js.map