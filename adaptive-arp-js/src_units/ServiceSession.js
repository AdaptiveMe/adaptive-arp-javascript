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

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIBean.ts"/>
///<reference path="ServiceCookie.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.ServiceSession
       @extends Adaptive.APIBean
       Represents a session object for HTTP request and responses

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var ServiceSession = (function (_super) {
        __extends(ServiceSession, _super);
        /**
           @method constructor
           Constructor with fields

           @param {Adaptive.ServiceCookie[]} cookies    The cookies of the response
           @param {string[]} attributes Attributes of the response
           @since ARP1.0
        */
        function ServiceSession(cookies, attributes) {
            _super.call(this);
            this.cookies = cookies;
            this.attributes = attributes;
        }
        /**
           @method
           Gets the attributes of the response

           @return {string[]} Attributes of the response
           @since ARP1.0
        */
        ServiceSession.prototype.getAttributes = function () {
            return this.attributes;
        };
        /**
           @method
           Sets the attributes for the response

           @param {string[]} attributes Attributes of the response
           @since ARP1.0
        */
        ServiceSession.prototype.setAttributes = function (attributes) {
            this.attributes = attributes;
        };
        /**
           @method
           Returns the cookies of the response

           @return {Adaptive.ServiceCookie[]} The cookies of the response
           @since ARP1.0
        */
        ServiceSession.prototype.getCookies = function () {
            return this.cookies;
        };
        /**
           @method
           Sets the cookies of the response

           @param {Adaptive.ServiceCookie[]} cookies The cookies of the response
           @since ARP1.0
        */
        ServiceSession.prototype.setCookies = function (cookies) {
            this.cookies = cookies;
        };
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ServiceSession.
           @return {Adaptive.ServiceSession} Wrapped object instance.
        */
        ServiceSession.toObject = function (object) {
            var result = new ServiceSession(null, null);
            // Assign values to bean fields.
            if (object != null && object.cookies != null) {
                result.cookies = new Array();
                for (var i = 0; i < object.cookies.length; i++) {
                    var __value__ = object.cookies[i];
                    if (__value__ != null) {
                        result.cookies.push(Adaptive.ServiceCookie.toObject(__value__));
                    }
                    else {
                        result.cookies.push(Adaptive.ServiceCookie.toObject(null));
                    }
                }
            }
            if (object != null && object.attributes != null) {
                result.attributes = new Array();
                for (var i = 0; i < object.attributes.length; i++) {
                    var __value__ = object.attributes[i];
                    if (__value__ != null)
                        result.attributes.push(__value__);
                }
            }
            return result;
        };
        return ServiceSession;
    })(Adaptive.APIBean);
    Adaptive.ServiceSession = ServiceSession;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ServiceSession.js.map