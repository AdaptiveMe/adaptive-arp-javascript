/// <reference path="APIBean.d.ts" />
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
       @class Adaptive.EmailAttachmentData
       @extends Adaptive.APIBean
       Structure representing the binary attachment data.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class EmailAttachmentData extends APIBean {
        /**
           The raw data for the current file attachment (byte array)
        */
        data: number[];
        /**
           The name of the current file attachment
        */
        fileName: string;
        /**
           The mime type of the current attachment
        */
        mimeType: string;
        /**
           The relative path where the contents for the attachment file could be located.
        */
        referenceUrl: string;
        /**
           The data size (in bytes) of the current file attachment
        */
        size: number;
        /**
           @method constructor
           Constructor with fields

           @param {number[]} data         raw data of the file attachment
           @param {number} size         size of the file attachment
           @param {string} fileName     name of the file attachment
           @param {string} mimeType     mime type of the file attachment
           @param {string} referenceUrl relative url of the file attachment
           @since ARP1.0
        */
        constructor(data: number[], size: number, fileName: string, mimeType: string, referenceUrl: string);
        /**
           @method
           Returns the raw data in byte[]

           @return {number[]} data Octet-binary content of the attachment payload.
           @since ARP1.0
        */
        getData(): number[];
        /**
           @method
           Set the data of the attachment as a byte[]

           @param {number[]} data Sets the octet-binary content of the attachment.
           @since ARP1.0
        */
        setData(data: number[]): void;
        /**
           @method
           Returns the filename of the attachment

           @return {string} fileName Name of the attachment.
           @since ARP1.0
        */
        getFileName(): string;
        /**
           @method
           Set the name of the file attachment

           @param {string} fileName Name of the attachment.
           @since ARP1.0
        */
        setFileName(fileName: string): void;
        /**
           @method
           Returns the mime type of the attachment

           @return {string} mimeType
           @since ARP1.0
        */
        getMimeType(): string;
        /**
           @method
           Set the mime type of the attachment

           @param {string} mimeType Mime-type of the attachment.
           @since ARP1.0
        */
        setMimeType(mimeType: string): void;
        /**
           @method
           Returns the absolute url of the file attachment

           @return {string} referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        getReferenceUrl(): string;
        /**
           @method
           Set the absolute url of the attachment

           @param {string} referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        setReferenceUrl(referenceUrl: string): void;
        /**
           @method
           Returns the size of the attachment as a long

           @return {number} size Length in bytes of the octet-binary content.
           @since ARP1.0
        */
        getSize(): number;
        /**
           @method
           Set the size of the attachment as a long

           @param {number} size Length in bytes of the octet-binary content ( should be same as data array length.)
           @since ARP1.0
        */
        setSize(size: number): void;
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.EmailAttachmentData.
           @return {Adaptive.EmailAttachmentData} Wrapped object instance.
        */
        static toObject(object: any): EmailAttachmentData;
    }
}
