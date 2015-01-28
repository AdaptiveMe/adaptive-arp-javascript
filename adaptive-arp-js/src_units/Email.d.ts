/// <reference path="APIBean.d.ts" />
/// <reference path="EmailAddress.d.ts" />
/// <reference path="EmailAttachmentData.d.ts" />
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
       @class Adaptive.Email
       @extends Adaptive.APIBean
       Structure representing the data elements of an email.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class Email extends APIBean {
        /**
           Array of Email Blind Carbon Copy recipients
        */
        bccRecipients: EmailAddress[];
        /**
           Array of Email Carbon Copy recipients
        */
        ccRecipients: EmailAddress[];
        /**
           Array of attatchments
        */
        emailAttachmentData: EmailAttachmentData[];
        /**
           Message body
        */
        messageBody: string;
        /**
           Message body mime type
        */
        messageBodyMimeType: string;
        /**
           Subject of the email
        */
        subject: string;
        /**
           Array of Email recipients
        */
        toRecipients: EmailAddress[];
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.EmailAddress[]} toRecipients        array of recipients
           @param {Adaptive.EmailAddress[]} ccRecipients        array of cc recipients
           @param {Adaptive.EmailAddress[]} bccRecipients       array of bcc recipients
           @param {Adaptive.EmailAttachmentData[]} emailAttachmentData array of attatchments
           @param {string} messageBody         body of the email
           @param {string} messageBodyMimeType mime type of the body
           @param {string} subject             of the email
           @since ARP1.0
        */
        constructor(toRecipients: EmailAddress[], ccRecipients: EmailAddress[], bccRecipients: EmailAddress[], emailAttachmentData: EmailAttachmentData[], messageBody: string, messageBodyMimeType: string, subject: string);
        /**
           @method
           Returns the array of recipients

           @return {Adaptive.EmailAddress[]} bccRecipients array of bcc recipients
           @since ARP1.0
        */
        getBccRecipients(): EmailAddress[];
        /**
           @method
           Set the array of recipients

           @param {Adaptive.EmailAddress[]} bccRecipients array of bcc recipients
           @since ARP1.0
        */
        setBccRecipients(bccRecipients: EmailAddress[]): void;
        /**
           @method
           Returns the array of recipients

           @return {Adaptive.EmailAddress[]} ccRecipients array of cc recipients
           @since ARP1.0
        */
        getCcRecipients(): EmailAddress[];
        /**
           @method
           Set the array of recipients

           @param {Adaptive.EmailAddress[]} ccRecipients array of cc recipients
           @since ARP1.0
        */
        setCcRecipients(ccRecipients: EmailAddress[]): void;
        /**
           @method
           Returns an array of attachments

           @return {Adaptive.EmailAttachmentData[]} emailAttachmentData array with the email attachments
           @since ARP1.0
        */
        getEmailAttachmentData(): EmailAttachmentData[];
        /**
           @method
           Set the email attachment data array

           @param {Adaptive.EmailAttachmentData[]} emailAttachmentData array of email attatchments
           @since ARP1.0
        */
        setEmailAttachmentData(emailAttachmentData: EmailAttachmentData[]): void;
        /**
           @method
           Returns the message body of the email

           @return {string} message Body string of the email
           @since ARP1.0
        */
        getMessageBody(): string;
        /**
           @method
           Set the message body of the email

           @param {string} messageBody message body of the email
           @since ARP1.0
        */
        setMessageBody(messageBody: string): void;
        /**
           @method
           Returns the myme type of the message body

           @return {string} mime type string of the message boddy
           @since ARP1.0
        */
        getMessageBodyMimeType(): string;
        /**
           @method
           Set the mime type for the message body

           @param {string} messageBodyMimeType type of the body message
           @since ARP1.0
        */
        setMessageBodyMimeType(messageBodyMimeType: string): void;
        /**
           @method
           Returns the subject of the email

           @return {string} subject string of the email
           @since ARP1.0
        */
        getSubject(): string;
        /**
           @method
           Set the subject of the email

           @param {string} subject of the email
           @since ARP1.0
        */
        setSubject(subject: string): void;
        /**
           @method
           Returns the array of recipients

           @return {Adaptive.EmailAddress[]} toRecipients array of recipients
           @since ARP1.0
        */
        getToRecipients(): EmailAddress[];
        /**
           @method
           Set the array of recipients

           @param {Adaptive.EmailAddress[]} toRecipients array of recipients
           @since ARP1.0
        */
        setToRecipients(toRecipients: EmailAddress[]): void;
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.Email.
           @return {Adaptive.Email} Wrapped object instance.
        */
        static toObject(object: any): Email;
    }
}