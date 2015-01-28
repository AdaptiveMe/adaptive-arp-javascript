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
       @class Adaptive.IServiceType
       Enumeration IServiceType
    */
    var IServiceType = (function () {
        function IServiceType(value) {
            this.value = value;
        }
        IServiceType.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {IServiceType}
        */
        IServiceType.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "ServiceTypeAmfSerialization":
                        return IServiceType.ServiceTypeAmfSerialization;
                    case "ServiceTypeGwtRpc":
                        return IServiceType.ServiceTypeGwtRpc;
                    case "ServiceTypeOctetBinary":
                        return IServiceType.ServiceTypeOctetBinary;
                    case "ServiceTypeRemotingSerialization":
                        return IServiceType.ServiceTypeRemotingSerialization;
                    case "ServiceTypeRestJson":
                        return IServiceType.ServiceTypeRestJson;
                    case "ServiceTypeRestXml":
                        return IServiceType.ServiceTypeRestXml;
                    case "ServiceTypeSoapJson":
                        return IServiceType.ServiceTypeSoapJson;
                    case "ServiceTypeSoapXml":
                        return IServiceType.ServiceTypeSoapXml;
                    case "ServiceTypeXmlRpcJson":
                        return IServiceType.ServiceTypeXmlRpcJson;
                    case "ServiceTypeXmlRpcXml":
                        return IServiceType.ServiceTypeXmlRpcXml;
                    case "Unknown":
                        return IServiceType.Unknown;
                    default:
                        return IServiceType.Unknown;
                }
            }
            else {
                return IServiceType.Unknown;
            }
        };
        /**
           @enum [Adaptive.IServiceType.ServiceTypeAmfSerialization=Adaptive.IServiceType.*]
           @static
        */
        IServiceType.ServiceTypeAmfSerialization = new IServiceType("ServiceTypeAmfSerialization");
        /**
           @enum [Adaptive.IServiceType.ServiceTypeGwtRpc=Adaptive.IServiceType.*]
           @static
        */
        IServiceType.ServiceTypeGwtRpc = new IServiceType("ServiceTypeGwtRpc");
        /**
           @enum [Adaptive.IServiceType.ServiceTypeOctetBinary=Adaptive.IServiceType.*]
           @static
        */
        IServiceType.ServiceTypeOctetBinary = new IServiceType("ServiceTypeOctetBinary");
        /**
           @enum [Adaptive.IServiceType.ServiceTypeRemotingSerialization=Adaptive.IServiceType.*]
           @static
        */
        IServiceType.ServiceTypeRemotingSerialization = new IServiceType("ServiceTypeRemotingSerialization");
        /**
           @enum [Adaptive.IServiceType.ServiceTypeRestJson=Adaptive.IServiceType.*]
           @static
        */
        IServiceType.ServiceTypeRestJson = new IServiceType("ServiceTypeRestJson");
        /**
           @enum [Adaptive.IServiceType.ServiceTypeRestXml=Adaptive.IServiceType.*]
           @static
        */
        IServiceType.ServiceTypeRestXml = new IServiceType("ServiceTypeRestXml");
        /**
           @enum [Adaptive.IServiceType.ServiceTypeSoapJson=Adaptive.IServiceType.*]
           @static
        */
        IServiceType.ServiceTypeSoapJson = new IServiceType("ServiceTypeSoapJson");
        /**
           @enum [Adaptive.IServiceType.ServiceTypeSoapXml=Adaptive.IServiceType.*]
           @static
        */
        IServiceType.ServiceTypeSoapXml = new IServiceType("ServiceTypeSoapXml");
        /**
           @enum [Adaptive.IServiceType.ServiceTypeXmlRpcJson=Adaptive.IServiceType.*]
           @static
        */
        IServiceType.ServiceTypeXmlRpcJson = new IServiceType("ServiceTypeXmlRpcJson");
        /**
           @enum [Adaptive.IServiceType.ServiceTypeXmlRpcXml=Adaptive.IServiceType.*]
           @static
        */
        IServiceType.ServiceTypeXmlRpcXml = new IServiceType("ServiceTypeXmlRpcXml");
        /**
           @enum [Adaptive.IServiceType.Unknown=Adaptive.IServiceType.*]
           @static
        */
        IServiceType.Unknown = new IServiceType("Unknown");
        return IServiceType;
    })();
    Adaptive.IServiceType = IServiceType;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=IServiceType.js.map