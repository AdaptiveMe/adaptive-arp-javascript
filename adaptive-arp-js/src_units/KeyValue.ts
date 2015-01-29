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

///<reference path="APIBean.ts"/>

module Adaptive {

     /**
        @class Adaptive.KeyValue
        @extends Adaptive.APIBean
        General key/value holder class.

        @author Carlos Lozano Diez
        @since 2.0.6
        @version 1.0
     */
     export class KeyValue extends APIBean {

          /**
             @property {string} keyData
             Value of the key.
          */
          keyData : string;

          /**
             @property {string} keyData
             Value of the key. The 'keyDataProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'keyData'.
          */
          get keyDataProperty() : string {
               return this.keyData;
          }

          set keyDataProperty(keyData:string) {
               this.keyData = keyData;
          }

          /**
             @property {string} keyName
             Name of the key for the value.
          */
          keyName : string;

          /**
             @property {string} keyName
             Name of the key for the value. The 'keyNameProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'keyName'.
          */
          get keyNameProperty() : string {
               return this.keyName;
          }

          set keyNameProperty(keyName:string) {
               this.keyName = keyName;
          }

          /**
             @method constructor
             Convenience constructor.

             @param {string} keyName Name of the key.
             @param {string} keyData Value of the key.
             @since v2.0.6
          */
          constructor(keyName: string, keyData: string) {
               super();
               this.keyName = keyName;
               this.keyData = keyData;
          }

          /**
             @method
             Gets the value of the key.

             @return {string} Value of the key.
             @since v2.0.6
          */
          getKeyData() : string {
               return this.keyData;
          }

          /**
             @method
             Sets the value of the key.

             @param {string} keyData Value of the key.
             @since v2.0.6
          */
          setKeyData(keyData: string) {
               this.keyData = keyData;
          }

          /**
             @method
             Gets the name of the key.

             @return {string} Key name.
             @since v2.0.6
          */
          getKeyName() : string {
               return this.keyName;
          }

          /**
             @method
             Sets the name of the key.

             @param {string} keyName Key name.
             @since v2.0.6
          */
          setKeyName(keyName: string) {
               this.keyName = keyName;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.KeyValue.
             @return {Adaptive.KeyValue} Wrapped object instance.
          */
          static toObject(object : any) : KeyValue {
               var result : KeyValue = new KeyValue(null, null);

               // Assign values to bean fields.
               if (object!=null && object.keyName!=null) result.keyName = object.keyName;
               if (object!=null && object.keyData!=null) result.keyData = object.keyData;

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/