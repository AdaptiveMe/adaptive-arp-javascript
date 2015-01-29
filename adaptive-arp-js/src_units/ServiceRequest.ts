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

///<reference path="APIBean.ts"/>
///<reference path="ServiceHeader.ts"/>
///<reference path="ServiceRequestParameter.ts"/>
///<reference path="ServiceSession.ts"/>
///<reference path="ServiceToken.ts"/>

module Adaptive {

     /**
        @class Adaptive.ServiceRequest
        @extends Adaptive.APIBean
        Represents a local or remote service request.

        @author Aryslan
        @since v2.0
        @version 1.0
     */
     export class ServiceRequest extends APIBean {

          /**
             Body parameters to be included in the body of the request to a service. These may be applied
during GET/POST operations. No body parameters are included if this array is null or length zero.
          */
          bodyParameters : Array<ServiceRequestParameter>;
          /**
             Request data content (plain text). This should be populated by the application. The content should be
in some well-known web format - in specific, binaries submitted should be encoded to base64 and the content
type should be set respectively by the application.
          */
          content : string;
          /**
             Encoding of the content - by default assumed to be UTF8. This may be populated by the application, the platform
populates this field with defaults for the service.
          */
          contentEncoding : string;
          /**
             The length in bytes of the content. This may be populated by the application, the platform
calculates this length automatically if a specific contentLength is not specified.
          */
          contentLength : number;
          /**
             The request content type (MIME TYPE). This may be populated by the application, the platform
populates this field with defaults for the service.
          */
          contentType : string;
          /**
             Query string parameters to be appended to the service URL when making the request. These may be applied
during GET/POST operations. No query parameters are appended if this array is null or length zero.
          */
          queryParameters : Array<ServiceRequestParameter>;
          /**
             The serviceHeaders array (name,value pairs) to be included in the request. This may be populated by the
application, the platform populates this field with defaults for the service and the previous headers.
In specific, the platform maintains request and response state automatically.
          */
          serviceHeaders : Array<ServiceHeader>;
          /**
             Session attributes and cookies. This may be populated by the application, the platform populates
this field with defaults for the service and the previous state information. In specific, the platform
maintains request and response state automatically.
          */
          serviceSession : ServiceSession;
          /**
             Token used for the creation of the request with the destination service, endpoint, function and method
identifiers. This should not be manipulated by the application directly.
          */
          serviceToken : ServiceToken;
          /**
             This attribute allows for the default user-agent string to be overridden by the application.
          */
          userAgent : string;
          /**
             @method constructor
             Convenience constructor.

             @param {string} content      Content payload.
             @param {Adaptive.ServiceToken} serviceToken ServiceToken for the request.
             @since v2.0.6
          */
          constructor(content: string, serviceToken: ServiceToken) {
               super();
               this.content = content;
               this.serviceToken = serviceToken;
          }

          /**
             @method
             Gets the body parameters of the request.

             @return {Adaptive.ServiceRequestParameter[]} ServiceRequestParameter array or null if none are specified.
             @since v2.0.6
          */
          getBodyParameters() : Array<ServiceRequestParameter> {
               return this.bodyParameters;
          }

          /**
             @method
             Sets the body parameters of the request.

             @param {Adaptive.ServiceRequestParameter[]} bodyParameters ServiceRequestParameter array or null if none are specified.
             @since v2.0.6
          */
          setBodyParameters(bodyParameters: Array<ServiceRequestParameter>) {
               this.bodyParameters = bodyParameters;
          }

          /**
             @method
             Returns the content

             @return {string} content
             @since v2.0
          */
          getContent() : string {
               return this.content;
          }

          /**
             @method
             Set the content

             @param {string} content Request/Response data content (plain text)
             @since v2.0
          */
          setContent(content: string) {
               this.content = content;
          }

          /**
             @method
             Returns the content encoding

             @return {string} contentEncoding
             @since v2.0
          */
          getContentEncoding() : string {
               return this.contentEncoding;
          }

          /**
             @method
             Set the content encoding

             @param {string} contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
             @since v2.0
          */
          setContentEncoding(contentEncoding: string) {
               this.contentEncoding = contentEncoding;
          }

          /**
             @method
             Returns the content length

             @return {number} contentLength
             @since v2.0
          */
          getContentLength() : number {
               return this.contentLength;
          }

          /**
             @method
             Set the content length

             @param {number} contentLength The length in bytes for the Content field.
             @since v2.0
          */
          setContentLength(contentLength: number) {
               this.contentLength = contentLength;
          }

          /**
             @method
             Returns the content type

             @return {string} contentType
             @since v2.0
          */
          getContentType() : string {
               return this.contentType;
          }

          /**
             @method
             Set the content type

             @param {string} contentType The request/response content type (MIME TYPE).
             @since v2.0
          */
          setContentType(contentType: string) {
               this.contentType = contentType;
          }

