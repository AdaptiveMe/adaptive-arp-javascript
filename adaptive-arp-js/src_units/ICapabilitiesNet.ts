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

    * @version v2.1.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

module Adaptive {

     /**
        @enum {Adaptive.ICapabilitiesNet} Adaptive.ICapabilitiesNet
        Enumeration ICapabilitiesNet
     */
     export class ICapabilitiesNet {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ICapabilitiesNet} [GSM='GSM']
          */
          static GSM = new ICapabilitiesNet("GSM");
          /**
             @property {Adaptive.ICapabilitiesNet} [GPRS='GPRS']
          */
          static GPRS = new ICapabilitiesNet("GPRS");
          /**
             @property {Adaptive.ICapabilitiesNet} [HSDPA='HSDPA']
          */
          static HSDPA = new ICapabilitiesNet("HSDPA");
          /**
             @property {Adaptive.ICapabilitiesNet} [LTE='LTE']
          */
          static LTE = new ICapabilitiesNet("LTE");
          /**
             @property {Adaptive.ICapabilitiesNet} [WIFI='WIFI']
          */
          static WIFI = new ICapabilitiesNet("WIFI");
          /**
             @property {Adaptive.ICapabilitiesNet} [Ethernet='Ethernet']
          */
          static Ethernet = new ICapabilitiesNet("Ethernet");
          /**
             @property {Adaptive.ICapabilitiesNet} [Unavailable='Unavailable']
          */
          static Unavailable = new ICapabilitiesNet("Unavailable");
          /**
             @property {Adaptive.ICapabilitiesNet} [Unknown='Unknown']
          */
          static Unknown = new ICapabilitiesNet("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ICapabilitiesNet}
          */
          static toObject(object : any) : ICapabilitiesNet {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "GSM":
                              return ICapabilitiesNet.GSM;
                         case "GPRS":
                              return ICapabilitiesNet.GPRS;
                         case "HSDPA":
                              return ICapabilitiesNet.HSDPA;
                         case "LTE":
                              return ICapabilitiesNet.LTE;
                         case "WIFI":
                              return ICapabilitiesNet.WIFI;
                         case "Ethernet":
                              return ICapabilitiesNet.Ethernet;
                         case "Unavailable":
                              return ICapabilitiesNet.Unavailable;
                         case "Unknown":
                              return ICapabilitiesNet.Unknown;
                         default:
                              return ICapabilitiesNet.Unknown;
                    }
               } else {
                    return ICapabilitiesNet.Unknown;
               }
          }

     }
}
