Ext.data.JsonP.Adaptive_DisplayBridge({"tagname":"class","name":"Adaptive.DisplayBridge","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-DisplayBridge"}],"extends":"Adaptive.BaseSystemBridge","author":[{"tagname":"author","name":"Carlos Lozano Diez","email":null}],"since":"v2.0","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.DisplayBridge","id":"method-constructor","meta":{}},{"name":"addDisplayOrientationListener","tagname":"method","owner":"Adaptive.DisplayBridge","id":"method-addDisplayOrientationListener","meta":{}},{"name":"getAPIGroup","tagname":"method","owner":"Adaptive.BaseSystemBridge","id":"method-getAPIGroup","meta":{}},{"name":"getAPIVersion","tagname":"method","owner":"Adaptive.BaseSystemBridge","id":"method-getAPIVersion","meta":{}},{"name":"getOrientationCurrent","tagname":"method","owner":"Adaptive.DisplayBridge","id":"method-getOrientationCurrent","meta":{}},{"name":"removeDisplayOrientationListener","tagname":"method","owner":"Adaptive.DisplayBridge","id":"method-removeDisplayOrientationListener","meta":{}},{"name":"removeDisplayOrientationListeners","tagname":"method","owner":"Adaptive.DisplayBridge","id":"method-removeDisplayOrientationListeners","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.DisplayBridge","component":false,"superclasses":["Adaptive.BaseSystemBridge"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.BaseSystemBridge' rel='Adaptive.BaseSystemBridge' class='docClass'>Adaptive.BaseSystemBridge</a><div class='subclass '><strong>Adaptive.DisplayBridge</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-DisplayBridge' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Interface for Managing the Display operations</p>\n        <p>Available since: <b>v2.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DisplayBridge'>Adaptive.DisplayBridge</span><br/><a href='source/Adaptive.html#Adaptive-DisplayBridge-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.DisplayBridge-method-constructor' class='name expandable'>Adaptive.DisplayBridge</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.DisplayBridge\" rel=\"Adaptive.DisplayBridge\" class=\"docClass\">Adaptive.DisplayBridge</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Default constructor. ...</div><div class='long'><p>Default constructor.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.DisplayBridge\" rel=\"Adaptive.DisplayBridge\" class=\"docClass\">Adaptive.DisplayBridge</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.BaseSystemBridge-method-constructor\" rel=\"Adaptive.BaseSystemBridge-method-constructor\" class=\"docClass\">Adaptive.BaseSystemBridge.constructor</a></p></div></div></div><div id='method-addDisplayOrientationListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DisplayBridge'>Adaptive.DisplayBridge</span><br/><a href='source/Adaptive.html#Adaptive-DisplayBridge-method-addDisplayOrientationListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DisplayBridge-method-addDisplayOrientationListener' class='name expandable'>addDisplayOrientationListener</a>( <span class='pre'>listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add a listener to start receiving display orientation change events. ...</div><div class='long'><p>Add a listener to start receiving display orientation change events.</p>\n        <p>Available since: <b>v2.0.5</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : <a href=\"#!/api/Adaptive.DisplayOrientationListener\" rel=\"Adaptive.DisplayOrientationListener\" class=\"docClass\">Adaptive.DisplayOrientationListener</a><div class='sub-desc'><p>listener Listener to add to receive orientation change events.</p>\n</div></li></ul></div></div></div><div id='method-getAPIGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseSystemBridge' rel='Adaptive.BaseSystemBridge' class='defined-in docClass'>Adaptive.BaseSystemBridge</a><br/><a href='source/Adaptive.html#Adaptive-BaseSystemBridge-method-getAPIGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseSystemBridge-method-getAPIGroup' class='name expandable'>getAPIGroup</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API group for the given interface. ...</div><div class='long'><p>Return the API group for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAPIVersion' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseSystemBridge' rel='Adaptive.BaseSystemBridge' class='defined-in docClass'>Adaptive.BaseSystemBridge</a><br/><a href='source/Adaptive.html#Adaptive-BaseSystemBridge-method-getAPIVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseSystemBridge-method-getAPIVersion' class='name expandable'>getAPIVersion</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API version for the given interface. ...</div><div class='long'><p>Return the API version for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The version of the API.</p>\n</div></li></ul></div></div></div><div id='method-getOrientationCurrent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DisplayBridge'>Adaptive.DisplayBridge</span><br/><a href='source/Adaptive.html#Adaptive-DisplayBridge-method-getOrientationCurrent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DisplayBridge-method-getOrientationCurrent' class='name expandable'>getOrientationCurrent</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ICapabilitiesOrientation\" rel=\"Adaptive.ICapabilitiesOrientation\" class=\"docClass\">Adaptive.ICapabilitiesOrientation</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the current orientation of the display. ...</div><div class='long'><p>Returns the current orientation of the display. Please note that this may be different from the orientation\nof the device. For device orientation, use the IDevice APIs.</p>\n        <p>Available since: <b>v2.0.5</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ICapabilitiesOrientation\" rel=\"Adaptive.ICapabilitiesOrientation\" class=\"docClass\">Adaptive.ICapabilitiesOrientation</a></span><div class='sub-desc'><p>The current orientation of the display.</p>\n</div></li></ul></div></div></div><div id='method-removeDisplayOrientationListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DisplayBridge'>Adaptive.DisplayBridge</span><br/><a href='source/Adaptive.html#Adaptive-DisplayBridge-method-removeDisplayOrientationListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DisplayBridge-method-removeDisplayOrientationListener' class='name expandable'>removeDisplayOrientationListener</a>( <span class='pre'>listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove a listener to stop receiving display orientation change events. ...</div><div class='long'><p>Remove a listener to stop receiving display orientation change events.</p>\n        <p>Available since: <b>v2.0.5</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : <a href=\"#!/api/Adaptive.DisplayOrientationListener\" rel=\"Adaptive.DisplayOrientationListener\" class=\"docClass\">Adaptive.DisplayOrientationListener</a><div class='sub-desc'><p>listener Listener to remove from receiving orientation change events.</p>\n</div></li></ul></div></div></div><div id='method-removeDisplayOrientationListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DisplayBridge'>Adaptive.DisplayBridge</span><br/><a href='source/Adaptive.html#Adaptive-DisplayBridge-method-removeDisplayOrientationListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DisplayBridge-method-removeDisplayOrientationListeners' class='name expandable'>removeDisplayOrientationListeners</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove all listeners receiving display orientation events. ...</div><div class='long'><p>Remove all listeners receiving display orientation events.</p>\n        <p>Available since: <b>v2.0.5</b></p>\n</div></div></div></div></div></div></div>","meta":{}});