Ext.data.JsonP.Adaptive_DeviceBridge({"tagname":"class","name":"Adaptive.DeviceBridge","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-DeviceBridge"}],"extends":"Adaptive.BaseSystemBridge","author":[{"tagname":"author","name":"Francisco Javier Martin Bueno","email":null}],"since":"ARP1.0","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.DeviceBridge","id":"method-constructor","meta":{}},{"name":"addButtonListener","tagname":"method","owner":"Adaptive.DeviceBridge","id":"method-addButtonListener","meta":{}},{"name":"getAPIGroup","tagname":"method","owner":"Adaptive.BaseSystemBridge","id":"method-getAPIGroup","meta":{}},{"name":"getAPIVersion","tagname":"method","owner":"Adaptive.BaseSystemBridge","id":"method-getAPIVersion","meta":{}},{"name":"getDeviceInfo","tagname":"method","owner":"Adaptive.DeviceBridge","id":"method-getDeviceInfo","meta":{}},{"name":"getLocaleCurrent","tagname":"method","owner":"Adaptive.DeviceBridge","id":"method-getLocaleCurrent","meta":{}},{"name":"removeButtonListener","tagname":"method","owner":"Adaptive.DeviceBridge","id":"method-removeButtonListener","meta":{}},{"name":"removeButtonListeners","tagname":"method","owner":"Adaptive.DeviceBridge","id":"method-removeButtonListeners","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.DeviceBridge","component":false,"superclasses":["Adaptive.IBaseSystem","Adaptive.BaseSystemBridge"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Adaptive.IBaseSystem<div class='subclass '><a href='#!/api/Adaptive.BaseSystemBridge' rel='Adaptive.BaseSystemBridge' class='docClass'>Adaptive.BaseSystemBridge</a><div class='subclass '><strong>Adaptive.DeviceBridge</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-DeviceBridge' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Interface for Managing the Device operations</p>\n        <p>Available since: <b>ARP1.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DeviceBridge'>Adaptive.DeviceBridge</span><br/><a href='source/Adaptive.html#Adaptive-DeviceBridge-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.DeviceBridge-method-constructor' class='name expandable'>Adaptive.DeviceBridge</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.DeviceBridge\" rel=\"Adaptive.DeviceBridge\" class=\"docClass\">Adaptive.DeviceBridge</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Default constructor. ...</div><div class='long'><p>Default constructor.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.DeviceBridge\" rel=\"Adaptive.DeviceBridge\" class=\"docClass\">Adaptive.DeviceBridge</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.BaseSystemBridge-method-constructor\" rel=\"Adaptive.BaseSystemBridge-method-constructor\" class=\"docClass\">Adaptive.BaseSystemBridge.constructor</a></p></div></div></div><div id='method-addButtonListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DeviceBridge'>Adaptive.DeviceBridge</span><br/><a href='source/Adaptive.html#Adaptive-DeviceBridge-method-addButtonListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DeviceBridge-method-addButtonListener' class='name expandable'>addButtonListener</a>( <span class='pre'>listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Register a new listener that will receive button events. ...</div><div class='long'><p>Register a new listener that will receive button events.</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : Object<div class='sub-desc'><p>to be registered.</p>\n</div></li></ul></div></div></div><div id='method-getAPIGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseSystemBridge' rel='Adaptive.BaseSystemBridge' class='defined-in docClass'>Adaptive.BaseSystemBridge</a><br/><a href='source/Adaptive.html#Adaptive-BaseSystemBridge-method-getAPIGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseSystemBridge-method-getAPIGroup' class='name expandable'>getAPIGroup</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API group for the given interface. ...</div><div class='long'><p>Return the API group for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAPIVersion' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseSystemBridge' rel='Adaptive.BaseSystemBridge' class='defined-in docClass'>Adaptive.BaseSystemBridge</a><br/><a href='source/Adaptive.html#Adaptive-BaseSystemBridge-method-getAPIVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseSystemBridge-method-getAPIVersion' class='name expandable'>getAPIVersion</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API version for the given interface. ...</div><div class='long'><p>Return the API version for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The version of the API.</p>\n</div></li></ul></div></div></div><div id='method-getDeviceInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DeviceBridge'>Adaptive.DeviceBridge</span><br/><a href='source/Adaptive.html#Adaptive-DeviceBridge-method-getDeviceInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DeviceBridge-method-getDeviceInfo' class='name expandable'>getDeviceInfo</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.DeviceInfo\" rel=\"Adaptive.DeviceInfo\" class=\"docClass\">Adaptive.DeviceInfo</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the device information for the current device executing the runtime. ...</div><div class='long'><p>Returns the device information for the current device executing the runtime.</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.DeviceInfo\" rel=\"Adaptive.DeviceInfo\" class=\"docClass\">Adaptive.DeviceInfo</a></span><div class='sub-desc'><p>DeviceInfo for the current device.</p>\n</div></li></ul></div></div></div><div id='method-getLocaleCurrent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DeviceBridge'>Adaptive.DeviceBridge</span><br/><a href='source/Adaptive.html#Adaptive-DeviceBridge-method-getLocaleCurrent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DeviceBridge-method-getLocaleCurrent' class='name expandable'>getLocaleCurrent</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.Locale\" rel=\"Adaptive.Locale\" class=\"docClass\">Adaptive.Locale</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the current Locale for the device. ...</div><div class='long'><p>Gets the current Locale for the device.</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.Locale\" rel=\"Adaptive.Locale\" class=\"docClass\">Adaptive.Locale</a></span><div class='sub-desc'><p>The current Locale information.</p>\n</div></li></ul></div></div></div><div id='method-removeButtonListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DeviceBridge'>Adaptive.DeviceBridge</span><br/><a href='source/Adaptive.html#Adaptive-DeviceBridge-method-removeButtonListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DeviceBridge-method-removeButtonListener' class='name expandable'>removeButtonListener</a>( <span class='pre'>listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>De-registers an existing listener from receiving button events. ...</div><div class='long'><p>De-registers an existing listener from receiving button events.</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : Object<div class='sub-desc'><p>to be removed.</p>\n</div></li></ul></div></div></div><div id='method-removeButtonListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DeviceBridge'>Adaptive.DeviceBridge</span><br/><a href='source/Adaptive.html#Adaptive-DeviceBridge-method-removeButtonListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DeviceBridge-method-removeButtonListeners' class='name expandable'>removeButtonListeners</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removed all existing listeners from receiving button events. ...</div><div class='long'><p>Removed all existing listeners from receiving button events.</p>\n        <p>Available since: <b>ARP1.0</b></p>\n</div></div></div></div></div></div></div>","meta":{}});