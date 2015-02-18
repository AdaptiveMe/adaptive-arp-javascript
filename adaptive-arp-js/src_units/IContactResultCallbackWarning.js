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
       @enum {Adaptive.IContactResultCallbackWarning} Adaptive.IContactResultCallbackWarning
       Enumeration IContactResultCallbackWarning
    */
    var IContactResultCallbackWarning = (function () {
        function IContactResultCallbackWarning(value) {
            this.value = value;
        }
        IContactResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactResultCallbackWarning}
        */
        IContactResultCallbackWarning.toObject = function (object) {
            var retValue = IContactResultCallbackWarning.Unknown;
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "LimitExceeded":
                        retValue = IContactResultCallbackWarning.LimitExceeded;
                    case "No_Matches":
                        retValue = IContactResultCallbackWarning.No_Matches;
                    case "Unknown":
                        retValue = IContactResultCallbackWarning.Unknown;
                    default:
                        retValue = IContactResultCallbackWarning.Unknown;
                }
            }
            return retValue;
        };
        /**
           @property {Adaptive.IContactResultCallbackWarning} [LimitExceeded='LimitExceeded']
        */
        IContactResultCallbackWarning.LimitExceeded = new IContactResultCallbackWarning("LimitExceeded");
        /**
           @property {Adaptive.IContactResultCallbackWarning} [No_Matches='No_Matches']
        */
        IContactResultCallbackWarning.No_Matches = new IContactResultCallbackWarning("No_Matches");
        /**
           @property {Adaptive.IContactResultCallbackWarning} [Unknown='Unknown']
        */
        IContactResultCallbackWarning.Unknown = new IContactResultCallbackWarning("Unknown");
        return IContactResultCallbackWarning;
    })();
    Adaptive.IContactResultCallbackWarning = IContactResultCallbackWarning;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IContactResultCallbackWarning.js.map