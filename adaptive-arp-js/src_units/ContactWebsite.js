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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="APIBean.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.ContactWebsite
       @extends Adaptive.APIBean
       Structure representing the website data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since v2.0
       @version 1.0
    */
    var ContactWebsite = (function (_super) {
        __extends(ContactWebsite, _super);
        /**
           @method constructor
           Constructor used by the implementation

           @param {string} url Url of the website
           @since v2.0
        */
        function ContactWebsite(url) {
            _super.call(this);
            this.url = url;
        }
        Object.defineProperty(ContactWebsite.prototype, "urlProperty", {
            /**
               @property {string} url
               The url of the website The 'urlProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'url'.
            */
            get: function () {
                return this.url;
            },
            set: function (url) {
                this.url = url;
            },
            enumerable: true,
            configurable: true
        });
        /**
           @method
           Returns the url of the website

           @return {string} website url
           @since v2.0
        */
        ContactWebsite.prototype.getUrl = function () {
            return this.url;
        };
        /**
           @method
           Set the url of the website

           @param {string} url Url of the website
           @since v2.0
        */
        ContactWebsite.prototype.setUrl = function (url) {
            this.url = url;
        };
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ContactWebsite.
           @return {Adaptive.ContactWebsite} Wrapped object instance.
        */
        ContactWebsite.toObject = function (object) {
            var result = new ContactWebsite(null);
            if (object != null) {
                // Assign values to bean fields.
                result.url = object.url;
            }
            return result;
        };
        /**
           @method
           @static
           Convert JSON parsed object array to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ContactWebsite[].
           @return {Adaptive.ContactWebsite[]} Wrapped object array instance.
        */
        ContactWebsite.toObjectArray = function (object) {
            var resultArray = new Array();
            if (object != null) {
                for (var i = 0; i < object.length; i++) {
                    resultArray.push(ContactWebsite.toObject(object[i]));
                }
            }
            return resultArray;
        };
        return ContactWebsite;
    })(Adaptive.APIBean);
    Adaptive.ContactWebsite = ContactWebsite;
})(Adaptive || (Adaptive = {}));
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
//# sourceMappingURL=ContactWebsite.js.map