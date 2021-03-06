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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="APIRequest.ts"/>
///<reference path="APIResponse.ts"/>
///<reference path="BaseCommunicationBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseCommunication.ts"/>
///<reference path="ISocket.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.SocketBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Socket operations

       @author Carlos Lozano Diez
       @since v2.0
    */
    var SocketBridge = (function (_super) {
        __extends(SocketBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function SocketBridge() {
            _super.call(this);
        }
        return SocketBridge;
    })(Adaptive.BaseCommunicationBridge);
    Adaptive.SocketBridge = SocketBridge;
})(Adaptive || (Adaptive = {}));
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
//# sourceMappingURL=SocketBridge.js.map