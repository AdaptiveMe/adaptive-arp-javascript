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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIBean.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Structure representing the assigned tags data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactTag = (function (_super) {
        __extends(ContactTag, _super);
        /**
           Constructor used by the implementation

           @param tagValue Value of the tag
           @param tagName  Name of the tag
           @since ARP1.0
        */
        function ContactTag(tagName, tagValue) {
            _super.call(this);
            this.tagName = tagName;
            this.tagValue = tagValue;
        }
        /**
           Returns the tagName of the Tag

           @return tagName
           @since ARP1.0
        */
        ContactTag.prototype.getTagName = function () {
            return this.tagName;
        };
        /**
           Set the tagName of the Tag

           @param tagName Name of the tag
           @since ARP1.0
        */
        ContactTag.prototype.setTagName = function (tagName) {
            this.tagName = tagName;
        };
        /**
           Returns the tagValue of the Tag

           @return tagValue
           @since ARP1.0
        */
        ContactTag.prototype.getTagValue = function () {
            return this.tagValue;
        };
        /**
           Set the tagValue of the Tag

           @param tagValue Value of the tag
           @since ARP1.0
        */
        ContactTag.prototype.setTagValue = function (tagValue) {
            this.tagValue = tagValue;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ContactTag.toObject = function (object) {
            var result = new ContactTag(null, null);
            // Assign values to bean fields.
            if (object != null && object.tagName != null)
                result.tagName = object.tagName;
            if (object != null && object.tagValue != null)
                result.tagValue = object.tagValue;
            return result;
        };
        return ContactTag;
    })(Adaptive.APIBean);
    Adaptive.ContactTag = ContactTag;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ContactTag.js.map