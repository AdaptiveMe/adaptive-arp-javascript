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
       @class Adaptive.IFileSystemSecurity
       Enumeration IFileSystemSecurity
    */
    var IFileSystemSecurity = (function () {
        function IFileSystemSecurity(value) {
            this.value = value;
        }
        IFileSystemSecurity.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {IFileSystemSecurity}
        */
        IFileSystemSecurity.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Default":
                        return IFileSystemSecurity.Default;
                    case "Protected":
                        return IFileSystemSecurity.Protected;
                    case "Encrypted":
                        return IFileSystemSecurity.Encrypted;
                    case "Unknown":
                        return IFileSystemSecurity.Unknown;
                    default:
                        return IFileSystemSecurity.Unknown;
                }
            }
            else {
                return IFileSystemSecurity.Unknown;
            }
        };
        /**
           @enum [Adaptive.IFileSystemSecurity.Default=Adaptive.IFileSystemSecurity.*]
           @static
        */
        IFileSystemSecurity.Default = new IFileSystemSecurity("Default");
        /**
           @enum [Adaptive.IFileSystemSecurity.Protected=Adaptive.IFileSystemSecurity.*]
           @static
        */
        IFileSystemSecurity.Protected = new IFileSystemSecurity("Protected");
        /**
           @enum [Adaptive.IFileSystemSecurity.Encrypted=Adaptive.IFileSystemSecurity.*]
           @static
        */
        IFileSystemSecurity.Encrypted = new IFileSystemSecurity("Encrypted");
        /**
           @enum [Adaptive.IFileSystemSecurity.Unknown=Adaptive.IFileSystemSecurity.*]
           @static
        */
        IFileSystemSecurity.Unknown = new IFileSystemSecurity("Unknown");
        return IFileSystemSecurity;
    })();
    Adaptive.IFileSystemSecurity = IFileSystemSecurity;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IFileSystemSecurity.js.map