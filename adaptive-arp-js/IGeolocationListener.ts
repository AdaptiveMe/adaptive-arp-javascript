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

///<reference path="Geolocation.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseListener.ts"/>
///<reference path="IGeolocationListenerError.ts"/>
///<reference path="IGeolocationListenerWarning.ts"/>

module Adaptive {

     /**
        Interface for Managing the Geolocation results

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IGeolocationListener extends IBaseListener {
          /**
             No data received - error condition, not authorized or hardware not available.
             @param error Type of error encountered during reading.
             @since ARP1.0
          */
          onError(error:IGeolocationListenerError);
          /**
             Correct data received.
             @param geolocation Geolocation Bean
             @since ARP1.0
          */
          onResult(geolocation:Geolocation);
          /**
             Data received with warning - ie. HighDoP
             @param geolocation Geolocation Bean
             @param warning     Type of warning encountered during reading.
             @since ARP1.0
          */
          onWarning(geolocation:Geolocation, warning:IGeolocationListenerWarning);
     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/