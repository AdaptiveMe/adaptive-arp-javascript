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

    * @version v2.0.5

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       @enum {Adaptive.IServiceType} Adaptive.IServiceType
       Enumeration IServiceType
    */
    class IServiceType {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeAmfSerialization='ServiceTypeAmfSerialization']
        */
        static ServiceTypeAmfSerialization: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeGwtRpc='ServiceTypeGwtRpc']
        */
        static ServiceTypeGwtRpc: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeOctetBinary='ServiceTypeOctetBinary']
        */
        static ServiceTypeOctetBinary: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeRemotingSerialization='ServiceTypeRemotingSerialization']
        */
        static ServiceTypeRemotingSerialization: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeRestJson='ServiceTypeRestJson']
        */
        static ServiceTypeRestJson: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeRestXml='ServiceTypeRestXml']
        */
        static ServiceTypeRestXml: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeSoapJson='ServiceTypeSoapJson']
        */
        static ServiceTypeSoapJson: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeSoapXml='ServiceTypeSoapXml']
        */
        static ServiceTypeSoapXml: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeXmlRpcJson='ServiceTypeXmlRpcJson']
        */
        static ServiceTypeXmlRpcJson: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeXmlRpcXml='ServiceTypeXmlRpcXml']
        */
        static ServiceTypeXmlRpcXml: IServiceType;
        /**
           @property {Adaptive.IServiceType} [Unknown='Unknown']
        */
        static Unknown: IServiceType;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IServiceType}
        */
        static toObject(object: any): IServiceType;
    }
}
