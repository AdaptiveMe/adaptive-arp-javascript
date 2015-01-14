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

module Adaptive {

     /**
        Enumeration IServiceType
     */
     export class IServiceType {

          constructor(public value:string){}
          toString(){return this.value;}

          static ServiceTypeAmfSerialization = new IServiceType("ServiceTypeAmfSerialization");
          static ServiceTypeGwtRpc = new IServiceType("ServiceTypeGwtRpc");
          static ServiceTypeOctetBinary = new IServiceType("ServiceTypeOctetBinary");
          static ServiceTypeRemotingSerialization = new IServiceType("ServiceTypeRemotingSerialization");
          static ServiceTypeRestJson = new IServiceType("ServiceTypeRestJson");
          static ServiceTypeRestXml = new IServiceType("ServiceTypeRestXml");
          static ServiceTypeSoapJson = new IServiceType("ServiceTypeSoapJson");
          static ServiceTypeSoapXml = new IServiceType("ServiceTypeSoapXml");
          static ServiceTypeXmlRpcJson = new IServiceType("ServiceTypeXmlRpcJson");
          static ServiceTypeXmlRpcXml = new IServiceType("ServiceTypeXmlRpcXml");
          static Unknown = new IServiceType("Unknown");

          /**
             Convert JSON parsed object to enumeration.
          */
          static toObject(object : any) : IServiceType {
               switch(object.value) {
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

     }
}