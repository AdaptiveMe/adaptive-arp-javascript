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

///<reference path="APIBean.ts"/>
///<reference path="IServiceProtocolVersion.ts"/>
///<reference path="ServiceHeader.ts"/>
///<reference path="ServiceSession.ts"/>

module Adaptive {

     /**
        @class Adaptive.ServiceRequest
        @extends Adaptive.APIBean
        Represents a local or remote service request.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class ServiceRequest extends APIBean {

          /**
             The HTTP procotol version to be used for this request.
          */
          protocolVersion : IServiceProtocolVersion;
          /**
             Request/Response data content (plain text).
          */
          content : string;
          /**
             The byte[] representing the Content field.
          */
          contentBinary : Array<number>;
          /**
             The length in bytes for the binary Content.
          */
          contentBinaryLength : number;
          /**
             Encoding of the binary payload - by default assumed to be UTF8.
          */
          contentEncoding : string;
          /**
             The length in bytes for the Content field.
          */
          contentLength : number;
          /**
             The request/response content type (MIME TYPE).
          */
          contentType : string;
          /**
             The request method
          */
          method : string;
          /**
             The serviceHeaders array (name,value pairs) to be included on the I/O service request.
          */
          serviceHeaders : Array<ServiceHeader>;
          /**
             Information about the session
          */
          serviceSession : ServiceSession;
          /**
             @method constructor
             Contructor used by the implementation

             @param {string} content             Request/Response data content (plain text)
             @param {string} contentType         The request/response content type (MIME TYPE).
             @param {string} contentEncoding     Encoding of the binary payload - by default assumed to be UTF8.
             @param {number} contentLength       The length in bytes for the Content field.
             @param {number[]} contentBinary       The byte[] representing the Content field.
             @param {number} contentBinaryLength The length in bytes for the binary Content.
             @param {Adaptive.ServiceHeader[]} serviceHeaders      The serviceHeaders array (name,value pairs) to be included on the I/O service request.
             @param {string} method              The request method
             @param {Adaptive.IServiceProtocolVersion} protocolVersion     The HTTP procotol version to be used for this request.
             @param {Adaptive.ServiceSession} serviceSession      The element service session
             @since ARP1.0
          */
          constructor(content: string, contentType: string, contentEncoding: string, contentLength: number, contentBinary: Array<number>, contentBinaryLength: number, serviceHeaders: Array<ServiceHeader>, method: string, protocolVersion: IServiceProtocolVersion, serviceSession: ServiceSession) {
               super();
               this.content = content;
               this.contentType = contentType;
               this.contentEncoding = contentEncoding;
               this.contentLength = contentLength;
               this.contentBinary = contentBinary;
               this.contentBinaryLength = contentBinaryLength;
               this.serviceHeaders = serviceHeaders;
               this.method = method;
               this.protocolVersion = protocolVersion;
               this.serviceSession = serviceSession;
          }

          /**
             @method
             Returns the protocol version

             @return {Adaptive.IServiceProtocolVersion} protocolVersion enum
             @since ARP1.0
          */
          getProtocolVersion() : IServiceProtocolVersion {
               return this.protocolVersion;
          }

          /**
             @method
             Set the protocol version

             @param {Adaptive.IServiceProtocolVersion} protocolVersion The HTTP procotol version to be used for this request.
             @since ARP1.0
          */
          setProtocolVersion(protocolVersion: IServiceProtocolVersion) {
               this.protocolVersion = protocolVersion;
          }

          /**
             @method
             Returns the content

             @return {string} content
             @since ARP1.0
          */
          getContent() : string {
               return this.content;
          }

          /**
             @method
             Set the content

             @param {string} content Request/Response data content (plain text)
             @since ARP1.0
          */
          setContent(content: string) {
               this.content = content;
          }

          /**
             @method
             Returns the byte[] of the content

             @return {number[]} contentBinary
             @since ARP1.0
          */
          getContentBinary() : Array<number> {
               return this.contentBinary;
          }

          /**
             @method
             Set the byte[] of the content

             @param {number[]} contentBinary The byte[] representing the Content field.
             @since ARP1.0
          */
          setContentBinary(contentBinary: Array<number>) {
               this.contentBinary = contentBinary;
          }

