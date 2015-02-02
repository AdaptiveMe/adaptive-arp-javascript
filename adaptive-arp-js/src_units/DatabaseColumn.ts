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

///<reference path="APIBean.ts"/>

module Adaptive {

     /**
        @class Adaptive.DatabaseColumn
        @extends Adaptive.APIBean
        Structure representing the column specification of a data column.

        @author Ferran Vila Conesa
        @since v2.0
        @version 1.0
     */
     export class DatabaseColumn extends APIBean {

          /**
             @property {string} name
             Name of the column
          */
          name : string;

          /**
             @property {string} name
             Name of the column The 'nameProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'name'.
          */
          get nameProperty() : string {
               return this.name;
          }

          set nameProperty(name:string) {
               this.name = name;
          }

          /**
             @method constructor
             Constructor with fields

             @param {string} name Name of the column
             @since v2.0
          */
          constructor(name: string) {
               super();
               this.name = name;
          }

          /**
             @method
             Returns the name of the column.

             @return {string} The name of the column.
             @since v2.0
          */
          getName() : string {
               return this.name;
          }

          /**
             @method
             Sets the name of the column.

             @param {string} name The name of the column.
             @since v2.0
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.DatabaseColumn.
             @return {Adaptive.DatabaseColumn} Wrapped object instance.
          */
          static toObject(object : any) : DatabaseColumn {
               var result : DatabaseColumn = new DatabaseColumn(null);

               // Assign values to bean fields.
               if (object!=null && object.name!=null) result.name = object.name;

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
