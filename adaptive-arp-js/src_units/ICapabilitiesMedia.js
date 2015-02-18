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

    * @version v2.1.5

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var Adaptive;
(function (Adaptive) {
    /**
       @enum {Adaptive.ICapabilitiesMedia} Adaptive.ICapabilitiesMedia
       Enumeration ICapabilitiesMedia
    */
    var ICapabilitiesMedia = (function () {
        function ICapabilitiesMedia(value) {
            this.value = value;
        }
        ICapabilitiesMedia.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesMedia}
        */
        ICapabilitiesMedia.toObject = function (object) {
            var retValue = ICapabilitiesMedia.Unknown;
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Audio_Playback":
                        retValue = ICapabilitiesMedia.Audio_Playback;
                    case "Audio_Recording":
                        retValue = ICapabilitiesMedia.Audio_Recording;
                    case "Camera":
                        retValue = ICapabilitiesMedia.Camera;
                    case "Video_Playback":
                        retValue = ICapabilitiesMedia.Video_Playback;
                    case "Video_Recording":
                        retValue = ICapabilitiesMedia.Video_Recording;
                    case "Unknown":
                        retValue = ICapabilitiesMedia.Unknown;
                    default:
                        retValue = ICapabilitiesMedia.Unknown;
                }
            }
            return retValue;
        };
        /**
           @property {Adaptive.ICapabilitiesMedia} [Audio_Playback='Audio_Playback']
        */
        ICapabilitiesMedia.Audio_Playback = new ICapabilitiesMedia("Audio_Playback");
        /**
           @property {Adaptive.ICapabilitiesMedia} [Audio_Recording='Audio_Recording']
        */
        ICapabilitiesMedia.Audio_Recording = new ICapabilitiesMedia("Audio_Recording");
        /**
           @property {Adaptive.ICapabilitiesMedia} [Camera='Camera']
        */
        ICapabilitiesMedia.Camera = new ICapabilitiesMedia("Camera");
        /**
           @property {Adaptive.ICapabilitiesMedia} [Video_Playback='Video_Playback']
        */
        ICapabilitiesMedia.Video_Playback = new ICapabilitiesMedia("Video_Playback");
        /**
           @property {Adaptive.ICapabilitiesMedia} [Video_Recording='Video_Recording']
        */
        ICapabilitiesMedia.Video_Recording = new ICapabilitiesMedia("Video_Recording");
        /**
           @property {Adaptive.ICapabilitiesMedia} [Unknown='Unknown']
        */
        ICapabilitiesMedia.Unknown = new ICapabilitiesMedia("Unknown");
        return ICapabilitiesMedia;
    })();
    Adaptive.ICapabilitiesMedia = ICapabilitiesMedia;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ICapabilitiesMedia.js.map