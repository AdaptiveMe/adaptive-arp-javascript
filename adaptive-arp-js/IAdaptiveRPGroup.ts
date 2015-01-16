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

module Adaptive {

     /**
        Enumeration IAdaptiveRPGroup
     */
     export class IAdaptiveRPGroup {

          constructor(public value:string){}
          toString(){return this.value;}

          static Application = new IAdaptiveRPGroup("Application");
          static Commerce = new IAdaptiveRPGroup("Commerce");
          static Communication = new IAdaptiveRPGroup("Communication");
          static Data = new IAdaptiveRPGroup("Data");
          static Media = new IAdaptiveRPGroup("Media");
          static Notification = new IAdaptiveRPGroup("Notification");
          static PIM = new IAdaptiveRPGroup("PIM");
          static Reader = new IAdaptiveRPGroup("Reader");
          static Security = new IAdaptiveRPGroup("Security");
          static Sensor = new IAdaptiveRPGroup("Sensor");
          static Social = new IAdaptiveRPGroup("Social");
          static System = new IAdaptiveRPGroup("System");
          static UI = new IAdaptiveRPGroup("UI");
          static Util = new IAdaptiveRPGroup("Util");
          static Kernel = new IAdaptiveRPGroup("Kernel");
          static Unknown = new IAdaptiveRPGroup("Unknown");

          /**
             Convert JSON parsed object to enumeration.
          */
          static toObject(object : any) : IAdaptiveRPGroup {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Application":
                              return IAdaptiveRPGroup.Application;
                         case "Commerce":
                              return IAdaptiveRPGroup.Commerce;
                         case "Communication":
                              return IAdaptiveRPGroup.Communication;
                         case "Data":
                              return IAdaptiveRPGroup.Data;
                         case "Media":
                              return IAdaptiveRPGroup.Media;
                         case "Notification":
                              return IAdaptiveRPGroup.Notification;
                         case "PIM":
                              return IAdaptiveRPGroup.PIM;
                         case "Reader":
                              return IAdaptiveRPGroup.Reader;
                         case "Security":
                              return IAdaptiveRPGroup.Security;
                         case "Sensor":
                              return IAdaptiveRPGroup.Sensor;
                         case "Social":
                              return IAdaptiveRPGroup.Social;
                         case "System":
                              return IAdaptiveRPGroup.System;
                         case "UI":
                              return IAdaptiveRPGroup.UI;
                         case "Util":
                              return IAdaptiveRPGroup.Util;
                         case "Kernel":
                              return IAdaptiveRPGroup.Kernel;
                         case "Unknown":
                              return IAdaptiveRPGroup.Unknown;
                         default:
                              return IAdaptiveRPGroup.Unknown;
                    }
               } else {
                    return IAdaptiveRPGroup.Unknown;
               }
          }

     }
}
