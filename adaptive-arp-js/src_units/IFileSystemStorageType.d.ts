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
       @enum {Adaptive.IFileSystemStorageType} Adaptive.IFileSystemStorageType
       Enumeration IFileSystemStorageType
    */
    class IFileSystemStorageType {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IFileSystemStorageType} [Application='Application']
        */
        static Application: IFileSystemStorageType;
        /**
           @property {Adaptive.IFileSystemStorageType} [Document='Document']
        */
        static Document: IFileSystemStorageType;
        /**
           @property {Adaptive.IFileSystemStorageType} [Cloud='Cloud']
        */
        static Cloud: IFileSystemStorageType;
        /**
           @property {Adaptive.IFileSystemStorageType} [Protected='Protected']
        */
        static Protected: IFileSystemStorageType;
        /**
           @property {Adaptive.IFileSystemStorageType} [Cache='Cache']
        */
        static Cache: IFileSystemStorageType;
        /**
           @property {Adaptive.IFileSystemStorageType} [External='External']
        */
        static External: IFileSystemStorageType;
        /**
           @property {Adaptive.IFileSystemStorageType} [Unknown='Unknown']
        */
        static Unknown: IFileSystemStorageType;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileSystemStorageType}
        */
        static toObject(object: any): IFileSystemStorageType;
    }
}
