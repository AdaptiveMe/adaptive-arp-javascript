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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIBean.ts"/>
///<reference path="LifecycleState.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Represents a specific application life-cycle stage.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Lifecycle = (function (_super) {
        __extends(Lifecycle, _super);
        /**
           Constructor used by the implementation

           @param state of the app
           @since ARP1.0
        */
        function Lifecycle(state) {
            _super.call(this);
            this.state = state;
        }
        /**
           Returns the state of the application

           @return state of the app
           @since ARP1.0
        */
        Lifecycle.prototype.getState = function () {
            return this.state;
        };
        /**
           Set the State of the application

           @param state of the app
           @since ARP1.0
        */
        Lifecycle.prototype.setState = function (state) {
            this.state = state;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        Lifecycle.toObject = function (object) {
            var result = new Lifecycle(null);
            // Assign values to bean fields.
            if (object != null && object.state != null) {
                result.state = Adaptive.LifecycleState.toObject(object.state);
            }
            else {
                result.state = Adaptive.LifecycleState.toObject(null);
            }
            return result;
        };
        return Lifecycle;
    })(Adaptive.APIBean);
    Adaptive.Lifecycle = Lifecycle;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Lifecycle.js.map