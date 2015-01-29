Ext.data.JsonP.Adaptive_RotationEvent({"tagname":"class","name":"Adaptive.RotationEvent","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-RotationEvent"}],"extends":"Adaptive.APIBean","author":[{"tagname":"author","name":"Carlos Lozano Diez","email":null}],"since":"ARP 2.0.5","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.RotationEvent","id":"method-constructor","meta":{}},{"name":"getDestination","tagname":"method","owner":"Adaptive.RotationEvent","id":"method-getDestination","meta":{}},{"name":"getOrigin","tagname":"method","owner":"Adaptive.RotationEvent","id":"method-getOrigin","meta":{}},{"name":"getState","tagname":"method","owner":"Adaptive.RotationEvent","id":"method-getState","meta":{}},{"name":"getTimestamp","tagname":"method","owner":"Adaptive.RotationEvent","id":"method-getTimestamp","meta":{}},{"name":"setDestination","tagname":"method","owner":"Adaptive.RotationEvent","id":"method-setDestination","meta":{}},{"name":"setOrigin","tagname":"method","owner":"Adaptive.RotationEvent","id":"method-setOrigin","meta":{}},{"name":"setState","tagname":"method","owner":"Adaptive.RotationEvent","id":"method-setState","meta":{}},{"name":"setTimestamp","tagname":"method","owner":"Adaptive.RotationEvent","id":"method-setTimestamp","meta":{}},{"name":"toObject","tagname":"method","owner":"Adaptive.RotationEvent","id":"static-method-toObject","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.RotationEvent","short_doc":"Object for reporting orientation change events for device and display. ...","component":false,"superclasses":["Adaptive.APIBean"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.APIBean' rel='Adaptive.APIBean' class='docClass'>Adaptive.APIBean</a><div class='subclass '><strong>Adaptive.RotationEvent</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-RotationEvent' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Object for reporting orientation change events for device and display.</p>\n\n<p>@version 1.0</p>\n        <p>Available since: <b>ARP 2.0.5</b></p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.RotationEvent'>Adaptive.RotationEvent</span><br/><a href='source/Adaptive.html#Adaptive-RotationEvent-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.RotationEvent-method-constructor' class='name expandable'>Adaptive.RotationEvent</a>( <span class='pre'>origin, destination, state, timestamp</span> ) : <a href=\"#!/api/Adaptive.RotationEvent\" rel=\"Adaptive.RotationEvent\" class=\"docClass\">Adaptive.RotationEvent</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Convenience constructor. ...</div><div class='long'><p>Convenience constructor.</p>\n        <p>Available since: <b>ARP 2.0.5</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>origin</span> : <a href=\"#!/api/Adaptive.ICapabilitiesOrientation\" rel=\"Adaptive.ICapabilitiesOrientation\" class=\"docClass\">Adaptive.ICapabilitiesOrientation</a><div class='sub-desc'><p>Source orientation when the event was fired.</p>\n</div></li><li><span class='pre'>destination</span> : <a href=\"#!/api/Adaptive.ICapabilitiesOrientation\" rel=\"Adaptive.ICapabilitiesOrientation\" class=\"docClass\">Adaptive.ICapabilitiesOrientation</a><div class='sub-desc'><p>Destination orientation when the event was fired.</p>\n</div></li><li><span class='pre'>state</span> : <a href=\"#!/api/Adaptive.RotationEventState\" rel=\"Adaptive.RotationEventState\" class=\"docClass\">Adaptive.RotationEventState</a><div class='sub-desc'><p>State of the event (WillBegin, DidFinish).</p>\n</div></li><li><span class='pre'>timestamp</span> : number<div class='sub-desc'><p>Timestamp in milliseconds when the event was fired.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.RotationEvent\" rel=\"Adaptive.RotationEvent\" class=\"docClass\">Adaptive.RotationEvent</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.APIBean-method-constructor\" rel=\"Adaptive.APIBean-method-constructor\" class=\"docClass\">Adaptive.APIBean.constructor</a></p></div></div></div><div id='method-getDestination' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.RotationEvent'>Adaptive.RotationEvent</span><br/><a href='source/Adaptive.html#Adaptive-RotationEvent-method-getDestination' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.RotationEvent-method-getDestination' class='name expandable'>getDestination</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ICapabilitiesOrientation\" rel=\"Adaptive.ICapabilitiesOrientation\" class=\"docClass\">Adaptive.ICapabilitiesOrientation</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the destination orientation of the event. ...</div><div class='long'><p>Gets the destination orientation of the event.</p>\n        <p>Available since: <b>ARP 2.0.5</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ICapabilitiesOrientation\" rel=\"Adaptive.ICapabilitiesOrientation\" class=\"docClass\">Adaptive.ICapabilitiesOrientation</a></span><div class='sub-desc'><p>Destination orientation.</p>\n</div></li></ul></div></div></div><div id='method-getOrigin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.RotationEvent'>Adaptive.RotationEvent</span><br/><a href='source/Adaptive.html#Adaptive-RotationEvent-method-getOrigin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.RotationEvent-method-getOrigin' class='name expandable'>getOrigin</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ICapabilitiesOrientation\" rel=\"Adaptive.ICapabilitiesOrientation\" class=\"docClass\">Adaptive.ICapabilitiesOrientation</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Get the origin orientation of the event. ...</div><div class='long'><p>Get the origin orientation of the event.</p>\n        <p>Available since: <b>ARP 2.0.5</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ICapabilitiesOrientation\" rel=\"Adaptive.ICapabilitiesOrientation\" class=\"docClass\">Adaptive.ICapabilitiesOrientation</a></span><div class='sub-desc'><p>Origin orientation.</p>\n</div></li></ul></div></div></div><div id='method-getState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.RotationEvent'>Adaptive.RotationEvent</span><br/><a href='source/Adaptive.html#Adaptive-RotationEvent-method-getState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.RotationEvent-method-getState' class='name expandable'>getState</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.RotationEventState\" rel=\"Adaptive.RotationEventState\" class=\"docClass\">Adaptive.RotationEventState</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the current state of the event. ...</div><div class='long'><p>Gets the current state of the event.</p>\n        <p>Available since: <b>ARP 2.0.5</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.RotationEventState\" rel=\"Adaptive.RotationEventState\" class=\"docClass\">Adaptive.RotationEventState</a></span><div class='sub-desc'><p>State of the event.</p>\n</div></li></ul></div></div></div><div id='method-getTimestamp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.RotationEvent'>Adaptive.RotationEvent</span><br/><a href='source/Adaptive.html#Adaptive-RotationEvent-method-getTimestamp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.RotationEvent-method-getTimestamp' class='name expandable'>getTimestamp</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the timestamp in milliseconds of the event. ...</div><div class='long'><p>Gets the timestamp in milliseconds of the event.</p>\n        <p>Available since: <b>ARP 2.0.5</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>Timestamp of the event.</p>\n</div></li></ul></div></div></div><div id='method-setDestination' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.RotationEvent'>Adaptive.RotationEvent</span><br/><a href='source/Adaptive.html#Adaptive-RotationEvent-method-setDestination' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.RotationEvent-method-setDestination' class='name expandable'>setDestination</a>( <span class='pre'>destination</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the destination orientation of the event. ...</div><div class='long'><p>Sets the destination orientation of the event.</p>\n        <p>Available since: <b>ARP 2.0.5</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>destination</span> : <a href=\"#!/api/Adaptive.ICapabilitiesOrientation\" rel=\"Adaptive.ICapabilitiesOrientation\" class=\"docClass\">Adaptive.ICapabilitiesOrientation</a><div class='sub-desc'><p>Destination orientation.</p>\n</div></li></ul></div></div></div><div id='method-setOrigin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.RotationEvent'>Adaptive.RotationEvent</span><br/><a href='source/Adaptive.html#Adaptive-RotationEvent-method-setOrigin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.RotationEvent-method-setOrigin' class='name expandable'>setOrigin</a>( <span class='pre'>origin</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the origin orientation of the event. ...</div><div class='long'><p>Set the origin orientation of the event.</p>\n        <p>Available since: <b>ARP 2.0.5</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>origin</span> : <a href=\"#!/api/Adaptive.ICapabilitiesOrientation\" rel=\"Adaptive.ICapabilitiesOrientation\" class=\"docClass\">Adaptive.ICapabilitiesOrientation</a><div class='sub-desc'><p>Origin orientation</p>\n</div></li></ul></div></div></div><div id='method-setState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.RotationEvent'>Adaptive.RotationEvent</span><br/><a href='source/Adaptive.html#Adaptive-RotationEvent-method-setState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.RotationEvent-method-setState' class='name expandable'>setState</a>( <span class='pre'>state</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the current state of the event. ...</div><div class='long'><p>Sets the current state of the event.</p>\n        <p>Available since: <b>ARP 2.0.5</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>state</span> : <a href=\"#!/api/Adaptive.RotationEventState\" rel=\"Adaptive.RotationEventState\" class=\"docClass\">Adaptive.RotationEventState</a><div class='sub-desc'><p>The state of the event.</p>\n</div></li></ul></div></div></div><div id='method-setTimestamp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.RotationEvent'>Adaptive.RotationEvent</span><br/><a href='source/Adaptive.html#Adaptive-RotationEvent-method-setTimestamp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.RotationEvent-method-setTimestamp' class='name expandable'>setTimestamp</a>( <span class='pre'>timestamp</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the timestamp in milliseconds of the event. ...</div><div class='long'><p>Sets the timestamp in milliseconds of the event.</p>\n        <p>Available since: <b>ARP 2.0.5</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timestamp</span> : number<div class='sub-desc'><p>Timestamp of the event.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-toObject' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.RotationEvent'>Adaptive.RotationEvent</span><br/><a href='source/Adaptive.html#Adaptive-RotationEvent-static-method-toObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.RotationEvent-static-method-toObject' class='name expandable'>toObject</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/Adaptive.RotationEvent\" rel=\"Adaptive.RotationEvent\" class=\"docClass\">Adaptive.RotationEvent</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Convert JSON parsed object to typed equivalent. ...</div><div class='long'><p>Convert JSON parsed object to typed equivalent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>JSON parsed structure of type <a href=\"#!/api/Adaptive.RotationEvent\" rel=\"Adaptive.RotationEvent\" class=\"docClass\">Adaptive.RotationEvent</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.RotationEvent\" rel=\"Adaptive.RotationEvent\" class=\"docClass\">Adaptive.RotationEvent</a></span><div class='sub-desc'><p>Wrapped object instance.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});