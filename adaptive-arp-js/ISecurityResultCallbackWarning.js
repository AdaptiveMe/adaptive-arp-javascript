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
       Enumeration ISecurityResultCallbackWarning
    */
    var ISecurityResultCallbackWarning = (function () {
        function ISecurityResultCallbackWarning(value) {
            this.value = value;
        }
        ISecurityResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           Convert JSON parsed object to enumeration.
        */
        ISecurityResultCallbackWarning.toObject = function (object) {
            switch (object.value) {
                case "EntryOverride":
                    return ISecurityResultCallbackWarning.EntryOverride;
                case "Unknown":
                    return ISecurityResultCallbackWarning.Unknown;
                default:
                    return ISecurityResultCallbackWarning.Unknown;
            }
        };
        ISecurityResultCallbackWarning.EntryOverride = new ISecurityResultCallbackWarning("EntryOverride");
        ISecurityResultCallbackWarning.Unknown = new ISecurityResultCallbackWarning("Unknown");
        return ISecurityResultCallbackWarning;
    })();
    Adaptive.ISecurityResultCallbackWarning = ISecurityResultCallbackWarning;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ISecurityResultCallbackWarning.js.map