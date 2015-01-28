/// <reference path="APIBean.d.ts" />
/// <reference path="IServiceType.d.ts" />
/// <reference path="ServiceEndpoint.d.ts" />
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
declare module Adaptive {
    /**
       @class Adaptive.Service
       @extends Adaptive.APIBean
       Represents an instance of a service.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    class Service extends APIBean {
        /**
           The type of the service
        */
        type: IServiceType;
        /**
           The service name
        */
        name: string;
        /**
           Endpoint of the service
        */
        serviceEndpoints: ServiceEndpoint[];
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.ServiceEndpoint[]} serviceEndpoints Endpoints of the service
           @param {string} name             Name of the service
           @param {Adaptive.IServiceType} type             Type of the service
           @since ARP1.0
        */
        constructor(serviceEndpoints: ServiceEndpoint[], name: string, type: IServiceType);
        /**
           @method
           Returns the type

           @return {Adaptive.IServiceType} type
           @since ARP1.0
        */
        getType(): IServiceType;
        /**
           @method
           Set the type

           @param {Adaptive.IServiceType} type Type of the service
           @since ARP1.0
        */
        setType(type: IServiceType): void;
        /**
           @method
           Returns the name

           @return {string} name
           @since ARP1.0
        */
        getName(): string;
        /**
           @method
           Set the name

           @param {string} name Name of the service
           @since ARP1.0
        */
        setName(name: string): void;
        /**
           @method
           Returns the serviceEndpoints

           @return {Adaptive.ServiceEndpoint[]} serviceEndpoints
           @since ARP1.0
        */
        getServiceEndpoints(): ServiceEndpoint[];
        /**
           @method
           Set the serviceEndpoints

           @param {Adaptive.ServiceEndpoint[]} serviceEndpoints Endpoint of the service
           @since ARP1.0
        */
        setServiceEndpoints(serviceEndpoints: ServiceEndpoint[]): void;
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.Service.
           @return {Adaptive.Service} Wrapped object instance.
        */
        static toObject(object: any): Service;
    }
}
