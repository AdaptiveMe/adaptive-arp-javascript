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
///<reference path="ServicePath.ts"/>

module Adaptive {

     /**
        @class Adaptive.ServiceEndpoint
        @extends Adaptive.APIBean
        Structure representing a remote or local service access end-point.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class ServiceEndpoint extends APIBean {

          /**
             The remote service host (alias or IP).
          */
          host : string;
          /**
             The remote service paths (to be added to the host and port url).
          */
          paths : Array<ServicePath>;
          /**
             The remote service accessible port.
          */
          port : number;
          /**
             The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://<IP>:<Port>".
          */
          proxy : string;
          /**
             The remote service scheme.
          */
          scheme : string;
          /**
             @method constructor
             Constructor with parameters

             @param {string} host   Remote service host
             @param {Adaptive.ServicePath[]} paths  Remote service Paths
             @param {number} port   Remote service Port
             @param {string} proxy  Proxy url "http://IP_ADDRESS:PORT_NUMBER"
             @param {string} scheme Remote service scheme
             @since ARP1.0
          */
          constructor(host: string, paths: Array<ServicePath>, port: number, proxy: string, scheme: string) {
               super();
               this.host = host;
               this.paths = paths;
               this.port = port;
               this.proxy = proxy;
               this.scheme = scheme;
          }

          /**
             @method
             Returns the Remote service host

             @return {string} Remote service host
             @since ARP1.0
          */
          getHost() : string {
               return this.host;
          }

          /**
             @method
             Set the Remote service host

             @param {string} host Remote service host
             @since ARP1.0
          */
          setHost(host: string) {
               this.host = host;
          }

          /**
             @method
             Returns the Remote service Paths

             @return {Adaptive.ServicePath[]} Remote service Paths
             @since ARP1.0
          */
          getPaths() : Array<ServicePath> {
               return this.paths;
          }

          /**
             @method
             Set the Remote service Paths

             @param {Adaptive.ServicePath[]} paths Remote service Paths
             @since ARP1.0
          */
          setPaths(paths: Array<ServicePath>) {
               this.paths = paths;
          }

          /**
             @method
             Returns the Remote service Port

             @return {number} Remote service Port
             @since ARP1.0
          */
          getPort() : number {
               return this.port;
          }

          /**
             @method
             Set the Remote service Port

             @param {number} port Remote service Port
             @since ARP1.0
          */
          setPort(port: number) {
               this.port = port;
          }

          /**
             @method
             Return the Proxy url

             @return {string} Proxy url
             @since ARP1.0
          */
          getProxy() : string {
               return this.proxy;
          }

          /**
             @method
             Set the Proxy url

             @param {string} proxy Proxy url
             @since ARP1.0
          */
          setProxy(proxy: string) {
               this.proxy = proxy;
          }

          /**
             @method
             Returns the Remote service scheme

             @return {string} Remote service scheme
             @since ARP1.0
          */
          getScheme() : string {
               return this.scheme;
          }

          /**
             @method
             Set the Remote service scheme

             @param {string} scheme Remote service scheme
             @since ARP1.0
          */
          setScheme(scheme: string) {
               this.scheme = scheme;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ServiceEndpoint.
             @return {Adaptive.ServiceEndpoint} Wrapped object instance.
          */
          static toObject(object : any) : ServiceEndpoint {
               var result : ServiceEndpoint = new ServiceEndpoint(null, null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.host!=null) result.host = object.host;
               if (object != null && object.paths != null) {
                    result.paths = new Array<ServicePath>();
                    for(var i = 0; i < object.paths.length; i++) {
                         var __value__ = object.paths[i];
                         if (__value__ != null) {
                              result.paths.push(ServicePath.toObject(__value__));
                         } else {
                              result.paths.push(ServicePath.toObject(null));
                         }
                    }
               }
               if (object!=null && object.port!=null) result.port = object.port;
               if (object!=null && object.proxy!=null) result.proxy = object.proxy;
               if (object!=null && object.scheme!=null) result.scheme = object.scheme;

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/