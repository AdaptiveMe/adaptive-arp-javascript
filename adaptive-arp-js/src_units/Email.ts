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
///<reference path="EmailAddress.ts"/>
///<reference path="EmailAttachmentData.ts"/>

module Adaptive {

     /**
        @class Adaptive.Email
        @extends Adaptive.APIBean
        Structure representing the data elements of an email.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class Email extends APIBean {

          /**
             Array of Email Blind Carbon Copy recipients
          */
          bccRecipients : Array<EmailAddress>;
          /**
             Array of Email Carbon Copy recipients
          */
          ccRecipients : Array<EmailAddress>;
          /**
             Array of attatchments
          */
          emailAttachmentData : Array<EmailAttachmentData>;
          /**
             Message body
          */
          messageBody : string;
          /**
             Message body mime type
          */
          messageBodyMimeType : string;
          /**
             Subject of the email
          */
          subject : string;
          /**
             Array of Email recipients
          */
          toRecipients : Array<EmailAddress>;
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
          constructor(toRecipients: Array<EmailAddress>, ccRecipients: Array<EmailAddress>, bccRecipients: Array<EmailAddress>, emailAttachmentData: Array<EmailAttachmentData>, messageBody: string, messageBodyMimeType: string, subject: string) {
               super();
               this.toRecipients = toRecipients;
               this.ccRecipients = ccRecipients;
               this.bccRecipients = bccRecipients;
               this.emailAttachmentData = emailAttachmentData;
               this.messageBody = messageBody;
               this.messageBodyMimeType = messageBodyMimeType;
               this.subject = subject;
          }

          /**
             @method
             Returns the array of recipients

             @return {Adaptive.EmailAddress[]} bccRecipients array of bcc recipients
             @since ARP1.0
          */
          getBccRecipients() : Array<EmailAddress> {
               return this.bccRecipients;
          }

          /**
             @method
             Set the array of recipients

             @param {Adaptive.EmailAddress[]} bccRecipients array of bcc recipients
             @since ARP1.0
          */
          setBccRecipients(bccRecipients: Array<EmailAddress>) {
               this.bccRecipients = bccRecipients;
          }

          /**
             @method
             Returns the array of recipients

             @return {Adaptive.EmailAddress[]} ccRecipients array of cc recipients
             @since ARP1.0
          */
          getCcRecipients() : Array<EmailAddress> {
               return this.ccRecipients;
          }

          /**
             @method
             Set the array of recipients

             @param {Adaptive.EmailAddress[]} ccRecipients array of cc recipients
             @since ARP1.0
          */
          setCcRecipients(ccRecipients: Array<EmailAddress>) {
               this.ccRecipients = ccRecipients;
          }

          /**
             @method
             Returns an array of attachments

             @return {Adaptive.EmailAttachmentData[]} emailAttachmentData array with the email attachments
             @since ARP1.0
          */
          getEmailAttachmentData() : Array<EmailAttachmentData> {
               return this.emailAttachmentData;
          }

          /**
             @method
             Set the email attachment data array

             @param {Adaptive.EmailAttachmentData[]} emailAttachmentData array of email attatchments
             @since ARP1.0
          */
          setEmailAttachmentData(emailAttachmentData: Array<EmailAttachmentData>) {
               this.emailAttachmentData = emailAttachmentData;
          }

          /**
             @method
             Returns the message body of the email

             @return {string} message Body string of the email
             @since ARP1.0
          */
          getMessageBody() : string {
               return this.messageBody;
          }

          /**
             @method
             Set the message body of the email

             @param {string} messageBody message body of the email
             @since ARP1.0
          */
          setMessageBody(messageBody: string) {
               this.messageBody = messageBody;
          }

          /**
             @method
             Returns the myme type of the message body

             @return {string} mime type string of the message boddy
             @since ARP1.0
          */
          getMessageBodyMimeType() : string {
               return this.messageBodyMimeType;
          }

          /**
             @method
             Set the mime type for the message body

             @param {string} messageBodyMimeType type of the body message
             @since ARP1.0
          */
          setMessageBodyMimeType(messageBodyMimeType: string) {
               this.messageBodyMimeType = messageBodyMimeType;
          }

          /**
             @method
             Returns the subject of the email

             @return {string} subject string of the email
             @since ARP1.0
          */
          getSubject() : string {
               return this.subject;
          }

          /**
             @method
             Set the subject of the email

             @param {string} subject of the email
             @since ARP1.0
          */
          setSubject(subject: string) {
               this.subject = subject;
          }

          /**
             @method
             Returns the array of recipients

             @return {Adaptive.EmailAddress[]} toRecipients array of recipients
             @since ARP1.0
          */
          getToRecipients() : Array<EmailAddress> {
               return this.toRecipients;
          }

          /**
             @method
             Set the array of recipients

             @param {Adaptive.EmailAddress[]} toRecipients array of recipients
             @since ARP1.0
          */
          setToRecipients(toRecipients: Array<EmailAddress>) {
               this.toRecipients = toRecipients;
          }

          /**
             Convert JSON parsed object to typed equivalent.
          */
          static toObject(object : any) : Email {
               var result : Email = new Email(null, null, null, null, null, null, null);

               // Assign values to bean fields.
               if (object != null && object.toRecipients != null) {
                    result.toRecipients = new Array<EmailAddress>();
                    for(var i = 0; i < object.toRecipients.length; i++) {
                         var __value__ = object.toRecipients[i];
                         if (__value__ != null) {
                              result.toRecipients.push(EmailAddress.toObject(__value__));
                         } else {
                              result.toRecipients.push(EmailAddress.toObject(null));
                         }
                    }
               }
               if (object != null && object.ccRecipients != null) {
                    result.ccRecipients = new Array<EmailAddress>();
                    for(var i = 0; i < object.ccRecipients.length; i++) {
                         var __value__ = object.ccRecipients[i];
                         if (__value__ != null) {
                              result.ccRecipients.push(EmailAddress.toObject(__value__));
                         } else {
                              result.ccRecipients.push(EmailAddress.toObject(null));
                         }
                    }
               }
               if (object != null && object.bccRecipients != null) {
                    result.bccRecipients = new Array<EmailAddress>();
                    for(var i = 0; i < object.bccRecipients.length; i++) {
                         var __value__ = object.bccRecipients[i];
                         if (__value__ != null) {
                              result.bccRecipients.push(EmailAddress.toObject(__value__));
                         } else {
                              result.bccRecipients.push(EmailAddress.toObject(null));
                         }
                    }
               }
               if (object != null && object.emailAttachmentData != null) {
                    result.emailAttachmentData = new Array<EmailAttachmentData>();
                    for(var i = 0; i < object.emailAttachmentData.length; i++) {
                         var __value__ = object.emailAttachmentData[i];
                         if (__value__ != null) {
                              result.emailAttachmentData.push(EmailAttachmentData.toObject(__value__));
                         } else {
                              result.emailAttachmentData.push(EmailAttachmentData.toObject(null));
                         }
                    }
               }
               if (object!=null && object.messageBody!=null) result.messageBody = object.messageBody;
               if (object!=null && object.messageBodyMimeType!=null) result.messageBodyMimeType = object.messageBodyMimeType;
               if (object!=null && object.subject!=null) result.subject = object.subject;

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
