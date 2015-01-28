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
       @class Adaptive.IServiceResultCallbackWarning
       Enumeration IServiceResultCallbackWarning
    */
    var IServiceResultCallbackWarning = (function () {
        function IServiceResultCallbackWarning(value) {
            this.value = value;
        }
        IServiceResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {IServiceResultCallbackWarning}
        */
        IServiceResultCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "NotSecure":
                        return IServiceResultCallbackWarning.NotSecure;
                    case "NotTrusted":
                        return IServiceResultCallbackWarning.NotTrusted;
                    case "Redirected":
                        return IServiceResultCallbackWarning.Redirected;
                    case "Wrong_Params":
                        return IServiceResultCallbackWarning.Wrong_Params;
                    case "Unknown":
                        return IServiceResultCallbackWarning.Unknown;
                    default:
                        return IServiceResultCallbackWarning.Unknown;
                }
            }
            else {
                return IServiceResultCallbackWarning.Unknown;
            }
        };
        /**
           @enum [Adaptive.IServiceResultCallbackWarning.NotSecure=Adaptive.IServiceResultCallbackWarning.*]
           @static
        */
        IServiceResultCallbackWarning.NotSecure = new IServiceResultCallbackWarning("NotSecure");
        /**
           @enum [Adaptive.IServiceResultCallbackWarning.NotTrusted=Adaptive.IServiceResultCallbackWarning.*]
           @static
        */
        IServiceResultCallbackWarning.NotTrusted = new IServiceResultCallbackWarning("NotTrusted");
        /**
           @enum [Adaptive.IServiceResultCallbackWarning.Redirected=Adaptive.IServiceResultCallbackWarning.*]
           @static
        */
        IServiceResultCallbackWarning.Redirected = new IServiceResultCallbackWarning("Redirected");
        /**
           @enum [Adaptive.IServiceResultCallbackWarning.Wrong_Params=Adaptive.IServiceResultCallbackWarning.*]
           @static
        */
        IServiceResultCallbackWarning.Wrong_Params = new IServiceResultCallbackWarning("Wrong_Params");
        /**
           @enum [Adaptive.IServiceResultCallbackWarning.Unknown=Adaptive.IServiceResultCallbackWarning.*]
           @static
        */
        IServiceResultCallbackWarning.Unknown = new IServiceResultCallbackWarning("Unknown");
        return IServiceResultCallbackWarning;
    })();
    Adaptive.IServiceResultCallbackWarning = IServiceResultCallbackWarning;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IServiceResultCallbackWarning.js.map