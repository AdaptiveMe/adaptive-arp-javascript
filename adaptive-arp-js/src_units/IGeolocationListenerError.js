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

    * @version v2.1.5

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var Adaptive;
(function (Adaptive) {
    /**
       @enum {Adaptive.IGeolocationListenerError} Adaptive.IGeolocationListenerError
       Enumeration IGeolocationListenerError
    */
    var IGeolocationListenerError = (function () {
        function IGeolocationListenerError(value) {
            this.value = value;
        }
        IGeolocationListenerError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IGeolocationListenerError}
        */
        IGeolocationListenerError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Disabled":
                        return IGeolocationListenerError.Disabled;
                    case "RestrictedAccess":
                        return IGeolocationListenerError.RestrictedAccess;
                    case "DeniedAccess":
                        return IGeolocationListenerError.DeniedAccess;
                    case "StatusNotDetermined":
                        return IGeolocationListenerError.StatusNotDetermined;
                    case "Unknown":
                        return IGeolocationListenerError.Unknown;
                    default:
                        return IGeolocationListenerError.Unknown;
                }
            }
            else {
                return IGeolocationListenerError.Unknown;
            }
        };
        /**
           @property {Adaptive.IGeolocationListenerError} [Disabled='Disabled']
        */
        IGeolocationListenerError.Disabled = new IGeolocationListenerError("Disabled");
        /**
           @property {Adaptive.IGeolocationListenerError} [RestrictedAccess='RestrictedAccess']
        */
        IGeolocationListenerError.RestrictedAccess = new IGeolocationListenerError("RestrictedAccess");
        /**
           @property {Adaptive.IGeolocationListenerError} [DeniedAccess='DeniedAccess']
        */
        IGeolocationListenerError.DeniedAccess = new IGeolocationListenerError("DeniedAccess");
        /**
           @property {Adaptive.IGeolocationListenerError} [StatusNotDetermined='StatusNotDetermined']
        */
        IGeolocationListenerError.StatusNotDetermined = new IGeolocationListenerError("StatusNotDetermined");
        /**
           @property {Adaptive.IGeolocationListenerError} [Unknown='Unknown']
        */
        IGeolocationListenerError.Unknown = new IGeolocationListenerError("Unknown");
        return IGeolocationListenerError;
    })();
    Adaptive.IGeolocationListenerError = IGeolocationListenerError;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IGeolocationListenerError.js.map