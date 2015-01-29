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

    * @version v2.1.1

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var Adaptive;
(function (Adaptive) {
    /**
       @enum {Adaptive.ITelephonyStatus} Adaptive.ITelephonyStatus
       Enumeration ITelephonyStatus
    */
    var ITelephonyStatus = (function () {
        function ITelephonyStatus(value) {
            this.value = value;
        }
        ITelephonyStatus.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ITelephonyStatus}
        */
        ITelephonyStatus.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Dialing":
                        return ITelephonyStatus.Dialing;
                    case "Failed":
                        return ITelephonyStatus.Failed;
                    case "Unknown":
                        return ITelephonyStatus.Unknown;
                    default:
                        return ITelephonyStatus.Unknown;
                }
            }
            else {
                return ITelephonyStatus.Unknown;
            }
        };
        /**
           @property {Adaptive.ITelephonyStatus} [Dialing='Dialing']
        */
        ITelephonyStatus.Dialing = new ITelephonyStatus("Dialing");
        /**
           @property {Adaptive.ITelephonyStatus} [Failed='Failed']
        */
        ITelephonyStatus.Failed = new ITelephonyStatus("Failed");
        /**
           @property {Adaptive.ITelephonyStatus} [Unknown='Unknown']
        */
        ITelephonyStatus.Unknown = new ITelephonyStatus("Unknown");
        return ITelephonyStatus;
    })();
    Adaptive.ITelephonyStatus = ITelephonyStatus;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ITelephonyStatus.js.map