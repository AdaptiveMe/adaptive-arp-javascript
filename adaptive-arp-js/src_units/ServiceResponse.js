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

    * @version v2.1.0

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIBean.ts"/>
///<reference path="ServiceHeader.ts"/>
///<reference path="ServiceSession.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.ServiceResponse
       @extends Adaptive.APIBean
       Represents a local or remote service response.

       @author Aryslan
       @since v2.0
       @version 1.0
    */
    var ServiceResponse = (function (_super) {
        __extends(ServiceResponse, _super);
        /**
           @method constructor
           Constructor with fields

           @param {string} content         Request/Response data content (plain text).
           @param {string} contentType     The request/response content type (MIME TYPE).
           @param {string} contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
           @param {number} contentLength   The length in bytes for the Content field.
           @param {Adaptive.ServiceHeader[]} serviceHeaders  The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @param {Adaptive.ServiceSession} serviceSession  Information about the session
           @since v2.0
        */
        function ServiceResponse(content, contentType, contentEncoding, contentLength, serviceHeaders, serviceSession) {
            _super.call(this);
            this.content = content;
            this.contentType = contentType;
            this.contentEncoding = contentEncoding;
            this.contentLength = contentLength;
            this.serviceHeaders = serviceHeaders;
            this.serviceSession = serviceSession;
        }
        Object.defineProperty(ServiceResponse.prototype, "contentProperty", {
            /**
               @property {string} contentProperty
               Response data content. The content should be in some well-known web format - in specific, binaries returned
  should be encoded in base64. The 'contentProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'content'.
            */
            get: function () {
                return this.content;
            },
            set: function (content) {
                this.content = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceResponse.prototype, "contentEncodingProperty", {
            /**
               @property {string} contentEncodingProperty
               Encoding of the binary payload - by default assumed to be UTF8. The 'contentEncodingProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'contentEncoding'.
            */
            get: function () {
                return this.contentEncoding;
            },
            set: function (contentEncoding) {
                this.contentEncoding = contentEncoding;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceResponse.prototype, "contentLengthProperty", {
            /**
               @property {number} contentLengthProperty
               The length in bytes for the Content field. The 'contentLengthProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'contentLength'.
            */
            get: function () {
                return this.contentLength;
            },
            set: function (contentLength) {
                this.contentLength = contentLength;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceResponse.prototype, "contentTypeProperty", {
            /**
               @property {string} contentTypeProperty
               The request/response content type (MIME TYPE). The 'contentTypeProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'contentType'.
            */
            get: function () {
                return this.contentType;
            },
            set: function (contentType) {
                this.contentType = contentType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceResponse.prototype, "serviceHeadersProperty", {
            /**
               @property {Adaptive.ServiceHeader[]} serviceHeadersProperty
               The serviceHeaders array (name,value pairs) to be included on the I/O service request. The 'serviceHeadersProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'serviceHeaders'.
            */
            get: function () {
                return this.serviceHeaders;
            },
            set: function (serviceHeaders) {
                this.serviceHeaders = serviceHeaders;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceResponse.prototype, "serviceSessionProperty", {
            /**
               @property {Adaptive.ServiceSession} serviceSessionProperty
               Information about the session. The 'serviceSessionProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'serviceSession'.
            */
            get: function () {
                return this.serviceSession;
            },
            set: function (serviceSession) {
                this.serviceSession = serviceSession;
            },
            enumerable: true,
            configurable: true
        });
        /**
           @method
           Returns the content

           @return {string} content
           @since v2.0
        */
        ServiceResponse.prototype.getContent = function () {
            return this.content;
        };
        /**
           @method
           Set the content

           @param {string} content Request/Response data content (plain text).
           @since v2.0
        */
        ServiceResponse.prototype.setContent = function (content) {
            this.content = content;
        };
        /**
           @method
           Returns the content encoding

           @return {string} contentEncoding
           @since v2.0
        */
        ServiceResponse.prototype.getContentEncoding = function () {
            return this.contentEncoding;
        };
        /**
           @method
           Set the content encoding

           @param {string} contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
           @since v2.0
        */
        ServiceResponse.prototype.setContentEncoding = function (contentEncoding) {
            this.contentEncoding = contentEncoding;
        };
        /**
           @method
           Returns the content length

           @return {number} contentLength
           @since v2.0
        */
        ServiceResponse.prototype.getContentLength = function () {
            return this.contentLength;
        };
        /**
           @method
           Set the content length

           @param {number} contentLength The length in bytes for the Content field.
           @since v2.0
        */
        ServiceResponse.prototype.setContentLength = function (contentLength) {
            this.contentLength = contentLength;
        };
        /**
           @method
           Returns the content type

           @return {string} contentType
           @since v2.0
        */
        ServiceResponse.prototype.getContentType = function () {
            return this.contentType;
        };
        /**
           @method
           Set the content type

           @param {string} contentType The request/response content type (MIME TYPE).
           @since v2.0
        */
        ServiceResponse.prototype.setContentType = function (contentType) {
            this.contentType = contentType;
        };
        /**
           @method
           Returns the array of ServiceHeader

           @return {Adaptive.ServiceHeader[]} serviceHeaders
           @since v2.0
        */
        ServiceResponse.prototype.getServiceHeaders = function () {
            return this.serviceHeaders;
        };
        /**
           @method
           Set the array of ServiceHeader

           @param {Adaptive.ServiceHeader[]} serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @since v2.0
        */
        ServiceResponse.prototype.setServiceHeaders = function (serviceHeaders) {
            this.serviceHeaders = serviceHeaders;
        };
        /**
           @method
           Getter for service session

           @return {Adaptive.ServiceSession} The element service session
           @since v2.0
        */
        ServiceResponse.prototype.getServiceSession = function () {
            return this.serviceSession;
        };
        /**
           @method
           Setter for service session

           @param {Adaptive.ServiceSession} serviceSession The element service session
           @since v2.0
        */
        ServiceResponse.prototype.setServiceSession = function (serviceSession) {
            this.serviceSession = serviceSession;
        };
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ServiceResponse.
           @return {Adaptive.ServiceResponse} Wrapped object instance.
        */
        ServiceResponse.toObject = function (object) {
            var result = new ServiceResponse(null, null, null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.content != null)
                result.content = object.content;
            if (object != null && object.contentType != null)
                result.contentType = object.contentType;
            if (object != null && object.contentEncoding != null)
                result.contentEncoding = object.contentEncoding;
            if (object != null && object.contentLength != null)
                result.contentLength = object.contentLength;
            if (object != null && object.serviceHeaders != null) {
                result.serviceHeaders = new Array();
                for (var i = 0; i < object.serviceHeaders.length; i++) {
                    var __value__ = object.serviceHeaders[i];
                    if (__value__ != null) {
                        result.serviceHeaders.push(Adaptive.ServiceHeader.toObject(__value__));
                    }
                    else {
                        result.serviceHeaders.push(Adaptive.ServiceHeader.toObject(null));
                    }
                }
            }
            if (object != null && object.serviceSession != null) {
                result.serviceSession = Adaptive.ServiceSession.toObject(object.serviceSession);
            }
            else {
                result.serviceSession = Adaptive.ServiceSession.toObject(null);
            }
            return result;
        };
        return ServiceResponse;
    })(Adaptive.APIBean);
    Adaptive.ServiceResponse = ServiceResponse;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ServiceResponse.js.map