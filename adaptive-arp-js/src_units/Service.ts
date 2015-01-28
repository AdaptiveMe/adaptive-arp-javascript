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

///<reference path="APIBean.ts"/>
///<reference path="IServiceType.ts"/>
///<reference path="ServiceEndpoint.ts"/>

module Adaptive {

     /**
        @class Adaptive.Service
        @extends Adaptive.APIBean
        Represents an instance of a service.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class Service extends APIBean {

          /**
             The type of the service
          */
          type : IServiceType;
          /**
             The service name
          */
          name : string;
          /**
             Endpoint of the service
          */
          serviceEndpoints : Array<ServiceEndpoint>;
          /**
             @method constructor
             Constructor used by the implementation

             @param {Adaptive.ServiceEndpoint[]} serviceEndpoints Endpoints of the service
             @param {string} name             Name of the service
             @param {Adaptive.IServiceType} type             Type of the service
             @since ARP1.0
          */
          constructor(serviceEndpoints: Array<ServiceEndpoint>, name: string, type: IServiceType) {
               super();
               this.serviceEndpoints = serviceEndpoints;
               this.name = name;
               this.type = type;
          }

          /**
             @method
             Returns the type

             @return {Adaptive.IServiceType} type
             @since ARP1.0
          */
          getType() : IServiceType {
               return this.type;
          }

          /**
             @method
             Set the type

             @param {Adaptive.IServiceType} type Type of the service
             @since ARP1.0
          */
          setType(type: IServiceType) {
               this.type = type;
          }

          /**
             @method
             Returns the name

             @return {string} name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             @method
             Set the name

             @param {string} name Name of the service
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             @method
             Returns the serviceEndpoints

             @return {Adaptive.ServiceEndpoint[]} serviceEndpoints
             @since ARP1.0
          */
          getServiceEndpoints() : Array<ServiceEndpoint> {
               return this.serviceEndpoints;
          }

          /**
             @method
             Set the serviceEndpoints

             @param {Adaptive.ServiceEndpoint[]} serviceEndpoints Endpoint of the service
             @since ARP1.0
          */
          setServiceEndpoints(serviceEndpoints: Array<ServiceEndpoint>) {
               this.serviceEndpoints = serviceEndpoints;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.Service.
             @return {Adaptive.Service} Wrapped object instance.
          */
          static toObject(object : any) : Service {
               var result : Service = new Service(null, null, null);

               // Assign values to bean fields.
               if (object != null && object.serviceEndpoints != null) {
                    result.serviceEndpoints = new Array<ServiceEndpoint>();
                    for(var i = 0; i < object.serviceEndpoints.length; i++) {
                         var __value__ = object.serviceEndpoints[i];
                         if (__value__ != null) {
                              result.serviceEndpoints.push(ServiceEndpoint.toObject(__value__));
                         } else {
                              result.serviceEndpoints.push(ServiceEndpoint.toObject(null));
                         }
                    }
               }
               if (object!=null && object.name!=null) result.name = object.name;
               if (object!=null && object.type!=null) {
                    result.type = IServiceType.toObject(object.type);
               } else {
                    result.type = IServiceType.toObject(null);
               }

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
