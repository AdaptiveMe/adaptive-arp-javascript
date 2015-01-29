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

    * @version v2.1.0

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var Adaptive;
(function (Adaptive) {
    /**
       @enum {Adaptive.IContactResultCallbackError} Adaptive.IContactResultCallbackError
       Enumeration IContactResultCallbackError
    */
    var IContactResultCallbackError = (function () {
        function IContactResultCallbackError(value) {
            this.value = value;
        }
        IContactResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactResultCallbackError}
        */
        IContactResultCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "NoPermission":
                        return IContactResultCallbackError.NoPermission;
                    case "Wrong_Params":
                        return IContactResultCallbackError.Wrong_Params;
                    case "Unknown":
                        return IContactResultCallbackError.Unknown;
                    default:
                        return IContactResultCallbackError.Unknown;
                }
            }
            else {
                return IContactResultCallbackError.Unknown;
            }
        };
        /**
           @property {Adaptive.IContactResultCallbackError} [NoPermission='NoPermission']
        */
        IContactResultCallbackError.NoPermission = new IContactResultCallbackError("NoPermission");
        /**
           @property {Adaptive.IContactResultCallbackError} [Wrong_Params='Wrong_Params']
        */
        IContactResultCallbackError.Wrong_Params = new IContactResultCallbackError("Wrong_Params");
        /**
           @property {Adaptive.IContactResultCallbackError} [Unknown='Unknown']
        */
        IContactResultCallbackError.Unknown = new IContactResultCallbackError("Unknown");
        return IContactResultCallbackError;
    })();
    Adaptive.IContactResultCallbackError = IContactResultCallbackError;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IContactResultCallbackError.js.map