/// <reference path="APIRequest.d.ts" />
/// <reference path="APIResponse.d.ts" />
/// <reference path="BaseApplicationBridge.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="IAdaptiveRPGroup.d.ts" />
/// <reference path="IBaseApplication.d.ts" />
/// <reference path="ILifecycle.d.ts" />
/// <reference path="ILifecycleListener.d.ts" />
/// <reference path="LifecycleListener.d.ts" />
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

    * @version v2.1.0

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       @class Adaptive.LifecycleBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Managing the Lifecycle listeners

       @author Carlos Lozano Diez
       @since v2.0
    */
    class LifecycleBridge extends BaseApplicationBridge implements ILifecycle {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Add the listener for the lifecycle of the app

           @param {Adaptive.LifecycleListener} listener listener Lifecycle listener
           @since v2.0
        */
        addLifecycleListener(listener: ILifecycleListener): void;
        /**
           @method
           Whether the application is in background or not

           @return {boolean} true if the application is in background;false otherwise
           @since v2.0
        */
        isBackground(): boolean;
        /**
           @method
           Un-registers an existing listener from receiving lifecycle events.

           @param {Adaptive.LifecycleListener} listener listener Lifecycle listener
           @since v2.0
        */
        removeLifecycleListener(listener: ILifecycleListener): void;
        /**
           @method
           Removes all existing listeners from receiving lifecycle events.

           @since v2.0
        */
        removeLifecycleListeners(): void;
    }
}