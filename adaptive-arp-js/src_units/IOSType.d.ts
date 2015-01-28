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
       @class Adaptive.IOSType
       Enumeration IOSType
    */
    class IOSType {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @enum [Adaptive.IOSType.iOS=Adaptive.IOSType.*]
           @static
        */
        static iOS: IOSType;
        /**
           @enum [Adaptive.IOSType.OSX=Adaptive.IOSType.*]
           @static
        */
        static OSX: IOSType;
        /**
           @enum [Adaptive.IOSType.Windows=Adaptive.IOSType.*]
           @static
        */
        static Windows: IOSType;
        /**
           @enum [Adaptive.IOSType.WindowsPhone=Adaptive.IOSType.*]
           @static
        */
        static WindowsPhone: IOSType;
        /**
           @enum [Adaptive.IOSType.Android=Adaptive.IOSType.*]
           @static
        */
        static Android: IOSType;
        /**
           @enum [Adaptive.IOSType.Linux=Adaptive.IOSType.*]
           @static
        */
        static Linux: IOSType;
        /**
           @enum [Adaptive.IOSType.Blackberry=Adaptive.IOSType.*]
           @static
        */
        static Blackberry: IOSType;
        /**
           @enum [Adaptive.IOSType.Tizen=Adaptive.IOSType.*]
           @static
        */
        static Tizen: IOSType;
        /**
           @enum [Adaptive.IOSType.FirefoxOS=Adaptive.IOSType.*]
           @static
        */
        static FirefoxOS: IOSType;
        /**
           @enum [Adaptive.IOSType.Chromium=Adaptive.IOSType.*]
           @static
        */
        static Chromium: IOSType;
        /**
           @enum [Adaptive.IOSType.Unspecified=Adaptive.IOSType.*]
           @static
        */
        static Unspecified: IOSType;
        /**
           @enum [Adaptive.IOSType.Unknown=Adaptive.IOSType.*]
           @static
        */
        static Unknown: IOSType;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {IOSType}
        */
        static toObject(object: any): IOSType;
    }
}
