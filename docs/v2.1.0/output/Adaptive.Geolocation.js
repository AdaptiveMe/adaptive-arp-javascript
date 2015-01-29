Ext.data.JsonP.Adaptive_Geolocation({"tagname":"class","name":"Adaptive.Geolocation","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-Geolocation"}],"extends":"Adaptive.APIBean","author":[{"tagname":"author","name":"Francisco Javier Martin Bueno","email":null}],"since":"v2.0","members":[{"name":"altitudeProperty","tagname":"property","owner":"Adaptive.Geolocation","id":"property-altitudeProperty","meta":{}},{"name":"latitudeProperty","tagname":"property","owner":"Adaptive.Geolocation","id":"property-latitudeProperty","meta":{}},{"name":"longitudeProperty","tagname":"property","owner":"Adaptive.Geolocation","id":"property-longitudeProperty","meta":{}},{"name":"timestampProperty","tagname":"property","owner":"Adaptive.Geolocation","id":"property-timestampProperty","meta":{}},{"name":"xDoPProperty","tagname":"property","owner":"Adaptive.Geolocation","id":"property-xDoPProperty","meta":{}},{"name":"yDoPProperty","tagname":"property","owner":"Adaptive.Geolocation","id":"property-yDoPProperty","meta":{}},{"name":"constructor","tagname":"method","owner":"Adaptive.Geolocation","id":"method-constructor","meta":{}},{"name":"getAltitude","tagname":"method","owner":"Adaptive.Geolocation","id":"method-getAltitude","meta":{}},{"name":"getLatitude","tagname":"method","owner":"Adaptive.Geolocation","id":"method-getLatitude","meta":{}},{"name":"getLongitude","tagname":"method","owner":"Adaptive.Geolocation","id":"method-getLongitude","meta":{}},{"name":"getTimestamp","tagname":"method","owner":"Adaptive.Geolocation","id":"method-getTimestamp","meta":{}},{"name":"getXDoP","tagname":"method","owner":"Adaptive.Geolocation","id":"method-getXDoP","meta":{}},{"name":"getYDoP","tagname":"method","owner":"Adaptive.Geolocation","id":"method-getYDoP","meta":{}},{"name":"setAltitude","tagname":"method","owner":"Adaptive.Geolocation","id":"method-setAltitude","meta":{}},{"name":"setLatitude","tagname":"method","owner":"Adaptive.Geolocation","id":"method-setLatitude","meta":{}},{"name":"setLongitude","tagname":"method","owner":"Adaptive.Geolocation","id":"method-setLongitude","meta":{}},{"name":"setTimestamp","tagname":"method","owner":"Adaptive.Geolocation","id":"method-setTimestamp","meta":{}},{"name":"setXDoP","tagname":"method","owner":"Adaptive.Geolocation","id":"method-setXDoP","meta":{}},{"name":"setYDoP","tagname":"method","owner":"Adaptive.Geolocation","id":"method-setYDoP","meta":{}},{"name":"toObject","tagname":"method","owner":"Adaptive.Geolocation","id":"static-method-toObject","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.Geolocation","short_doc":"Structure representing the data a single geolocation reading. ...","component":false,"superclasses":["Adaptive.APIBean"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.APIBean' rel='Adaptive.APIBean' class='docClass'>Adaptive.APIBean</a><div class='subclass '><strong>Adaptive.Geolocation</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-Geolocation' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Structure representing the data a single geolocation reading.</p>\n\n<p>@version 1.0</p>\n        <p>Available since: <b>v2.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-altitudeProperty' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-property-altitudeProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-property-altitudeProperty' class='name expandable'>altitudeProperty</a> : number<span class=\"signature\"></span></div><div class='description'><div class='short'>The current device altitude (or Z coordinate). ...</div><div class='long'><p>The current device altitude (or Z coordinate). Measured in meters. The 'altitudeProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'altitude'.</p>\n</div></div></div><div id='property-latitudeProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-property-latitudeProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-property-latitudeProperty' class='name expandable'>latitudeProperty</a> : number<span class=\"signature\"></span></div><div class='description'><div class='short'>The Y coordinate (or latitude). ...</div><div class='long'><p>The Y coordinate (or latitude). Measured in degrees. The 'latitudeProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'latitude'.</p>\n</div></div></div><div id='property-longitudeProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-property-longitudeProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-property-longitudeProperty' class='name expandable'>longitudeProperty</a> : number<span class=\"signature\"></span></div><div class='description'><div class='short'>The X coordinate (or longitude). ...</div><div class='long'><p>The X coordinate (or longitude). Measured in degrees. The 'longitudeProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'longitude'.</p>\n</div></div></div><div id='property-timestampProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-property-timestampProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-property-timestampProperty' class='name expandable'>timestampProperty</a> : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Timestamp of the geolocation reading. ...</div><div class='long'><p>Timestamp of the geolocation reading. The 'timestampProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'timestamp'.</p>\n</div></div></div><div id='property-xDoPProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-property-xDoPProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-property-xDoPProperty' class='name expandable'>xDoPProperty</a> : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Dilution of precision on the X measurement. ...</div><div class='long'><p>Dilution of precision on the X measurement. Measured in meters. The 'xDoPProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'xDoP'.</p>\n</div></div></div><div id='property-yDoPProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-property-yDoPProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-property-yDoPProperty' class='name expandable'>yDoPProperty</a> : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Dilution of precision on the Y measurement. ...</div><div class='long'><p>Dilution of precision on the Y measurement. Measured in meters. The 'yDoPProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'yDoP'.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.Geolocation-method-constructor' class='name expandable'>Adaptive.Geolocation</a>( <span class='pre'>latitude, longitude, altitude, xDoP, yDoP, timestamp</span> ) : <a href=\"#!/api/Adaptive.Geolocation\" rel=\"Adaptive.Geolocation\" class=\"docClass\">Adaptive.Geolocation</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor with parameters ...</div><div class='long'><p>Constructor with parameters</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>latitude</span> : number<div class='sub-desc'><p>Latitude of the measurement</p>\n</div></li><li><span class='pre'>longitude</span> : number<div class='sub-desc'><p>Longitude of the measurement</p>\n</div></li><li><span class='pre'>altitude</span> : number<div class='sub-desc'><p>Altitude of the measurement</p>\n</div></li><li><span class='pre'>xDoP</span> : number<div class='sub-desc'><p>Dilution of precision on the X measurement</p>\n</div></li><li><span class='pre'>yDoP</span> : number<div class='sub-desc'><p>Dilution of precision on the Y measurement</p>\n</div></li><li><span class='pre'>timestamp</span> : number<div class='sub-desc'><p>Timestamp of the measurement</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.Geolocation\" rel=\"Adaptive.Geolocation\" class=\"docClass\">Adaptive.Geolocation</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.APIBean-method-constructor\" rel=\"Adaptive.APIBean-method-constructor\" class=\"docClass\">Adaptive.APIBean.constructor</a></p></div></div></div><div id='method-getAltitude' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-method-getAltitude' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-method-getAltitude' class='name expandable'>getAltitude</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns altitude in meters ...</div><div class='long'><p>Returns altitude in meters</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>Altitude of the measurement</p>\n</div></li></ul></div></div></div><div id='method-getLatitude' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-method-getLatitude' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-method-getLatitude' class='name expandable'>getLatitude</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the latitude in degrees ...</div><div class='long'><p>Returns the latitude in degrees</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>Latitude of the measurement</p>\n</div></li></ul></div></div></div><div id='method-getLongitude' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-method-getLongitude' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-method-getLongitude' class='name expandable'>getLongitude</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the longitude in degrees ...</div><div class='long'><p>Returns the longitude in degrees</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>Longitude of the measurement</p>\n</div></li></ul></div></div></div><div id='method-getTimestamp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-method-getTimestamp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-method-getTimestamp' class='name expandable'>getTimestamp</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Timestamp Getter ...</div><div class='long'><p>Timestamp Getter</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>Timestamp</p>\n</div></li></ul></div></div></div><div id='method-getXDoP' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-method-getXDoP' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-method-getXDoP' class='name expandable'>getXDoP</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets Dilution of precision on the X measurement. ...</div><div class='long'><p>Gets Dilution of precision on the X measurement. Measured in meters.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>xDoP Dilution of precision on the X measurement. Measured in meters.</p>\n</div></li></ul></div></div></div><div id='method-getYDoP' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-method-getYDoP' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-method-getYDoP' class='name expandable'>getYDoP</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets Dilution of precision on the Y measurement. ...</div><div class='long'><p>Gets Dilution of precision on the Y measurement. Measured in meters.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>yDoP Dilution of precision on the Y measurement. Measured in meters.</p>\n</div></li></ul></div></div></div><div id='method-setAltitude' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-method-setAltitude' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-method-setAltitude' class='name expandable'>setAltitude</a>( <span class='pre'>altitude</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set altitude in meters ...</div><div class='long'><p>Set altitude in meters</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>altitude</span> : number<div class='sub-desc'><p>Altitude of the measurement</p>\n</div></li></ul></div></div></div><div id='method-setLatitude' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-method-setLatitude' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-method-setLatitude' class='name expandable'>setLatitude</a>( <span class='pre'>latitude</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the latitude in degrees ...</div><div class='long'><p>Set the latitude in degrees</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>latitude</span> : number<div class='sub-desc'><p>Latitude of the measurement</p>\n</div></li></ul></div></div></div><div id='method-setLongitude' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-method-setLongitude' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-method-setLongitude' class='name expandable'>setLongitude</a>( <span class='pre'>longitude</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the latitude in degrees ...</div><div class='long'><p>Returns the latitude in degrees</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>longitude</span> : number<div class='sub-desc'><p>Longitude of the measurement</p>\n</div></li></ul></div></div></div><div id='method-setTimestamp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-method-setTimestamp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-method-setTimestamp' class='name expandable'>setTimestamp</a>( <span class='pre'>timestamp</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Timestamp Setter ...</div><div class='long'><p>Timestamp Setter</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timestamp</span> : number<div class='sub-desc'><p>Timestamp</p>\n</div></li></ul></div></div></div><div id='method-setXDoP' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-method-setXDoP' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-method-setXDoP' class='name expandable'>setXDoP</a>( <span class='pre'>xDoP</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets Dilution of precision on the X measurement. ...</div><div class='long'><p>Sets Dilution of precision on the X measurement. Measured in meters.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xDoP</span> : number<div class='sub-desc'><p>Dilution of precision on the X measurement. Measured in meters.</p>\n</div></li></ul></div></div></div><div id='method-setYDoP' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-method-setYDoP' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-method-setYDoP' class='name expandable'>setYDoP</a>( <span class='pre'>yDoP</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets Dilution of precision on the Y measurement. ...</div><div class='long'><p>Sets Dilution of precision on the Y measurement. Measured in meters.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>yDoP</span> : number<div class='sub-desc'><p>Dilution of precision on the Y measurement. Measured in meters.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-toObject' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Geolocation'>Adaptive.Geolocation</span><br/><a href='source/Adaptive.html#Adaptive-Geolocation-static-method-toObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Geolocation-static-method-toObject' class='name expandable'>toObject</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/Adaptive.Geolocation\" rel=\"Adaptive.Geolocation\" class=\"docClass\">Adaptive.Geolocation</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Convert JSON parsed object to typed equivalent. ...</div><div class='long'><p>Convert JSON parsed object to typed equivalent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>JSON parsed structure of type <a href=\"#!/api/Adaptive.Geolocation\" rel=\"Adaptive.Geolocation\" class=\"docClass\">Adaptive.Geolocation</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.Geolocation\" rel=\"Adaptive.Geolocation\" class=\"docClass\">Adaptive.Geolocation</a></span><div class='sub-desc'><p>Wrapped object instance.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});