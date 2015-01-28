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
       @class Adaptive.Locale
       @extends Adaptive.APIBean
       Represents a specific user or system locate.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var Locale = (function (_super) {
        __extends(Locale, _super);
        /**
           Constructor used by the implementation

           @param country  Country of the Locale
           @param language Language of the Locale
           @since ARP1.0
        */
        function Locale(language, country) {
            _super.call(this);
            this.language = language;
            this.country = country;
        }
        /**
           Returns the country code

           @return country code
           @since ARP1.0
        */
        Locale.prototype.getCountry = function () {
            return this.country;
        };
        /**
           Set the country code

           @param country code
           @since ARP1.0
        */
        Locale.prototype.setCountry = function (country) {
            this.country = country;
        };
        /**
           Returns the language code

           @return language code
           @since ARP1.0
        */
        Locale.prototype.getLanguage = function () {
            return this.language;
        };
        /**
           Set the language code

           @param language code
           @since ARP1.0
        */
        Locale.prototype.setLanguage = function (language) {
            this.language = language;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        Locale.toObject = function (object) {
            var result = new Locale(null, null);
            // Assign values to bean fields.
            if (object != null && object.country != null)
                result.country = object.country;
            if (object != null && object.language != null)
                result.language = object.language;
            return result;
        };
        return Locale;
    })(Adaptive.APIBean);
    Adaptive.Locale = Locale;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Locale.js.map