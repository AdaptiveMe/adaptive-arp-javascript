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
       @class Adaptive.LifecycleState
       Enumeration LifecycleState
    */
    var LifecycleState = (function () {
        function LifecycleState(value) {
            this.value = value;
        }
        LifecycleState.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {LifecycleState}
        */
        LifecycleState.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Starting":
                        return LifecycleState.Starting;
                    case "Started":
                        return LifecycleState.Started;
                    case "Running":
                        return LifecycleState.Running;
                    case "Pausing":
                        return LifecycleState.Pausing;
                    case "PausedIdle":
                        return LifecycleState.PausedIdle;
                    case "PausedRun":
                        return LifecycleState.PausedRun;
                    case "Resuming":
                        return LifecycleState.Resuming;
                    case "Stopping":
                        return LifecycleState.Stopping;
                    case "Unknown":
                        return LifecycleState.Unknown;
                    default:
                        return LifecycleState.Unknown;
                }
            }
            else {
                return LifecycleState.Unknown;
            }
        };
        /**
           @enum [Adaptive.LifecycleState.Starting=Adaptive.LifecycleState.*]
           @static
        */
        LifecycleState.Starting = new LifecycleState("Starting");
        /**
           @enum [Adaptive.LifecycleState.Started=Adaptive.LifecycleState.*]
           @static
        */
        LifecycleState.Started = new LifecycleState("Started");
        /**
           @enum [Adaptive.LifecycleState.Running=Adaptive.LifecycleState.*]
           @static
        */
        LifecycleState.Running = new LifecycleState("Running");
        /**
           @enum [Adaptive.LifecycleState.Pausing=Adaptive.LifecycleState.*]
           @static
        */
        LifecycleState.Pausing = new LifecycleState("Pausing");
        /**
           @enum [Adaptive.LifecycleState.PausedIdle=Adaptive.LifecycleState.*]
           @static
        */
        LifecycleState.PausedIdle = new LifecycleState("PausedIdle");
        /**
           @enum [Adaptive.LifecycleState.PausedRun=Adaptive.LifecycleState.*]
           @static
        */
        LifecycleState.PausedRun = new LifecycleState("PausedRun");
        /**
           @enum [Adaptive.LifecycleState.Resuming=Adaptive.LifecycleState.*]
           @static
        */
        LifecycleState.Resuming = new LifecycleState("Resuming");
        /**
           @enum [Adaptive.LifecycleState.Stopping=Adaptive.LifecycleState.*]
           @static
        */
        LifecycleState.Stopping = new LifecycleState("Stopping");
        /**
           @enum [Adaptive.LifecycleState.Unknown=Adaptive.LifecycleState.*]
           @static
        */
        LifecycleState.Unknown = new LifecycleState("Unknown");
        return LifecycleState;
    })();
    Adaptive.LifecycleState = LifecycleState;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=LifecycleState.js.map