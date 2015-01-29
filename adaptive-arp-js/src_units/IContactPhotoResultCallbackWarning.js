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
       @enum {Adaptive.IContactPhotoResultCallbackWarning} Adaptive.IContactPhotoResultCallbackWarning
       Enumeration IContactPhotoResultCallbackWarning
    */
    var IContactPhotoResultCallbackWarning = (function () {
        function IContactPhotoResultCallbackWarning(value) {
            this.value = value;
        }
        IContactPhotoResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactPhotoResultCallbackWarning}
        */
        IContactPhotoResultCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "LimitExceeded":
                        return IContactPhotoResultCallbackWarning.LimitExceeded;
                    case "No_Matches":
                        return IContactPhotoResultCallbackWarning.No_Matches;
                    case "Unknown":
                        return IContactPhotoResultCallbackWarning.Unknown;
                    default:
                        return IContactPhotoResultCallbackWarning.Unknown;
                }
            }
            else {
                return IContactPhotoResultCallbackWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IContactPhotoResultCallbackWarning} [LimitExceeded='LimitExceeded']
        */
        IContactPhotoResultCallbackWarning.LimitExceeded = new IContactPhotoResultCallbackWarning("LimitExceeded");
        /**
           @property {Adaptive.IContactPhotoResultCallbackWarning} [No_Matches='No_Matches']
        */
        IContactPhotoResultCallbackWarning.No_Matches = new IContactPhotoResultCallbackWarning("No_Matches");
        /**
           @property {Adaptive.IContactPhotoResultCallbackWarning} [Unknown='Unknown']
        */
        IContactPhotoResultCallbackWarning.Unknown = new IContactPhotoResultCallbackWarning("Unknown");
        return IContactPhotoResultCallbackWarning;
    })();
    Adaptive.IContactPhotoResultCallbackWarning = IContactPhotoResultCallbackWarning;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IContactPhotoResultCallbackWarning.js.map