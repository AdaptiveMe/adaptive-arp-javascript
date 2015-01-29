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

    * @version v2.1.1

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

module Adaptive {

     /**
        @enum {Adaptive.ICapabilitiesMedia} Adaptive.ICapabilitiesMedia
        Enumeration ICapabilitiesMedia
     */
     export class ICapabilitiesMedia {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ICapabilitiesMedia} [Audio_Playback='Audio_Playback']
          */
          static Audio_Playback = new ICapabilitiesMedia("Audio_Playback");
          /**
             @property {Adaptive.ICapabilitiesMedia} [Audio_Recording='Audio_Recording']
          */
          static Audio_Recording = new ICapabilitiesMedia("Audio_Recording");
          /**
             @property {Adaptive.ICapabilitiesMedia} [Camera='Camera']
          */
          static Camera = new ICapabilitiesMedia("Camera");
          /**
             @property {Adaptive.ICapabilitiesMedia} [Video_Playback='Video_Playback']
          */
          static Video_Playback = new ICapabilitiesMedia("Video_Playback");
          /**
             @property {Adaptive.ICapabilitiesMedia} [Video_Recording='Video_Recording']
          */
          static Video_Recording = new ICapabilitiesMedia("Video_Recording");
          /**
             @property {Adaptive.ICapabilitiesMedia} [Unknown='Unknown']
          */
          static Unknown = new ICapabilitiesMedia("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ICapabilitiesMedia}
          */
          static toObject(object : any) : ICapabilitiesMedia {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Audio_Playback":
                              return ICapabilitiesMedia.Audio_Playback;
                         case "Audio_Recording":
                              return ICapabilitiesMedia.Audio_Recording;
                         case "Camera":
                              return ICapabilitiesMedia.Camera;
                         case "Video_Playback":
                              return ICapabilitiesMedia.Video_Playback;
                         case "Video_Recording":
                              return ICapabilitiesMedia.Video_Recording;
                         case "Unknown":
                              return ICapabilitiesMedia.Unknown;
                         default:
                              return ICapabilitiesMedia.Unknown;
                    }
               } else {
                    return ICapabilitiesMedia.Unknown;
               }
          }

     }
}
