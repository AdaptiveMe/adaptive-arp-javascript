/// <reference path="APIBean.d.ts" />
/// <reference path="IServiceProtocolVersion.d.ts" />
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

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       @class Adaptive.ServiceRequest
       @extends Adaptive.APIBean
       Represents a local or remote service request.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    class ServiceRequest extends APIBean {
        /**
           The HTTP procotol version to be used for this request.
        */
        protocolVersion: IServiceProtocolVersion;
        /**
           Request/Response data content (plain text).
        */
        content: string;
        /**
           The byte[] representing the Content field.
        */
        contentBinary: number[];
        /**
           The length in bytes for the binary Content.
        */
        contentBinaryLength: number;
        /**
           Encoding of the binary payload - by default assumed to be UTF8.
        */
        contentEncoding: string;
        /**
           The length in bytes for the Content field.
        */
        contentLength: number;
        /**
           The request/response content type (MIME TYPE).
        */
        contentType: string;
        /**
           The request method
        */
        method: string;
        /**
           The serviceHeaders array (name,value pairs) to be included on the I/O service request.
        */
        serviceHeaders: ServiceHeader[];
        /**
           Information about the session
        */
        serviceSession: ServiceSession;
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
        constructor(content: string, contentType: string, contentEncoding: string, contentLength: number, contentBinary: number[], contentBinaryLength: number, serviceHeaders: ServiceHeader[], method: string, protocolVersion: IServiceProtocolVersion, serviceSession: ServiceSession);
        /**
           @method
           Returns the protocol version

           @return {Adaptive.IServiceProtocolVersion} protocolVersion enum
           @since ARP1.0
        */
        getProtocolVersion(): IServiceProtocolVersion;
        /**
           @method
           Set the protocol version

           @param {Adaptive.IServiceProtocolVersion} protocolVersion The HTTP procotol version to be used for this request.
           @since ARP1.0
        */
        setProtocolVersion(protocolVersion: IServiceProtocolVersion): void;
        /**
           @method
           Returns the content

           @return {string} content
           @since ARP1.0
        */
        getContent(): string;
        /**
           @method
           Set the content

           @param {string} content Request/Response data content (plain text)
           @since ARP1.0
        */
        setContent(content: string): void;
        /**
           @method
           Returns the byte[] of the content

           @return {number[]} contentBinary
           @since ARP1.0
        */
        getContentBinary(): number[];
        /**
           @method
           Set the byte[] of the content

           @param {number[]} contentBinary The byte[] representing the Content field.
           @since ARP1.0
        */
        setContentBinary(contentBinary: number[]): void;
        /**
           @method
           Retrusn the binary content length

           @return {number} contentBinaryLength
           @since ARP1.0
        */
        getContentBinaryLength(): number;
        /**
           @method
           Set the binary content length

           @param {number} contentBinaryLength The length in bytes for the binary Content.
           @since ARP1.0
        */
        setContentBinaryLength(contentBinaryLength: number): void;
        /**
           @method
           Returns the content encoding

           @return {string} contentEncoding
           @since ARP1.0
        */
        getContentEncoding(): string;
        /**
           @method
           Set the content encoding

           @param {string} contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
           @since ARP1.0
        */
        setContentEncoding(contentEncoding: string): void;
        /**
           @method
           Returns the content length

           @return {number} contentLength
           @since ARP1.0
        */
        getContentLength(): number;
        /**
           @method
           Set the content length

           @param {number} contentLength The length in bytes for the Content field.
           @since ARP1.0
        */
        setContentLength(contentLength: number): void;
        /**
           @method
           Returns the content type

           @return {string} contentType
           @since ARP1.0
        */
        getContentType(): string;
        /**
           @method
           Set the content type

           @param {string} contentType The request/response content type (MIME TYPE).
           @since ARP1.0
        */
        setContentType(contentType: string): void;
        /**
           @method
           Returns the method

           @return {string} method
           @since ARP1.0
        */
        getMethod(): string;
        /**
           @method
           Set the method

           @param {string} method The request method
           @since ARP1.0
        */
        setMethod(method: string): void;
        /**
           @method
           Returns the array of ServiceHeader

           @return {Adaptive.ServiceHeader[]} serviceHeaders
           @since ARP1.0
        */
        getServiceHeaders(): ServiceHeader[];
        /**
           @method
           Set the array of ServiceHeader

           @param {Adaptive.ServiceHeader[]} serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @since ARP1.0
        */
        setServiceHeaders(serviceHeaders: ServiceHeader[]): void;
        /**
           @method
           Getter for service session

           @return {Adaptive.ServiceSession} The element service session
           @since ARP1.0
        */
        getServiceSession(): ServiceSession;
        /**
           @method
           Setter for service session

           @param {Adaptive.ServiceSession} serviceSession The element service session
           @since ARP1.0
        */
        setServiceSession(serviceSession: ServiceSession): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ServiceRequest;
    }
}