          /**
             @method
             Gets the query parameters of the request.

             @return {Adaptive.ServiceRequestParameter[]} ServiceRequestParameter array or null if none are specified.
             @since v2.0.6
          */
          getQueryParameters() : Array<ServiceRequestParameter> {
               return this.queryParameters;
          }

          /**
             @method
             Sets the query parameters of the request.

             @param {Adaptive.ServiceRequestParameter[]} queryParameters ServiceRequestParameter array or null if none are specified.
             @since v2.0.6
          */
          setQueryParameters(queryParameters: Array<ServiceRequestParameter>) {
               this.queryParameters = queryParameters;
          }

          /**
             @method
             Returns the array of ServiceHeader

             @return {Adaptive.ServiceHeader[]} serviceHeaders
             @since v2.0
          */
          getServiceHeaders() : Array<ServiceHeader> {
               return this.serviceHeaders;
          }

          /**
             @method
             Set the array of ServiceHeader

             @param {Adaptive.ServiceHeader[]} serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
             @since v2.0
          */
          setServiceHeaders(serviceHeaders: Array<ServiceHeader>) {
               this.serviceHeaders = serviceHeaders;
          }

          /**
             @method
             Getter for service session

             @return {Adaptive.ServiceSession} The element service session
             @since v2.0
          */
          getServiceSession() : ServiceSession {
               return this.serviceSession;
          }

          /**
             @method
             Setter for service session

             @param {Adaptive.ServiceSession} serviceSession The element service session
             @since v2.0
          */
          setServiceSession(serviceSession: ServiceSession) {
               this.serviceSession = serviceSession;
          }

          /**
             @method
             Gets the ServiceToken of the request.

             @return {Adaptive.ServiceToken} ServiceToken.
             @since v2.0.6
          */
          getServiceToken() : ServiceToken {
               return this.serviceToken;
          }

          /**
             @method
             Sets the ServiceToken of the request.

             @param {Adaptive.ServiceToken} serviceToken ServiceToken to be used for the invocation.
             @since v2.0.6
          */
          setServiceToken(serviceToken: ServiceToken) {
               this.serviceToken = serviceToken;
          }

          /**
             @method
             Gets the overridden user-agent string.

             @return {string} User-agent string.
             @since v2.0.6
          */
          getUserAgent() : string {
               return this.userAgent;
          }

          /**
             @method
             Sets the user-agent to override the default user-agent string.

             @param {string} userAgent User-agent string.
             @since v2.0.6
          */
          setUserAgent(userAgent: string) {
               this.userAgent = userAgent;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ServiceRequest.
             @return {Adaptive.ServiceRequest} Wrapped object instance.
          */
          static toObject(object : any) : ServiceRequest {
               var result : ServiceRequest = new ServiceRequest(null, null);

               // Assign values to bean fields.
               if (object!=null && object.userAgent!=null) result.userAgent = object.userAgent;
               if (object!=null && object.content!=null) result.content = object.content;
               if (object!=null && object.contentType!=null) result.contentType = object.contentType;
               if (object!=null && object.contentEncoding!=null) result.contentEncoding = object.contentEncoding;
               if (object!=null && object.contentLength!=null) result.contentLength = object.contentLength;
               if (object != null && object.serviceHeaders != null) {
                    result.serviceHeaders = new Array<ServiceHeader>();
                    for(var i = 0; i < object.serviceHeaders.length; i++) {
                         var __value__ = object.serviceHeaders[i];
                         if (__value__ != null) {
                              result.serviceHeaders.push(ServiceHeader.toObject(__value__));
                         } else {
                              result.serviceHeaders.push(ServiceHeader.toObject(null));
                         }
                    }
               }
               if (object!=null && object.serviceSession!=null) {
                    result.serviceSession = ServiceSession.toObject(object.serviceSession);
               } else {
                    result.serviceSession = ServiceSession.toObject(null);
               }
               if (object != null && object.queryParameters != null) {
                    result.queryParameters = new Array<ServiceRequestParameter>();
                    for(var i = 0; i < object.queryParameters.length; i++) {
                         var __value__ = object.queryParameters[i];
                         if (__value__ != null) {
                              result.queryParameters.push(ServiceRequestParameter.toObject(__value__));
                         } else {
                              result.queryParameters.push(ServiceRequestParameter.toObject(null));
                         }
                    }
               }
               if (object != null && object.bodyParameters != null) {
                    result.bodyParameters = new Array<ServiceRequestParameter>();
                    for(var i = 0; i < object.bodyParameters.length; i++) {
                         var __value__ = object.bodyParameters[i];
                         if (__value__ != null) {
                              result.bodyParameters.push(ServiceRequestParameter.toObject(__value__));
                         } else {
                              result.bodyParameters.push(ServiceRequestParameter.toObject(null));
                         }
                    }
               }
               if (object!=null && object.serviceToken!=null) {
                    result.serviceToken = ServiceToken.toObject(object.serviceToken);
               } else {
                    result.serviceToken = ServiceToken.toObject(null);
               }

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
