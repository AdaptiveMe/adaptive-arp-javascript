Ext.data.JsonP.Adaptive_MailBridge({"tagname":"class","name":"Adaptive.MailBridge","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-MailBridge"}],"extends":"Adaptive.BasePIMBridge","author":[{"tagname":"author","name":"Francisco Javier Martin Bueno","email":null}],"since":"ARP1.0","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.MailBridge","id":"method-constructor","meta":{}},{"name":"getAPIGroup","tagname":"method","owner":"Adaptive.BasePIMBridge","id":"method-getAPIGroup","meta":{}},{"name":"getAPIVersion","tagname":"method","owner":"Adaptive.BasePIMBridge","id":"method-getAPIVersion","meta":{}},{"name":"sendEmail","tagname":"method","owner":"Adaptive.MailBridge","id":"method-sendEmail","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.MailBridge","component":false,"superclasses":["Adaptive.BasePIMBridge"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.BasePIMBridge' rel='Adaptive.BasePIMBridge' class='docClass'>Adaptive.BasePIMBridge</a><div class='subclass '><strong>Adaptive.MailBridge</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-MailBridge' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Interface for Managing the Mail operations</p>\n        <p>Available since: <b>ARP1.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.MailBridge'>Adaptive.MailBridge</span><br/><a href='source/Adaptive.html#Adaptive-MailBridge-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.MailBridge-method-constructor' class='name expandable'>Adaptive.MailBridge</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.MailBridge\" rel=\"Adaptive.MailBridge\" class=\"docClass\">Adaptive.MailBridge</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Default constructor. ...</div><div class='long'><p>Default constructor.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.MailBridge\" rel=\"Adaptive.MailBridge\" class=\"docClass\">Adaptive.MailBridge</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.BasePIMBridge-method-constructor\" rel=\"Adaptive.BasePIMBridge-method-constructor\" class=\"docClass\">Adaptive.BasePIMBridge.constructor</a></p></div></div></div><div id='method-getAPIGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BasePIMBridge' rel='Adaptive.BasePIMBridge' class='defined-in docClass'>Adaptive.BasePIMBridge</a><br/><a href='source/Adaptive.html#Adaptive-BasePIMBridge-method-getAPIGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BasePIMBridge-method-getAPIGroup' class='name expandable'>getAPIGroup</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API group for the given interface. ...</div><div class='long'><p>Return the API group for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAPIVersion' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BasePIMBridge' rel='Adaptive.BasePIMBridge' class='defined-in docClass'>Adaptive.BasePIMBridge</a><br/><a href='source/Adaptive.html#Adaptive-BasePIMBridge-method-getAPIVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BasePIMBridge-method-getAPIVersion' class='name expandable'>getAPIVersion</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API version for the given interface. ...</div><div class='long'><p>Return the API version for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The version of the API.</p>\n</div></li></ul></div></div></div><div id='method-sendEmail' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.MailBridge'>Adaptive.MailBridge</span><br/><a href='source/Adaptive.html#Adaptive-MailBridge-method-sendEmail' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.MailBridge-method-sendEmail' class='name expandable'>sendEmail</a>( <span class='pre'>data, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Send an Email ...</div><div class='long'><p>Send an Email</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Adaptive.Email\" rel=\"Adaptive.Email\" class=\"docClass\">Adaptive.Email</a><div class='sub-desc'><p>data     Payload of the email</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Adaptive.MessagingCallback\" rel=\"Adaptive.MessagingCallback\" class=\"docClass\">Adaptive.MessagingCallback</a><div class='sub-desc'><p>callback Result callback of the operation</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});