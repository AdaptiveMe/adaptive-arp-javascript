Ext.data.JsonP.Adaptive_AccelerationBridge({"tagname":"class","name":"Adaptive.AccelerationBridge","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-AccelerationBridge"}],"extends":"Adaptive.BaseSensorBridge","author":[{"tagname":"author","name":"Carlos Lozano Diez","email":null}],"since":"ARP1.0","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.AccelerationBridge","id":"method-constructor","meta":{}},{"name":"addAccelerationListener","tagname":"method","owner":"Adaptive.AccelerationBridge","id":"method-addAccelerationListener","meta":{}},{"name":"getAPIGroup","tagname":"method","owner":"Adaptive.BaseSensorBridge","id":"method-getAPIGroup","meta":{}},{"name":"getAPIVersion","tagname":"method","owner":"Adaptive.BaseSensorBridge","id":"method-getAPIVersion","meta":{}},{"name":"removeAccelerationListener","tagname":"method","owner":"Adaptive.AccelerationBridge","id":"method-removeAccelerationListener","meta":{}},{"name":"removeAccelerationListeners","tagname":"method","owner":"Adaptive.AccelerationBridge","id":"method-removeAccelerationListeners","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.AccelerationBridge","component":false,"superclasses":["Adaptive.IBaseSensor","Adaptive.BaseSensorBridge"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Adaptive.IBaseSensor<div class='subclass '><a href='#!/api/Adaptive.BaseSensorBridge' rel='Adaptive.BaseSensorBridge' class='docClass'>Adaptive.BaseSensorBridge</a><div class='subclass '><strong>Adaptive.AccelerationBridge</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-AccelerationBridge' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Interface defining methods about the acceleration sensor</p>\n        <p>Available since: <b>ARP1.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AccelerationBridge'>Adaptive.AccelerationBridge</span><br/><a href='source/Adaptive.html#Adaptive-AccelerationBridge-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.AccelerationBridge-method-constructor' class='name expandable'>Adaptive.AccelerationBridge</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.AccelerationBridge\" rel=\"Adaptive.AccelerationBridge\" class=\"docClass\">Adaptive.AccelerationBridge</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Default constructor. ...</div><div class='long'><p>Default constructor.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.AccelerationBridge\" rel=\"Adaptive.AccelerationBridge\" class=\"docClass\">Adaptive.AccelerationBridge</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.BaseSensorBridge-method-constructor\" rel=\"Adaptive.BaseSensorBridge-method-constructor\" class=\"docClass\">Adaptive.BaseSensorBridge.constructor</a></p></div></div></div><div id='method-addAccelerationListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AccelerationBridge'>Adaptive.AccelerationBridge</span><br/><a href='source/Adaptive.html#Adaptive-AccelerationBridge-method-addAccelerationListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AccelerationBridge-method-addAccelerationListener' class='name expandable'>addAccelerationListener</a>( <span class='pre'>listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Register a new listener that will receive acceleration events. ...</div><div class='long'><p>Register a new listener that will receive acceleration events.</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : Object<div class='sub-desc'><p>to be registered.</p>\n</div></li></ul></div></div></div><div id='method-getAPIGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseSensorBridge' rel='Adaptive.BaseSensorBridge' class='defined-in docClass'>Adaptive.BaseSensorBridge</a><br/><a href='source/Adaptive.html#Adaptive-BaseSensorBridge-method-getAPIGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseSensorBridge-method-getAPIGroup' class='name expandable'>getAPIGroup</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API group for the given interface. ...</div><div class='long'><p>Return the API group for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAPIVersion' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseSensorBridge' rel='Adaptive.BaseSensorBridge' class='defined-in docClass'>Adaptive.BaseSensorBridge</a><br/><a href='source/Adaptive.html#Adaptive-BaseSensorBridge-method-getAPIVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseSensorBridge-method-getAPIVersion' class='name expandable'>getAPIVersion</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API version for the given interface. ...</div><div class='long'><p>Return the API version for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The version of the API.</p>\n</div></li></ul></div></div></div><div id='method-removeAccelerationListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AccelerationBridge'>Adaptive.AccelerationBridge</span><br/><a href='source/Adaptive.html#Adaptive-AccelerationBridge-method-removeAccelerationListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AccelerationBridge-method-removeAccelerationListener' class='name expandable'>removeAccelerationListener</a>( <span class='pre'>listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>De-registers an existing listener from receiving acceleration events. ...</div><div class='long'><p>De-registers an existing listener from receiving acceleration events.</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : Object<div class='sub-desc'><p>to be registered.</p>\n</div></li></ul></div></div></div><div id='method-removeAccelerationListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AccelerationBridge'>Adaptive.AccelerationBridge</span><br/><a href='source/Adaptive.html#Adaptive-AccelerationBridge-method-removeAccelerationListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AccelerationBridge-method-removeAccelerationListeners' class='name expandable'>removeAccelerationListeners</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removed all existing listeners from receiving acceleration events. ...</div><div class='long'><p>Removed all existing listeners from receiving acceleration events.</p>\n        <p>Available since: <b>ARP1.0</b></p>\n</div></div></div></div></div></div></div>","meta":{}});