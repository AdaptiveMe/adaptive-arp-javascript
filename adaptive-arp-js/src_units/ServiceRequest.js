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

    * @version v2.0.6

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
///<reference path="ServiceRequestParameter.ts"/>
///<reference path="ServiceSession.ts"/>
///<reference path="ServiceToken.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.ServiceRequest
       @extends Adaptive.APIBean
       Represents a local or remote service request.

       @author Aryslan
       @since v2.0
       @version 1.0
    */
    var ServiceRequest = (function (_super) {
        __extends(ServiceRequest, _super);
        /**
           @method constructor
           Convenience constructor.

           @param {string} content      Content payload.
           @param {Adaptive.ServiceToken} serviceToken ServiceToken for the request.
           @since v2.0.6
        */
        function ServiceRequest(content, serviceToken) {
            _super.call(this);
            this.content = content;
            this.serviceToken = serviceToken;
        }
        /**
           @method
           Gets the body parameters of the request.

           @return {Adaptive.ServiceRequestParameter[]} ServiceRequestParameter array or null if none are specified.
           @since v2.0.6
        */
        ServiceRequest.prototype.getBodyParameters = function () {
            return this.bodyParameters;
        };
        /**
           @method
           Sets the body parameters of the request.

           @param {Adaptive.ServiceRequestParameter[]} bodyParameters ServiceRequestParameter array or null if none are specified.
           @since v2.0.6
        */
        ServiceRequest.prototype.setBodyParameters = function (bodyParameters) {
            this.bodyParameters = bodyParameters;
        };
        /**
           @method
           Returns the content

           @return {string} content
           @since v2.0
        */
        ServiceRequest.prototype.getContent = function () {
            return this.content;
        };
        /**
           @method
           Set the content

           @param {string} content Request/Response data content (plain text)
           @since v2.0
        */
        ServiceRequest.prototype.setContent = function (content) {
            this.content = content;
        };
        /**
           @method
           Returns the content encoding

           @return {string} contentEncoding
           @since v2.0
        */
        ServiceRequest.prototype.getContentEncoding = function () {
            return this.contentEncoding;
        };
        /**
           @method
           Set the content encoding

           @param {string} contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
           @since v2.0
        */
        ServiceRequest.prototype.setContentEncoding = function (contentEncoding) {
            this.contentEncoding = contentEncoding;
        };
        /**
           @method
           Returns the content length

           @return {number} contentLength
           @since v2.0
        */
        ServiceRequest.prototype.getContentLength = function () {
            return this.contentLength;
        };
        /**
           @method
           Set the content length

           @param {number} contentLength The length in bytes for the Content field.
           @since v2.0
        */
        ServiceRequest.prototype.setContentLength = function (contentLength) {
            this.contentLength = contentLength;
        };
        /**
           @method
           Returns the content type

           @return {string} contentType
           @since v2.0
        */
        ServiceRequest.prototype.getContentType = function () {
            return this.contentType;
        };
        /**
           @method
           Set the content type

           @param {string} contentType The request/response content type (MIME TYPE).
           @since v2.0
        */
        ServiceRequest.prototype.setContentType = function (contentType) {
            this.contentType = contentType;
        };
        /**
           @method
           Gets the query parameters of the request.

           @return {Adaptive.ServiceRequestParameter[]} ServiceRequestParameter array or null if none are specified.
           @since v2.0.6
        */
        ServiceRequest.prototype.getQueryParameters = function () {
            return this.queryParameters;
        };
        /**
           @method
           Sets the query parameters of the request.

           @param {Adaptive.ServiceRequestParameter[]} queryParameters ServiceRequestParameter array or null if none are specified.
           @since v2.0.6
        */
        ServiceRequest.prototype.setQueryParameters = function (queryParameters) {
            this.queryParameters = queryParameters;
        };
        /**
           @method
           Returns the array of ServiceHeader

           @return {Adaptive.ServiceHeader[]} serviceHeaders
           @since v2.0
        */
        ServiceRequest.prototype.getServiceHeaders = function () {
            return this.serviceHeaders;
        };
        /**
           @method
           Set the array of ServiceHeader

           @param {Adaptive.ServiceHeader[]} serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @since v2.0
        */
        ServiceRequest.prototype.setServiceHeaders = function (serviceHeaders) {
            this.serviceHeaders = serviceHeaders;
        };
        /**
           @method
           Getter for service session

           @return {Adaptive.ServiceSession} The element service session
           @since v2.0
        */
        ServiceRequest.prototype.getServiceSession = function () {
            return this.serviceSession;
        };
        /**
           @method
           Setter for service session

           @param {Adaptive.ServiceSession} serviceSession The element service session
           @since v2.0
        */
        ServiceRequest.prototype.setServiceSession = function (serviceSession) {
            this.serviceSession = serviceSession;
        };
        /**
           @method
           Gets the ServiceToken of the request.

           @return {Adaptive.ServiceToken} ServiceToken.
           @since v2.0.6
        */
        ServiceRequest.prototype.getServiceToken = function () {
            return this.serviceToken;
        };
        /**
           @method
           Sets the ServiceToken of the request.

           @param {Adaptive.ServiceToken} serviceToken ServiceToken to be used for the invocation.
           @since v2.0.6
        */
        ServiceRequest.prototype.setServiceToken = function (serviceToken) {
            this.serviceToken = serviceToken;
        };
        /**
           @method
           Gets the overridden user-agent string.

           @return {string} User-agent string.
           @since v2.0.6
        */
        ServiceRequest.prototype.getUserAgent = function () {
            return this.userAgent;
        };
        /**
           @method
           Sets the user-agent to override the default user-agent string.

           @param {string} userAgent User-agent string.
           @since v2.0.6
        */
        ServiceRequest.prototype.setUserAgent = function (userAgent) {
            this.userAgent = userAgent;
        };
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ServiceRequest.
           @return {Adaptive.ServiceRequest} Wrapped object instance.
        */
        ServiceRequest.toObject = function (object) {
            var result = new ServiceRequest(null, null);
            // Assign values to bean fields.
            if (object != null && object.userAgent != null)
                result.userAgent = object.userAgent;
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
            if (object != null && object.queryParameters != null) {
                result.queryParameters = new Array();
                for (var i = 0; i < object.queryParameters.length; i++) {
                    var __value__ = object.queryParameters[i];
                    if (__value__ != null) {
                        result.queryParameters.push(Adaptive.ServiceRequestParameter.toObject(__value__));
                    }
                    else {
                        result.queryParameters.push(Adaptive.ServiceRequestParameter.toObject(null));
                    }
                }
            }
            if (object != null && object.bodyParameters != null) {
                result.bodyParameters = new Array();
                for (var i = 0; i < object.bodyParameters.length; i++) {
                    var __value__ = object.bodyParameters[i];
                    if (__value__ != null) {
                        result.bodyParameters.push(Adaptive.ServiceRequestParameter.toObject(__value__));
                    }
                    else {
                        result.bodyParameters.push(Adaptive.ServiceRequestParameter.toObject(null));
                    }
                }
            }
            if (object != null && object.serviceToken != null) {
                result.serviceToken = Adaptive.ServiceToken.toObject(object.serviceToken);
            }
            else {
                result.serviceToken = Adaptive.ServiceToken.toObject(null);
            }
            return result;
        };
        return ServiceRequest;
    })(Adaptive.APIBean);
    Adaptive.ServiceRequest = ServiceRequest;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ServiceRequest.js.map