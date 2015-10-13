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

    * @version v2.2.15

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var Adaptive;
(function (Adaptive) {
    /**
       @enum {Adaptive.IContactPhotoResultCallbackError} Adaptive.IContactPhotoResultCallbackError
       Enumeration IContactPhotoResultCallbackError
    */
    var IContactPhotoResultCallbackError = (function () {
        function IContactPhotoResultCallbackError(value) {
            this.value = value;
        }
        IContactPhotoResultCallbackError.prototype.toString = function () { return this.value; };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactPhotoResultCallbackError}
        */
        IContactPhotoResultCallbackError.toObject = function (object) {
            var retValue = IContactPhotoResultCallbackError.Unknown;
            if (object != null && object.value != null && IContactPhotoResultCallbackError.hasOwnProperty(object.value)) {
                retValue = IContactPhotoResultCallbackError[object.value];
            }
            return retValue;
        };
        /**
           @property {Adaptive.IContactPhotoResultCallbackError} [NoPermission='NoPermission']
        */
        IContactPhotoResultCallbackError.NoPermission = new IContactPhotoResultCallbackError("NoPermission");
        /**
           @property {Adaptive.IContactPhotoResultCallbackError} [WrongParams='WrongParams']
        */
        IContactPhotoResultCallbackError.WrongParams = new IContactPhotoResultCallbackError("WrongParams");
        /**
           @property {Adaptive.IContactPhotoResultCallbackError} [NoPhoto='NoPhoto']
        */
        IContactPhotoResultCallbackError.NoPhoto = new IContactPhotoResultCallbackError("NoPhoto");
        /**
           @property {Adaptive.IContactPhotoResultCallbackError} [Unknown='Unknown']
        */
        IContactPhotoResultCallbackError.Unknown = new IContactPhotoResultCallbackError("Unknown");
        return IContactPhotoResultCallbackError;
    })();
    Adaptive.IContactPhotoResultCallbackError = IContactPhotoResultCallbackError;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IContactPhotoResultCallbackError.js.map