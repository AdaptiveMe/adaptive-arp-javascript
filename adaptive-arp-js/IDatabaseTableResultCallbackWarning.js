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
       Enumeration IDatabaseTableResultCallbackWarning
    */
    var IDatabaseTableResultCallbackWarning = (function () {
        function IDatabaseTableResultCallbackWarning(value) {
            this.value = value;
        }
        IDatabaseTableResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           Convert JSON parsed object to enumeration.
        */
        IDatabaseTableResultCallbackWarning.toObject = function (object) {
            switch (object.value) {
                case "TableExists":
                    return IDatabaseTableResultCallbackWarning.TableExists;
                case "TableLocked":
                    return IDatabaseTableResultCallbackWarning.TableLocked;
                case "NoResults":
                    return IDatabaseTableResultCallbackWarning.NoResults;
                case "Unknown":
                    return IDatabaseTableResultCallbackWarning.Unknown;
                default:
                    return IDatabaseTableResultCallbackWarning.Unknown;
            }
        };
        IDatabaseTableResultCallbackWarning.TableExists = new IDatabaseTableResultCallbackWarning("TableExists");
        IDatabaseTableResultCallbackWarning.TableLocked = new IDatabaseTableResultCallbackWarning("TableLocked");
        IDatabaseTableResultCallbackWarning.NoResults = new IDatabaseTableResultCallbackWarning("NoResults");
        IDatabaseTableResultCallbackWarning.Unknown = new IDatabaseTableResultCallbackWarning("Unknown");
        return IDatabaseTableResultCallbackWarning;
    })();
    Adaptive.IDatabaseTableResultCallbackWarning = IDatabaseTableResultCallbackWarning;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IDatabaseTableResultCallbackWarning.js.map