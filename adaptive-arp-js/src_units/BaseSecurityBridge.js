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
///<reference path="APIRequest.ts"/>
///<reference path="APIResponse.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRP.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseSecurity.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.BaseSecurityBridge
       Base application for Security purposes

       @author Carlos Lozano Diez
       @since v2.0
    */
    var BaseSecurityBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseSecurityBridge() {
            this.apiGroup = Adaptive.IAdaptiveRPGroup.Security;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseSecurityBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseSecurityBridge.prototype.getAPIVersion = function () {
            return Adaptive.bridgeApiVersion;
        };
        return BaseSecurityBridge;
    })();
    Adaptive.BaseSecurityBridge = BaseSecurityBridge;
})(Adaptive || (Adaptive = {}));
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
//# sourceMappingURL=BaseSecurityBridge.js.map