          /**
             @method
             Retrusn the binary content length

             @return {number} contentBinaryLength
             @since ARP1.0
          */
          getContentBinaryLength() : number {
               return this.contentBinaryLength;
          }

          /**
             @method
             Set the binary content length

             @param {number} contentBinaryLength The length in bytes for the binary Content.
             @since ARP1.0
          */
          setContentBinaryLength(contentBinaryLength: number) {
               this.contentBinaryLength = contentBinaryLength;
          }

          /**
             @method
             Returns the content encoding

             @return {string} contentEncoding
             @since ARP1.0
          */
          getContentEncoding() : string {
               return this.contentEncoding;
          }

          /**
             @method
             Set the content encoding

             @param {string} contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
             @since ARP1.0
          */
          setContentEncoding(contentEncoding: string) {
               this.contentEncoding = contentEncoding;
          }

          /**
             @method
             Returns the content length

             @return {number} contentLength
             @since ARP1.0
          */
          getContentLength() : number {
               return this.contentLength;
          }

          /**
             @method
             Set the content length

             @param {number} contentLength The length in bytes for the Content field.
             @since ARP1.0
          */
          setContentLength(contentLength: number) {
               this.contentLength = contentLength;
          }

          /**
             @method
             Returns the content type

             @return {string} contentType
             @since ARP1.0
          */
          getContentType() : string {
               return this.contentType;
          }

          /**
             @method
             Set the content type

             @param {string} contentType The request/response content type (MIME TYPE).
             @since ARP1.0
          */
          setContentType(contentType: string) {
               this.contentType = contentType;
          }

          /**
             @method
             Returns the method

             @return {string} method
             @since ARP1.0
          */
          getMethod() : string {
               return this.method;
          }

          /**
             @method
             Set the method

             @param {string} method The request method
             @since ARP1.0
          */
          setMethod(method: string) {
               this.method = method;
          }

          /**
             @method
             Returns the array of ServiceHeader

             @return {Adaptive.ServiceHeader[]} serviceHeaders
             @since ARP1.0
          */
          getServiceHeaders() : Array<ServiceHeader> {
               return this.serviceHeaders;
          }

          /**
             @method
             Set the array of ServiceHeader

             @param {Adaptive.ServiceHeader[]} serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
             @since ARP1.0
          */
          setServiceHeaders(serviceHeaders: Array<ServiceHeader>) {
               this.serviceHeaders = serviceHeaders;
          }

          /**
             @method
             Getter for service session

             @return {Adaptive.ServiceSession} The element service session
             @since ARP1.0
          */
          getServiceSession() : ServiceSession {
               return this.serviceSession;
          }

          /**
             @method
             Setter for service session

             @param {Adaptive.ServiceSession} serviceSession The element service session
             @since ARP1.0
          */
          setServiceSession(serviceSession: ServiceSession) {
               this.serviceSession = serviceSession;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ServiceRequest.
             @return {Adaptive.ServiceRequest} Wrapped object instance.
          */
          static toObject(object : any) : ServiceRequest {
               var result : ServiceRequest = new ServiceRequest(null, null, null, null, null, null, null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.content!=null) result.content = object.content;
               if (object!=null && object.contentType!=null) result.contentType = object.contentType;
               if (object!=null && object.contentEncoding!=null) result.contentEncoding = object.contentEncoding;
               if (object!=null && object.contentLength!=null) result.contentLength = object.contentLength;
               if (object != null && object.contentBinary != null) {
                    result.contentBinary = new Array<number>();
                    for(var i = 0; i < object.contentBinary.length; i++) {
                         var __value__ = object.contentBinary[i];
                         if (__value__ != null) result.contentBinary.push(__value__);
                    }
               }
               if (object!=null && object.contentBinaryLength!=null) result.contentBinaryLength = object.contentBinaryLength;
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
               if (object!=null && object.method!=null) result.method = object.method;
               if (object!=null && object.protocolVersion!=null) {
                    result.protocolVersion = IServiceProtocolVersion.toObject(object.protocolVersion);
               } else {
                    result.protocolVersion = IServiceProtocolVersion.toObject(null);
               }
               if (object!=null && object.serviceSession!=null) {
                    result.serviceSession = ServiceSession.toObject(object.serviceSession);
               } else {
                    result.serviceSession = ServiceSession.toObject(null);
               }

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/