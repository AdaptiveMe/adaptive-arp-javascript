/// <reference path="BaseListener.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="IDeviceOrientationListener.d.ts" />
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

    * @version v2.1.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       Interface for handling device orientation change events.
       Auto-generated implementation of IDeviceOrientationListener specification.
    */
    /**
       @property {Adaptive.Dictionary} registeredDeviceOrientationListener
       @member Adaptive
       @private
       DeviceOrientationListener control dictionary.
    */
    var registeredDeviceOrientationListener: Dictionary<IDeviceOrientationListener>;
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.IDeviceOrientationListenerError} error
    */
    function handleDeviceOrientationListenerError(id: number, error: IDeviceOrientationListenerError): void;
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.RotationEvent} rotationEvent
    */
    function handleDeviceOrientationListenerResult(id: number, rotationEvent: RotationEvent): void;
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.RotationEvent} rotationEvent
       @param {Adaptive.IDeviceOrientationListenerWarning} warning
    */
    function handleDeviceOrientationListenerWarning(id: number, rotationEvent: RotationEvent, warning: IDeviceOrientationListenerWarning): void;
    /**
       @class Adaptive.DeviceOrientationListener
       @extends Adaptive.BaseListener
    */
    class DeviceOrientationListener extends BaseListener implements IDeviceOrientationListener {
        /**
           @private
           @property
        */
        onErrorFunction: (error: IDeviceOrientationListenerError) => void;
        /**
           @private
           @property
        */
        onResultFunction: (rotationEvent: RotationEvent) => void;
        /**
           @private
           @property
        */
        onWarningFunction: (rotationEvent: RotationEvent, warning: IDeviceOrientationListenerWarning) => void;
        /**
           @method constructor
           Constructor with anonymous handler functions for listener.

           @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IDeviceOrientationListenerError
           @param {Function} onResultFunction Function receiving parameters of type: Adaptive.RotationEvent
           @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.RotationEvent, Adaptive.IDeviceOrientationListenerWarning
        */
        constructor(onErrorFunction: (error: IDeviceOrientationListenerError) => void, onResultFunction: (rotationEvent: RotationEvent) => void, onWarningFunction: (rotationEvent: RotationEvent, warning: IDeviceOrientationListenerWarning) => void);
        /**
           @method
           Although extremely unlikely, this event will be fired if something beyond the control of the
platform impedes the rotation of the device.
           @param {Adaptive.IDeviceOrientationListenerError} error error The error condition... generally unknown as it is unexpected!
           @since v2.0.5
        */
        onError(error: IDeviceOrientationListenerError): void;
        /**
           @method
           Event fired with the successful start and finish of a rotation.
           @param {Adaptive.RotationEvent} rotationEvent rotationEvent RotationEvent containing origin, destination and state of the event.
           @since v2.0.5
        */
        onResult(rotationEvent: RotationEvent): void;
        /**
           @method
           Event fired with a warning when the rotation is aborted. In specific, this
event may be fired if the devices vetoes the rotation before rotation is completed.
           @param {Adaptive.RotationEvent} rotationEvent rotationEvent   RotationEvent containing origin, destination and state of the event.
           @param {Adaptive.IDeviceOrientationListenerWarning} warning warning Type of condition that aborted rotation execution.
           @since v2.0.5
        */
        onWarning(rotationEvent: RotationEvent, warning: IDeviceOrientationListenerWarning): void;
    }
}
