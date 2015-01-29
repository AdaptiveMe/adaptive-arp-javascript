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

    * @version v2.1.1

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var Adaptive;
(function (Adaptive) {
    /**
       @enum {Adaptive.ICapabilitiesOrientation} Adaptive.ICapabilitiesOrientation
       Enumeration ICapabilitiesOrientation
    */
    var ICapabilitiesOrientation = (function () {
        function ICapabilitiesOrientation(value) {
            this.value = value;
        }
        ICapabilitiesOrientation.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesOrientation}
        */
        ICapabilitiesOrientation.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Portrait_Up":
                        return ICapabilitiesOrientation.Portrait_Up;
                    case "Portrait_Down":
                        return ICapabilitiesOrientation.Portrait_Down;
                    case "Landscape_Left":
                        return ICapabilitiesOrientation.Landscape_Left;
                    case "Landscape_Right":
                        return ICapabilitiesOrientation.Landscape_Right;
                    case "Unknown":
                        return ICapabilitiesOrientation.Unknown;
                    default:
                        return ICapabilitiesOrientation.Unknown;
                }
            }
            else {
                return ICapabilitiesOrientation.Unknown;
            }
        };
        /**
           @property {Adaptive.ICapabilitiesOrientation} [Portrait_Up='Portrait_Up']
        */
        ICapabilitiesOrientation.Portrait_Up = new ICapabilitiesOrientation("Portrait_Up");
        /**
           @property {Adaptive.ICapabilitiesOrientation} [Portrait_Down='Portrait_Down']
        */
        ICapabilitiesOrientation.Portrait_Down = new ICapabilitiesOrientation("Portrait_Down");
        /**
           @property {Adaptive.ICapabilitiesOrientation} [Landscape_Left='Landscape_Left']
        */
        ICapabilitiesOrientation.Landscape_Left = new ICapabilitiesOrientation("Landscape_Left");
        /**
           @property {Adaptive.ICapabilitiesOrientation} [Landscape_Right='Landscape_Right']
        */
        ICapabilitiesOrientation.Landscape_Right = new ICapabilitiesOrientation("Landscape_Right");
        /**
           @property {Adaptive.ICapabilitiesOrientation} [Unknown='Unknown']
        */
        ICapabilitiesOrientation.Unknown = new ICapabilitiesOrientation("Unknown");
        return ICapabilitiesOrientation;
    })();
    Adaptive.ICapabilitiesOrientation = ICapabilitiesOrientation;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ICapabilitiesOrientation.js.map