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
///<reference path="IOSType.ts"/>

module Adaptive {

     /**
        @class Adaptive.OSInfo
        @extends Adaptive.APIBean
        Represents the basic information about the operating system.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class OSInfo extends APIBean {

          /**
             The name of the operating system.
          */
          name : IOSType;
          /**
             The vendor of the operating system.
          */
          vendor : string;
          /**
             The version/identifier of the operating system.
          */
          version : string;
          /**
             @method constructor
             Constructor used by implementation to set the OS information.

             @param {Adaptive.IOSType} name    of the OS.
             @param {string} version of the OS.
             @param {string} vendor  of the OS.
             @since ARP1.0
          */
          constructor(name: IOSType, version: string, vendor: string) {
               super();
               this.name = name;
               this.version = version;
               this.vendor = vendor;
          }

          /**
             @method
             Returns the name of the operating system.

             @return {Adaptive.IOSType} OS name.
             @since ARP1.0
          */
          getName() : IOSType {
               return this.name;
          }

          /**
             @method
             Sets The name of the operating system.

             @param {Adaptive.IOSType} name The name of the operating system.
          */
          setName(name: IOSType) {
               this.name = name;
          }

          /**
             @method
             Returns the vendor of the operating system.

             @return {string} OS vendor.
             @since ARP1.0
          */
          getVendor() : string {
               return this.vendor;
          }

          /**
             @method
             Sets The vendor of the operating system.

             @param {string} vendor The vendor of the operating system.
          */
          setVendor(vendor: string) {
               this.vendor = vendor;
          }

          /**
             @method
             Returns the version of the operating system.

             @return {string} OS version.
             @since ARP1.0
          */
          getVersion() : string {
               return this.version;
          }

          /**
             @method
             Sets The version/identifier of the operating system.

             @param {string} version The version/identifier of the operating system.
          */
          setVersion(version: string) {
               this.version = version;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.OSInfo.
             @return {Adaptive.OSInfo} Wrapped object instance.
          */
          static toObject(object : any) : OSInfo {
               var result : OSInfo = new OSInfo(null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.name!=null) {
                    result.name = IOSType.toObject(object.name);
               } else {
                    result.name = IOSType.toObject(null);
               }
               if (object!=null && object.version!=null) result.version = object.version;
               if (object!=null && object.vendor!=null) result.vendor = object.vendor;

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
