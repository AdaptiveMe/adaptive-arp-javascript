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
       @enum {Adaptive.IContactFilter} Adaptive.IContactFilter
       Enumeration IContactFilter
    */
    var IContactFilter = (function () {
        function IContactFilter(value) {
            this.value = value;
        }
        IContactFilter.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactFilter}
        */
        IContactFilter.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "HAS_PHONE":
                        return IContactFilter.HAS_PHONE;
                    case "HAS_EMAIL":
                        return IContactFilter.HAS_EMAIL;
                    case "HAS_ADDRESS":
                        return IContactFilter.HAS_ADDRESS;
                    case "Unknown":
                        return IContactFilter.Unknown;
                    default:
                        return IContactFilter.Unknown;
                }
            }
            else {
                return IContactFilter.Unknown;
            }
        };
        /**
           @property {Adaptive.IContactFilter} [HAS_PHONE='HAS_PHONE']
        */
        IContactFilter.HAS_PHONE = new IContactFilter("HAS_PHONE");
        /**
           @property {Adaptive.IContactFilter} [HAS_EMAIL='HAS_EMAIL']
        */
        IContactFilter.HAS_EMAIL = new IContactFilter("HAS_EMAIL");
        /**
           @property {Adaptive.IContactFilter} [HAS_ADDRESS='HAS_ADDRESS']
        */
        IContactFilter.HAS_ADDRESS = new IContactFilter("HAS_ADDRESS");
        /**
           @property {Adaptive.IContactFilter} [Unknown='Unknown']
        */
        IContactFilter.Unknown = new IContactFilter("Unknown");
        return IContactFilter;
    })();
    Adaptive.IContactFilter = IContactFilter;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IContactFilter.js.map