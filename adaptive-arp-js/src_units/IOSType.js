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
       Enumeration IOSType
    */
    var IOSType = (function () {
        function IOSType(value) {
            this.value = value;
        }
        IOSType.prototype.toString = function () {
            return this.value;
        };
        /**
           Convert JSON parsed object to enumeration.
        */
        IOSType.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "iOS":
                        return IOSType.iOS;
                    case "OSX":
                        return IOSType.OSX;
                    case "Windows":
                        return IOSType.Windows;
                    case "WindowsPhone":
                        return IOSType.WindowsPhone;
                    case "Android":
                        return IOSType.Android;
                    case "Linux":
                        return IOSType.Linux;
                    case "Blackberry":
                        return IOSType.Blackberry;
                    case "Tizen":
                        return IOSType.Tizen;
                    case "FirefoxOS":
                        return IOSType.FirefoxOS;
                    case "Chromium":
                        return IOSType.Chromium;
                    case "Unspecified":
                        return IOSType.Unspecified;
                    case "Unknown":
                        return IOSType.Unknown;
                    default:
                        return IOSType.Unknown;
                }
            }
            else {
                return IOSType.Unknown;
            }
        };
        IOSType.iOS = new IOSType("iOS");
        IOSType.OSX = new IOSType("OSX");
        IOSType.Windows = new IOSType("Windows");
        IOSType.WindowsPhone = new IOSType("WindowsPhone");
        IOSType.Android = new IOSType("Android");
        IOSType.Linux = new IOSType("Linux");
        IOSType.Blackberry = new IOSType("Blackberry");
        IOSType.Tizen = new IOSType("Tizen");
        IOSType.FirefoxOS = new IOSType("FirefoxOS");
        IOSType.Chromium = new IOSType("Chromium");
        IOSType.Unspecified = new IOSType("Unspecified");
        IOSType.Unknown = new IOSType("Unknown");
        return IOSType;
    })();
    Adaptive.IOSType = IOSType;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IOSType.js.map