/// <reference path="IAdaptiveRPGroup.d.ts" />
/// <reference path="IBaseListener.d.ts" />
/// <reference path="IDeviceOrientationListenerError.d.ts" />
/// <reference path="IDeviceOrientationListenerWarning.d.ts" />
/// <reference path="RotationEvent.d.ts" />
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
       Interface for handling device orientation change events.

       @author Carlos Lozano Diez
       @since ARP 2.0.5
       @version 1.0
    */
    /**
       @class Adaptive.IDeviceOrientationListener
    */
    interface IDeviceOrientationListener extends IBaseListener {
        /**
           @method
           Although extremely unlikely, this event will be fired if something beyond the control of the
platform impedes the rotation of the device.
           @param error The error condition... generally unknown as it is unexpected!
           @since ARP 2.0.5
        */
        onError(error: IDeviceOrientationListenerError): any;
        /**
           @method
           Event fired with the successful start and finish of a rotation.
           @param event RotationEvent containing origin, destination and state of the event.
           @since ARP 2.0.5
        */
        onResult(event: RotationEvent): any;
        /**
           @method
           Event fired with a warning when the rotation is aborted. In specific, this
event may be fired if the devices vetoes the rotation before rotation is completed.
           @param event   RotationEvent containing origin, destination and state of the event.
           @param warning Type of condition that aborted rotation execution.
           @since ARP 2.0.5
        */
        onWarning(event: RotationEvent, warning: IDeviceOrientationListenerWarning): any;
    }
}
