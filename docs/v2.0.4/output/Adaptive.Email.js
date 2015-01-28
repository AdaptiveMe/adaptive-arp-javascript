Ext.data.JsonP.Adaptive_Email({"tagname":"class","name":"Adaptive.Email","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-Email"}],"extends":"Adaptive.APIBean","author":[{"tagname":"author","name":"Francisco Javier Martin Bueno","email":null}],"since":"ARP1.0","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.Email","id":"method-constructor","meta":{}},{"name":"getBccRecipients","tagname":"method","owner":"Adaptive.Email","id":"method-getBccRecipients","meta":{}},{"name":"getCcRecipients","tagname":"method","owner":"Adaptive.Email","id":"method-getCcRecipients","meta":{}},{"name":"getEmailAttachmentData","tagname":"method","owner":"Adaptive.Email","id":"method-getEmailAttachmentData","meta":{}},{"name":"getMessageBody","tagname":"method","owner":"Adaptive.Email","id":"method-getMessageBody","meta":{}},{"name":"getMessageBodyMimeType","tagname":"method","owner":"Adaptive.Email","id":"method-getMessageBodyMimeType","meta":{}},{"name":"getSubject","tagname":"method","owner":"Adaptive.Email","id":"method-getSubject","meta":{}},{"name":"getToRecipients","tagname":"method","owner":"Adaptive.Email","id":"method-getToRecipients","meta":{}},{"name":"setBccRecipients","tagname":"method","owner":"Adaptive.Email","id":"method-setBccRecipients","meta":{}},{"name":"setCcRecipients","tagname":"method","owner":"Adaptive.Email","id":"method-setCcRecipients","meta":{}},{"name":"setEmailAttachmentData","tagname":"method","owner":"Adaptive.Email","id":"method-setEmailAttachmentData","meta":{}},{"name":"setMessageBody","tagname":"method","owner":"Adaptive.Email","id":"method-setMessageBody","meta":{}},{"name":"setMessageBodyMimeType","tagname":"method","owner":"Adaptive.Email","id":"method-setMessageBodyMimeType","meta":{}},{"name":"setSubject","tagname":"method","owner":"Adaptive.Email","id":"method-setSubject","meta":{}},{"name":"setToRecipients","tagname":"method","owner":"Adaptive.Email","id":"method-setToRecipients","meta":{}},{"name":"toObject","tagname":"method","owner":"Adaptive.Email","id":"static-method-toObject","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.Email","short_doc":"Structure representing the data elements of an email. ...","component":false,"superclasses":["Adaptive.APIBean"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.APIBean' rel='Adaptive.APIBean' class='docClass'>Adaptive.APIBean</a><div class='subclass '><strong>Adaptive.Email</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-Email' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Structure representing the data elements of an email.</p>\n\n<p>@version 1.0</p>\n        <p>Available since: <b>ARP1.0</b></p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.Email-method-constructor' class='name expandable'>Adaptive.Email</a>( <span class='pre'>toRecipients, ccRecipients, bccRecipients, emailAttachmentData, messageBody, messageBodyMimeType, subject</span> ) : <a href=\"#!/api/Adaptive.Email\" rel=\"Adaptive.Email\" class=\"docClass\">Adaptive.Email</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor used by the implementation ...</div><div class='long'><p>Constructor used by the implementation</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>toRecipients</span> : <a href=\"#!/api/Adaptive.EmailAddress\" rel=\"Adaptive.EmailAddress\" class=\"docClass\">Adaptive.EmailAddress</a>[]<div class='sub-desc'><p>array of recipients</p>\n</div></li><li><span class='pre'>ccRecipients</span> : <a href=\"#!/api/Adaptive.EmailAddress\" rel=\"Adaptive.EmailAddress\" class=\"docClass\">Adaptive.EmailAddress</a>[]<div class='sub-desc'><p>array of cc recipients</p>\n</div></li><li><span class='pre'>bccRecipients</span> : <a href=\"#!/api/Adaptive.EmailAddress\" rel=\"Adaptive.EmailAddress\" class=\"docClass\">Adaptive.EmailAddress</a>[]<div class='sub-desc'><p>array of bcc recipients</p>\n</div></li><li><span class='pre'>emailAttachmentData</span> : <a href=\"#!/api/Adaptive.EmailAttachmentData\" rel=\"Adaptive.EmailAttachmentData\" class=\"docClass\">Adaptive.EmailAttachmentData</a>[]<div class='sub-desc'><p>array of attatchments</p>\n</div></li><li><span class='pre'>messageBody</span> : string<div class='sub-desc'><p>body of the email</p>\n</div></li><li><span class='pre'>messageBodyMimeType</span> : string<div class='sub-desc'><p>mime type of the body</p>\n</div></li><li><span class='pre'>subject</span> : string<div class='sub-desc'><p>of the email</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.Email\" rel=\"Adaptive.Email\" class=\"docClass\">Adaptive.Email</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.APIBean-method-constructor\" rel=\"Adaptive.APIBean-method-constructor\" class=\"docClass\">Adaptive.APIBean.constructor</a></p></div></div></div><div id='method-getBccRecipients' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-getBccRecipients' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-getBccRecipients' class='name expandable'>getBccRecipients</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.EmailAddress\" rel=\"Adaptive.EmailAddress\" class=\"docClass\">Adaptive.EmailAddress</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the array of recipients ...</div><div class='long'><p>Returns the array of recipients</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.EmailAddress\" rel=\"Adaptive.EmailAddress\" class=\"docClass\">Adaptive.EmailAddress</a>[]</span><div class='sub-desc'><p>bccRecipients array of bcc recipients</p>\n</div></li></ul></div></div></div><div id='method-getCcRecipients' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-getCcRecipients' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-getCcRecipients' class='name expandable'>getCcRecipients</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.EmailAddress\" rel=\"Adaptive.EmailAddress\" class=\"docClass\">Adaptive.EmailAddress</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the array of recipients ...</div><div class='long'><p>Returns the array of recipients</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.EmailAddress\" rel=\"Adaptive.EmailAddress\" class=\"docClass\">Adaptive.EmailAddress</a>[]</span><div class='sub-desc'><p>ccRecipients array of cc recipients</p>\n</div></li></ul></div></div></div><div id='method-getEmailAttachmentData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-getEmailAttachmentData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-getEmailAttachmentData' class='name expandable'>getEmailAttachmentData</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.EmailAttachmentData\" rel=\"Adaptive.EmailAttachmentData\" class=\"docClass\">Adaptive.EmailAttachmentData</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns an array of attachments ...</div><div class='long'><p>Returns an array of attachments</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.EmailAttachmentData\" rel=\"Adaptive.EmailAttachmentData\" class=\"docClass\">Adaptive.EmailAttachmentData</a>[]</span><div class='sub-desc'><p>emailAttachmentData array with the email attachments</p>\n</div></li></ul></div></div></div><div id='method-getMessageBody' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-getMessageBody' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-getMessageBody' class='name expandable'>getMessageBody</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the message body of the email ...</div><div class='long'><p>Returns the message body of the email</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>message Body string of the email</p>\n</div></li></ul></div></div></div><div id='method-getMessageBodyMimeType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-getMessageBodyMimeType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-getMessageBodyMimeType' class='name expandable'>getMessageBodyMimeType</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the myme type of the message body ...</div><div class='long'><p>Returns the myme type of the message body</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>mime type string of the message boddy</p>\n</div></li></ul></div></div></div><div id='method-getSubject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-getSubject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-getSubject' class='name expandable'>getSubject</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the subject of the email ...</div><div class='long'><p>Returns the subject of the email</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>subject string of the email</p>\n</div></li></ul></div></div></div><div id='method-getToRecipients' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-getToRecipients' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-getToRecipients' class='name expandable'>getToRecipients</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.EmailAddress\" rel=\"Adaptive.EmailAddress\" class=\"docClass\">Adaptive.EmailAddress</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the array of recipients ...</div><div class='long'><p>Returns the array of recipients</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.EmailAddress\" rel=\"Adaptive.EmailAddress\" class=\"docClass\">Adaptive.EmailAddress</a>[]</span><div class='sub-desc'><p>toRecipients array of recipients</p>\n</div></li></ul></div></div></div><div id='method-setBccRecipients' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-setBccRecipients' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-setBccRecipients' class='name expandable'>setBccRecipients</a>( <span class='pre'>bccRecipients</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the array of recipients ...</div><div class='long'><p>Set the array of recipients</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bccRecipients</span> : <a href=\"#!/api/Adaptive.EmailAddress\" rel=\"Adaptive.EmailAddress\" class=\"docClass\">Adaptive.EmailAddress</a>[]<div class='sub-desc'><p>array of bcc recipients</p>\n</div></li></ul></div></div></div><div id='method-setCcRecipients' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-setCcRecipients' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-setCcRecipients' class='name expandable'>setCcRecipients</a>( <span class='pre'>ccRecipients</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the array of recipients ...</div><div class='long'><p>Set the array of recipients</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ccRecipients</span> : <a href=\"#!/api/Adaptive.EmailAddress\" rel=\"Adaptive.EmailAddress\" class=\"docClass\">Adaptive.EmailAddress</a>[]<div class='sub-desc'><p>array of cc recipients</p>\n</div></li></ul></div></div></div><div id='method-setEmailAttachmentData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-setEmailAttachmentData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-setEmailAttachmentData' class='name expandable'>setEmailAttachmentData</a>( <span class='pre'>emailAttachmentData</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the email attachment data array ...</div><div class='long'><p>Set the email attachment data array</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>emailAttachmentData</span> : <a href=\"#!/api/Adaptive.EmailAttachmentData\" rel=\"Adaptive.EmailAttachmentData\" class=\"docClass\">Adaptive.EmailAttachmentData</a>[]<div class='sub-desc'><p>array of email attatchments</p>\n</div></li></ul></div></div></div><div id='method-setMessageBody' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-setMessageBody' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-setMessageBody' class='name expandable'>setMessageBody</a>( <span class='pre'>messageBody</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the message body of the email ...</div><div class='long'><p>Set the message body of the email</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>messageBody</span> : string<div class='sub-desc'><p>message body of the email</p>\n</div></li></ul></div></div></div><div id='method-setMessageBodyMimeType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-setMessageBodyMimeType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-setMessageBodyMimeType' class='name expandable'>setMessageBodyMimeType</a>( <span class='pre'>messageBodyMimeType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the mime type for the message body ...</div><div class='long'><p>Set the mime type for the message body</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>messageBodyMimeType</span> : string<div class='sub-desc'><p>type of the body message</p>\n</div></li></ul></div></div></div><div id='method-setSubject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-setSubject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-setSubject' class='name expandable'>setSubject</a>( <span class='pre'>subject</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the subject of the email ...</div><div class='long'><p>Set the subject of the email</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>subject</span> : string<div class='sub-desc'><p>of the email</p>\n</div></li></ul></div></div></div><div id='method-setToRecipients' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-method-setToRecipients' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-method-setToRecipients' class='name expandable'>setToRecipients</a>( <span class='pre'>toRecipients</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the array of recipients ...</div><div class='long'><p>Set the array of recipients</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>toRecipients</span> : <a href=\"#!/api/Adaptive.EmailAddress\" rel=\"Adaptive.EmailAddress\" class=\"docClass\">Adaptive.EmailAddress</a>[]<div class='sub-desc'><p>array of recipients</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-toObject' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Email'>Adaptive.Email</span><br/><a href='source/Adaptive.html#Adaptive-Email-static-method-toObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Email-static-method-toObject' class='name expandable'>toObject</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/Adaptive.Email\" rel=\"Adaptive.Email\" class=\"docClass\">Adaptive.Email</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Convert JSON parsed object to typed equivalent. ...</div><div class='long'><p>Convert JSON parsed object to typed equivalent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>JSON parsed structure of type <a href=\"#!/api/Adaptive.Email\" rel=\"Adaptive.Email\" class=\"docClass\">Adaptive.Email</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.Email\" rel=\"Adaptive.Email\" class=\"docClass\">Adaptive.Email</a></span><div class='sub-desc'><p>Wrapped object instance.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});