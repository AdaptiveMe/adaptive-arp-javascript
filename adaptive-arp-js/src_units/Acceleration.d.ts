/// <reference path="APIBean.d.ts" />
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
       @class Adaptive.Acceleration
       @extends Adaptive.APIBean
       Structure representing the data of a single acceleration reading.

       @author Carlos Lozano Diez
       @since v2.0
       @version 1.0
    */
    class Acceleration extends APIBean {
        /**
           @property {number} timestamp
           Timestamp of the acceleration reading.
        */
        timestamp: number;
        /**
           @property {number} timestamp
           Timestamp of the acceleration reading. The 'timestampProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'timestamp'.
        */
        timestampProperty: number;
        /**
           @property {number} x
           X-axis component of the acceleration.
        */
        x: number;
        /**
           @property {number} x
           X-axis component of the acceleration. The 'xProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'x'.
        */
        xProperty: number;
        /**
           @property {number} y
           Y-axis component of the acceleration.
        */
        y: number;
        /**
           @property {number} y
           Y-axis component of the acceleration. The 'yProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'y'.
        */
        yProperty: number;
        /**
           @property {number} z
           Z-axis component of the acceleration.
        */
        z: number;
        /**
           @property {number} z
           Z-axis component of the acceleration. The 'zProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'z'.
        */
        zProperty: number;
        /**
           @method constructor
           Constructor with fields

           @param {number} x         X Coordinate
           @param {number} y         Y Coordinate
           @param {number} z         Z Coordinate
           @param {number} timestamp Timestamp
           @since v2.0
        */
        constructor(x: number, y: number, z: number, timestamp: number);
        /**
           @method
           Timestamp Getter

           @return {number} Timestamp
           @since v2.0
        */
        getTimestamp(): number;
        /**
           @method
           Timestamp Setter

           @param {number} timestamp Timestamp
           @since v2.0
        */
        setTimestamp(timestamp: number): void;
        /**
           @method
           X Coordinate Getter

           @return {number} X-axis component of the acceleration.
           @since v2.0
        */
        getX(): number;
        /**
           @method
           X Coordinate Setter

           @param {number} x X-axis component of the acceleration.
           @since v2.0
        */
        setX(x: number): void;
        /**
           @method
           Y Coordinate Getter

           @return {number} Y-axis component of the acceleration.
           @since v2.0
        */
        getY(): number;
        /**
           @method
           Y Coordinate Setter

           @param {number} y Y-axis component of the acceleration.
           @since v2.0
        */
        setY(y: number): void;
        /**
           @method
           Z Coordinate Getter

           @return {number} Z-axis component of the acceleration.
           @since v2.0
        */
        getZ(): number;
        /**
           @method
           Z Coordinate Setter

           @param {number} z Z Coordinate
           @since v2.0
        */
        setZ(z: number): void;
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.Acceleration.
           @return {Adaptive.Acceleration} Wrapped object instance.
        */
        static toObject(object: any): Acceleration;
        /**
           @method
           @static
           Convert JSON parsed object array to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.Acceleration[].
           @return {Adaptive.Acceleration[]} Wrapped object array instance.
        */
        static toObjectArray(object: any): Acceleration[];
    }
}
