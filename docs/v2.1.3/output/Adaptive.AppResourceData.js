Ext.data.JsonP.Adaptive_AppResourceData({"tagname":"class","name":"Adaptive.AppResourceData","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-AppResourceData"}],"author":[{"tagname":"author","name":"Carlos Lozano Diez","email":null}],"since":"v2.1.3","members":[{"name":"cooked","tagname":"property","owner":"Adaptive.AppResourceData","id":"property-cooked","meta":{}},{"name":"cookedLength","tagname":"property","owner":"Adaptive.AppResourceData","id":"property-cookedLength","meta":{}},{"name":"cookedType","tagname":"property","owner":"Adaptive.AppResourceData","id":"property-cookedType","meta":{}},{"name":"data","tagname":"property","owner":"Adaptive.AppResourceData","id":"property-data","meta":{}},{"name":"id","tagname":"property","owner":"Adaptive.AppResourceData","id":"property-id","meta":{}},{"name":"rawLength","tagname":"property","owner":"Adaptive.AppResourceData","id":"property-rawLength","meta":{}},{"name":"rawType","tagname":"property","owner":"Adaptive.AppResourceData","id":"property-rawType","meta":{}},{"name":"constructor","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-constructor","meta":{}},{"name":"getCooked","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-getCooked","meta":{}},{"name":"getCookedLength","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-getCookedLength","meta":{}},{"name":"getCookedType","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-getCookedType","meta":{}},{"name":"getData","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-getData","meta":{}},{"name":"getId","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-getId","meta":{}},{"name":"getRawLength","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-getRawLength","meta":{}},{"name":"getRawType","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-getRawType","meta":{}},{"name":"setCooked","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-setCooked","meta":{}},{"name":"setCookedLength","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-setCookedLength","meta":{}},{"name":"setCookedType","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-setCookedType","meta":{}},{"name":"setData","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-setData","meta":{}},{"name":"setId","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-setId","meta":{}},{"name":"setRawLength","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-setRawLength","meta":{}},{"name":"setRawType","tagname":"method","owner":"Adaptive.AppResourceData","id":"method-setRawType","meta":{}},{"name":"toObject","tagname":"method","owner":"Adaptive.AppResourceData","id":"static-method-toObject","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.AppResourceData","short_doc":"This class represents a resource provided by the platform from the application's secure payload. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-AppResourceData' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>This class represents a resource provided by the platform from the application's secure payload.</p>\n\n<p>@version 1.0</p>\n        <p>Available since: <b>v2.1.3</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cooked' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-property-cooked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-property-cooked' class='name expandable'>cooked</a> : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Marker to indicate whether the resource is cooked in some way (compressed, encrypted, etc.) If true, the\nimplementati...</div><div class='long'><p>Marker to indicate whether the resource is cooked in some way (compressed, encrypted, etc.) If true, the\nimplementation must uncompress/unencrypt following the cookedType recipe specified by the payload. The 'cookedProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'cooked'.</p>\n</div></div></div><div id='property-cookedLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-property-cookedLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-property-cookedLength' class='name expandable'>cookedLength</a> : number<span class=\"signature\"></span></div><div class='description'><div class='short'>This is the length of the payload after cooking. ...</div><div class='long'><p>This is the length of the payload after cooking. In general, this length indicates the amount\nof space saved with regard to the rawLength of the payload. The 'cookedLengthProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'cookedLength'.</p>\n</div></div></div><div id='property-cookedType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-property-cookedType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-property-cookedType' class='name expandable'>cookedType</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'>If the data is cooked, this field should contain the recipe to return the cooked data to its original\nuncompressed/un...</div><div class='long'><p>If the data is cooked, this field should contain the recipe to return the cooked data to its original\nuncompressed/unencrypted/etc format. The 'cookedTypeProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'cookedType'.</p>\n</div></div></div><div id='property-data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-property-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-property-data' class='name expandable'>data</a> : number[]<span class=\"signature\"></span></div><div class='description'><div class='short'>The payload data of the resource in ready to consume format. ...</div><div class='long'><p>The payload data of the resource in ready to consume format. The 'dataProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'data'.</p>\n</div></div></div><div id='property-id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-property-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-property-id' class='name expandable'>id</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'>The id or path identifier of the resource. ...</div><div class='long'><p>The id or path identifier of the resource. The 'idProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'id'.</p>\n</div></div></div><div id='property-rawLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-property-rawLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-property-rawLength' class='name expandable'>rawLength</a> : number<span class=\"signature\"></span></div><div class='description'><div class='short'>The raw length of the payload before any cooking occurred. ...</div><div class='long'><p>The raw length of the payload before any cooking occurred. This is equivalent to the size of the resource\nafter uncompressing and unencrypting. The 'rawLengthProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'rawLength'.</p>\n</div></div></div><div id='property-rawType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-property-rawType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-property-rawType' class='name expandable'>rawType</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'>The raw type of the payload - this is equivalent to the mimetype of the content. ...</div><div class='long'><p>The raw type of the payload - this is equivalent to the mimetype of the content. The 'rawTypeProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'rawType'.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.AppResourceData-method-constructor' class='name expandable'>Adaptive.AppResourceData</a>( <span class='pre'>id, data, rawType, rawLength, cooked, cookedType, cookedLength</span> ) : <a href=\"#!/api/Adaptive.AppResourceData\" rel=\"Adaptive.AppResourceData\" class=\"docClass\">Adaptive.AppResourceData</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Convenience constructor. ...</div><div class='long'><p>Convenience constructor.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : string<div class='sub-desc'><p>The id or path of the resource retrieved.</p>\n</div></li><li><span class='pre'>data</span> : number[]<div class='sub-desc'><p>The payload data of the resource (uncooked).</p>\n</div></li><li><span class='pre'>rawType</span> : string<div class='sub-desc'><p>The raw type/mimetype of the resource.</p>\n</div></li><li><span class='pre'>rawLength</span> : number<div class='sub-desc'><p>The raw length/original length in bytes of the resource.</p>\n</div></li><li><span class='pre'>cooked</span> : boolean<div class='sub-desc'><p>True if the resource is cooked.</p>\n</div></li><li><span class='pre'>cookedType</span> : string<div class='sub-desc'><p>Type of recipe used for cooking.</p>\n</div></li><li><span class='pre'>cookedLength</span> : number<div class='sub-desc'><p>The cooked length in bytes of the resource.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.AppResourceData\" rel=\"Adaptive.AppResourceData\" class=\"docClass\">Adaptive.AppResourceData</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCooked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-getCooked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-getCooked' class='name expandable'>getCooked</a>( <span class='pre'></span> ) : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Attribute to denote whether the payload of the resource is cooked. ...</div><div class='long'><p>Attribute to denote whether the payload of the resource is cooked.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>True if the resource is cooked, false otherwise.</p>\n</div></li></ul></div></div></div><div id='method-getCookedLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-getCookedLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-getCookedLength' class='name expandable'>getCookedLength</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'>The length in bytes of the payload after cooking. ...</div><div class='long'><p>The length in bytes of the payload after cooking.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>Length in bytes of cooked payload.</p>\n</div></li></ul></div></div></div><div id='method-getCookedType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-getCookedType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-getCookedType' class='name expandable'>getCookedType</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>If the resource is cooked, this will return the recipe used during cooking. ...</div><div class='long'><p>If the resource is cooked, this will return the recipe used during cooking.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The cooking recipe to reverse the cooking process.</p>\n</div></li></ul></div></div></div><div id='method-getData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-getData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-getData' class='name expandable'>getData</a>( <span class='pre'></span> ) : number[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the payload of the resource. ...</div><div class='long'><p>Returns the payload of the resource.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number[]</span><div class='sub-desc'><p>Binary payload of the resource.</p>\n</div></li></ul></div></div></div><div id='method-getId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-getId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-getId' class='name expandable'>getId</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets The id or path identifier of the resource. ...</div><div class='long'><p>Gets The id or path identifier of the resource.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>id The id or path identifier of the resource.</p>\n</div></li></ul></div></div></div><div id='method-getRawLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-getRawLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-getRawLength' class='name expandable'>getRawLength</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the resource payload's original length. ...</div><div class='long'><p>Gets the resource payload's original length.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>Original length of the resource in bytes before cooking.</p>\n</div></li></ul></div></div></div><div id='method-getRawType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-getRawType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-getRawType' class='name expandable'>getRawType</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the resource's raw type or mimetype. ...</div><div class='long'><p>Gets the resource's raw type or mimetype.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>Resource's type or mimetype.</p>\n</div></li></ul></div></div></div><div id='method-setCooked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-setCooked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-setCooked' class='name expandable'>setCooked</a>( <span class='pre'>cooked</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Attribute to denote whether the payload of the resource is cooked. ...</div><div class='long'><p>Attribute to denote whether the payload of the resource is cooked.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cooked</span> : boolean<div class='sub-desc'><p>True if the resource is cooked, false otherwise.</p>\n</div></li></ul></div></div></div><div id='method-setCookedLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-setCookedLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-setCookedLength' class='name expandable'>setCookedLength</a>( <span class='pre'>cookedLength</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The length in bytes of the payload after cooking. ...</div><div class='long'><p>The length in bytes of the payload after cooking.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cookedLength</span> : number<div class='sub-desc'><p>Length in bytes of cooked payload.</p>\n</div></li></ul></div></div></div><div id='method-setCookedType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-setCookedType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-setCookedType' class='name expandable'>setCookedType</a>( <span class='pre'>cookedType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>If the resource is cooked, the type of recipe used during cooking. ...</div><div class='long'><p>If the resource is cooked, the type of recipe used during cooking.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cookedType</span> : string<div class='sub-desc'><p>The cooking recipe used during cooking.</p>\n</div></li></ul></div></div></div><div id='method-setData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-setData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-setData' class='name expandable'>setData</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the payload of the resource. ...</div><div class='long'><p>Sets the payload of the resource.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : number[]<div class='sub-desc'><p>Binary payload of the resource.</p>\n</div></li></ul></div></div></div><div id='method-setId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-setId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-setId' class='name expandable'>setId</a>( <span class='pre'>id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the id or path of the resource. ...</div><div class='long'><p>Sets the id or path of the resource.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : string<div class='sub-desc'><p>The id or path of the resource.</p>\n</div></li></ul></div></div></div><div id='method-setRawLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-setRawLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-setRawLength' class='name expandable'>setRawLength</a>( <span class='pre'>rawLength</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the resource payload's original length. ...</div><div class='long'><p>Sets the resource payload's original length.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rawLength</span> : number<div class='sub-desc'><p>Original length of the resource in bytes before cooking.</p>\n</div></li></ul></div></div></div><div id='method-setRawType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-method-setRawType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-method-setRawType' class='name expandable'>setRawType</a>( <span class='pre'>rawType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the resource's raw type or mimetype. ...</div><div class='long'><p>Sets the resource's raw type or mimetype.</p>\n        <p>Available since: <b>v2.1.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rawType</span> : string<div class='sub-desc'><p>Resource's type or mimetype.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-toObject' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.AppResourceData'>Adaptive.AppResourceData</span><br/><a href='source/Adaptive.html#Adaptive-AppResourceData-static-method-toObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.AppResourceData-static-method-toObject' class='name expandable'>toObject</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/Adaptive.AppResourceData\" rel=\"Adaptive.AppResourceData\" class=\"docClass\">Adaptive.AppResourceData</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Convert JSON parsed object to typed equivalent. ...</div><div class='long'><p>Convert JSON parsed object to typed equivalent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>JSON parsed structure of type <a href=\"#!/api/Adaptive.AppResourceData\" rel=\"Adaptive.AppResourceData\" class=\"docClass\">Adaptive.AppResourceData</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.AppResourceData\" rel=\"Adaptive.AppResourceData\" class=\"docClass\">Adaptive.AppResourceData</a></span><div class='sub-desc'><p>Wrapped object instance.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});