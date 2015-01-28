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
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.ServiceHeader
       @extends Adaptive.APIBean
       Structure representing the data of a http request or response header.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var ServiceHeader = (function (_super) {
        __extends(ServiceHeader, _super);
        /**
           @method constructor
           Constructor with fields

           @param {string} name Name of the header
           @param {string} data Value of the header
           @since ARP1.0
        */
        function ServiceHeader(name, data) {
            _super.call(this);
            this.name = name;
            this.data = data;
        }
        /**
           @method
           Returns the header value

           @return {string} ServiceHeader value
           @since ARP1.0
        */
        ServiceHeader.prototype.getData = function () {
            return this.data;
        };
        /**
           @method
           Set the header value

           @param {string} data ServiceHeader value
           @since ARP1.0
        */
        ServiceHeader.prototype.setData = function (data) {
            this.data = data;
        };
        /**
           @method
           Returns the header name

           @return {string} ServiceHeader name
           @since ARP1.0
        */
        ServiceHeader.prototype.getName = function () {
            return this.name;
        };
        /**
           @method
           Set the header name

           @param {string} name Name of the header
           @since ARP1.0
        */
        ServiceHeader.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ServiceHeader.
           @return {Adaptive.ServiceHeader} Wrapped object instance.
        */
        ServiceHeader.toObject = function (object) {
            var result = new ServiceHeader(null, null);
            // Assign values to bean fields.
            if (object != null && object.name != null)
                result.name = object.name;
            if (object != null && object.data != null)
                result.data = object.data;
            return result;
        };
        return ServiceHeader;
    })(Adaptive.APIBean);
    Adaptive.ServiceHeader = ServiceHeader;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ServiceHeader.js.map