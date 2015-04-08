/// <reference path="APIBean.d.ts" />
/// <reference path="ICapabilitiesNet.d.ts" />
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

    * @version v2.2.9

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       @class Adaptive.NetworkEvent
       @extends Adaptive.APIBean
       Represents a network handover event on the system.

       @author Ferran Vila Conesa
       @since v2.2.1
       @version 1.0
    */
    class NetworkEvent extends APIBean {
        /**
           @property {Adaptive.ICapabilitiesNet} network
           New type of network of the event
        */
        network: ICapabilitiesNet;
        /**
           @property {Adaptive.ICapabilitiesNet} network
           New type of network of the event The 'networkProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'network'.
        */
        networkProperty: ICapabilitiesNet;
        /**
           @property {number} timestamp
           The timestamps in milliseconds when the event was fired.
        */
        timestamp: number;
        /**
           @property {number} timestamp
           The timestamps in milliseconds when the event was fired. The 'timestampProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'timestamp'.
        */
        timestampProperty: number;
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.ICapabilitiesNet} network   of the app
           @param {number} timestamp Timestamp of the event
           @since v2.2.1
        */
        constructor(network: ICapabilitiesNet, timestamp: number);
        /**
           @method
           Network event getter

           @return {Adaptive.ICapabilitiesNet} New network switched
           @since v2.2.1
        */
        getNetwork(): ICapabilitiesNet;
        /**
           @method
           Network setter

           @param {Adaptive.ICapabilitiesNet} network New network switched
           @since v2.2.1
        */
        setNetwork(network: ICapabilitiesNet): void;
        /**
           @method
           Returns the timestamp of the event

           @return {number} Timestamp of the event
           @since v2.2.1
        */
        getTimestamp(): number;
        /**
           @method
           Sets the timestamp of the event

           @param {number} timestamp Timestamp of the event
           @since v2.2.1
        */
        setTimestamp(timestamp: number): void;
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.NetworkEvent.
           @return {Adaptive.NetworkEvent} Wrapped object instance.
        */
        static toObject(object: any): NetworkEvent;
        /**
           @method
           @static
           Convert JSON parsed object array to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.NetworkEvent[].
           @return {Adaptive.NetworkEvent[]} Wrapped object array instance.
        */
        static toObjectArray(object: any): NetworkEvent[];
    }
}
