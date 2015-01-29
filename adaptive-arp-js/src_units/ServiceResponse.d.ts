/// <reference path="APIBean.d.ts" />
/// <reference path="ServiceHeader.d.ts" />
/// <reference path="ServiceSession.d.ts" />
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
declare module Adaptive {
    /**
       @class Adaptive.ServiceResponse
       @extends Adaptive.APIBean
       Represents a local or remote service response.

       @author Aryslan
       @since v2.0
       @version 1.0
    */
    class ServiceResponse extends APIBean {
        /**
           @property {string} content
           Response data content. The content should be in some well-known web format - in specific, binaries returned
should be encoded in base64.
        */
        content: string;
        /**
           @property {string} contentProperty
           Response data content. The content should be in some well-known web format - in specific, binaries returned
should be encoded in base64. The 'contentProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'content'.
        */
        contentProperty: string;
        /**
           @property {string} contentEncoding
           Encoding of the binary payload - by default assumed to be UTF8.
        */
        contentEncoding: string;
        /**
           @property {string} contentEncodingProperty
           Encoding of the binary payload - by default assumed to be UTF8. The 'contentEncodingProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'contentEncoding'.
        */
        contentEncodingProperty: string;
        /**
           @property {number} contentLength
           The length in bytes for the Content field.
        */
        contentLength: number;
        /**
           @property {number} contentLengthProperty
           The length in bytes for the Content field. The 'contentLengthProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'contentLength'.
        */
        contentLengthProperty: number;
        /**
           @property {string} contentType
           The request/response content type (MIME TYPE).
        */
        contentType: string;
        /**
           @property {string} contentTypeProperty
           The request/response content type (MIME TYPE). The 'contentTypeProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'contentType'.
        */
        contentTypeProperty: string;
        /**
           @property {Adaptive.ServiceHeader[]} serviceHeaders
           The serviceHeaders array (name,value pairs) to be included on the I/O service request.
        */
        serviceHeaders: ServiceHeader[];
        /**
           @property {Adaptive.ServiceHeader[]} serviceHeadersProperty
           The serviceHeaders array (name,value pairs) to be included on the I/O service request. The 'serviceHeadersProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'serviceHeaders'.
        */
        serviceHeadersProperty: ServiceHeader[];
        /**
           @property {Adaptive.ServiceSession} serviceSession
           Information about the session.
        */
        serviceSession: ServiceSession;
        /**
           @property {Adaptive.ServiceSession} serviceSessionProperty
           Information about the session. The 'serviceSessionProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'serviceSession'.
        */
        serviceSessionProperty: ServiceSession;
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
        constructor(content: string, contentType: string, contentEncoding: string, contentLength: number, serviceHeaders: ServiceHeader[], serviceSession: ServiceSession);
        /**
           @method
           Returns the content

           @return {string} content
           @since v2.0
        */
        getContent(): string;
        /**
           @method
           Set the content

           @param {string} content Request/Response data content (plain text).
           @since v2.0
        */
        setContent(content: string): void;
        /**
           @method
           Returns the content encoding

           @return {string} contentEncoding
           @since v2.0
        */
        getContentEncoding(): string;
        /**
           @method
           Set the content encoding

           @param {string} contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
           @since v2.0
        */
        setContentEncoding(contentEncoding: string): void;
        /**
           @method
           Returns the content length

           @return {number} contentLength
           @since v2.0
        */
        getContentLength(): number;
        /**
           @method
           Set the content length

           @param {number} contentLength The length in bytes for the Content field.
           @since v2.0
        */
        setContentLength(contentLength: number): void;
        /**
           @method
           Returns the content type

           @return {string} contentType
           @since v2.0
        */
        getContentType(): string;
        /**
           @method
           Set the content type

           @param {string} contentType The request/response content type (MIME TYPE).
           @since v2.0
        */
        setContentType(contentType: string): void;
        /**
           @method
           Returns the array of ServiceHeader

           @return {Adaptive.ServiceHeader[]} serviceHeaders
           @since v2.0
        */
        getServiceHeaders(): ServiceHeader[];
        /**
           @method
           Set the array of ServiceHeader

           @param {Adaptive.ServiceHeader[]} serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @since v2.0
        */
        setServiceHeaders(serviceHeaders: ServiceHeader[]): void;
        /**
           @method
           Getter for service session

           @return {Adaptive.ServiceSession} The element service session
           @since v2.0
        */
        getServiceSession(): ServiceSession;
        /**
           @method
           Setter for service session

           @param {Adaptive.ServiceSession} serviceSession The element service session
           @since v2.0
        */
        setServiceSession(serviceSession: ServiceSession): void;
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ServiceResponse.
           @return {Adaptive.ServiceResponse} Wrapped object instance.
        */
        static toObject(object: any): ServiceResponse;
    }
}
