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
declare module Adaptive {
    /**
       @class Adaptive.IServiceType
       Enumeration IServiceType
    */
    class IServiceType {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @enum [Adaptive.IServiceType.ServiceTypeAmfSerialization=Adaptive.IServiceType.*]
           @static
        */
        static ServiceTypeAmfSerialization: IServiceType;
        /**
           @enum [Adaptive.IServiceType.ServiceTypeGwtRpc=Adaptive.IServiceType.*]
           @static
        */
        static ServiceTypeGwtRpc: IServiceType;
        /**
           @enum [Adaptive.IServiceType.ServiceTypeOctetBinary=Adaptive.IServiceType.*]
           @static
        */
        static ServiceTypeOctetBinary: IServiceType;
        /**
           @enum [Adaptive.IServiceType.ServiceTypeRemotingSerialization=Adaptive.IServiceType.*]
           @static
        */
        static ServiceTypeRemotingSerialization: IServiceType;
        /**
           @enum [Adaptive.IServiceType.ServiceTypeRestJson=Adaptive.IServiceType.*]
           @static
        */
        static ServiceTypeRestJson: IServiceType;
        /**
           @enum [Adaptive.IServiceType.ServiceTypeRestXml=Adaptive.IServiceType.*]
           @static
        */
        static ServiceTypeRestXml: IServiceType;
        /**
           @enum [Adaptive.IServiceType.ServiceTypeSoapJson=Adaptive.IServiceType.*]
           @static
        */
        static ServiceTypeSoapJson: IServiceType;
        /**
           @enum [Adaptive.IServiceType.ServiceTypeSoapXml=Adaptive.IServiceType.*]
           @static
        */
        static ServiceTypeSoapXml: IServiceType;
        /**
           @enum [Adaptive.IServiceType.ServiceTypeXmlRpcJson=Adaptive.IServiceType.*]
           @static
        */
        static ServiceTypeXmlRpcJson: IServiceType;
        /**
           @enum [Adaptive.IServiceType.ServiceTypeXmlRpcXml=Adaptive.IServiceType.*]
           @static
        */
        static ServiceTypeXmlRpcXml: IServiceType;
        /**
           @enum [Adaptive.IServiceType.Unknown=Adaptive.IServiceType.*]
           @static
        */
        static Unknown: IServiceType;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {IServiceType}
        */
        static toObject(object: any): IServiceType;
    }
}
