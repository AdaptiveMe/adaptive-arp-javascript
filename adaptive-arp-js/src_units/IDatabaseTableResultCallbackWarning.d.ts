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
declare module Adaptive {
    /**
       @class Adaptive.IDatabaseTableResultCallbackWarning
       Enumeration IDatabaseTableResultCallbackWarning
    */
    class IDatabaseTableResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @enum [Adaptive.IDatabaseTableResultCallbackWarning.TableExists=Adaptive.IDatabaseTableResultCallbackWarning.*]
           @static
        */
        static TableExists: IDatabaseTableResultCallbackWarning;
        /**
           @enum [Adaptive.IDatabaseTableResultCallbackWarning.TableLocked=Adaptive.IDatabaseTableResultCallbackWarning.*]
           @static
        */
        static TableLocked: IDatabaseTableResultCallbackWarning;
        /**
           @enum [Adaptive.IDatabaseTableResultCallbackWarning.NoResults=Adaptive.IDatabaseTableResultCallbackWarning.*]
           @static
        */
        static NoResults: IDatabaseTableResultCallbackWarning;
        /**
           @enum [Adaptive.IDatabaseTableResultCallbackWarning.Unknown=Adaptive.IDatabaseTableResultCallbackWarning.*]
           @static
        */
        static Unknown: IDatabaseTableResultCallbackWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {IDatabaseTableResultCallbackWarning}
        */
        static toObject(object: any): IDatabaseTableResultCallbackWarning;
    }
}
