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

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       @class Adaptive.KeyPair
       @extends Adaptive.APIBean
       Represents a basic bean to store keyName pair values

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    class KeyPair extends APIBean {
        /**
           Key of the element
        */
        keyName: string;
        /**
           Value of the element
        */
        keyValue: string;
        /**
           @method constructor
           Constructor using fields

           @param {string} keyName  Key of the element
           @param {string} keyValue Value of the element
           @since ARP1.0
        */
        constructor(keyName: string, keyValue: string);
        /**
           @method
           Returns the keyName of the element

           @return {string} Key of the element
           @since ARP1.0
        */
        getKeyName(): string;
        /**
           @method
           Sets the keyName of the element

           @param {string} keyName Key of the element
           @since ARP1.0
        */
        setKeyName(keyName: string): void;
        /**
           @method
           Returns the keyValue of the element

           @return {string} Value of the element
           @since ARP1.0
        */
        getKeyValue(): string;
        /**
           @method
           Sets the keyValue of the element

           @param {string} keyValue Value of the element
           @since ARP1.0
        */
        setKeyValue(keyValue: string): void;
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.KeyPair.
           @return {Adaptive.KeyPair} Wrapped object instance.
        */
        static toObject(object: any): KeyPair;
    }
}
