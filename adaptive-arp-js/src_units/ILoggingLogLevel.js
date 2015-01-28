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

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var Adaptive;
(function (Adaptive) {
    /**
       @enum {Adaptive.ILoggingLogLevel} Adaptive.ILoggingLogLevel
       Enumeration ILoggingLogLevel
    */
    var ILoggingLogLevel = (function () {
        function ILoggingLogLevel(value) {
            this.value = value;
        }
        ILoggingLogLevel.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ILoggingLogLevel}
        */
        ILoggingLogLevel.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "DEBUG":
                        return ILoggingLogLevel.DEBUG;
                    case "WARN":
                        return ILoggingLogLevel.WARN;
                    case "ERROR":
                        return ILoggingLogLevel.ERROR;
                    case "INFO":
                        return ILoggingLogLevel.INFO;
                    case "Unknown":
                        return ILoggingLogLevel.Unknown;
                    default:
                        return ILoggingLogLevel.Unknown;
                }
            }
            else {
                return ILoggingLogLevel.Unknown;
            }
        };
        /**
           @property {Adaptive.ILoggingLogLevel} [DEBUG='DEBUG']
        */
        ILoggingLogLevel.DEBUG = new ILoggingLogLevel("DEBUG");
        /**
           @property {Adaptive.ILoggingLogLevel} [WARN='WARN']
        */
        ILoggingLogLevel.WARN = new ILoggingLogLevel("WARN");
        /**
           @property {Adaptive.ILoggingLogLevel} [ERROR='ERROR']
        */
        ILoggingLogLevel.ERROR = new ILoggingLogLevel("ERROR");
        /**
           @property {Adaptive.ILoggingLogLevel} [INFO='INFO']
        */
        ILoggingLogLevel.INFO = new ILoggingLogLevel("INFO");
        /**
           @property {Adaptive.ILoggingLogLevel} [Unknown='Unknown']
        */
        ILoggingLogLevel.Unknown = new ILoggingLogLevel("Unknown");
        return ILoggingLogLevel;
    })();
    Adaptive.ILoggingLogLevel = ILoggingLogLevel;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ILoggingLogLevel.js.map