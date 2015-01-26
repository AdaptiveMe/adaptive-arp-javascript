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
        Enumeration ICapabilitiesSensor
     */
     export class ICapabilitiesSensor {

          constructor(public value:string){}
          toString(){return this.value;}

          static Accelerometer = new ICapabilitiesSensor("Accelerometer");
          static AmbientLight = new ICapabilitiesSensor("AmbientLight");
          static Barometer = new ICapabilitiesSensor("Barometer");
          static Geolocation = new ICapabilitiesSensor("Geolocation");
          static Gyroscope = new ICapabilitiesSensor("Gyroscope");
          static Magnetometer = new ICapabilitiesSensor("Magnetometer");
          static Proximity = new ICapabilitiesSensor("Proximity");
          static Unknown = new ICapabilitiesSensor("Unknown");

          /**
             Convert JSON parsed object to enumeration.
          */
          static toObject(object : any) : ICapabilitiesSensor {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Accelerometer":
                              return ICapabilitiesSensor.Accelerometer;
                         case "AmbientLight":
                              return ICapabilitiesSensor.AmbientLight;
                         case "Barometer":
                              return ICapabilitiesSensor.Barometer;
                         case "Geolocation":
                              return ICapabilitiesSensor.Geolocation;
                         case "Gyroscope":
                              return ICapabilitiesSensor.Gyroscope;
                         case "Magnetometer":
                              return ICapabilitiesSensor.Magnetometer;
                         case "Proximity":
                              return ICapabilitiesSensor.Proximity;
                         case "Unknown":
                              return ICapabilitiesSensor.Unknown;
                         default:
                              return ICapabilitiesSensor.Unknown;
                    }
               } else {
                    return ICapabilitiesSensor.Unknown;
               }
          }

     }
}