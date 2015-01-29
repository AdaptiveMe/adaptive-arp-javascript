Ext.data.JsonP.Adaptive_ServiceRequest({"tagname":"class","name":"Adaptive.ServiceRequest","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-ServiceRequest"}],"extends":"Adaptive.APIBean","author":[{"tagname":"author","name":"Aryslan","email":null}],"since":"v2.0","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-constructor","meta":{}},{"name":"getBodyParameters","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-getBodyParameters","meta":{}},{"name":"getContent","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-getContent","meta":{}},{"name":"getContentEncoding","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-getContentEncoding","meta":{}},{"name":"getContentLength","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-getContentLength","meta":{}},{"name":"getContentType","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-getContentType","meta":{}},{"name":"getQueryParameters","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-getQueryParameters","meta":{}},{"name":"getServiceHeaders","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-getServiceHeaders","meta":{}},{"name":"getServiceSession","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-getServiceSession","meta":{}},{"name":"getServiceToken","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-getServiceToken","meta":{}},{"name":"getUserAgent","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-getUserAgent","meta":{}},{"name":"setBodyParameters","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-setBodyParameters","meta":{}},{"name":"setContent","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-setContent","meta":{}},{"name":"setContentEncoding","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-setContentEncoding","meta":{}},{"name":"setContentLength","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-setContentLength","meta":{}},{"name":"setContentType","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-setContentType","meta":{}},{"name":"setQueryParameters","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-setQueryParameters","meta":{}},{"name":"setServiceHeaders","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-setServiceHeaders","meta":{}},{"name":"setServiceSession","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-setServiceSession","meta":{}},{"name":"setServiceToken","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-setServiceToken","meta":{}},{"name":"setUserAgent","tagname":"method","owner":"Adaptive.ServiceRequest","id":"method-setUserAgent","meta":{}},{"name":"toObject","tagname":"method","owner":"Adaptive.ServiceRequest","id":"static-method-toObject","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.ServiceRequest","short_doc":"Represents a local or remote service request. ...","component":false,"superclasses":["Adaptive.APIBean"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.APIBean' rel='Adaptive.APIBean' class='docClass'>Adaptive.APIBean</a><div class='subclass '><strong>Adaptive.ServiceRequest</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-ServiceRequest' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Represents a local or remote service request.</p>\n\n<p>@version 1.0</p>\n        <p>Available since: <b>v2.0</b></p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.ServiceRequest-method-constructor' class='name expandable'>Adaptive.ServiceRequest</a>( <span class='pre'>content, serviceToken</span> ) : <a href=\"#!/api/Adaptive.ServiceRequest\" rel=\"Adaptive.ServiceRequest\" class=\"docClass\">Adaptive.ServiceRequest</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Convenience constructor. ...</div><div class='long'><p>Convenience constructor.</p>\n        <p>Available since: <b>v2.0.6</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>content</span> : string<div class='sub-desc'><p>Content payload.</p>\n</div></li><li><span class='pre'>serviceToken</span> : <a href=\"#!/api/Adaptive.ServiceToken\" rel=\"Adaptive.ServiceToken\" class=\"docClass\">Adaptive.ServiceToken</a><div class='sub-desc'><p>ServiceToken for the request.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServiceRequest\" rel=\"Adaptive.ServiceRequest\" class=\"docClass\">Adaptive.ServiceRequest</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.APIBean-method-constructor\" rel=\"Adaptive.APIBean-method-constructor\" class=\"docClass\">Adaptive.APIBean.constructor</a></p></div></div></div><div id='method-getBodyParameters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-getBodyParameters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-getBodyParameters' class='name expandable'>getBodyParameters</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ServiceRequestParameter\" rel=\"Adaptive.ServiceRequestParameter\" class=\"docClass\">Adaptive.ServiceRequestParameter</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the body parameters of the request. ...</div><div class='long'><p>Gets the body parameters of the request.</p>\n        <p>Available since: <b>v2.0.6</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServiceRequestParameter\" rel=\"Adaptive.ServiceRequestParameter\" class=\"docClass\">Adaptive.ServiceRequestParameter</a>[]</span><div class='sub-desc'><p>ServiceRequestParameter array or null if none are specified.</p>\n</div></li></ul></div></div></div><div id='method-getContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-getContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-getContent' class='name expandable'>getContent</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the content ...</div><div class='long'><p>Returns the content</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>content</p>\n</div></li></ul></div></div></div><div id='method-getContentEncoding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-getContentEncoding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-getContentEncoding' class='name expandable'>getContentEncoding</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the content encoding ...</div><div class='long'><p>Returns the content encoding</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>contentEncoding</p>\n</div></li></ul></div></div></div><div id='method-getContentLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-getContentLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-getContentLength' class='name expandable'>getContentLength</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the content length ...</div><div class='long'><p>Returns the content length</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>contentLength</p>\n</div></li></ul></div></div></div><div id='method-getContentType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-getContentType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-getContentType' class='name expandable'>getContentType</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the content type ...</div><div class='long'><p>Returns the content type</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>contentType</p>\n</div></li></ul></div></div></div><div id='method-getQueryParameters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-getQueryParameters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-getQueryParameters' class='name expandable'>getQueryParameters</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ServiceRequestParameter\" rel=\"Adaptive.ServiceRequestParameter\" class=\"docClass\">Adaptive.ServiceRequestParameter</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the query parameters of the request. ...</div><div class='long'><p>Gets the query parameters of the request.</p>\n        <p>Available since: <b>v2.0.6</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServiceRequestParameter\" rel=\"Adaptive.ServiceRequestParameter\" class=\"docClass\">Adaptive.ServiceRequestParameter</a>[]</span><div class='sub-desc'><p>ServiceRequestParameter array or null if none are specified.</p>\n</div></li></ul></div></div></div><div id='method-getServiceHeaders' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-getServiceHeaders' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-getServiceHeaders' class='name expandable'>getServiceHeaders</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ServiceHeader\" rel=\"Adaptive.ServiceHeader\" class=\"docClass\">Adaptive.ServiceHeader</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the array of ServiceHeader ...</div><div class='long'><p>Returns the array of ServiceHeader</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServiceHeader\" rel=\"Adaptive.ServiceHeader\" class=\"docClass\">Adaptive.ServiceHeader</a>[]</span><div class='sub-desc'><p>serviceHeaders</p>\n</div></li></ul></div></div></div><div id='method-getServiceSession' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-getServiceSession' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-getServiceSession' class='name expandable'>getServiceSession</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ServiceSession\" rel=\"Adaptive.ServiceSession\" class=\"docClass\">Adaptive.ServiceSession</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Getter for service session ...</div><div class='long'><p>Getter for service session</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServiceSession\" rel=\"Adaptive.ServiceSession\" class=\"docClass\">Adaptive.ServiceSession</a></span><div class='sub-desc'><p>The element service session</p>\n</div></li></ul></div></div></div><div id='method-getServiceToken' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-getServiceToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-getServiceToken' class='name expandable'>getServiceToken</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ServiceToken\" rel=\"Adaptive.ServiceToken\" class=\"docClass\">Adaptive.ServiceToken</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the ServiceToken of the request. ...</div><div class='long'><p>Gets the ServiceToken of the request.</p>\n        <p>Available since: <b>v2.0.6</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServiceToken\" rel=\"Adaptive.ServiceToken\" class=\"docClass\">Adaptive.ServiceToken</a></span><div class='sub-desc'><p>ServiceToken.</p>\n</div></li></ul></div></div></div><div id='method-getUserAgent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-getUserAgent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-getUserAgent' class='name expandable'>getUserAgent</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the overridden user-agent string. ...</div><div class='long'><p>Gets the overridden user-agent string.</p>\n        <p>Available since: <b>v2.0.6</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>User-agent string.</p>\n</div></li></ul></div></div></div><div id='method-setBodyParameters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-setBodyParameters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-setBodyParameters' class='name expandable'>setBodyParameters</a>( <span class='pre'>bodyParameters</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the body parameters of the request. ...</div><div class='long'><p>Sets the body parameters of the request.</p>\n        <p>Available since: <b>v2.0.6</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bodyParameters</span> : <a href=\"#!/api/Adaptive.ServiceRequestParameter\" rel=\"Adaptive.ServiceRequestParameter\" class=\"docClass\">Adaptive.ServiceRequestParameter</a>[]<div class='sub-desc'><p>ServiceRequestParameter array or null if none are specified.</p>\n</div></li></ul></div></div></div><div id='method-setContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-setContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-setContent' class='name expandable'>setContent</a>( <span class='pre'>content</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the content ...</div><div class='long'><p>Set the content</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>content</span> : string<div class='sub-desc'><p>Request/Response data content (plain text)</p>\n</div></li></ul></div></div></div><div id='method-setContentEncoding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-setContentEncoding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-setContentEncoding' class='name expandable'>setContentEncoding</a>( <span class='pre'>contentEncoding</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the content encoding ...</div><div class='long'><p>Set the content encoding</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contentEncoding</span> : string<div class='sub-desc'><p>Encoding of the binary payload - by default assumed to be UTF8.</p>\n</div></li></ul></div></div></div><div id='method-setContentLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-setContentLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-setContentLength' class='name expandable'>setContentLength</a>( <span class='pre'>contentLength</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the content length ...</div><div class='long'><p>Set the content length</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contentLength</span> : number<div class='sub-desc'><p>The length in bytes for the Content field.</p>\n</div></li></ul></div></div></div><div id='method-setContentType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-setContentType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-setContentType' class='name expandable'>setContentType</a>( <span class='pre'>contentType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the content type ...</div><div class='long'><p>Set the content type</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contentType</span> : string<div class='sub-desc'><p>The request/response content type (MIME TYPE).</p>\n</div></li></ul></div></div></div><div id='method-setQueryParameters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-setQueryParameters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-setQueryParameters' class='name expandable'>setQueryParameters</a>( <span class='pre'>queryParameters</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the query parameters of the request. ...</div><div class='long'><p>Sets the query parameters of the request.</p>\n        <p>Available since: <b>v2.0.6</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>queryParameters</span> : <a href=\"#!/api/Adaptive.ServiceRequestParameter\" rel=\"Adaptive.ServiceRequestParameter\" class=\"docClass\">Adaptive.ServiceRequestParameter</a>[]<div class='sub-desc'><p>ServiceRequestParameter array or null if none are specified.</p>\n</div></li></ul></div></div></div><div id='method-setServiceHeaders' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-setServiceHeaders' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-setServiceHeaders' class='name expandable'>setServiceHeaders</a>( <span class='pre'>serviceHeaders</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the array of ServiceHeader ...</div><div class='long'><p>Set the array of ServiceHeader</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>serviceHeaders</span> : <a href=\"#!/api/Adaptive.ServiceHeader\" rel=\"Adaptive.ServiceHeader\" class=\"docClass\">Adaptive.ServiceHeader</a>[]<div class='sub-desc'><p>The serviceHeaders array (name,value pairs) to be included on the I/O service request.</p>\n</div></li></ul></div></div></div><div id='method-setServiceSession' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-setServiceSession' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-setServiceSession' class='name expandable'>setServiceSession</a>( <span class='pre'>serviceSession</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Setter for service session ...</div><div class='long'><p>Setter for service session</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>serviceSession</span> : <a href=\"#!/api/Adaptive.ServiceSession\" rel=\"Adaptive.ServiceSession\" class=\"docClass\">Adaptive.ServiceSession</a><div class='sub-desc'><p>The element service session</p>\n</div></li></ul></div></div></div><div id='method-setServiceToken' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-setServiceToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-setServiceToken' class='name expandable'>setServiceToken</a>( <span class='pre'>serviceToken</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the ServiceToken of the request. ...</div><div class='long'><p>Sets the ServiceToken of the request.</p>\n        <p>Available since: <b>v2.0.6</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>serviceToken</span> : <a href=\"#!/api/Adaptive.ServiceToken\" rel=\"Adaptive.ServiceToken\" class=\"docClass\">Adaptive.ServiceToken</a><div class='sub-desc'><p>ServiceToken to be used for the invocation.</p>\n</div></li></ul></div></div></div><div id='method-setUserAgent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-method-setUserAgent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-method-setUserAgent' class='name expandable'>setUserAgent</a>( <span class='pre'>userAgent</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the user-agent to override the default user-agent string. ...</div><div class='long'><p>Sets the user-agent to override the default user-agent string.</p>\n        <p>Available since: <b>v2.0.6</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>userAgent</span> : string<div class='sub-desc'><p>User-agent string.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-toObject' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServiceRequest'>Adaptive.ServiceRequest</span><br/><a href='source/Adaptive.html#Adaptive-ServiceRequest-static-method-toObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServiceRequest-static-method-toObject' class='name expandable'>toObject</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/Adaptive.ServiceRequest\" rel=\"Adaptive.ServiceRequest\" class=\"docClass\">Adaptive.ServiceRequest</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Convert JSON parsed object to typed equivalent. ...</div><div class='long'><p>Convert JSON parsed object to typed equivalent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>JSON parsed structure of type <a href=\"#!/api/Adaptive.ServiceRequest\" rel=\"Adaptive.ServiceRequest\" class=\"docClass\">Adaptive.ServiceRequest</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServiceRequest\" rel=\"Adaptive.ServiceRequest\" class=\"docClass\">Adaptive.ServiceRequest</a></span><div class='sub-desc'><p>Wrapped object instance.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});