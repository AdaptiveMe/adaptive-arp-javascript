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
       @class Adaptive.IAdaptiveRPGroup
       Enumeration IAdaptiveRPGroup
    */
    class IAdaptiveRPGroup {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Application=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static Application: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Commerce=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static Commerce: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Communication=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static Communication: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Data=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static Data: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Media=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static Media: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Notification=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static Notification: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.PIM=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static PIM: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Reader=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static Reader: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Security=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static Security: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Sensor=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static Sensor: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Social=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static Social: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.System=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static System: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.UI=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static UI: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Util=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static Util: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Kernel=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static Kernel: IAdaptiveRPGroup;
        /**
           @enum [Adaptive.IAdaptiveRPGroup.Unknown=Adaptive.IAdaptiveRPGroup.*]
           @static
        */
        static Unknown: IAdaptiveRPGroup;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {IAdaptiveRPGroup}
        */
        static toObject(object: any): IAdaptiveRPGroup;
    }
}
