Ext.data.JsonP.Adaptive_ServicePath({"tagname":"class","name":"Adaptive.ServicePath","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-ServicePath"}],"author":[{"tagname":"author","name":"fnva","email":null}],"since":"v2.0.4","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.ServicePath","id":"method-constructor","meta":{}},{"name":"getMethods","tagname":"method","owner":"Adaptive.ServicePath","id":"method-getMethods","meta":{}},{"name":"getPath","tagname":"method","owner":"Adaptive.ServicePath","id":"method-getPath","meta":{}},{"name":"getType","tagname":"method","owner":"Adaptive.ServicePath","id":"method-getType","meta":{}},{"name":"setMethods","tagname":"method","owner":"Adaptive.ServicePath","id":"method-setMethods","meta":{}},{"name":"setPath","tagname":"method","owner":"Adaptive.ServicePath","id":"method-setPath","meta":{}},{"name":"setType","tagname":"method","owner":"Adaptive.ServicePath","id":"method-setType","meta":{}},{"name":"toObject","tagname":"method","owner":"Adaptive.ServicePath","id":"static-method-toObject","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.ServicePath","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-ServicePath' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Structure representing a service path for one endpoint</p>\n\n<p>@version 1.0</p>\n        <p>Available since: <b>v2.0.4</b></p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServicePath'>Adaptive.ServicePath</span><br/><a href='source/Adaptive.html#Adaptive-ServicePath-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.ServicePath-method-constructor' class='name expandable'>Adaptive.ServicePath</a>( <span class='pre'>path, methods, type</span> ) : <a href=\"#!/api/Adaptive.ServicePath\" rel=\"Adaptive.ServicePath\" class=\"docClass\">Adaptive.ServicePath</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor with parameters. ...</div><div class='long'><p>Constructor with parameters.</p>\n        <p>Available since: <b>v2.0.6</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : string<div class='sub-desc'><p>The path for the endpoint</p>\n</div></li><li><span class='pre'>methods</span> : <a href=\"#!/api/Adaptive.IServiceMethod\" rel=\"Adaptive.IServiceMethod\" class=\"docClass\">Adaptive.IServiceMethod</a>[]<div class='sub-desc'><p>The methods for calling a path</p>\n</div></li><li><span class='pre'>type</span> : <a href=\"#!/api/Adaptive.IServiceType\" rel=\"Adaptive.IServiceType\" class=\"docClass\">Adaptive.IServiceType</a><div class='sub-desc'><p>Protocol type.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServicePath\" rel=\"Adaptive.ServicePath\" class=\"docClass\">Adaptive.ServicePath</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMethods' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServicePath'>Adaptive.ServicePath</span><br/><a href='source/Adaptive.html#Adaptive-ServicePath-method-getMethods' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServicePath-method-getMethods' class='name expandable'>getMethods</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.IServiceMethod\" rel=\"Adaptive.IServiceMethod\" class=\"docClass\">Adaptive.IServiceMethod</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Endpoint's path methods setter ...</div><div class='long'><p>Endpoint's path methods setter</p>\n        <p>Available since: <b>v2.0.4</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.IServiceMethod\" rel=\"Adaptive.IServiceMethod\" class=\"docClass\">Adaptive.IServiceMethod</a>[]</span><div class='sub-desc'><p>Endpoint's path methods</p>\n</div></li></ul></div></div></div><div id='method-getPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServicePath'>Adaptive.ServicePath</span><br/><a href='source/Adaptive.html#Adaptive-ServicePath-method-getPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServicePath-method-getPath' class='name expandable'>getPath</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Endpoint's Path Getter ...</div><div class='long'><p>Endpoint's Path Getter</p>\n        <p>Available since: <b>v2.0.4</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>Endpoint's Path</p>\n</div></li></ul></div></div></div><div id='method-getType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServicePath'>Adaptive.ServicePath</span><br/><a href='source/Adaptive.html#Adaptive-ServicePath-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServicePath-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.IServiceType\" rel=\"Adaptive.IServiceType\" class=\"docClass\">Adaptive.IServiceType</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the protocol for the path. ...</div><div class='long'><p>Gets the protocol for the path.</p>\n        <p>Available since: <b>v2.0.6</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.IServiceType\" rel=\"Adaptive.IServiceType\" class=\"docClass\">Adaptive.IServiceType</a></span><div class='sub-desc'><p>Type of protocol.</p>\n</div></li></ul></div></div></div><div id='method-setMethods' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServicePath'>Adaptive.ServicePath</span><br/><a href='source/Adaptive.html#Adaptive-ServicePath-method-setMethods' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServicePath-method-setMethods' class='name expandable'>setMethods</a>( <span class='pre'>methods</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Endpoint's path methods setter ...</div><div class='long'><p>Endpoint's path methods setter</p>\n        <p>Available since: <b>v2.0.4</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>methods</span> : <a href=\"#!/api/Adaptive.IServiceMethod\" rel=\"Adaptive.IServiceMethod\" class=\"docClass\">Adaptive.IServiceMethod</a>[]<div class='sub-desc'><p>Endpoint's path methods</p>\n</div></li></ul></div></div></div><div id='method-setPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServicePath'>Adaptive.ServicePath</span><br/><a href='source/Adaptive.html#Adaptive-ServicePath-method-setPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServicePath-method-setPath' class='name expandable'>setPath</a>( <span class='pre'>path</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Endpoint's path setter ...</div><div class='long'><p>Endpoint's path setter</p>\n        <p>Available since: <b>v2.0.4</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : string<div class='sub-desc'><p>Endpoint's path</p>\n</div></li></ul></div></div></div><div id='method-setType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServicePath'>Adaptive.ServicePath</span><br/><a href='source/Adaptive.html#Adaptive-ServicePath-method-setType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServicePath-method-setType' class='name expandable'>setType</a>( <span class='pre'>type</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the protocol for the path. ...</div><div class='long'><p>Sets the protocol for the path.</p>\n        <p>Available since: <b>v2.0.6</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/Adaptive.IServiceType\" rel=\"Adaptive.IServiceType\" class=\"docClass\">Adaptive.IServiceType</a><div class='sub-desc'><p>Type of protocol.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-toObject' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ServicePath'>Adaptive.ServicePath</span><br/><a href='source/Adaptive.html#Adaptive-ServicePath-static-method-toObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ServicePath-static-method-toObject' class='name expandable'>toObject</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/Adaptive.ServicePath\" rel=\"Adaptive.ServicePath\" class=\"docClass\">Adaptive.ServicePath</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Convert JSON parsed object to typed equivalent. ...</div><div class='long'><p>Convert JSON parsed object to typed equivalent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>JSON parsed structure of type <a href=\"#!/api/Adaptive.ServicePath\" rel=\"Adaptive.ServicePath\" class=\"docClass\">Adaptive.ServicePath</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ServicePath\" rel=\"Adaptive.ServicePath\" class=\"docClass\">Adaptive.ServicePath</a></span><div class='sub-desc'><p>Wrapped object instance.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});