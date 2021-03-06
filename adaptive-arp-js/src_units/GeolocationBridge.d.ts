/// <reference path="APIRequest.d.ts" />
/// <reference path="APIResponse.d.ts" />
/// <reference path="BaseSensorBridge.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="GeolocationListener.d.ts" />
/// <reference path="IAdaptiveRPGroup.d.ts" />
/// <reference path="IBaseSensor.d.ts" />
/// <reference path="IGeolocation.d.ts" />
/// <reference path="IGeolocationListener.d.ts" />
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

    * @version v2.2.15

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       @class Adaptive.GeolocationBridge
       @extends Adaptive.BaseSensorBridge
       Interface for Managing the Geolocation operations

       @author Francisco Javier Martin Bueno
       @since v2.0
    */
    class GeolocationBridge extends BaseSensorBridge implements IGeolocation {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Register a new listener that will receive geolocation events.

           @param {Adaptive.GeolocationListener} listener listener to be registered.
           @since v2.0
        */
        addGeolocationListener(listener: IGeolocationListener): void;
        /**
           @method
           De-registers an existing listener from receiving geolocation events.

           @param {Adaptive.GeolocationListener} listener listener to be registered.
           @since v2.0
        */
        removeGeolocationListener(listener: IGeolocationListener): void;
        /**
           @method
           Removed all existing listeners from receiving geolocation events.

           @since v2.0
        */
        removeGeolocationListeners(): void;
    }
}
