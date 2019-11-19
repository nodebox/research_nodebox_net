---
layout: page
---
<pre><code>h1 {padding-bottom:2px; border-bottom:solid 2px black; margin:0;}
h1+p {font-weight:bold; font-size:0.8em; margin-top:1px;}
h2 {margin-top:0;}
#content {padding-right:8px;}
#content ul li {margin-bottom:1em;}
#content ul li ul li {margin-bottom:0;}
#sidebar h2 {font-size:1em;}
#sidebar ul {padding-left:0; margin-left:1.2em;}
#sidebar li {font-size:0.8em; white-space:nowrap;}
#sidebar .box {padding-left:8px; border-left:dashed 1px black;}
li {list-style-type:none;}
a {color:#000; text-decoration:none;}
</code></pre>

<p></style>
<style type="text/css" media="screen">
    a {border-bottom:dotted 1px black;}
    a:hover {border-bottom:solid 1px black;}
    h2 span, h3 span {font-family:Courier; font-size:12px;}
</style>
<style type="text/css" media="print">
    body {font-size:10pt;}
    h1 {font-size:24pt;}
    h2 {font-size:18pt;}
    h3 {font-size:14pt;}
    #sidebar {display:none;}
</style>
</script></p>

<h1>Adobe Photoshop CS.app terminology</h1>

<p>/Applications/Adobe Photoshop CS/Adobe Photoshop CS.app</p>

<table>
<tr>
<td id="content" valign="top" width="90%">

        <a name="suite_AdobeScriptAutomation" id="suite_AdobeScriptAutomation"></a>
        <h2>AdobeScriptAutomation</h2>

        <p>Adobe Photoshop script execution menu</p>



            <h3>Commands</h3>
            <ul>
                <li>
                    <a name="command_Scripts"></a>
                    <strong>application.Scripts(...)</strong>
                     -- Photoshop scripting support plug-in
                    <ul>
                        <li>
                            [<em>AEType('#ImR')</em>]

                        </li>
                        <li>
                            <strong>javascript_file=</strong><em>Text</em>
                             -- The JavaScript file to execute
                        </li>
<li>
                            <strong>javascript_text=</strong><em>Text</em>
                             -- The JavaScript text to execute
                        </li>
<li>
                            <strong>debugging=</strong><em>Boolean</em>
                             -- should the javascript be executed in debug mode?
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
            </ul>







        <a name="suite_Core_Suite" id="suite_Core_Suite"></a>
        <h2>Core Suite</h2>

        <p>Suite that applies to all applications</p>



            <h3>Commands</h3>
            <ul>
                <li>
                    <a name="command_count"></a>
                    <strong>reference.count(...)</strong>
                     -- Return the number of elements of a particular class within an object
                    <ul>

                        <li>
                            <strong>each=</strong><em>Type</em>
                             -- the class of the elements to be counted.
                        </li>
                        <li>
                            Result: <em>SInt32</em>
                             -- the number of elements
                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_delete"></a>
                    <strong>reference.delete()</strong>
                     -- Remove an element from an object
                    <ul>


                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_duplicate"></a>
                    <strong>reference.duplicate(...)</strong>
                     -- Duplicate one or more object(s)
                    <ul>

                        <li>
                            [<strong>to=</strong><em>InsertionLoc</em>]
                             -- the new location for the object(s)
                        </li>
<li>
                            [<strong>with_properties=</strong><em>AERecord</em>]
                             -- new values for the properties of the duplicated element
                        </li>
                        <li>
                            Result: <em>ObjectSpecifier</em>
                             -- to the duplicated object(s)
                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_exists"></a>
                    <strong>reference.exists()</strong>
                     -- Verify if an object exists
                    <ul>


                        <li>
                            Result: <em>Boolean</em>
                             -- true if it exists, false if not
                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_make"></a>
                    <strong>application.make(...)</strong>
                     -- Make a new element
                    <ul>

                        <li>
                            <strong>new=</strong><em>Type</em>
                             -- the class of the new element.
                        </li>
<li>
                            <strong>at=</strong><em>InsertionLoc</em>
                             -- the location at which to insert the element
                        </li>
<li>
                            [<strong>with_data=</strong><em>Anything</em>]
                             -- the initial data for the element
                        </li>
<li>
                            [<strong>with_properties=</strong><em>AERecord</em>]
                             -- the initial values for the properties of the element
                        </li>
                        <li>
                            Result: <em>ObjectSpecifier</em>
                             -- to the new object(s)
                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_move"></a>
                    <strong>reference.move(...)</strong>
                     -- Move object(s) to a new location
                    <ul>

                        <li>
                            <strong>to=</strong><em>InsertionLoc</em>
                             -- the new location for the object(s)
                        </li>
                        <li>
                            Result: <em>ObjectSpecifier</em>
                             -- to the object(s) after they have been moved
                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_close"></a>
                    <strong>application.close(...)</strong>
                     -- close the document
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>saving=</strong><em>k.ask | k.no | k.yes</em>]
                             -- specifies whether changes should be saved before closing ( default: ask )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_open"></a>
                    <strong>application.open(...)</strong>
                     -- open the specified document file(s)
                    <ul>
                        <li>
                            <em>Anything</em>
                             -- the file(s) to be opened
                        </li>
                        <li>
                            [<strong>as=</strong><em>k.Acrobat_TouchUp_Image | k.Alias_PIX | k.BMP | k.CompuServe_GIF | k.Electric_Image | k.EPS | k.EPS_PICT_preview | k.EPS_TIFF_Preview | k.Filmstrip | k.JPEG | k.PCX | k.PDF | k.Photo_CD | k.Photoshop_DCS_10x2E0 | k.Photoshop_DCS_20x2E0 | k.Photoshop_EPS | k.Photoshop_format | k.Photoshop_PDF | k.PICT_file | k.PICT_resource | k.Pixar | k.PNG | k.Portable_Bitmap | k.raw | k.Scitex_CT | k.SGI_RGB | k.SoftImage | k.Targa | k.TIFF | k.Wavefront_RLA | k.Wireless_Bitmap</em>]
                             -- open document as the specified type
                        </li>
<li>
                            [<strong>with_options=</strong><em>k.open_options</em>]
                             -- options for the file type specified
                        </li>
<li>
                            [<strong>showing_dialogs=</strong><em>k.always | k.error_dialogs | k.never</em>]
                             -- should a dialog be displayed when a file is opened
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_print_"></a>
                    <strong>application.print_(...)</strong>
                     -- print the specified object(s)
                    <ul>
                        <li>
                            <em>Anything</em>
                             -- the file(s) or document(s) to be printed
                        </li>
                        <li>
                            [<strong>postscript_encoding=</strong><em>k.ASCII | k.binary | k.JPEG</em>]
                             -- encoding type ( default: binary )
                        </li>
<li>
                            [<strong>source_space=</strong><em>k.document_space | k.proof_space</em>]
                             -- color space for source ( default: document space )
                        </li>
<li>
                            [<strong>print_space=</strong><em>UnicodeText</em>]
                             -- color space for printer. Can be nothing (meaning same as source); 'Working RGB', 'Working CMYK', 'Working Gray', 'Lab Color' (meaning one of the working spaces or Lab color); or a string specifying a specific colorspace (default is same as source)
                        </li>
<li>
                            [<strong>intent=</strong><em>k.absolute_colorimetric | k.perceptual | k.relative_colorimetric | k.saturation_intent</em>]
                             -- if the print space is different from the source space, this argument will be used as the color conversion intent ( default: relative colorimetric )
                        </li>
<li>
                            [<strong>blackpoint_compensation=</strong><em>Boolean</em>]
                             -- if the print space is different from the source space, this argument indicates if the color conversion should use black point compensation ( default: true )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_quit"></a>
                    <strong>application.quit()</strong>
                     -- quit the application
                    <ul>


                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_save"></a>
                    <strong>application.save(...)</strong>
                     -- save the specified document
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>in_=</strong><em>FSS</em>]
                             -- the file to save the document in
                        </li>
<li>
                            [<strong>as=</strong><em>k.Alias_PIX | k.BMP | k.CompuServe_GIF | k.Electric_Image | k.JPEG | k.PCX | k.Photoshop_DCS_10x2E0 | k.Photoshop_DCS_20x2E0 | k.Photoshop_EPS | k.Photoshop_format | k.Photoshop_PDF | k.PICT_file | k.PICT_resource | k.Pixar | k.PNG | k.Portable_Bitmap | k.raw | k.Scitex_CT | k.SGI_RGB | k.SoftImage | k.Targa | k.TIFF | k.Wavefront_RLA | k.Wireless_Bitmap</em>]
                             -- the file type to save the document as
                        </li>
<li>
                            [<strong>copying=</strong><em>Boolean</em>]
                             -- save as copy leaving original open. Unsaved files cannot be saved as copy
                        </li>
<li>
                            [<strong>appending=</strong><em>k.lowercase_extension | k.no_extension | k.uppercase_extension</em>]
                             -- append an extension to the document name
                        </li>
<li>
                            [<strong>with_options=</strong><em>k.save_options</em>]
                             -- options for the file type specified
                        </li>
                        <li>
                            Result: <em>k.document</em>
                             -- save the specified document
                        </li>
                    </ul>
                </li>
            </ul>




            <h3>Classes</h3>
            <ul>
                <li>
                    <a name="class_application"></a>
                    <strong>application</strong>
                     -- The Adobe Photoshop application
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>background_color</strong>

                                    <em><a href="#class_color_value">k.color_value</a></em>

                                </li>
<li>
                                    <strong>color_settings</strong>

                                    <em>Anything</em>
                                     -- name of selected color settings' set
                                </li>
<li>
                                    <strong>current_document</strong>

                                    <em><a href="#class_document">k.document</a></em>
                                     -- the frontmost document
                                </li>
<li>
                                    <strong>display_dialogs</strong>

                                    <em>k.always | k.error_dialogs | k.never</em>
                                     -- controls whether or not Photoshop displays dialogs
                                </li>
<li>
                                    <strong>foreground_color</strong>

                                    <em><a href="#class_color_value">k.color_value</a></em>

                                </li>
<li>
                                    <strong>free_memory</strong>
                                    (r/o)
                                    <em>LongFloat</em>
                                     -- the amount of unused memory available to Adobe Photoshop
                                </li>
<li>
                                    <strong>frontmost</strong>
                                    (r/o)
                                    <em>Boolean</em>
                                     -- is Photoshop the frontmost application?
                                </li>
<li>
                                    <strong>name</strong>
                                    (r/o)
                                    <em>UnicodeText</em>
                                     -- the application's name
                                </li>
<li>
                                    <strong>scripting_version</strong>
                                    (r/o)
                                    <em>UnicodeText</em>
                                     -- the version of the Scripting interface
                                </li>
<li>
                                    <strong>settings</strong>
                                    (r/o)
                                    <em><a href="#class_settings_object">k.settings_object</a></em>
                                     -- preference settings
                                </li>
<li>
                                    <strong>version</strong>
                                    (r/o)
                                    <em>UnicodeText</em>
                                     -- the version of Adobe Photoshop application
                                </li>
                            </ul>
                        </li>
                        <li>Elements:
                            <ul>
                                <li>
                                    <strong><a href="#class_document">documents</a></strong> -- 
                                    <em>name | index | range | relative | test</em>
                                </li>
<li>
                                    <strong><a href="#class_font">fonts</a></strong> -- 
                                    <em>name | index | range | relative | test</em>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
<li>
                    <a name="class_document"></a>
                    <strong>document</strong>
                     -- A document
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>index</strong>
                                    (r/o)
                                    <em>SInt32</em>
                                     -- the index of this instance of the object
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>background_layer</strong>
                                    (r/o)
                                    <em><a href="#class_art_layer">k.art_layer</a></em>
                                     -- background layer for the document. Only valid for documents that have a background layer
                                </li>
<li>
                                    <strong>bits_per_channel</strong>

                                    <em>k.eight | k.one | k.sixteen</em>
                                     -- number of bits per channel
                                </li>
<li>
                                    <strong>color_profile_kind</strong>

                                    <em>k.custom | k.none | k.working</em>
                                     -- type of color profile management for document
                                </li>
<li>
                                    <strong>color_profile_name</strong>

                                    <em>UnicodeText</em>
                                     -- name of color profile for document. Only valid for documents that have been assigned a color profile
                                </li>
<li>
                                    <strong>component_channels</strong>
                                    (r/o)
                                    <em><a href="#class_channel">list of k.channel</a></em>
                                     -- all color component channels for this document
                                </li>
<li>
                                    <strong>current_channels</strong>

                                    <em><a href="#class_channel">list of k.channel</a></em>
                                     -- selected channels for document
                                </li>
<li>
                                    <strong>current_history_brush_source</strong>

                                    <em><a href="#class_history_state">k.history_state</a></em>
                                     -- the current history state to use with the history brush for this document
                                </li>
<li>
                                    <strong>current_history_state</strong>

                                    <em><a href="#class_history_state">k.history_state</a></em>
                                     -- the current history state for this document
                                </li>
<li>
                                    <strong>current_layer</strong>

                                    <em><a href="#class_layer">k.layer</a></em>
                                     -- selected layer for document
                                </li>
<li>
                                    <strong>file_path</strong>
                                    (r/o)
                                    <em>Alias</em>
                                     -- full path name of document
                                </li>
<li>
                                    <strong>height</strong>
                                    (r/o)
                                    <em>LongFloat</em>
                                     -- height of document (unit value)
                                </li>
<li>
                                    <strong>histogram</strong>
                                    (r/o)
                                    <em>list of SInt32</em>
                                     -- a histogram of values for the composite document (only for RGB, CMYK and 'Indexed colors' documents)
                                </li>
<li>
                                    <strong>info</strong>
                                    (r/o)
                                    <em><a href="#class_info_object">k.info_object</a></em>
                                     -- document information
                                </li>
<li>
                                    <strong>initial_fill</strong>
                                    (r/o)
                                    <em>k.transparent | k.use_background_color | k.white</em>
                                     -- initial fill of the document. Only valid when used as an option with the 'make new document' command
                                </li>
<li>
                                    <strong>managed</strong>
                                    (r/o)
                                    <em>Boolean</em>
                                     -- is the document a workgroup document?
                                </li>
<li>
                                    <strong>mode</strong>
                                    (r/o)
                                    <em>k.bitmap | k.CMYK | k.duotone | k.grayscale | k.indexed_color | k.Lab | k.multichannel | k.RGB</em>
                                     -- document mode
                                </li>
<li>
                                    <strong>modified</strong>
                                    (r/o)
                                    <em>Boolean</em>
                                     -- has the document been modified since last save?
                                </li>
<li>
                                    <strong>name</strong>
                                    (r/o)
                                    <em>UnicodeText</em>
                                     -- the document's name
                                </li>
<li>
                                    <strong>pixel_aspect_ratio</strong>

                                    <em>LongFloat</em>
                                     -- the pixel aspect ration of the document
                                </li>
<li>
                                    <strong>quick_mask_mode</strong>

                                    <em>Boolean</em>
                                     -- is the document in the quick mask mode?
                                </li>
<li>
                                    <strong>resolution</strong>
                                    (r/o)
                                    <em>LongFloat</em>
                                     -- the resolution of the document (in pixels per inch)
                                </li>
<li>
                                    <strong>selection</strong>
                                    (r/o)
                                    <em><a href="#class_selection_object">k.selection_object</a></em>
                                     -- the document's selection
                                </li>
<li>
                                    <strong>width</strong>
                                    (r/o)
                                    <em>LongFloat</em>
                                     -- width of document (unit value)
                                </li>
<li>
                                    <strong>XMP_metadata</strong>
                                    (r/o)
                                    <em><a href="#class_XMP_metadata">k.XMP_metadata</a></em>

                                </li>
                            </ul>
                        </li>
                        <li>Elements:
                            <ul>
                                <li>
                                    <strong><a href="#class_art_layer">art_layers</a></strong> -- 
                                    <em>name | index | range | relative | test</em>
                                </li>
<li>
                                    <strong><a href="#class_channel">channels</a></strong> -- 
                                    <em>name | index | range | relative | test</em>
                                </li>
<li>
                                    <strong><a href="#class_history_state">history_states</a></strong> -- 
                                    <em>name | index | range | relative | test</em>
                                </li>
<li>
                                    <strong><a href="#class_layer_comp">layer_comps</a></strong> -- 
                                    <em>name | index | range | relative | test</em>
                                </li>
<li>
                                    <strong><a href="#class_layer">layers</a></strong> -- 
                                    <em>name | index | range | relative | test</em>
                                </li>
<li>
                                    <strong><a href="#class_layer_set">layer_sets</a></strong> -- 
                                    <em>name | index | range | relative | test</em>
                                </li>
<li>
                                    <strong><a href="#class_path_item">path_items</a></strong> -- 
                                    <em>name | index | range | relative | test</em>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>




        <a name="suite_Photoshop_Suite" id="suite_Photoshop_Suite"></a>
        <h2>Photoshop Suite</h2>

        <p>Scripting commands and classes for Adobe Photoshop</p>



            <h3>Commands</h3>
            <ul>
                <li>
                    <a name="command_apply"></a>
                    <strong>application.apply(...)</strong>
                     -- apply the layer comp to the document
                    <ul>
                        <li>
                            <em>k.layer_comp</em>
                             -- the layer comp object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_apply_layer_style"></a>
                    <strong>application.apply_layer_style(...)</strong>

                    <ul>
                        <li>
                            <em>k.art_layer</em>
                             -- the art layer object or objects to be operated upon
                        </li>
                        <li>
                            <strong>using=</strong><em>UnicodeText</em>
                             -- name of the layer style to apply
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_change_mode"></a>
                    <strong>application.change_mode(...)</strong>
                     -- change the mode of the document
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            <strong>to=</strong><em>k.bitmap | k.CMYK | k.grayscale | k.indexed_color | k.Lab | k.multichannel | k.RGB</em>
                             -- name of mode to change to
                        </li>
<li>
                            [<strong>with_options=</strong><em>k.change_mode_options</em>]
                             -- options for changing the mode
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_contract"></a>
                    <strong>application.contract(...)</strong>
                     -- contracts the selection
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            <strong>by=</strong><em>LongFloat</em>
                             -- distance to contract the selection by (unit value)
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_convert"></a>
                    <strong>application.convert(...)</strong>
                     -- convert the document from using one color profile to using an other
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            <strong>to_profile=</strong><em>UnicodeText</em>
                             -- name of color profile to convert to. Either a string specifying a specific color profile or 'Working RGB', 'Working CMYK', 'Working Gray', 'Lab Color' meaning one of the working color spaces or Lab color
                        </li>
<li>
                            <strong>intent=</strong><em>k.absolute_colorimetric | k.perceptual | k.relative_colorimetric | k.saturation_intent</em>
                             -- conversion intent
                        </li>
<li>
                            [<strong>blackpoint_compensation=</strong><em>Boolean</em>]
                             -- use black point compensation?
                        </li>
<li>
                            [<strong>dithering=</strong><em>Boolean</em>]
                             -- use dither? ( default: true )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_convert_to_shape"></a>
                    <strong>application.convert_to_shape(...)</strong>
                     -- converts the text item and its containing layer to a fill layer with the text changed to a clipping path
                    <ul>
                        <li>
                            <em>k.text_object</em>
                             -- the text-object object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_create_PDF_presentation"></a>
                    <strong>application.create_PDF_presentation(...)</strong>
                     -- create a PDF presentation file
                    <ul>

                        <li>
                            <strong>from_files=</strong><em>list of Alias</em>
                             -- list of input files to include in the output
                        </li>
<li>
                            <strong>to_file=</strong><em>FSS</em>
                             -- location of the output file
                        </li>
<li>
                            [<strong>with_options=</strong><em>k.presentation_options</em>]
                             -- options for the PDF presentation
                        </li>
                        <li>
                            Result: <em>UnicodeText</em>
                             -- create a PDF presentation file
                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_create_photo_gallery"></a>
                    <strong>application.create_photo_gallery(...)</strong>
                     -- create a web photo gallery
                    <ul>

                        <li>
                            <strong>from_folder=</strong><em>Alias</em>
                             -- folder of files to process
                        </li>
<li>
                            <strong>to_folder=</strong><em>Alias</em>
                             -- location for output files
                        </li>
<li>
                            [<strong>with_options=</strong><em>k.gallery_options</em>]
                             -- options for the web photo gallery
                        </li>
                        <li>
                            Result: <em>UnicodeText</em>
                             -- create a web photo gallery
                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_create_work_path"></a>
                    <strong>application.create_work_path(...)</strong>
                     -- creates a work path based on the text object
                    <ul>
                        <li>
                            <em>k.text_object</em>
                             -- the text-object object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_crop"></a>
                    <strong>application.crop(...)</strong>
                     -- crop the document
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            <strong>bounds=</strong><em>AEList</em>
                             -- area to crop (unit value)
                        </li>
<li>
                            [<strong>angle=</strong><em>LongFloat</em>]
                             -- angle of cropping bounds ( default: 0.0 )
                        </li>
<li>
                            [<strong>width=</strong><em>LongFloat</em>]
                             -- width of resulting document (unit value)
                        </li>
<li>
                            [<strong>height=</strong><em>LongFloat</em>]
                             -- height of resulting document (unit value)
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_deselect"></a>
                    <strong>application.deselect(...)</strong>

                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_expand"></a>
                    <strong>application.expand(...)</strong>
                     -- expand selection
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            <strong>by=</strong><em>LongFloat</em>
                             -- distance to expand the selection by (unit value)
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_export"></a>
                    <strong>application.export(...)</strong>

                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            <strong>in_=</strong><em>FSS</em>
                             -- the file to export to
                        </li>
<li>
                            [<strong>as=</strong><em>k.Illustrator_paths</em>]
                             -- the type of export ( default: Illustrator paths )
                        </li>
<li>
                            [<strong>with_options=</strong><em>k.Illustrator_paths_export_options</em>]
                             -- options for the export type specified
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_feather"></a>
                    <strong>application.feather(...)</strong>
                     -- feather edges of selection
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            <strong>by=</strong><em>LongFloat</em>
                             -- amount to feather the edge by (unit value)
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_fill"></a>
                    <strong>application.fill(...)</strong>
                     -- fills the selection
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            <strong>with_contents=</strong><em>Anything</em>
                             -- a color or a history state
                        </li>
<li>
                            [<strong>blend_mode=</strong><em>k.behind_mode | k.clear_mode | k.color_blend | k.color_burn | k.color_dodge | k.darken | k.difference | k.dissolve | k.exclusion | k.hard_light | k.hue_blend | k.lighten | k.linear_burn | k.linear_dodge | k.linear_light | k.luminosity | k.multiply | k.normal | k.overlay | k.pin_light | k.saturation_blend | k.screen | k.soft_light | k.vivid_light</em>]
                             -- ( default: normal )
                        </li>
<li>
                            [<strong>opacity=</strong><em>SInt32</em>]
                             -- ( default: 100 )
                        </li>
<li>
                            [<strong>preserving_transparency=</strong><em>Boolean</em>]

                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_flatten"></a>
                    <strong>application.flatten(...)</strong>
                     -- flatten all layers in the document
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_flip_canvas"></a>
                    <strong>application.flip_canvas(...)</strong>
                     -- flip the canvas horizontally or vertically
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            <strong>direction=</strong><em>k.horizontal | k.vertical</em>
                             -- which way to flip the canvas
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_grow"></a>
                    <strong>application.grow(...)</strong>
                     -- grow selection to include all adjacent pixels falling within the specified tolerance range
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            <strong>tolerance=</strong><em>SInt32</em>
                             -- ( 0 - 255 )
                        </li>
<li>
                            <strong>antialiasing=</strong><em>Boolean</em>

                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_import_annotations"></a>
                    <strong>application.import_annotations(...)</strong>
                     -- import annotations into the document
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            <strong>from_=</strong><em>Alias</em>
                             -- document to import annotations from
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_invert"></a>
                    <strong>application.invert(...)</strong>
                     -- invert the selection
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_link"></a>
                    <strong>application.link(...)</strong>
                     -- link the layer with another layer
                    <ul>
                        <li>
                            <em>k.layer</em>
                             -- the layer object or objects to be operated upon
                        </li>
                        <li>
                            <strong>with=</strong><em>k.layer</em>
                             -- layer to link to
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_load"></a>
                    <strong>application.load(...)</strong>
                     -- load the selection from a channel
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            <strong>from_=</strong><em>k.channel</em>
                             -- the channel to load the selection from
                        </li>
<li>
                            [<strong>combination_type=</strong><em>k.diminished | k.extended | k.intersected | k.replaced</em>]
                             -- how to combine the channel contents with the existing selection ( default: replaced )
                        </li>
<li>
                            [<strong>inverting=</strong><em>Boolean</em>]
                             -- select the inverse of the channel contents? ( default: false )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_make_work_path"></a>
                    <strong>application.make_work_path(...)</strong>
                     -- make this selection item the work path for this document
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>tolerance=</strong><em>LongFloat</em>]
                             -- tolerance in pixels
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_merge"></a>
                    <strong>application.merge(...)</strong>
                     -- merge an art layer, layer set or a spot channel. Merging a layer returns a reference to the resulting layer. Merging a channel does not return any value
                    <ul>
                        <li>
                            <em>k.channel</em>
                             -- the channel object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_merge_visible_layers"></a>
                    <strong>application.merge_visible_layers(...)</strong>
                     -- flatten all visible layers in the document
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_purge"></a>
                    <strong>application.purge(...)</strong>
                     -- purges one or more caches
                    <ul>
                        <li>
                            <em>k.all_caches | k.clipboard_cache | k.history_caches | k.undo_caches</em>
                             -- what to purge
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_rasterize"></a>
                    <strong>application.rasterize(...)</strong>

                    <ul>
                        <li>
                            <em>k.art_layer</em>
                             -- the art layer object or objects to be operated upon
                        </li>
                        <li>
                            <strong>affecting=</strong><em>k.all_linked_layers | k.entire_layer | k.fill_content | k.layer_clipping_path | k.shape | k.text_contents</em>
                             -- what to rasterize
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_recapture"></a>
                    <strong>application.recapture(...)</strong>
                     -- recapture the current layer state(s) for this layer comp
                    <ul>
                        <li>
                            <em>k.layer_comp</em>
                             -- the layer comp object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_reset_from_comp"></a>
                    <strong>application.reset_from_comp(...)</strong>
                     -- reset the layer comp state to the document state
                    <ul>
                        <li>
                            <em>k.layer_comp</em>
                             -- the layer comp object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_resize_canvas"></a>
                    <strong>application.resize_canvas(...)</strong>
                     -- change the size of the canvas
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>width=</strong><em>LongFloat</em>]
                             -- desired width of canvas (unit value)
                        </li>
<li>
                            [<strong>height=</strong><em>LongFloat</em>]
                             -- desired height of canvas (unit value)
                        </li>
<li>
                            [<strong>anchor_position=</strong><em>k.bottom_center | k.bottom_left | k.bottom_right | k.middle_center | k.middle_left | k.middle_right | k.top_center | k.top_left | k.top_right</em>]
                             -- anchor to resize around ( default: middle center )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_resize_image"></a>
                    <strong>application.resize_image(...)</strong>
                     -- change the size of the image
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>width=</strong><em>LongFloat</em>]
                             -- desired width of image (unit value)
                        </li>
<li>
                            [<strong>height=</strong><em>LongFloat</em>]
                             -- desired height of image (unit value)
                        </li>
<li>
                            [<strong>resolution=</strong><em>LongFloat</em>]
                             -- (in pixels per inch)
                        </li>
<li>
                            [<strong>resample_method=</strong><em>k.bicubic | k.bicubic_sharper | k.bicubic_smoother | k.bilinear | k.closest_neighbor | k.none</em>]
                             -- what method should be used for resampling pixels ( default: bicubic )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_reveal_all"></a>
                    <strong>application.reveal_all(...)</strong>
                     -- expand document to show clipped sections
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_rotate"></a>
                    <strong>application.rotate(...)</strong>

                    <ul>
                        <li>
                            <em>k.layer</em>
                             -- the layer object or objects to be operated upon
                        </li>
                        <li>
                            <strong>angle=</strong><em>LongFloat</em>

                        </li>
<li>
                            [<strong>anchor_position=</strong><em>k.bottom_center | k.bottom_left | k.bottom_right | k.middle_center | k.middle_left | k.middle_right | k.top_center | k.top_left | k.top_right</em>]
                             -- point to rotate about ( default: middle center )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_rotate_boundary"></a>
                    <strong>application.rotate_boundary(...)</strong>
                     -- rotates the boundary of selection
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            <strong>angle=</strong><em>LongFloat</em>

                        </li>
<li>
                            [<strong>anchor_position=</strong><em>k.bottom_center | k.bottom_left | k.bottom_right | k.middle_center | k.middle_left | k.middle_right | k.top_center | k.top_left | k.top_right</em>]
                             -- point to rotate about ( default: middle center )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_rotate_canvas"></a>
                    <strong>application.rotate_canvas(...)</strong>
                     -- rotate canvas of document
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            <strong>angle=</strong><em>LongFloat</em>
                             -- number of degrees to rotate. A positive angle will rotate the canvas clockwise; a negative value will rotate the canvas counter-clockwise
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_scale"></a>
                    <strong>application.scale(...)</strong>

                    <ul>
                        <li>
                            <em>k.layer</em>
                             -- the layer object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>horizontal_scale=</strong><em>LongFloat</em>]
                             -- percentage ( default: 100.0 )
                        </li>
<li>
                            [<strong>vertical_scale=</strong><em>LongFloat</em>]
                             -- percentage ( default: 100.0 )
                        </li>
<li>
                            [<strong>anchor_position=</strong><em>k.bottom_center | k.bottom_left | k.bottom_right | k.middle_center | k.middle_left | k.middle_right | k.top_center | k.top_left | k.top_right</em>]
                             -- point to rotate about ( default: middle center )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_scale_boundary"></a>
                    <strong>application.scale_boundary(...)</strong>
                     -- scale the boundary of selection
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>horizontal_scale=</strong><em>LongFloat</em>]
                             -- percentage ( default: 100.0 )
                        </li>
<li>
                            [<strong>vertical_scale=</strong><em>LongFloat</em>]
                             -- percentage ( default: 100.0 )
                        </li>
<li>
                            [<strong>anchor_position=</strong><em>k.bottom_center | k.bottom_left | k.bottom_right | k.middle_center | k.middle_left | k.middle_right | k.top_center | k.top_left | k.top_right</em>]
                             -- point to scale about ( default: middle center )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_select"></a>
                    <strong>application.select(...)</strong>
                     -- change the selection
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            <strong>region=</strong><em>list of Anything</em>
                             -- list of corners of the selection (in pixels)
                        </li>
<li>
                            [<strong>combination_type=</strong><em>k.diminished | k.extended | k.intersected | k.replaced</em>]
                             -- how to combine the new selection with the existing selection ( default: replaced )
                        </li>
<li>
                            [<strong>feather_amount=</strong><em>LongFloat</em>]
                             -- feather amount ( default: 0.0 )
                        </li>
<li>
                            [<strong>antialiasing=</strong><em>Boolean</em>]
                             -- whether to use antialiasing ( default: true )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_select_all"></a>
                    <strong>application.select_all(...)</strong>
                     -- select the entire image
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_select_border"></a>
                    <strong>application.select_border(...)</strong>
                     -- select the border of the selection
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            <strong>width=</strong><em>LongFloat</em>
                             -- width of border selection (unit value)
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_similar"></a>
                    <strong>application.similar(...)</strong>
                     -- grow selection to include pixels throughout the image falling within the tolerance range
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            <strong>tolerance=</strong><em>SInt32</em>

                        </li>
<li>
                            <strong>antialiasing=</strong><em>Boolean</em>

                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_smooth"></a>
                    <strong>application.smooth(...)</strong>

                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            <strong>radius=</strong><em>SInt32</em>
                             -- sample radius in pixels ( 0 - 100 )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_split_channels"></a>
                    <strong>application.split_channels(...)</strong>
                     -- split channels of the document
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>list of k.document</em>
                             -- split channels of the document
                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_store"></a>
                    <strong>application.store(...)</strong>
                     -- save the selection as a channel
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            <strong>into=</strong><em>k.channel</em>
                             -- the channel to save the selection to
                        </li>
<li>
                            [<strong>combination_type=</strong><em>k.diminished | k.extended | k.intersected | k.replaced</em>]
                             -- how to add the selection to the existing contents of the channel ( default: replaced )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_stroke"></a>
                    <strong>application.stroke(...)</strong>
                     -- strokes the selection
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            <strong>using_color=</strong><em>Anything</em>
                             -- color to stroke selection with
                        </li>
<li>
                            <strong>width=</strong><em>SInt32</em>
                             -- width of stroke (in pixels)
                        </li>
<li>
                            [<strong>location=</strong><em>k.center | k.inside | k.outside</em>]
                             -- ( default: center )
                        </li>
<li>
                            [<strong>blend_mode=</strong><em>k.behind_mode | k.clear_mode | k.color_blend | k.color_burn | k.color_dodge | k.darken | k.difference | k.dissolve | k.exclusion | k.hard_light | k.hue_blend | k.lighten | k.linear_burn | k.linear_dodge | k.linear_light | k.luminosity | k.multiply | k.normal | k.overlay | k.pin_light | k.saturation_blend | k.screen | k.soft_light | k.vivid_light</em>]
                             -- ( default: normal )
                        </li>
<li>
                            [<strong>opacity=</strong><em>SInt32</em>]
                             -- ( default: 100 )
                        </li>
<li>
                            [<strong>preserving_transparency=</strong><em>Boolean</em>]

                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_translate"></a>
                    <strong>application.translate(...)</strong>
                     -- moves the position relative to its current position
                    <ul>
                        <li>
                            <em>k.layer</em>
                             -- the layer object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>delta_x=</strong><em>LongFloat</em>]
                             -- horizontal transformation (unit value)
                        </li>
<li>
                            [<strong>delta_y=</strong><em>LongFloat</em>]
                             -- vertical transformation (unit value)
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_translate_boundary"></a>
                    <strong>application.translate_boundary(...)</strong>
                     -- moves the boundary of selection relative to its current position
                    <ul>
                        <li>
                            <em>k.selection_object</em>
                             -- the selection-object object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>delta_x=</strong><em>LongFloat</em>]
                             -- horizontal transformation (unit value)
                        </li>
<li>
                            [<strong>delta_y=</strong><em>LongFloat</em>]
                             -- vertical transformation (unit value)
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_trap"></a>
                    <strong>application.trap(...)</strong>
                     -- apply trap to a CMYK document
                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            <strong>width=</strong><em>SInt32</em>
                             -- trap width in pixels
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_trim"></a>
                    <strong>application.trim(...)</strong>

                    <ul>
                        <li>
                            <em>k.document</em>
                             -- the document object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>basing_trim_on=</strong><em>k.bottom_right_pixel | k.top_left_pixel | k.transparent_pixels</em>]
                             -- color or type of pixels to base trim on ( default: top left pixel )
                        </li>
<li>
                            [<strong>top_trim=</strong><em>Boolean</em>]
                             -- trim away top of document ( default: true )
                        </li>
<li>
                            [<strong>left_trim=</strong><em>Boolean</em>]
                             -- trim away left of document ( default: true )
                        </li>
<li>
                            [<strong>bottom_trim=</strong><em>Boolean</em>]
                             -- trim away bottom of document ( default: true )
                        </li>
<li>
                            [<strong>right_trim=</strong><em>Boolean</em>]
                             -- trim away right of document ( default: true )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_unlink"></a>
                    <strong>application.unlink(...)</strong>
                     -- unlink the layer
                    <ul>
                        <li>
                            <em>k.layer</em>
                             -- the layer object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
            </ul>




            <h3>Classes</h3>
            <ul>
                <li>
                    <a name="class_art_layer"></a>
                    <strong>art_layer</strong>
                     -- any layer that can contain data
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_layer">layer</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>background_layer</strong>

                                    <em>Boolean</em>
                                     -- is the layer a background layer?
                                </li>
<li>
                                    <strong>fill_opacity</strong>

                                    <em>LongFloat</em>
                                     -- the interior opacity of the layer (between 0.0 and 100.0)
                                </li>
<li>
                                    <strong>grouped</strong>

                                    <em>Boolean</em>
                                     -- is the layer grouped with the layer below?. Photoshop CS changed the menu name to Create/Release Clipping Mask
                                </li>
<li>
                                    <strong>kind</strong>

                                    <em>k.brightness_contrast_layer | k.channel_mixer_layer | k.color_balance_layer | k.curves_layer | k.gradient_fill_layer | k.gradient_map_layer | k.hue_saturation_layer | k.inversion_layer | k.levels_layer | k.normal | k.pattern_fill_layer | k.posterize_layer | k.selective_color_layer | k.solid_fill_layer | k.text_layer | k.threshold_layer</em>
                                     -- to create a text layer set this property to 'text layer' on an empty art layer of type 'normal'
                                </li>
<li>
                                    <strong>pixels_locked</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>position_locked</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>text_object</strong>
                                    (r/o)
                                    <em><a href="#class_text_object">k.text_object</a></em>
                                     -- the text item that is associated with the art layer. Only valid for art layers whose 'has text' is true
                                </li>
<li>
                                    <strong>transparent_pixels_locked</strong>

                                    <em>Boolean</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_Bitmap_mode_options"></a>
                    <strong>Bitmap_mode_options</strong>
                     -- Settings related to changing the document mode to Bitmap
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_change_mode_options">change_mode_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>angle</strong>

                                    <em>LongFloat</em>
                                     -- only valid for 'halftone screen' conversions
                                </li>
<li>
                                    <strong>conversion_method</strong>

                                    <em>k.custom_pattern | k.diffusion_dither | k.halftone_screen_conversion | k.middle_threshold | k.pattern_dither</em>
                                     -- ( default: diffusion dither )
                                </li>
<li>
                                    <strong>frequency</strong>

                                    <em>LongFloat</em>
                                     -- only valid for 'halftone screen' conversions
                                </li>
<li>
                                    <strong>pattern_name</strong>

                                    <em>UnicodeText</em>
                                     -- only valid for 'custom pattern' conversions
                                </li>
<li>
                                    <strong>resolution</strong>

                                    <em>LongFloat</em>
                                     -- output resolution (in pixels per inch)
                                </li>
<li>
                                    <strong>screen_shape</strong>

                                    <em>k.halftone_cross | k.halftone_diamond | k.halftone_ellipse | k.halftone_line | k.halftone_round | k.halftone_square</em>
                                     -- only valid for 'halftone screen' conversions
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_change_mode_options"></a>
                    <strong>change_mode_options</strong>
                     -- used with options on the 'change mode' command
                    <ul>

                        <li>Children:
                            <ul>
                                <li><em><a href="#class_indexed_mode_options">indexed_mode_options</a></em></li>
<li><em><a href="#class_Bitmap_mode_options">Bitmap_mode_options</a></em></li>
                            </ul>
                        </li>


                    </ul>
                </li>
<li>
                    <a name="class_channel"></a>
                    <strong>channel</strong>
                     -- A channel in a document. Can be either a component channel representing a color of the document color model or an alpha channel
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>index</strong>
                                    (r/o)
                                    <em>SInt32</em>
                                     -- the index of this instance of the object
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>channel_color</strong>

                                    <em><a href="#class_color_value">k.color_value</a></em>
                                     -- color of the channel (not valid for component channels)
                                </li>
<li>
                                    <strong>container</strong>
                                    (r/o)
                                    <em>ObjectSpecifier</em>
                                     -- the object's container
                                </li>
<li>
                                    <strong>histogram</strong>
                                    (r/o)
                                    <em>list of SInt32</em>
                                     -- a histogram of values for the channel
                                </li>
<li>
                                    <strong>kind</strong>

                                    <em>k.component_channel | k.masked_area_channel | k.selected_area_channel | k.spot_color_channel</em>
                                     -- type of the channel
                                </li>
<li>
                                    <strong>name</strong>

                                    <em>UnicodeText</em>
                                     -- the channel's name
                                </li>
<li>
                                    <strong>opacity</strong>

                                    <em>LongFloat</em>
                                     -- opacity of alpha channels (called solidity for spot channels)
                                </li>
<li>
                                    <strong>visible</strong>

                                    <em>Boolean</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_font"></a>
                    <strong>font</strong>
                     -- An installed font
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>index</strong>
                                    (r/o)
                                    <em>SInt32</em>
                                     -- the index of this instance of the object
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>family</strong>
                                    (r/o)
                                    <em>UnicodeText</em>
                                     -- the font's family
                                </li>
<li>
                                    <strong>name</strong>
                                    (r/o)
                                    <em>UnicodeText</em>
                                     -- The font's text face name
                                </li>
<li>
                                    <strong>PostScript_name</strong>
                                    (r/o)
                                    <em>UnicodeText</em>
                                     -- the font's PostScript name
                                </li>
<li>
                                    <strong>style</strong>
                                    (r/o)
                                    <em>UnicodeText</em>
                                     -- the font's style name
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_gallery_banner_options"></a>
                    <strong>gallery_banner_options</strong>
                     -- options for the web photo gallery banner options
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>contact_info</strong>

                                    <em>UnicodeText</em>
                                     -- web photo gallery contact info ( default:  )
                                </li>
<li>
                                    <strong>date</strong>

                                    <em>UnicodeText</em>
                                     -- web photo gallery date ( default:  )
                                </li>
<li>
                                    <strong>font</strong>

                                    <em>k.Arial | k.Courier_New | k.Helvetica | k.Times_New_Roman</em>
                                     -- the font setting for the banner text ( default: Arial )
                                </li>
<li>
                                    <strong>font_size</strong>

                                    <em>SInt32</em>
                                     -- the size of the font for the banner text ( 1 - 7; default: 3 )
                                </li>
<li>
                                    <strong>photographer</strong>

                                    <em>UnicodeText</em>
                                     -- web photo gallery photographer ( default:  )
                                </li>
<li>
                                    <strong>site_name</strong>

                                    <em>UnicodeText</em>
                                     -- web photo gallery site name ( default: Adobe Web Photo Gallery )
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_gallery_color_options"></a>
                    <strong>gallery_color_options</strong>
                     -- options for the web photo gallery colors
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>active_link_color</strong>

                                    <em><a href="#class_RGB_color">k.RGB_color</a></em>
                                     -- active link color
                                </li>
<li>
                                    <strong>background_color</strong>

                                    <em><a href="#class_RGB_color">k.RGB_color</a></em>
                                     -- background color
                                </li>
<li>
                                    <strong>banner_color</strong>

                                    <em><a href="#class_RGB_color">k.RGB_color</a></em>
                                     -- banner color
                                </li>
<li>
                                    <strong>link_color</strong>

                                    <em><a href="#class_RGB_color">k.RGB_color</a></em>
                                     -- link color
                                </li>
<li>
                                    <strong>text_color</strong>

                                    <em><a href="#class_RGB_color">k.RGB_color</a></em>
                                     -- text color
                                </li>
<li>
                                    <strong>visited_link_color</strong>

                                    <em><a href="#class_RGB_color">k.RGB_color</a></em>
                                     -- visited link color
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_gallery_images_options"></a>
                    <strong>gallery_images_options</strong>
                     -- options for the web photo gallery images
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>border</strong>

                                    <em>SInt32</em>
                                     -- the amount of border pixels you want between your images ( 0 - 99; default: 0 )
                                </li>
<li>
                                    <strong>caption</strong>

                                    <em>Boolean</em>
                                     -- generate a caption for the images ( default: false )
                                </li>
<li>
                                    <strong>dimension</strong>

                                    <em>SInt32</em>
                                     -- resized image dimensions in pixels ( default: 350 )
                                </li>
<li>
                                    <strong>font</strong>

                                    <em>k.Arial | k.Courier_New | k.Helvetica | k.Times_New_Roman</em>
                                     -- font for the gallery images text ( default: Arial )
                                </li>
<li>
                                    <strong>font_size</strong>

                                    <em>SInt32</em>
                                     -- font size for the gallery images text ( 1 - 7; default: 3 )
                                </li>
<li>
                                    <strong>image_quality</strong>

                                    <em>SInt32</em>
                                     -- the quality setting for the JPEG image ( 0 - 12; default: 5 )
                                </li>
<li>
                                    <strong>include_copyright</strong>

                                    <em>Boolean</em>
                                     -- include the copyright in the text for the gallery images ( default: false )
                                </li>
<li>
                                    <strong>include_credits</strong>

                                    <em>Boolean</em>
                                     -- include the credits in the text for the gallery images ( default: false )
                                </li>
<li>
                                    <strong>include_file_name</strong>

                                    <em>Boolean</em>
                                     -- include the file name in the text for the gallery images ( default: true )
                                </li>
<li>
                                    <strong>include_title</strong>

                                    <em>Boolean</em>
                                     -- include the title in the text for the gallery images ( default: false )
                                </li>
<li>
                                    <strong>numeric_links</strong>

                                    <em>Boolean</em>
                                     -- add numeric links ( default: true )
                                </li>
<li>
                                    <strong>resize_constraint</strong>

                                    <em>k.constrain_both | k.constrain_height | k.constrain_width</em>
                                     -- how should the image be constrained ( default: constrain both )
                                </li>
<li>
                                    <strong>resize_images</strong>

                                    <em>Boolean</em>
                                     -- resize images data ( default: true )
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_gallery_options"></a>
                    <strong>gallery_options</strong>
                     -- options for the web photo gallery command
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>banner_options</strong>

                                    <em><a href="#class_gallery_banner_options">k.gallery_banner_options</a></em>
                                     -- options related to banner settings
                                </li>
<li>
                                    <strong>custom_color_options</strong>

                                    <em><a href="#class_gallery_color_options">k.gallery_color_options</a></em>
                                     -- options related to custom color settings
                                </li>
<li>
                                    <strong>email_address</strong>

                                    <em>UnicodeText</em>
                                     -- the email address to show on the web page ( default:  )
                                </li>
<li>
                                    <strong>images_options</strong>

                                    <em><a href="#class_gallery_images_options">k.gallery_images_options</a></em>
                                     -- options related to images settings
                                </li>
<li>
                                    <strong>layout_style</strong>

                                    <em>UnicodeText</em>
                                     -- the style to use for laying out the web page ( default: Centered Frame 1 - Basic )
                                </li>
<li>
                                    <strong>preserve_all_metadata</strong>

                                    <em>Boolean</em>
                                     -- save all of the metadata in the JPEG files ( default: false )
                                </li>
<li>
                                    <strong>security_options</strong>

                                    <em><a href="#class_gallery_security_options">k.gallery_security_options</a></em>
                                     -- options related to security settings
                                </li>
<li>
                                    <strong>short_extension</strong>

                                    <em>Boolean</em>
                                     -- short web page extension .htm or long web page extension .html ( default: true )
                                </li>
<li>
                                    <strong>size_attributes</strong>

                                    <em>Boolean</em>
                                     -- add width and height attributes for images ( default: true )
                                </li>
<li>
                                    <strong>sub_folders</strong>

                                    <em>Boolean</em>
                                     -- include all files found in sub folders of the input folder ( default: true )
                                </li>
<li>
                                    <strong>thumbnail_options</strong>

                                    <em><a href="#class_gallery_thumbnail_options">k.gallery_thumbnail_options</a></em>
                                     -- options related to thumbnail settings
                                </li>
<li>
                                    <strong>UTF8_encoding</strong>

                                    <em>Boolean</em>
                                     -- web page should use UTF-8 encoding ( default: false )
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_gallery_security_options"></a>
                    <strong>gallery_security_options</strong>
                     -- options for the web photo gallery security
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>content</strong>

                                    <em>k.gallery_caption | k.gallery_copyright | k.gallery_credit | k.gallery_custom_text | k.gallery_filename | k.gallery_none | k.gallery_title</em>
                                     -- web photo gallery security content ( default: gallery none )
                                </li>
<li>
                                    <strong>custom_text</strong>

                                    <em>UnicodeText</em>
                                     -- web photo gallery security custom text ( default:  )
                                </li>
<li>
                                    <strong>font</strong>

                                    <em>k.Arial | k.Courier_New | k.Helvetica | k.Times_New_Roman</em>
                                     -- web photo gallery security font ( default: Arial )
                                </li>
<li>
                                    <strong>font_size</strong>

                                    <em>SInt32</em>
                                     -- web photo gallery security font size ( minimum 1; default: 36 )
                                </li>
<li>
                                    <strong>opacity</strong>

                                    <em>SInt32</em>
                                     -- web page security opacity as a percent ( default: 100 )
                                </li>
<li>
                                    <strong>text_color</strong>

                                    <em><a href="#class_RGB_color">k.RGB_color</a></em>
                                     -- web page security text color
                                </li>
<li>
                                    <strong>text_position</strong>

                                    <em>k.gallery_centered | k.gallery_lower_left | k.gallery_lower_right | k.gallery_upper_left | k.gallery_upper_right</em>
                                     -- web photo gallery security text position ( default: gallery centered )
                                </li>
<li>
                                    <strong>text_rotate</strong>

                                    <em>k.clock_wise_45 | k.clock_wise_90 | k.counter_clock_wise_45 | k.counter_clock_wise_90 | k.zero</em>
                                     -- web photo gallery security text rotate ( default: zero )
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_gallery_thumbnail_options"></a>
                    <strong>gallery_thumbnail_options</strong>
                     -- options for the web photo gallery thumbnail creation
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>border</strong>

                                    <em>SInt32</em>
                                     -- the amount of border pixels you want around your thumbnail images ( 0 - 99; default: 0 )
                                </li>
<li>
                                    <strong>caption</strong>

                                    <em>Boolean</em>
                                     -- with caption ( default: false )
                                </li>
<li>
                                    <strong>column_count</strong>

                                    <em>SInt32</em>
                                     -- web photo gallery thumbnail columns ( default: 5 )
                                </li>
<li>
                                    <strong>dimension</strong>

                                    <em>SInt32</em>
                                     -- web photo gallery thumbnail dimension in pixels ( default: 75 )
                                </li>
<li>
                                    <strong>font</strong>

                                    <em>k.Arial | k.Courier_New | k.Helvetica | k.Times_New_Roman</em>
                                     -- web photo gallery font ( default: Arial )
                                </li>
<li>
                                    <strong>font_size</strong>

                                    <em>SInt32</em>
                                     -- the size of the font for the thumbnail images text ( 1 - 7; default: 3 )
                                </li>
<li>
                                    <strong>include_copyright</strong>

                                    <em>Boolean</em>
                                     -- include copyright for thumbnail ( default: false )
                                </li>
<li>
                                    <strong>include_credits</strong>

                                    <em>Boolean</em>
                                     -- include credits for thumbnail ( default: false )
                                </li>
<li>
                                    <strong>include_file_name</strong>

                                    <em>Boolean</em>
                                     -- include file name for thumbnail ( default: false )
                                </li>
<li>
                                    <strong>include_title</strong>

                                    <em>Boolean</em>
                                     -- include title for thumbnail ( default: false )
                                </li>
<li>
                                    <strong>row_count</strong>

                                    <em>SInt32</em>
                                     -- web photo gallery thumbnail rows ( default: 3 )
                                </li>
<li>
                                    <strong>size</strong>

                                    <em>k.gallery_custom | k.gallery_large | k.gallery_medium | k.gallery_small</em>
                                     -- the size of the thumbnail images ( default: gallery medium )
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_history_state"></a>
                    <strong>history_state</strong>
                     -- A history state for the document
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>index</strong>
                                    (r/o)
                                    <em>SInt32</em>
                                     -- the index of this instance of the object
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>container</strong>
                                    (r/o)
                                    <em>ObjectSpecifier</em>
                                     -- the object's container
                                </li>
<li>
                                    <strong>name</strong>
                                    (r/o)
                                    <em>UnicodeText</em>
                                     -- the history state's name
                                </li>
<li>
                                    <strong>snapshot</strong>
                                    (r/o)
                                    <em>Boolean</em>
                                     -- is the history state a snapshot?
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_Illustrator_paths_export_options"></a>
                    <strong>Illustrator_paths_export_options</strong>
                     -- Settings related to exporting Illustrator paths
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>path_name</strong>

                                    <em>UnicodeText</em>
                                     -- name of path to export. Only valid if you are exporting a named path
                                </li>
<li>
                                    <strong>target_path</strong>

                                    <em>k.all_paths | k.document_bounds | k.named_path</em>
                                     -- which path to export ( default: document bounds )
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_indexed_mode_options"></a>
                    <strong>indexed_mode_options</strong>
                     -- Settings related to changing the document mode to Indexed
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_change_mode_options">change_mode_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>colors_in_palette</strong>

                                    <em>SInt32</em>
                                     -- number of colors in palette (only settable for some palette types)
                                </li>
<li>
                                    <strong>dither</strong>

                                    <em>k.diffusion | k.noise | k.none | k.pattern</em>
                                     -- type of dither
                                </li>
<li>
                                    <strong>dither_amount</strong>

                                    <em>SInt32</em>
                                     -- amount of dither. Only valid for diffusion ( 1 - 100 )
                                </li>
<li>
                                    <strong>forced_colors</strong>

                                    <em>k.black_and_white | k.none | k.primaries | k.web</em>

                                </li>
<li>
                                    <strong>matte</strong>

                                    <em>k.background_color_matte | k.black_matte | k.foreground_color_matte | k.Netscape_gray | k.none | k.semi_gray | k.white_matte</em>

                                </li>
<li>
                                    <strong>palette</strong>

                                    <em>k.exact | k.local_adaptive | k.local_perceptual | k.local_selective | k.Mac_OS_system | k.master_adaptive | k.master_perceptual | k.master_selective | k.previous_ | k.uniform | k.web | k.Windows_system</em>
                                     -- Type of palette ( default: exact )
                                </li>
<li>
                                    <strong>preserve_exact_colors</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>transparency</strong>

                                    <em>Boolean</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_info_object"></a>
                    <strong>info_object</strong>
                     -- Document information
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>author</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>author_position</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>caption</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>caption_writer</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>category</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>city</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>container</strong>
                                    (r/o)
                                    <em>ObjectSpecifier</em>
                                     -- the object's container
                                </li>
<li>
                                    <strong>copyright_notice</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>copyrighted</strong>

                                    <em>k.copyrighted_work | k.public_domain | k.unmarked</em>

                                </li>
<li>
                                    <strong>country</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>creation_date</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>credit</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>EXIF</strong>
                                    (r/o)
                                    <em>list of Anything</em>

                                </li>
<li>
                                    <strong>headline</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>instructions</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>job_name</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>keywords</strong>

                                    <em>list of UnicodeText</em>
                                     -- list of keywords
                                </li>
<li>
                                    <strong>owner_url</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>province_or_state</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>source</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>supplemental_categories</strong>

                                    <em>list of UnicodeText</em>

                                </li>
<li>
                                    <strong>title</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>transmission_reference</strong>

                                    <em>UnicodeText</em>

                                </li>
<li>
                                    <strong>urgency</strong>

                                    <em>k.four | k.high | k.low | k.none | k.normal | k.seven | k.six | k.three | k.two</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_layer"></a>
                    <strong>layer</strong>
                     -- A layer object
                    <ul>

                        <li>Children:
                            <ul>
                                <li><em><a href="#class_layer_set">layer_set</a></em></li>
<li><em><a href="#class_art_layer">art_layer</a></em></li>
                            </ul>
                        </li>
                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>index</strong>
                                    (r/o)
                                    <em>SInt32</em>
                                     -- the index of this instance of the object
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>all_locked</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>blend_mode</strong>

                                    <em>k.color_blend | k.color_burn | k.color_dodge | k.darken | k.difference | k.dissolve | k.exclusion | k.hard_light | k.hue_blend | k.lighten | k.linear_burn | k.linear_dodge | k.linear_light | k.luminosity | k.multiply | k.normal | k.overlay | k.pass_through | k.pin_light | k.saturation_blend | k.screen | k.soft_light | k.vivid_light</em>

                                </li>
<li>
                                    <strong>bounds</strong>
                                    (r/o)
                                    <em>AEList</em>
                                     -- Bounding rectangle of the Layer
                                </li>
<li>
                                    <strong>container</strong>
                                    (r/o)
                                    <em>ObjectSpecifier</em>
                                     -- the object's container
                                </li>
<li>
                                    <strong>linked_layers</strong>
                                    (r/o)
                                    <em><a href="#class_layer">list of k.layer</a></em>

                                </li>
<li>
                                    <strong>name</strong>

                                    <em>UnicodeText</em>
                                     -- the name of the layer
                                </li>
<li>
                                    <strong>opacity</strong>

                                    <em>LongFloat</em>
                                     -- master opacity of layer ( 0.0 - 100.0 )
                                </li>
<li>
                                    <strong>visible</strong>

                                    <em>Boolean</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_layer_comp"></a>
                    <strong>layer_comp</strong>
                     -- A layer composition in a document
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>index</strong>
                                    (r/o)
                                    <em>SInt32</em>
                                     -- the index of this instance of the object
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>appearance</strong>

                                    <em>Boolean</em>
                                     -- use layer appearance
                                </li>
<li>
                                    <strong>comment</strong>

                                    <em>Anything</em>
                                     -- the description of the layer comp
                                </li>
<li>
                                    <strong>container</strong>
                                    (r/o)
                                    <em>ObjectSpecifier</em>
                                     -- the object's container
                                </li>
<li>
                                    <strong>name</strong>

                                    <em>UnicodeText</em>
                                     -- the name of the layer comp
                                </li>
<li>
                                    <strong>position</strong>

                                    <em>Boolean</em>
                                     -- use layer position
                                </li>
<li>
                                    <strong>selected</strong>
                                    (r/o)
                                    <em>Boolean</em>
                                     -- the layer comp is currently selected
                                </li>
<li>
                                    <strong>visibility</strong>

                                    <em>Boolean</em>
                                     -- use layer visibility
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_layer_set"></a>
                    <strong>layer_set</strong>
                     -- Layer set
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_layer">layer</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>enabled_channels</strong>

                                    <em><a href="#class_channel">list of k.channel</a></em>
                                     -- channels that are enabled for the layer set. Must be a list of component channels
                                </li>
                            </ul>
                        </li>
                        <li>Elements:
                            <ul>
                                <li>
                                    <strong><a href="#class_art_layer">art_layers</a></strong> -- 
                                    <em>name | index | range | relative | test</em>
                                </li>
<li>
                                    <strong><a href="#class_layer">layers</a></strong> -- 
                                    <em>name | index | range | relative | test</em>
                                </li>
<li>
                                    <strong><a href="#class_layer_set">layer_sets</a></strong> -- 
                                    <em>name | index | range | relative | test</em>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
<li>
                    <a name="class_presentation_options"></a>
                    <strong>presentation_options</strong>
                     -- options for the PDF presentation command
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>auto_advance</strong>

                                    <em>Boolean</em>
                                     -- auto advance when viewing ( default: true )
                                </li>
<li>
                                    <strong>downgrade_color_profile</strong>

                                    <em>Boolean</em>
                                     -- should the embedded color profile be downgraded to version 2 ( default: false )
                                </li>
<li>
                                    <strong>embed_fonts</strong>

                                    <em>Boolean</em>
                                     -- embed fonts? Only valid if a text layer is included ( default: false )
                                </li>
<li>
                                    <strong>encoding</strong>

                                    <em>k.JPEG | k.ZIP</em>
                                     -- ( default: ZIP )
                                </li>
<li>
                                    <strong>image_interpolation</strong>

                                    <em>Boolean</em>
                                     -- use image interpolation? ( default: false )
                                </li>
<li>
                                    <strong>interval</strong>

                                    <em>SInt32</em>
                                     -- time in seconds before auto advancing the view ( default: 5 )
                                </li>
<li>
                                    <strong>JPEG_quality</strong>

                                    <em>SInt32</em>
                                     -- quality of produced image. Only valid for JPEG encoded PDF documents ( 0 - 12; default: 10 )
                                </li>
<li>
                                    <strong>loop</strong>

                                    <em>Boolean</em>
                                     -- loop after last page ( default: false )
                                </li>
<li>
                                    <strong>presentation</strong>

                                    <em>Boolean</em>
                                     -- true if the file type is presentation false for Multi-Page document ( default: false )
                                </li>
<li>
                                    <strong>transition</strong>

                                    <em>k.blinds_horizontal | k.blinds_vertical | k.box_in | k.box_out | k.dissolve | k.glitter_down | k.glitter_right | k.glitter_right_down | k.none | k.random | k.split_horizontal_in | k.split_horizontal_out | k.split_vertical_in | k.split_vertical_out | k.wipe_down | k.wipe_left | k.wipe_right | k.wipe_up</em>
                                     -- transition type when switching to the next document ( default: none )
                                </li>
<li>
                                    <strong>transparency</strong>

                                    <em>Boolean</em>
                                     -- ( default: true )
                                </li>
<li>
                                    <strong>vector_data</strong>

                                    <em>Boolean</em>
                                     -- include vector data ( default: false )
                                </li>
<li>
                                    <strong>view</strong>

                                    <em>Boolean</em>
                                     -- view the document after saving ( default: false )
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_selection_object"></a>
                    <strong>selection_object</strong>
                     -- The selection of the document
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>container</strong>
                                    (r/o)
                                    <em>ObjectSpecifier</em>
                                     -- the object's container
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_settings_object"></a>
                    <strong>settings_object</strong>
                     -- Preferences for Photoshop
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>additional_plugin_folder</strong>

                                    <em>Alias</em>

                                </li>
<li>
                                    <strong>append_extension</strong>

                                    <em>k.ask | k.no | k.yes</em>

                                </li>
<li>
                                    <strong>ask_before_saving_layered_TIFF</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>auto_update_open_documents</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>beep_when_done</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>cache_levels</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>color_picker</strong>

                                    <em>k.Adobe_color_picker | k.Apple_color_picker | k.plug_in_color_picker | k.Windows_color_picker</em>

                                </li>
<li>
                                    <strong>column_gutter</strong>

                                    <em>LongFloat</em>
                                     -- gutter of columns (in points)
                                </li>
<li>
                                    <strong>column_width</strong>

                                    <em>LongFloat</em>
                                     -- width of columns (in points)
                                </li>
<li>
                                    <strong>create_first_snapshot</strong>

                                    <em>Boolean</em>
                                     -- automatically make first snapshot when a new document is created?
                                </li>
<li>
                                    <strong>display_color_channels_in_color</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>dynamic_color_sliders</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>edit_log_items</strong>

                                    <em>k.concise | k.detailed | k.sessiononly</em>
                                     -- options for edit log items
                                </li>
<li>
                                    <strong>export_clipboard</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>full_size_preview</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>gamut_warning_opacity</strong>

                                    <em>LongFloat</em>

                                </li>
<li>
                                    <strong>grid_size</strong>

                                    <em>k.large | k.medium | k.none | k.small</em>

                                </li>
<li>
                                    <strong>grid_style</strong>

                                    <em>k.dashed_line | k.dotted_line | k.solid_line</em>

                                </li>
<li>
                                    <strong>grid_subdivisions</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>guide_style</strong>

                                    <em>k.dashed_line | k.solid_line</em>

                                </li>
<li>
                                    <strong>icon_preview</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>image_previews</strong>

                                    <em>k.ask | k.no | k.yes</em>

                                </li>
<li>
                                    <strong>interpolation_method</strong>

                                    <em>k.bicubic | k.bicubic_sharper | k.bicubic_smoother | k.bilinear | k.closest_neighbor | k.none</em>

                                </li>
<li>
                                    <strong>keyboard_zoom_resizes_windows</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>Mac_OS_thumbnail</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>maximize_compatibility</strong>

                                    <em>k.always | k.ask | k.never</em>
                                     -- maximize compatibility for Photoshop (PSD) files
                                </li>
<li>
                                    <strong>maximum_RAM_use</strong>

                                    <em>SInt32</em>
                                     -- Maximum percentage of available RAM used by Photoshop ( 5 - 100 )
                                </li>
<li>
                                    <strong>nonlinear_history</strong>

                                    <em>Boolean</em>
                                     -- allow non-linear history?
                                </li>
<li>
                                    <strong>number_of_history_states</strong>

                                    <em>SInt32</em>
                                     -- number of history states to remember (between 1 and 100)
                                </li>
<li>
                                    <strong>other_cursors</strong>

                                    <em>k.precise | k.standard</em>

                                </li>
<li>
                                    <strong>painting_cursors</strong>

                                    <em>k.brush_size | k.precise | k.standard</em>

                                </li>
<li>
                                    <strong>pixel_doubling</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>point_size</strong>

                                    <em>k.postscript_size | k.traditional_size</em>
                                     -- size of point/pica
                                </li>
<li>
                                    <strong>recent_file_list_length</strong>

                                    <em>SInt32</em>
                                     -- number of items in the recent file list (between 0 and 30)
                                </li>
<li>
                                    <strong>ruler_units</strong>

                                    <em>k.cm_units | k.inch_units | k.mm_units | k.percent_units | k.pica_units | k.pixel_units | k.point_units</em>
                                     -- Note: this is the unit that the scripting system will use when receiving and returning values
                                </li>
<li>
                                    <strong>save_log_items</strong>

                                    <em>k.both | k.log_file | k.metadata</em>
                                     -- options for saving the history items
                                </li>
<li>
                                    <strong>save_log_items_file</strong>

                                    <em>Alias</em>
                                     -- file to save the history log
                                </li>
<li>
                                    <strong>save_palette_locations</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>show_Asian_text_options</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>show_English_font_names</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>show_slice_numbers</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>show_tool_tips</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>smart_quotes</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>type_units</strong>

                                    <em>k.mm_units | k.pixel_units | k.point_units</em>

                                </li>
<li>
                                    <strong>use_additional_plugin_folder</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>use_cache_for_histograms</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>use_diffusion_dither</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>use_history_log</strong>

                                    <em>Boolean</em>
                                     -- Turn on and off the history logging
                                </li>
<li>
                                    <strong>use_lowercase_extension</strong>

                                    <em>Boolean</em>
                                     -- should the file extension be lowercase
                                </li>
<li>
                                    <strong>use_Shift_key_for_tool_switch</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>use_video_alpha</strong>

                                    <em>Boolean</em>
                                     -- this option requires hardware support
                                </li>
<li>
                                    <strong>Windows_thumbnail</strong>

                                    <em>Boolean</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_text_object"></a>
                    <strong>text_object</strong>
                     -- Text item contained in an art layer
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>alternate_ligatures</strong>

                                    <em>Boolean</em>
                                     -- use alternate ligatures?
                                </li>
<li>
                                    <strong>antialias_method</strong>

                                    <em>k.crisp | k.none | k.sharp | k.smoothing | k.strong</em>

                                </li>
<li>
                                    <strong>auto_kerning</strong>

                                    <em>k.manual | k.metrics | k.optical</em>
                                     -- options for auto kerning
                                </li>
<li>
                                    <strong>auto_leading</strong>

                                    <em>Boolean</em>
                                     -- whether to use a font's built-in leading information
                                </li>
<li>
                                    <strong>auto_leading_amount</strong>

                                    <em>LongFloat</em>
                                     -- percentage to use for auto leading
                                </li>
<li>
                                    <strong>baseline_shift</strong>

                                    <em>LongFloat</em>
                                     -- baseline offset of text (unit value)
                                </li>
<li>
                                    <strong>capitalization</strong>

                                    <em>k.all_caps | k.normal | k.small_caps</em>
                                     -- the case of the text
                                </li>
<li>
                                    <strong>container</strong>
                                    (r/o)
                                    <em>ObjectSpecifier</em>
                                     -- the object's container
                                </li>
<li>
                                    <strong>contents</strong>

                                    <em>UnicodeText</em>
                                     -- the text in the layer
                                </li>
<li>
                                    <strong>desired_glyph_scaling</strong>

                                    <em>LongFloat</em>

                                </li>
<li>
                                    <strong>desired_letter_scaling</strong>

                                    <em>LongFloat</em>

                                </li>
<li>
                                    <strong>desired_word_scaling</strong>

                                    <em>LongFloat</em>

                                </li>
<li>
                                    <strong>faux_bold</strong>

                                    <em>Boolean</em>
                                     -- use faux bold?
                                </li>
<li>
                                    <strong>faux_italic</strong>

                                    <em>Boolean</em>
                                     -- use faux italic?
                                </li>
<li>
                                    <strong>first_line_indent</strong>

                                    <em>LongFloat</em>
                                     -- (unit value)
                                </li>
<li>
                                    <strong>font</strong>

                                    <em>UnicodeText</em>
                                     -- text face of the character
                                </li>
<li>
                                    <strong>height</strong>

                                    <em>LongFloat</em>
                                     -- the height of paragraph text (unit value)
                                </li>
<li>
                                    <strong>horizontal_scale</strong>

                                    <em>SInt32</em>
                                     -- horizontal scaling of characters (in percent)
                                </li>
<li>
                                    <strong>horizontal_warp_distortion</strong>

                                    <em>LongFloat</em>
                                     -- percentage from -100 to 100
                                </li>
<li>
                                    <strong>hyphen_limit</strong>

                                    <em>SInt32</em>
                                     -- maximum number of consecutive hyphens
                                </li>
<li>
                                    <strong>hyphenate_after_first</strong>

                                    <em>SInt32</em>
                                     -- hyphenate after this many letters
                                </li>
<li>
                                    <strong>hyphenate_before_last</strong>

                                    <em>SInt32</em>
                                     -- hyphenate before this many letters
                                </li>
<li>
                                    <strong>hyphenate_capitalized_words</strong>

                                    <em>Boolean</em>
                                     -- wheter to hyphenate capitalized words
                                </li>
<li>
                                    <strong>hyphenate_words_longer_than</strong>

                                    <em>SInt32</em>
                                     -- hyphenate words that have more than this number of letters ( minimum 0 )
                                </li>
<li>
                                    <strong>hyphenation</strong>

                                    <em>Boolean</em>
                                     -- use hyphenation?
                                </li>
<li>
                                    <strong>hyphenation_zone</strong>

                                    <em>LongFloat</em>
                                     -- the hyphenation zone (unit value)
                                </li>
<li>
                                    <strong>justification</strong>

                                    <em>k.center | k.center_justified | k.fully_justified | k.left | k.left_justified | k.right | k.right_justified</em>
                                     -- paragraph justification
                                </li>
<li>
                                    <strong>kind</strong>

                                    <em>k.paragraph_text | k.point_text</em>
                                     -- the type of the text
                                </li>
<li>
                                    <strong>language</strong>

                                    <em>k.Brazilian_Portuguese | k.Canadian_French | k.Danish | k.Dutch | k.English_UK | k.English_USA | k.Finnish | k.French | k.German | k.Italian | k.Norwegian | k.Nynorsk_Norwegian | k.Old_German | k.Portuguese | k.Spanish | k.Swedish | k.Swiss_German</em>

                                </li>
<li>
                                    <strong>leading</strong>

                                    <em>LongFloat</em>
                                     -- leading (unit value)
                                </li>
<li>
                                    <strong>left_indent</strong>

                                    <em>LongFloat</em>
                                     -- (unit value)
                                </li>
<li>
                                    <strong>ligatures</strong>

                                    <em>Boolean</em>
                                     -- use ligatures?
                                </li>
<li>
                                    <strong>maximum_glyph_scaling</strong>

                                    <em>LongFloat</em>

                                </li>
<li>
                                    <strong>maximum_letter_scaling</strong>

                                    <em>LongFloat</em>

                                </li>
<li>
                                    <strong>maximum_word_scaling</strong>

                                    <em>LongFloat</em>

                                </li>
<li>
                                    <strong>minimum_glyph_scaling</strong>

                                    <em>LongFloat</em>

                                </li>
<li>
                                    <strong>minimum_letter_scaling</strong>

                                    <em>LongFloat</em>

                                </li>
<li>
                                    <strong>minimum_word_scaling</strong>

                                    <em>LongFloat</em>

                                </li>
<li>
                                    <strong>no_break</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>old_style</strong>

                                    <em>Boolean</em>
                                     -- use old style?
                                </li>
<li>
                                    <strong>position</strong>

                                    <em>AEList</em>
                                     -- position of origin (unit value)
                                </li>
<li>
                                    <strong>right_indent</strong>

                                    <em>LongFloat</em>
                                     -- (unit value)
                                </li>
<li>
                                    <strong>Roman_hanging_punctuation</strong>

                                    <em>Boolean</em>
                                     -- use Roman Hanging Punctuation?
                                </li>
<li>
                                    <strong>size</strong>

                                    <em>LongFloat</em>
                                     -- font size in points
                                </li>
<li>
                                    <strong>space_after</strong>

                                    <em>LongFloat</em>
                                     -- (unit value)
                                </li>
<li>
                                    <strong>space_before</strong>

                                    <em>LongFloat</em>
                                     -- (unit value)
                                </li>
<li>
                                    <strong>strike_thru</strong>

                                    <em>k.off | k.strike_box | k.strike_height</em>
                                     -- options for strik thru of the text
                                </li>
<li>
                                    <strong>stroke_color</strong>

                                    <em><a href="#class_color_value">k.color_value</a></em>
                                     -- color of text
                                </li>
<li>
                                    <strong>text_composer</strong>

                                    <em>k.Adobe_every_line | k.Adobe_single_line</em>
                                     -- type of text composing engine to use
                                </li>
<li>
                                    <strong>text_direction</strong>

                                    <em>k.horizontal | k.vertical</em>
                                     -- text orientation
                                </li>
<li>
                                    <strong>tracking</strong>

                                    <em>LongFloat</em>
                                     -- controls uniform spacing between multiple characters
                                </li>
<li>
                                    <strong>underline</strong>

                                    <em>k.left | k.off | k.right</em>
                                     -- options for underlining of the text
                                </li>
<li>
                                    <strong>vertical_scale</strong>

                                    <em>SInt32</em>
                                     -- vertical scaling of characters (in percent)
                                </li>
<li>
                                    <strong>vertical_warp_distortion</strong>

                                    <em>LongFloat</em>
                                     -- percentage from -100 to 100
                                </li>
<li>
                                    <strong>warp_bend</strong>

                                    <em>LongFloat</em>
                                     -- percentage from -100 to 100
                                </li>
<li>
                                    <strong>warp_direction</strong>

                                    <em>k.horizontal | k.vertical</em>

                                </li>
<li>
                                    <strong>warp_style</strong>

                                    <em>k.arc | k.arc_lower | k.arc_upper | k.arch | k.bulge | k.fish | k.fish_eye | k.flag | k.inflate | k.none | k.rise | k.shell_lower | k.shell_upper | k.squeeze | k.twist | k.wave</em>

                                </li>
<li>
                                    <strong>width</strong>

                                    <em>LongFloat</em>
                                     -- the width of paragraph text (unit value)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_XMP_metadata"></a>
                    <strong>XMP_metadata</strong>

                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>container</strong>
                                    (r/o)
                                    <em>ObjectSpecifier</em>
                                     -- the object's container
                                </li>
<li>
                                    <strong>raw_data</strong>

                                    <em>UnicodeText</em>
                                     -- raw XML form of file information
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
            </ul>




        <a name="suite_Open_Formats_Suite" id="suite_Open_Formats_Suite"></a>
        <h2>Open Formats Suite</h2>

        <p>Classes for specifying options when opening document</p>






            <h3>Classes</h3>
            <ul>
                <li>
                    <a name="class_EPS_open_options"></a>
                    <strong>EPS_open_options</strong>
                     -- Settings related to opening a generic EPS document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_open_options">open_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>constrain_proportions</strong>

                                    <em>Boolean</em>
                                     -- constrain proportions of image
                                </li>
<li>
                                    <strong>height</strong>

                                    <em>LongFloat</em>
                                     -- height of image (unit value)
                                </li>
<li>
                                    <strong>mode</strong>

                                    <em>k.CMYK | k.grayscale | k.Lab | k.RGB</em>
                                     -- the document mode
                                </li>
<li>
                                    <strong>resolution</strong>

                                    <em>LongFloat</em>
                                     -- the resolution of the document (in pixels per inch)
                                </li>
<li>
                                    <strong>use_antialias</strong>

                                    <em>Boolean</em>
                                     -- use antialias?
                                </li>
<li>
                                    <strong>width</strong>

                                    <em>LongFloat</em>
                                     -- width of image (unit value)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_open_options"></a>
                    <strong>open_options</strong>
                     -- used with options on the open command
                    <ul>

                        <li>Children:
                            <ul>
                                <li><em><a href="#class_Photo_CD_open_options">Photo_CD_open_options</a></em></li>
<li><em><a href="#class_PDF_open_options">PDF_open_options</a></em></li>
<li><em><a href="#class_raw_format_open_options">raw_format_open_options</a></em></li>
<li><em><a href="#class_EPS_open_options">EPS_open_options</a></em></li>
                            </ul>
                        </li>


                    </ul>
                </li>
<li>
                    <a name="class_PDF_open_options"></a>
                    <strong>PDF_open_options</strong>
                     -- Settings related to opening a generic PDF document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_open_options">open_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>constrain_proportions</strong>

                                    <em>Boolean</em>
                                     -- constrain proportions of image
                                </li>
<li>
                                    <strong>height</strong>

                                    <em>LongFloat</em>
                                     -- height of image (unit value)
                                </li>
<li>
                                    <strong>mode</strong>

                                    <em>k.CMYK | k.grayscale | k.Lab | k.RGB</em>
                                     -- the document mode
                                </li>
<li>
                                    <strong>page</strong>

                                    <em>SInt32</em>
                                     -- number of page to open
                                </li>
<li>
                                    <strong>resolution</strong>

                                    <em>LongFloat</em>
                                     -- the resolution of the document (in pixels per inch)
                                </li>
<li>
                                    <strong>use_antialias</strong>

                                    <em>Boolean</em>
                                     -- use antialias?
                                </li>
<li>
                                    <strong>width</strong>

                                    <em>LongFloat</em>
                                     -- width of image (unit value)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_Photo_CD_open_options"></a>
                    <strong>Photo_CD_open_options</strong>
                     -- Settings related to opening a PhotoCD document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_open_options">open_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>color_profile_name</strong>

                                    <em>UnicodeText</em>
                                     -- profile to use when reading the image
                                </li>
<li>
                                    <strong>color_space</strong>

                                    <em>k.Lab_16 | k.Lab_8 | k.RGB_16 | k.RGB_8</em>
                                     -- colorspace for image
                                </li>
<li>
                                    <strong>orientation</strong>

                                    <em>k.landscape | k.portrait</em>

                                </li>
<li>
                                    <strong>pixel_size</strong>

                                    <em>k.extra_large | k.large | k.maximum | k.medium | k.minimum | k.small</em>
                                     -- dimensions of image
                                </li>
<li>
                                    <strong>resolution</strong>

                                    <em>LongFloat</em>
                                     -- the resolution of the image (in pixels per inch)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_raw_format_open_options"></a>
                    <strong>raw_format_open_options</strong>
                     -- Settings related to opening a raw format document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_open_options">open_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>bits_per_channel</strong>

                                    <em>SInt32</em>
                                     -- number of bits for each channel (8 or 16)
                                </li>
<li>
                                    <strong>byte_order</strong>

                                    <em>k.IBM_PC | k.Mac_OS</em>
                                     -- only relevant for images with 16 bits per channel
                                </li>
<li>
                                    <strong>header_size</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>height</strong>

                                    <em>SInt32</em>
                                     -- height of image (in pixels)
                                </li>
<li>
                                    <strong>interleave_channels</strong>

                                    <em>Boolean</em>
                                     -- are the channels in the image interleaved?
                                </li>
<li>
                                    <strong>number_of_channels</strong>

                                    <em>SInt32</em>
                                     -- number of channels in image
                                </li>
<li>
                                    <strong>retain_header</strong>

                                    <em>Boolean</em>
                                     -- retain header when saving?
                                </li>
<li>
                                    <strong>width</strong>

                                    <em>SInt32</em>
                                     -- width of image (in pixels)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
            </ul>




        <a name="suite_Save_Formats_Suite" id="suite_Save_Formats_Suite"></a>
        <h2>Save Formats Suite</h2>

        <p>Classes for specifying options when saving documents</p>






            <h3>Classes</h3>
            <ul>
                <li>
                    <a name="class_BMP_save_options"></a>
                    <strong>BMP_save_options</strong>
                     -- Settings related to saving a BMP document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>bits_per_sample</strong>

                                    <em>k.A1R5G5B5 | k.A4R4G4B4 | k.A8R8G8B8 | k.eight | k.four | k.one | k.R5G6B5 | k.R8G8B8 | k.sixteen | k.thirty_two | k.twenty_four | k.X1R5G5B5 | k.X4R4G4B4 | k.X8R8G8B8</em>
                                     -- number of bits per sample ( default: twenty four )
                                </li>
<li>
                                    <strong>flipped_row_order</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>RLE_compression</strong>

                                    <em>Boolean</em>
                                     -- should RLE compression be used?
                                </li>
<li>
                                    <strong>save_alpha_channels</strong>

                                    <em>Boolean</em>
                                     -- save alpha channels
                                </li>
<li>
                                    <strong>target_operating_system</strong>

                                    <em>k.OS2 | k.Windows</em>
                                     -- target OS. Windows or OS/2 ( default: Windows )
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_EPS_save_options"></a>
                    <strong>EPS_save_options</strong>
                     -- Settings related to saving an EPS document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>embed_color_profile</strong>

                                    <em>Boolean</em>
                                     -- embed color profile in document
                                </li>
<li>
                                    <strong>encoding</strong>

                                    <em>k.ASCII | k.binary | k.high_quality_JPEG | k.low_quality_JPEG | k.maximum_quality_JPEG | k.medium_quality_JPEG</em>
                                     -- type of encoding to use for document ( default: binary )
                                </li>
<li>
                                    <strong>halftone_screen</strong>

                                    <em>Boolean</em>
                                     -- include halftone screen ( default: false )
                                </li>
<li>
                                    <strong>image_interpolation</strong>

                                    <em>Boolean</em>
                                     -- use image interpolation ( default: false )
                                </li>
<li>
                                    <strong>PostScript_color_management</strong>

                                    <em>Boolean</em>
                                     -- use Postscript color management ( default: false )
                                </li>
<li>
                                    <strong>preview_type</strong>

                                    <em>k.eight_bit_Mac_OS | k.eight_bit_TIFF | k.JPEG_Mac_OS | k.monochrome_Mac_OS | k.monochrome_TIFF | k.none</em>
                                     -- type of preview ( default: monochrome TIFF )
                                </li>
<li>
                                    <strong>transfer_function</strong>

                                    <em>Boolean</em>
                                     -- include transfer functions in document ( default: false )
                                </li>
<li>
                                    <strong>transparent_whites</strong>

                                    <em>Boolean</em>
                                     -- only valid when saving BitMap documents
                                </li>
<li>
                                    <strong>vector_data</strong>

                                    <em>Boolean</em>
                                     -- include vector data
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_GIF_save_options"></a>
                    <strong>GIF_save_options</strong>
                     -- Settings related to saving a GIF document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>colors_in_palette</strong>

                                    <em>SInt32</em>
                                     -- number of colors in palette (only settable for some palette types)
                                </li>
<li>
                                    <strong>dither</strong>

                                    <em>k.diffusion | k.noise | k.none | k.pattern</em>
                                     -- type of dither
                                </li>
<li>
                                    <strong>dither_amount</strong>

                                    <em>SInt32</em>
                                     -- amount of dither. Only valid for diffusion ( 1 - 100; default: 75 )
                                </li>
<li>
                                    <strong>forced_colors</strong>

                                    <em>k.black_and_white | k.none | k.primaries | k.web</em>

                                </li>
<li>
                                    <strong>interlaced</strong>

                                    <em>Boolean</em>
                                     -- should rows be interlaced? ( default: false )
                                </li>
<li>
                                    <strong>matte</strong>

                                    <em>k.background_color_matte | k.black_matte | k.foreground_color_matte | k.Netscape_gray | k.none | k.semi_gray | k.white_matte</em>

                                </li>
<li>
                                    <strong>palette</strong>

                                    <em>k.exact | k.local_adaptive | k.local_perceptual | k.local_selective | k.Mac_OS_system | k.master_adaptive | k.master_perceptual | k.master_selective | k.previous_ | k.uniform | k.web | k.Windows_system</em>
                                     -- ( default: local selective )
                                </li>
<li>
                                    <strong>preserve_exact_colors</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>transparency</strong>

                                    <em>Boolean</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_JPEG_save_options"></a>
                    <strong>JPEG_save_options</strong>
                     -- Settings related to saving a JPEG document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>embed_color_profile</strong>

                                    <em>Boolean</em>
                                     -- embed color profile in document
                                </li>
<li>
                                    <strong>format_options</strong>

                                    <em>k.optimized | k.progressive | k.standard</em>
                                     -- ( default: standard )
                                </li>
<li>
                                    <strong>matte</strong>

                                    <em>k.background_color_matte | k.black_matte | k.foreground_color_matte | k.Netscape_gray | k.none | k.semi_gray | k.white_matte</em>

                                </li>
<li>
                                    <strong>quality</strong>

                                    <em>SInt32</em>
                                     -- quality of produced image ( 0 - 12; default: 3 )
                                </li>
<li>
                                    <strong>scans</strong>

                                    <em>SInt32</em>
                                     -- number of scans. Only valid for progressive type JPEG files ( 3 - 5 )
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_PDF_save_options"></a>
                    <strong>PDF_save_options</strong>
                     -- Settings related to saving a pdf document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>downgrade_color_profile</strong>

                                    <em>Boolean</em>
                                     -- should the embedded color profile be downgraded to version 2
                                </li>
<li>
                                    <strong>embed_color_profile</strong>

                                    <em>Boolean</em>
                                     -- embed color profile in document
                                </li>
<li>
                                    <strong>embed_fonts</strong>

                                    <em>Boolean</em>
                                     -- embed fonts? Only valid if a text layer is included
                                </li>
<li>
                                    <strong>encoding</strong>

                                    <em>k.JPEG | k.ZIP</em>
                                     -- ( default: ZIP )
                                </li>
<li>
                                    <strong>image_interpolation</strong>

                                    <em>Boolean</em>
                                     -- use image interpolation?
                                </li>
<li>
                                    <strong>JPEG_quality</strong>

                                    <em>SInt32</em>
                                     -- quality of produced image. Only valid for JPEG encoded PDF documents ( 0 - 12 )
                                </li>
<li>
                                    <strong>save_alpha_channels</strong>

                                    <em>Boolean</em>
                                     -- save alpha channels
                                </li>
<li>
                                    <strong>save_annotations</strong>

                                    <em>Boolean</em>
                                     -- save annotations
                                </li>
<li>
                                    <strong>save_layers</strong>

                                    <em>Boolean</em>
                                     -- save layers
                                </li>
<li>
                                    <strong>save_spot_colors</strong>

                                    <em>Boolean</em>
                                     -- save spot colors
                                </li>
<li>
                                    <strong>transparency</strong>

                                    <em>Boolean</em>

                                </li>
<li>
                                    <strong>use_outlines_for_text</strong>

                                    <em>Boolean</em>
                                     -- use outlines for text? Only valid if vector data is included
                                </li>
<li>
                                    <strong>vector_data</strong>

                                    <em>Boolean</em>
                                     -- include vector data
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_Photoshop_DCS_10x2E0_save_options"></a>
                    <strong>Photoshop_DCS_10x2E0_save_options</strong>
                     -- Settings related to saving a Photoshop DCS 1.0 document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>DCS</strong>

                                    <em>k.color_composite | k.grayscale_composite | k.no_composite_PostScript</em>
                                     -- ( default: color composite )
                                </li>
<li>
                                    <strong>embed_color_profile</strong>

                                    <em>Boolean</em>
                                     -- embed color profile in document
                                </li>
<li>
                                    <strong>encoding</strong>

                                    <em>k.ASCII | k.binary | k.high_quality_JPEG | k.low_quality_JPEG | k.maximum_quality_JPEG | k.medium_quality_JPEG</em>
                                     -- type of encoding to use for document ( default: binary )
                                </li>
<li>
                                    <strong>halftone_screen</strong>

                                    <em>Boolean</em>
                                     -- include halftone screen ( default: false )
                                </li>
<li>
                                    <strong>image_interpolation</strong>

                                    <em>Boolean</em>
                                     -- use image interpolation ( default: false )
                                </li>
<li>
                                    <strong>preview_type</strong>

                                    <em>k.eight_bit_Mac_OS | k.eight_bit_TIFF | k.JPEG_Mac_OS | k.monochrome_Mac_OS | k.monochrome_TIFF | k.none</em>
                                     -- type of preview ( default: eight bit Mac OS )
                                </li>
<li>
                                    <strong>transfer_function</strong>

                                    <em>Boolean</em>
                                     -- include transfer functions in document ( default: false )
                                </li>
<li>
                                    <strong>vector_data</strong>

                                    <em>Boolean</em>
                                     -- include vector data
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_Photoshop_DCS_20x2E0_save_options"></a>
                    <strong>Photoshop_DCS_20x2E0_save_options</strong>
                     -- Settings related to saving a Photoshop DCS 2.0 document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>DCS</strong>

                                    <em>k.color_composite | k.grayscale_composite | k.no_composite_PostScript</em>
                                     -- ( default: no composite PostScript )
                                </li>
<li>
                                    <strong>embed_color_profile</strong>

                                    <em>Boolean</em>
                                     -- embed color profile in document
                                </li>
<li>
                                    <strong>encoding</strong>

                                    <em>k.ASCII | k.binary | k.high_quality_JPEG | k.low_quality_JPEG | k.maximum_quality_JPEG | k.medium_quality_JPEG</em>
                                     -- type of encoding to use for document ( default: binary )
                                </li>
<li>
                                    <strong>halftone_screen</strong>

                                    <em>Boolean</em>
                                     -- include halftone screen ( default: false )
                                </li>
<li>
                                    <strong>image_interpolation</strong>

                                    <em>Boolean</em>
                                     -- use image interpolation ( default: false )
                                </li>
<li>
                                    <strong>multifile_DCS</strong>

                                    <em>Boolean</em>
                                     -- ( default: false )
                                </li>
<li>
                                    <strong>preview_type</strong>

                                    <em>k.eight_bit_Mac_OS | k.eight_bit_TIFF | k.JPEG_Mac_OS | k.monochrome_Mac_OS | k.monochrome_TIFF | k.none</em>
                                     -- type of preview ( default: eight bit Mac OS )
                                </li>
<li>
                                    <strong>save_spot_colors</strong>

                                    <em>Boolean</em>
                                     -- save spot colors
                                </li>
<li>
                                    <strong>transfer_function</strong>

                                    <em>Boolean</em>
                                     -- include transfer functions in document ( default: false )
                                </li>
<li>
                                    <strong>vector_data</strong>

                                    <em>Boolean</em>
                                     -- include vector data
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_Photoshop_save_options"></a>
                    <strong>Photoshop_save_options</strong>
                     -- Settings related to saving a Photoshop document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>embed_color_profile</strong>

                                    <em>Boolean</em>
                                     -- embed color profile in document
                                </li>
<li>
                                    <strong>save_alpha_channels</strong>

                                    <em>Boolean</em>
                                     -- save alpha channels
                                </li>
<li>
                                    <strong>save_annotations</strong>

                                    <em>Boolean</em>
                                     -- save annotations
                                </li>
<li>
                                    <strong>save_layers</strong>

                                    <em>Boolean</em>
                                     -- save layers
                                </li>
<li>
                                    <strong>save_spot_colors</strong>

                                    <em>Boolean</em>
                                     -- save spot colors
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_PICT_file_save_options"></a>
                    <strong>PICT_file_save_options</strong>
                     -- Settings related to saving a PICT document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>compression</strong>

                                    <em>k.high_quality_JPEG | k.low_quality_JPEG | k.maximum_quality_JPEG | k.medium_quality_JPEG | k.none</em>
                                     -- ( default: none )
                                </li>
<li>
                                    <strong>embed_color_profile</strong>

                                    <em>Boolean</em>
                                     -- embed color profile in document
                                </li>
<li>
                                    <strong>resolution</strong>

                                    <em>k.eight | k.four | k.sixteen | k.thirty_two | k.two</em>
                                     -- number of bits per pixel
                                </li>
<li>
                                    <strong>save_alpha_channels</strong>

                                    <em>Boolean</em>
                                     -- save alpha channels
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_PICT_resource_save_options"></a>
                    <strong>PICT_resource_save_options</strong>
                     -- Settings related to saving a PICT resource file
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>compression</strong>

                                    <em>k.high_quality_JPEG | k.low_quality_JPEG | k.maximum_quality_JPEG | k.medium_quality_JPEG | k.none</em>
                                     -- ( default: none )
                                </li>
<li>
                                    <strong>embed_color_profile</strong>

                                    <em>Boolean</em>
                                     -- embed color profile in document
                                </li>
<li>
                                    <strong>name</strong>

                                    <em>UnicodeText</em>
                                     -- name of PICT resource ( default: &quot;&quot; )
                                </li>
<li>
                                    <strong>resolution</strong>

                                    <em>k.eight | k.four | k.sixteen | k.thirty_two | k.two</em>
                                     -- number of bits per pixel
                                </li>
<li>
                                    <strong>resource_id</strong>

                                    <em>SInt32</em>
                                     -- ID of PICT resource ( default: 128 )
                                </li>
<li>
                                    <strong>save_alpha_channels</strong>

                                    <em>Boolean</em>
                                     -- save alpha channels
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_Pixar_save_options"></a>
                    <strong>Pixar_save_options</strong>
                     -- Settings related to saving a Pixar document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>save_alpha_channels</strong>

                                    <em>Boolean</em>
                                     -- save alpha channels
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_PNG_save_options"></a>
                    <strong>PNG_save_options</strong>
                     -- Settings related to saving a PNG document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>interlaced</strong>

                                    <em>Boolean</em>
                                     -- should rows be interlaced? ( default: false )
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_raw_save_options"></a>
                    <strong>raw_save_options</strong>
                     -- Settings related to saving a document in raw format
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>save_alpha_channels</strong>

                                    <em>Boolean</em>
                                     -- save alpha channels
                                </li>
<li>
                                    <strong>save_spot_colors</strong>

                                    <em>Boolean</em>
                                     -- save spot colors
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_save_options"></a>
                    <strong>save_options</strong>
                     -- used with options on the save command
                    <ul>

                        <li>Children:
                            <ul>
                                <li><em><a href="#class_raw_save_options">raw_save_options</a></em></li>
<li><em><a href="#class_BMP_save_options">BMP_save_options</a></em></li>
<li><em><a href="#class_JPEG_save_options">JPEG_save_options</a></em></li>
<li><em><a href="#class_PICT_file_save_options">PICT_file_save_options</a></em></li>
<li><em><a href="#class_PICT_resource_save_options">PICT_resource_save_options</a></em></li>
<li><em><a href="#class_Pixar_save_options">Pixar_save_options</a></em></li>
<li><em><a href="#class_PNG_save_options">PNG_save_options</a></em></li>
<li><em><a href="#class_EPS_save_options">EPS_save_options</a></em></li>
<li><em><a href="#class_PDF_save_options">PDF_save_options</a></em></li>
<li><em><a href="#class_Photoshop_save_options">Photoshop_save_options</a></em></li>
<li><em><a href="#class_SGI_RGB_save_options">SGI_RGB_save_options</a></em></li>
<li><em><a href="#class_GIF_save_options">GIF_save_options</a></em></li>
<li><em><a href="#class_Photoshop_DCS_20x2E0_save_options">Photoshop_DCS_20x2E0_save_options</a></em></li>
<li><em><a href="#class_Photoshop_DCS_10x2E0_save_options">Photoshop_DCS_10x2E0_save_options</a></em></li>
<li><em><a href="#class_TIFF_save_options">TIFF_save_options</a></em></li>
<li><em><a href="#class_Targa_save_options">Targa_save_options</a></em></li>
                            </ul>
                        </li>


                    </ul>
                </li>
<li>
                    <a name="class_SGI_RGB_save_options"></a>
                    <strong>SGI_RGB_save_options</strong>
                     -- Settings related to saving a document in the SGI RGB format
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>save_alpha_channels</strong>

                                    <em>Boolean</em>
                                     -- save alpha channels
                                </li>
<li>
                                    <strong>save_spot_colors</strong>

                                    <em>Boolean</em>
                                     -- save spot colors
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_Targa_save_options"></a>
                    <strong>Targa_save_options</strong>
                     -- Settings related to saving a Target document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>resolution</strong>

                                    <em>k.sixteen | k.thirty_two | k.twenty_four</em>
                                     -- number of bits per pixel ( default: twenty four )
                                </li>
<li>
                                    <strong>RLE_compression</strong>

                                    <em>Boolean</em>
                                     -- should RLE compression be used? ( default: true )
                                </li>
<li>
                                    <strong>save_alpha_channels</strong>

                                    <em>Boolean</em>
                                     -- save alpha channels
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_TIFF_save_options"></a>
                    <strong>TIFF_save_options</strong>
                     -- Settings related to saving a TIFF document
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_save_options">save_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>byte_order</strong>

                                    <em>k.IBM_PC | k.Mac_OS</em>
                                     -- Default value is 'Mac OS' when running on MacOS, and 'IBM PC' when running on a PC
                                </li>
<li>
                                    <strong>embed_color_profile</strong>

                                    <em>Boolean</em>
                                     -- embed color profile in document
                                </li>
<li>
                                    <strong>image_compression</strong>

                                    <em>k.JPEG | k.LZW | k.none | k.ZIP</em>
                                     -- compression type ( default: none )
                                </li>
<li>
                                    <strong>JPEG_quality</strong>

                                    <em>SInt32</em>
                                     -- quality of produced image. Only valid for JPEG compressed TIFF documents ( 0 - 12 )
                                </li>
<li>
                                    <strong>layer_compression</strong>

                                    <em>k.RLE | k.ZIP</em>
                                     -- should only be used when you are saving layers
                                </li>
<li>
                                    <strong>save_alpha_channels</strong>

                                    <em>Boolean</em>
                                     -- save alpha channels
                                </li>
<li>
                                    <strong>save_annotations</strong>

                                    <em>Boolean</em>
                                     -- save annotations
                                </li>
<li>
                                    <strong>save_image_pyramid</strong>

                                    <em>Boolean</em>
                                     -- ( default: false )
                                </li>
<li>
                                    <strong>save_layers</strong>

                                    <em>Boolean</em>
                                     -- save layers
                                </li>
<li>
                                    <strong>save_spot_colors</strong>

                                    <em>Boolean</em>
                                     -- save spot colors
                                </li>
<li>
                                    <strong>transparency</strong>

                                    <em>Boolean</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
            </ul>




        <a name="suite_Filter_Suite" id="suite_Filter_Suite"></a>
        <h2>Filter Suite</h2>

        <p>Scripting commands for applying filters to documents</p>



            <h3>Commands</h3>
            <ul>
                <li>
                    <a name="command_filter"></a>
                    <strong>application.filter(...)</strong>
                     -- apply a filter to one or more art layers
                    <ul>
                        <li>
                            <em>k.art_layer</em>
                             -- the art layer object or objects to be operated upon
                        </li>
                        <li>
                            <strong>using=</strong><em>Anything</em>
                             -- name of options class that the method should be invoked with. Must be a name of a class that inherits from filter options
                        </li>
<li>
                            [<strong>with_options=</strong><em>k.filter_options</em>]
                             -- options for method
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
            </ul>




            <h3>Classes</h3>
            <ul>
                <li>
                    <a name="class_add_noise"></a>
                    <strong>add_noise</strong>
                     -- apply the add noise filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>amount</strong>

                                    <em>LongFloat</em>

                                </li>
<li>
                                    <strong>distribution</strong>

                                    <em>k.Gaussian | k.uniform</em>

                                </li>
<li>
                                    <strong>monochromatic</strong>

                                    <em>Boolean</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_blur"></a>
                    <strong>blur</strong>
                     -- apply the blur filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_blur_more"></a>
                    <strong>blur_more</strong>
                     -- apply the blur more filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_clouds"></a>
                    <strong>clouds</strong>
                     -- apply the clouds filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_custom_filter"></a>
                    <strong>custom_filter</strong>
                     -- apply the custom filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>characteristics</strong>

                                    <em>list of SInt32</em>
                                     -- filter characteristics (array of 25 values - Correspons to a left to right, top to bottom traversal of array presented in the Ui)
                                </li>
<li>
                                    <strong>scaling</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>offset</strong>

                                    <em>SInt32</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_deinterlace"></a>
                    <strong>deinterlace</strong>
                     -- apply the De-Interlace filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>eliminate</strong>

                                    <em>k.even_fields | k.odd_fields</em>

                                </li>
<li>
                                    <strong>create_new_fields_by</strong>

                                    <em>k.duplication | k.interpolation</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_despeckle"></a>
                    <strong>despeckle</strong>
                     -- apply the despeckle filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_difference_clouds"></a>
                    <strong>difference_clouds</strong>
                     -- apply the difference clouds filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_diffuse_glow"></a>
                    <strong>diffuse_glow</strong>
                     -- apply the diffuse glow filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>graininess</strong>

                                    <em>SInt32</em>
                                     -- (range: 0 - 10)
                                </li>
<li>
                                    <strong>glow_amount</strong>

                                    <em>SInt32</em>
                                     -- (range: 0 - 20)
                                </li>
<li>
                                    <strong>clear_amount</strong>

                                    <em>SInt32</em>
                                     -- (range: 0 - 20)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_displace_filter"></a>
                    <strong>displace_filter</strong>
                     -- apply the displace filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>horizontal_scale</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>vertical_scale</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>kind</strong>

                                    <em>k.stretch_to_fit | k.tile</em>

                                </li>
<li>
                                    <strong>undefined_areas</strong>

                                    <em>k.repeat_edge_pixels | k.wrap_around</em>

                                </li>
<li>
                                    <strong>displacement_map_definition</strong>

                                    <em>Alias</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_dust_and_scratches"></a>
                    <strong>dust_and_scratches</strong>
                     -- apply the dust and scratches filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>radius</strong>

                                    <em>SInt32</em>
                                     -- in pixels
                                </li>
<li>
                                    <strong>threshold</strong>

                                    <em>SInt32</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_filter_options"></a>
                    <strong>filter_options</strong>
                     -- options used with the filter method
                    <ul>

                        <li>Children:
                            <ul>
                                <li><em><a href="#class_Gaussian_blur">Gaussian_blur</a></em></li>
<li><em><a href="#class_NTSC_colors">NTSC_colors</a></em></li>
<li><em><a href="#class_minimum_filter">minimum_filter</a></em></li>
<li><em><a href="#class_offset_filter">offset_filter</a></em></li>
<li><em><a href="#class_dust_and_scratches">dust_and_scratches</a></em></li>
<li><em><a href="#class_median_noise">median_noise</a></em></li>
<li><em><a href="#class_sharpen_edges">sharpen_edges</a></em></li>
<li><em><a href="#class_unsharp_mask">unsharp_mask</a></em></li>
<li><em><a href="#class_custom_filter">custom_filter</a></em></li>
<li><em><a href="#class_maximum_filter">maximum_filter</a></em></li>
<li><em><a href="#class_lens_flare">lens_flare</a></em></li>
<li><em><a href="#class_difference_clouds">difference_clouds</a></em></li>
<li><em><a href="#class_clouds">clouds</a></em></li>
<li><em><a href="#class_high_pass">high_pass</a></em></li>
<li><em><a href="#class_deinterlace">deinterlace</a></em></li>
<li><em><a href="#class_texture_fill">texture_fill</a></em></li>
<li><em><a href="#class_sharpen">sharpen</a></em></li>
<li><em><a href="#class_sharpen_more">sharpen_more</a></em></li>
<li><em><a href="#class_diffuse_glow">diffuse_glow</a></em></li>
<li><em><a href="#class_glass_filter">glass_filter</a></em></li>
<li><em><a href="#class_radial_blur">radial_blur</a></em></li>
<li><em><a href="#class_smart_blur">smart_blur</a></em></li>
<li><em><a href="#class_blur_more">blur_more</a></em></li>
<li><em><a href="#class_motion_blur">motion_blur</a></em></li>
<li><em><a href="#class_blur">blur</a></em></li>
<li><em><a href="#class_ocean_ripple">ocean_ripple</a></em></li>
<li><em><a href="#class_pinch">pinch</a></em></li>
<li><em><a href="#class_ripple">ripple</a></em></li>
<li><em><a href="#class_polar_coordinates">polar_coordinates</a></em></li>
<li><em><a href="#class_spherize">spherize</a></em></li>
<li><em><a href="#class_shear">shear</a></em></li>
<li><em><a href="#class_displace_filter">displace_filter</a></em></li>
<li><em><a href="#class_twirl">twirl</a></em></li>
<li><em><a href="#class_zigzag">zigzag</a></em></li>
<li><em><a href="#class_wave_filter">wave_filter</a></em></li>
<li><em><a href="#class_despeckle">despeckle</a></em></li>
<li><em><a href="#class_add_noise">add_noise</a></em></li>
                            </ul>
                        </li>


                    </ul>
                </li>
<li>
                    <a name="class_Gaussian_blur"></a>
                    <strong>Gaussian_blur</strong>
                     -- apply the Gaussian blur filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>radius</strong>

                                    <em>LongFloat</em>
                                     -- in pixels
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_glass_filter"></a>
                    <strong>glass_filter</strong>
                     -- apply the glass filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>distortion</strong>

                                    <em>SInt32</em>
                                     -- (range: 0 - 20)
                                </li>
<li>
                                    <strong>smoothness</strong>

                                    <em>SInt32</em>
                                     -- (range: 1 - 15)
                                </li>
<li>
                                    <strong>scaling</strong>

                                    <em>SInt32</em>
                                     -- (range: 50 - 200)
                                </li>
<li>
                                    <strong>invert_texture</strong>

                                    <em>Boolean</em>
                                     -- ( default: false ) ( default: false )
                                </li>
<li>
                                    <strong>texture_kind</strong>

                                    <em>k.blocks | k.canvas | k.frosted | k.texture_document | k.tiny_lens</em>

                                </li>
<li>
                                    <strong>texture_definition</strong>

                                    <em>Alias</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_high_pass"></a>
                    <strong>high_pass</strong>
                     -- apply the high pass filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>radius</strong>

                                    <em>LongFloat</em>
                                     -- in pixels
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_lens_flare"></a>
                    <strong>lens_flare</strong>
                     -- apply the lens flare filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>brightness</strong>

                                    <em>SInt32</em>
                                     -- (range: 10 - 300)
                                </li>
<li>
                                    <strong>flare_center</strong>

                                    <em>AEList</em>
                                     -- position (unit value)
                                </li>
<li>
                                    <strong>lens_type</strong>

                                    <em>k.Movie_Prime | k.Prime_105 | k.Prime_35 | k.zoom</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_maximum_filter"></a>
                    <strong>maximum_filter</strong>
                     -- apply the maximum filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>radius</strong>

                                    <em>LongFloat</em>
                                     -- in pixels
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_median_noise"></a>
                    <strong>median_noise</strong>
                     -- apply the median noise filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>radius</strong>

                                    <em>LongFloat</em>
                                     -- in pixels
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_minimum_filter"></a>
                    <strong>minimum_filter</strong>
                     -- apply the minimum filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>radius</strong>

                                    <em>LongFloat</em>
                                     -- in pixels
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_motion_blur"></a>
                    <strong>motion_blur</strong>
                     -- apply the motion blur filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>angle</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>radius</strong>

                                    <em>LongFloat</em>
                                     -- in pixels
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_NTSC_colors"></a>
                    <strong>NTSC_colors</strong>
                     -- apply the NTSC colors filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_ocean_ripple"></a>
                    <strong>ocean_ripple</strong>
                     -- apply the ocean ripple filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>ripple_size</strong>

                                    <em>SInt32</em>
                                     -- (range: 1 - 15)
                                </li>
<li>
                                    <strong>ripple_magnitude</strong>

                                    <em>SInt32</em>
                                     -- (range: 0 - 20)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_offset_filter"></a>
                    <strong>offset_filter</strong>
                     -- apply the offset filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>horizontal_offset</strong>

                                    <em>LongFloat</em>
                                     -- (unit value)
                                </li>
<li>
                                    <strong>vertical_offset</strong>

                                    <em>LongFloat</em>
                                     -- (unit value)
                                </li>
<li>
                                    <strong>undefined_areas</strong>

                                    <em>k.repeat_edge_pixels | k.set_to_layer_fill | k.wrap_around</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_pinch"></a>
                    <strong>pinch</strong>
                     -- apply the pinch filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>amount</strong>

                                    <em>SInt32</em>
                                     -- (range: -100 - 100)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_polar_coordinates"></a>
                    <strong>polar_coordinates</strong>
                     -- apply the polar coordinates filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>kind</strong>

                                    <em>k.polar_to_rectangular | k.rectangular_to_polar</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_radial_blur"></a>
                    <strong>radial_blur</strong>
                     -- apply the radial blur filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>amount</strong>

                                    <em>SInt32</em>
                                     -- from 0 to 100
                                </li>
<li>
                                    <strong>blur_method</strong>

                                    <em>k.spin | k.zoom</em>

                                </li>
<li>
                                    <strong>quality</strong>

                                    <em>k.best | k.draft | k.good</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_ripple"></a>
                    <strong>ripple</strong>
                     -- apply the ripple filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>amount</strong>

                                    <em>SInt32</em>
                                     -- (range: -999 - 999)
                                </li>
<li>
                                    <strong>ripple_size</strong>

                                    <em>k.large | k.medium | k.small</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_sharpen"></a>
                    <strong>sharpen</strong>
                     -- apply the sharpen filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_sharpen_edges"></a>
                    <strong>sharpen_edges</strong>
                     -- apply the sharpen edges filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_sharpen_more"></a>
                    <strong>sharpen_more</strong>
                     -- apply the sharpen more filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_shear"></a>
                    <strong>shear</strong>
                     -- apply the shear filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>curve</strong>

                                    <em>list of Anything</em>
                                     -- specification of shear curve. List of curve points
                                </li>
<li>
                                    <strong>undefined_areas</strong>

                                    <em>k.repeat_edge_pixels | k.wrap_around</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_smart_blur"></a>
                    <strong>smart_blur</strong>
                     -- apply the smart blur filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>radius</strong>

                                    <em>LongFloat</em>
                                     -- radius (range: 0 - 1000)
                                </li>
<li>
                                    <strong>threshold</strong>

                                    <em>LongFloat</em>
                                     -- threshold (range: 0 - 1000)
                                </li>
<li>
                                    <strong>quality</strong>

                                    <em>k.high | k.low | k.medium</em>

                                </li>
<li>
                                    <strong>mode</strong>

                                    <em>k.edge_only | k.normal | k.overlay_edge</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_spherize"></a>
                    <strong>spherize</strong>
                     -- apply the spherize filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>amount</strong>

                                    <em>SInt32</em>
                                     -- (range: -100 - 100)
                                </li>
<li>
                                    <strong>mode</strong>

                                    <em>k.horizontal | k.normal | k.vertical</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_texture_fill"></a>
                    <strong>texture_fill</strong>
                     -- apply the texture fill filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>file_path</strong>

                                    <em>Alias</em>
                                     -- texture file. Must be a grayscale Photoshop file
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_twirl"></a>
                    <strong>twirl</strong>
                     -- apply the twirl filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>angle</strong>

                                    <em>SInt32</em>
                                     -- (range: -999 - 999)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_unsharp_mask"></a>
                    <strong>unsharp_mask</strong>
                     -- apply the unsharp mask filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>amount</strong>

                                    <em>LongFloat</em>

                                </li>
<li>
                                    <strong>radius</strong>

                                    <em>LongFloat</em>
                                     -- in pixels
                                </li>
<li>
                                    <strong>threshold</strong>

                                    <em>SInt32</em>
                                     -- threshold
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_wave_filter"></a>
                    <strong>wave_filter</strong>
                     -- apply the wave filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>number_of_generators</strong>

                                    <em>SInt32</em>
                                     -- number of generators
                                </li>
<li>
                                    <strong>minimum_wavelength</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>maximum_wavelength</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>minimum_amplitude</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>maximum_amplitude</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>horizontal_scale</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>vertical_scale</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>wave_type</strong>

                                    <em>k.sine | k.square | k.triangular</em>

                                </li>
<li>
                                    <strong>undefined_areas</strong>

                                    <em>k.repeat_edge_pixels | k.wrap_around</em>

                                </li>
<li>
                                    <strong>random_seed</strong>

                                    <em>SInt32</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_zigzag"></a>
                    <strong>zigzag</strong>
                     -- apply the zigzag filter
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_filter_options">filter_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>amount</strong>

                                    <em>SInt32</em>
                                     -- (range: -100 - 100)
                                </li>
<li>
                                    <strong>ridges</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>style</strong>

                                    <em>k.around_center | k.out_from_center | k.pond_ripples</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
            </ul>




        <a name="suite_Adjustment_Suite" id="suite_Adjustment_Suite"></a>
        <h2>Adjustment Suite</h2>

        <p>Scripting commands for applying adjustments to documents</p>



            <h3>Commands</h3>
            <ul>
                <li>
                    <a name="command_adjust"></a>
                    <strong>application.adjust(...)</strong>
                     -- apply an adjustment to one or more art layers
                    <ul>
                        <li>
                            <em>k.art_layer</em>
                             -- the art layer object or objects to be operated upon
                        </li>
                        <li>
                            <strong>using=</strong><em>Anything</em>
                             -- name of options class that the method should be invoked with. Must be a name of a class that inherits from adjustment options
                        </li>
<li>
                            [<strong>with_options=</strong><em>k.adjustment_options</em>]
                             -- options for method
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
            </ul>




            <h3>Classes</h3>
            <ul>
                <li>
                    <a name="class_adjustment_options"></a>
                    <strong>adjustment_options</strong>
                     -- options used with the adjust method
                    <ul>

                        <li>Children:
                            <ul>
                                <li><em><a href="#class_inversion">inversion</a></em></li>
<li><em><a href="#class_posterize">posterize</a></em></li>
<li><em><a href="#class_threshold_adjustment">threshold_adjustment</a></em></li>
<li><em><a href="#class_equalize">equalize</a></em></li>
<li><em><a href="#class_mix_channels">mix_channels</a></em></li>
<li><em><a href="#class_levels_adjustment">levels_adjustment</a></em></li>
<li><em><a href="#class_selective_color">selective_color</a></em></li>
<li><em><a href="#class_color_balance">color_balance</a></em></li>
<li><em><a href="#class_brightness_and_contrast">brightness_and_contrast</a></em></li>
<li><em><a href="#class_curves">curves</a></em></li>
<li><em><a href="#class_automatic_contrast">automatic_contrast</a></em></li>
<li><em><a href="#class_desaturate">desaturate</a></em></li>
<li><em><a href="#class_automatic_levels">automatic_levels</a></em></li>
                            </ul>
                        </li>


                    </ul>
                </li>
<li>
                    <a name="class_automatic_contrast"></a>
                    <strong>automatic_contrast</strong>
                     -- adjust contrast of the selected channels automatically
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_adjustment_options">adjustment_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_automatic_levels"></a>
                    <strong>automatic_levels</strong>
                     -- adjust levels of the selected channels using auto levels option
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_adjustment_options">adjustment_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_brightness_and_contrast"></a>
                    <strong>brightness_and_contrast</strong>
                     -- adjust brightness and constrast
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_adjustment_options">adjustment_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>brightness_level</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>contrast_level</strong>

                                    <em>SInt32</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_color_balance"></a>
                    <strong>color_balance</strong>

                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_adjustment_options">adjustment_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>shadows</strong>

                                    <em>list of SInt32</em>
                                     -- list of adjustments for shadows. There must be 3 values in the list
                                </li>
<li>
                                    <strong>midtones</strong>

                                    <em>list of SInt32</em>
                                     -- list of adjustments for midtones. There must be 3 values in the list
                                </li>
<li>
                                    <strong>highlights</strong>

                                    <em>list of SInt32</em>
                                     -- list of adjustments for highlights. There must be 3 values in the list
                                </li>
<li>
                                    <strong>preserve_luminosity</strong>

                                    <em>Boolean</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_curves"></a>
                    <strong>curves</strong>
                     -- adjust curves of the selected channels
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_adjustment_options">adjustment_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>curve_points</strong>

                                    <em>list of AEList</em>
                                     -- list of curve points (number of points must be between 2 and 11)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_desaturate"></a>
                    <strong>desaturate</strong>

                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_adjustment_options">adjustment_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_equalize"></a>
                    <strong>equalize</strong>
                     -- equalize the levels
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_adjustment_options">adjustment_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_inversion"></a>
                    <strong>inversion</strong>
                     -- inverts the currently selected layer or channels
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_adjustment_options">adjustment_options</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_levels_adjustment"></a>
                    <strong>levels_adjustment</strong>
                     -- adjust levels of the selected channels
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_adjustment_options">adjustment_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>input_range_start</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>input_range_end</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>input_range_gamma</strong>

                                    <em>LongFloat</em>

                                </li>
<li>
                                    <strong>output_range_start</strong>

                                    <em>SInt32</em>

                                </li>
<li>
                                    <strong>output_range_end</strong>

                                    <em>SInt32</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_mix_channels"></a>
                    <strong>mix_channels</strong>
                     -- only valid for RGB or CMYK documents
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_adjustment_options">adjustment_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>output_channels</strong>

                                    <em>list of Anything</em>
                                     -- list of channel specifications. For each component channel that the document has, you must specify a list of adjustment values followed by a 'constant' value
                                </li>
<li>
                                    <strong>monochrome_mixing</strong>

                                    <em>Boolean</em>
                                     -- use monochrome mixing? If this is true you can only specify one channel value ( default: false ) ( default: false )
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_posterize"></a>
                    <strong>posterize</strong>

                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_adjustment_options">adjustment_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>levels</strong>

                                    <em>SInt32</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_selective_color"></a>
                    <strong>selective_color</strong>

                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_adjustment_options">adjustment_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>selection_method</strong>

                                    <em>k.absolute | k.relative</em>

                                </li>
<li>
                                    <strong>reds</strong>

                                    <em>list of LongFloat</em>
                                     -- Array of 4 values: cyan, magenta, yellow, black
                                </li>
<li>
                                    <strong>yellows</strong>

                                    <em>list of LongFloat</em>
                                     -- Array of 4 values: cyan, magenta, yellow, black
                                </li>
<li>
                                    <strong>greens</strong>

                                    <em>list of LongFloat</em>
                                     -- Array of 4 values: cyan, magenta, yellow, black
                                </li>
<li>
                                    <strong>cyans</strong>

                                    <em>list of LongFloat</em>
                                     -- Array of 4 values: cyan, magenta, yellow, black
                                </li>
<li>
                                    <strong>blues</strong>

                                    <em>list of LongFloat</em>
                                     -- Array of 4 values: cyan, magenta, yellow, black
                                </li>
<li>
                                    <strong>magentas</strong>

                                    <em>list of LongFloat</em>
                                     -- Array of 4 values: cyan, magenta, yellow, black
                                </li>
<li>
                                    <strong>whites</strong>

                                    <em>list of LongFloat</em>
                                     -- Array of 4 values: cyan, magenta, yellow, black
                                </li>
<li>
                                    <strong>neutrals</strong>

                                    <em>list of LongFloat</em>
                                     -- Array of 4 values: cyan, magenta, yellow, black
                                </li>
<li>
                                    <strong>blacks</strong>

                                    <em>list of LongFloat</em>
                                     -- Array of 4 values: cyan, magenta, yellow, black
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_threshold_adjustment"></a>
                    <strong>threshold_adjustment</strong>

                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_adjustment_options">adjustment_options</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>level</strong>

                                    <em>SInt32</em>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
            </ul>




        <a name="suite_Color_Suite" id="suite_Color_Suite"></a>
        <h2>Color Suite</h2>

        <p>Color classes for Adobe Photoshop</p>



            <h3>Commands</h3>
            <ul>
                <li>
                    <a name="command_convert_color"></a>
                    <strong>application.convert_color(...)</strong>
                     -- convert a object from one color model to another
                    <ul>
                        <li>
                            <em>k.color_value</em>
                             -- color to convert
                        </li>
                        <li>
                            <strong>to=</strong><em>k.CMYK | k.grayscale | k.HSB | k.Lab | k.RGB | k.RGB_Hex</em>
                             -- color model to convert to
                        </li>
                        <li>
                            Result: <em>k.color_value</em>
                             -- convert a object from one color model to another
                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_equal_colors"></a>
                    <strong>application.equal_colors(...)</strong>
                     -- are the colors visually equal?
                    <ul>
                        <li>
                            <em>k.color_value</em>
                             -- the cPsBaseColor object to be operated upon
                        </li>
                        <li>
                            <strong>with=</strong><em>k.color_value</em>

                        </li>
                        <li>
                            Result: <em>Boolean</em>
                             -- are the colors visually equal?
                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_web_safe_color"></a>
                    <strong>application.web_safe_color(...)</strong>
                     -- find the closest web safe color for a color
                    <ul>

                        <li>
                            <strong>for_=</strong><em>k.color_value</em>

                        </li>
                        <li>
                            Result: <em>k.RGB_color</em>
                             -- find the closest web safe color for a color
                        </li>
                    </ul>
                </li>
            </ul>




            <h3>Classes</h3>
            <ul>
                <li>
                    <a name="class_CMYK_color"></a>
                    <strong>CMYK_color</strong>
                     -- A CMYK color specification
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_color_value">color_value</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>cyan</strong>

                                    <em>LongFloat</em>
                                     -- the cyan color value (between 0.0 and 100.0)
                                </li>
<li>
                                    <strong>magenta</strong>

                                    <em>LongFloat</em>
                                     -- the magenta color value (between 0.0 and 100.0)
                                </li>
<li>
                                    <strong>yellow</strong>

                                    <em>LongFloat</em>
                                     -- the yellow color value (between 0.0 and 100.0)
                                </li>
<li>
                                    <strong>black</strong>

                                    <em>LongFloat</em>
                                     -- the black color value (between 0.0 and 100.0)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_color_value"></a>
                    <strong>color_value</strong>
                     -- A color value
                    <ul>

                        <li>Children:
                            <ul>
                                <li><em><a href="#class_CMYK_color">CMYK_color</a></em></li>
<li><em><a href="#class_gray_color">gray_color</a></em></li>
<li><em><a href="#class_RGB_color">RGB_color</a></em></li>
<li><em><a href="#class_RGB_hex_color">RGB_hex_color</a></em></li>
<li><em><a href="#class_no_color">no_color</a></em></li>
<li><em><a href="#class_HSB_color">HSB_color</a></em></li>
<li><em><a href="#class_Lab_color">Lab_color</a></em></li>
                            </ul>
                        </li>


                    </ul>
                </li>
<li>
                    <a name="class_gray_color"></a>
                    <strong>gray_color</strong>
                     -- A gray color specification
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_color_value">color_value</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>gray_value</strong>

                                    <em>LongFloat</em>
                                     -- the gray value ( 0.0 - 100.0; default: 0.0 )
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_HSB_color"></a>
                    <strong>HSB_color</strong>
                     -- An HSB color specification
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_color_value">color_value</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>hue</strong>

                                    <em>LongFloat</em>
                                     -- the hue value (between 0.0 and 360.0)
                                </li>
<li>
                                    <strong>saturation</strong>

                                    <em>LongFloat</em>
                                     -- the saturation value (between 0.0 and 100.0)
                                </li>
<li>
                                    <strong>brightness</strong>

                                    <em>LongFloat</em>
                                     -- the brightness value (between 0.0 and 100.0)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_Lab_color"></a>
                    <strong>Lab_color</strong>
                     -- An Lab color specification
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_color_value">color_value</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>value_L</strong>

                                    <em>LongFloat</em>
                                     -- the L-value (between 0.0 and 100.0)
                                </li>
<li>
                                    <strong>value_a</strong>

                                    <em>LongFloat</em>
                                     -- the a-value (between -128.0 and 127.0)
                                </li>
<li>
                                    <strong>value_b</strong>

                                    <em>LongFloat</em>
                                     -- the b-value (between -128.0 and 127.0)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_no_color"></a>
                    <strong>no_color</strong>
                     -- represents a missing color
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_color_value">color_value</a></em></li>
                            </ul>
                        </li>



                    </ul>
                </li>
<li>
                    <a name="class_RGB_color"></a>
                    <strong>RGB_color</strong>
                     -- An RGB color specification
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_color_value">color_value</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>red</strong>

                                    <em>LongFloat</em>
                                     -- the red color value ( 0.0 - 255.0; default: 255.0 )
                                </li>
<li>
                                    <strong>green</strong>

                                    <em>LongFloat</em>
                                     -- the green color value ( 0.0 - 255.0; default: 255.0 )
                                </li>
<li>
                                    <strong>blue</strong>

                                    <em>LongFloat</em>
                                     -- the blue color value ( 0.0 - 255.0; default: 255.0 )
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_RGB_hex_color"></a>
                    <strong>RGB_hex_color</strong>
                     -- A hexadecimal specification of an RGB color
                    <ul>
                        <li>Parent:
                            <ul>
                                <li><em><a href="#class_color_value">color_value</a></em></li>
                            </ul>
                        </li>

                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>hex_value</strong>

                                    <em>UnicodeText</em>
                                     -- the hex representation of the color. (Example '10FF4B')
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
            </ul>




        <a name="suite_Path_Suite" id="suite_Path_Suite"></a>
        <h2>Path Suite</h2>

        <p>Classes for working with art path items</p>



            <h3>Commands</h3>
            <ul>
                <li>
                    <a name="command_create_selection"></a>
                    <strong>application.create_selection(...)</strong>
                     -- make a selection from this path
                    <ul>
                        <li>
                            <em>k.path_item</em>
                             -- the path item object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>feather_amount=</strong><em>LongFloat</em>]
                             -- the feather amount in pixels
                        </li>
<li>
                            [<strong>antialiasing=</strong><em>Boolean</em>]
                             -- use anti aliasing for the selection
                        </li>
<li>
                            [<strong>operation=</strong><em>k.diminished | k.extended | k.intersected | k.replaced</em>]
                             -- the operation mode for the selection
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_deselect"></a>
                    <strong>application.deselect(...)</strong>
                     -- unselect this path item, no paths items are selected
                    <ul>
                        <li>
                            <em>k.path_item</em>
                             -- the path item object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_fill_path"></a>
                    <strong>application.fill_path(...)</strong>
                     -- fill the path with the following information
                    <ul>
                        <li>
                            <em>k.path_item</em>
                             -- the path item object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>with_contents=</strong><em>Anything</em>]
                             -- color of the fill for this path
                        </li>
<li>
                            [<strong>blend_mode=</strong><em>k.behind_mode | k.clear_mode | k.color_blend | k.color_burn | k.color_dodge | k.darken | k.difference | k.dissolve | k.exclusion | k.hard_light | k.hue_blend | k.lighten | k.linear_burn | k.linear_dodge | k.linear_light | k.luminosity | k.multiply | k.normal | k.overlay | k.pin_light | k.saturation_blend | k.screen | k.soft_light | k.vivid_light</em>]
                             -- blending mode of the fill for this path
                        </li>
<li>
                            [<strong>opacity=</strong><em>LongFloat</em>]
                             -- opacity of the fill for this path
                        </li>
<li>
                            [<strong>preserving_transparency=</strong><em>Boolean</em>]
                             -- preserve the transparency of the file for this path
                        </li>
<li>
                            [<strong>feather_amount=</strong><em>LongFloat</em>]
                             -- the feather amount in pixels
                        </li>
<li>
                            [<strong>antialiasing=</strong><em>Boolean</em>]
                             -- use anti aliasing for the selection
                        </li>
<li>
                            [<strong>antialiasing=</strong><em>Boolean</em>]
                             -- use all subpaths when doing fill
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_make_clipping_path"></a>
                    <strong>application.make_clipping_path(...)</strong>
                     -- make this path item the clipping path for this document
                    <ul>
                        <li>
                            <em>k.path_item</em>
                             -- the path item object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>flatness=</strong><em>LongFloat</em>]
                             -- flatness in device pixels
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_select"></a>
                    <strong>application.select(...)</strong>
                     -- make this path item the active or selected path item
                    <ul>
                        <li>
                            <em>k.path_item</em>
                             -- the path item object or objects to be operated upon
                        </li>

                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_stroke_path"></a>
                    <strong>application.stroke_path(...)</strong>
                     -- stroke the path with the following information
                    <ul>
                        <li>
                            <em>k.path_item</em>
                             -- the path item object or objects to be operated upon
                        </li>
                        <li>
                            [<strong>tool=</strong><em>k.art_history_brush_tool | k.background_eraser_tool | k.blur_tool | k.brush_tool | k.burn_tool | k.clone_stamp_tool | k.color_replacement_tool | k.dodge_tool | k.eraser_tool | k.healing_brush_tool | k.history_brush_tool | k.pattern_stamp_tool | k.pencil_tool | k.sharpen_tool | k.smudge_tool | k.sponge_tool</em>]
                             -- tool to use when stroking the path
                        </li>
<li>
                            [<strong>simulate_pressure=</strong><em>Boolean</em>]
                             -- simulate the pressure when using the tool
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
            </ul>




            <h3>Classes</h3>
            <ul>
                <li>
                    <a name="class_path_item"></a>
                    <strong>path_item</strong>
                     -- An artwork path item
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>index</strong>
                                    (r/o)
                                    <em>SInt32</em>
                                     -- the index of this instance of the object
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>container</strong>
                                    (r/o)
                                    <em>ObjectSpecifier</em>
                                     -- the object's container
                                </li>
<li>
                                    <strong>entire_path</strong>
                                    (r/o)
                                    <em><a href="#class_sub_path_info">list of k.sub_path_info</a></em>
                                     -- all the path item's sub paths
                                </li>
<li>
                                    <strong>kind</strong>

                                    <em>k.clipping | k.normal | k.text_mask | k.vector_mask | k.work</em>

                                </li>
<li>
                                    <strong>name</strong>

                                    <em>UnicodeText</em>
                                     -- the name of the path item
                                </li>
                            </ul>
                        </li>
                        <li>Elements:
                            <ul>
                                <li>
                                    <strong><a href="#class_sub_path_item">sub_path_items</a></strong> -- 
                                    <em>index | range | relative | test</em>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
<li>
                    <a name="class_path_point"></a>
                    <strong>path_point</strong>
                     -- A point on a path
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>index</strong>
                                    (r/o)
                                    <em>SInt32</em>
                                     -- the index of this instance of the object
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>anchor</strong>
                                    (r/o)
                                    <em>AEList</em>
                                     -- the position (coordinates) of the anchor point
                                </li>
<li>
                                    <strong>container</strong>
                                    (r/o)
                                    <em>ObjectSpecifier</em>
                                     -- the object's container
                                </li>
<li>
                                    <strong>kind</strong>
                                    (r/o)
                                    <em>k.corner_point | k.smooth_point</em>
                                     -- the type of point: smooth/corner
                                </li>
<li>
                                    <strong>left_direction</strong>
                                    (r/o)
                                    <em>AEList</em>
                                     -- location of the left direction point (in position)
                                </li>
<li>
                                    <strong>right_direction</strong>
                                    (r/o)
                                    <em>AEList</em>
                                     -- location of the right direction point (out position)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_path_point_info"></a>
                    <strong>path_point_info</strong>
                     -- Path point information (returned by entire path dataClassProperty of path item class)
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>anchor</strong>

                                    <em>AEList</em>
                                     -- the position of the anchor (in coordinates)
                                </li>
<li>
                                    <strong>kind</strong>

                                    <em>k.corner_point | k.smooth_point</em>
                                     -- the point type, smooth/corner
                                </li>
<li>
                                    <strong>left_direction</strong>

                                    <em>AEList</em>
                                     -- location of the left direction point (in position)
                                </li>
<li>
                                    <strong>right_direction</strong>

                                    <em>AEList</em>
                                     -- location of the left direction point (out position)
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_sub_path_info"></a>
                    <strong>sub_path_info</strong>
                     -- Sub path information (returned by entire path dataClassProperty of path item class)
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>closed</strong>

                                    <em>Boolean</em>
                                     -- is this path closed?
                                </li>
<li>
                                    <strong>entire_sub_path</strong>

                                    <em><a href="#class_path_point_info">list of k.path_point_info</a></em>
                                     -- all the sub path item's path points
                                </li>
<li>
                                    <strong>operation</strong>

                                    <em>k.shape_add | k.shape_intersect | k.shape_subtract | k.shape_xor</em>
                                     -- sub path operation on other sub paths
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
<li>
                    <a name="class_sub_path_item"></a>
                    <strong>sub_path_item</strong>
                     -- An artwork sub path item
                    <ul>


                        <li>Properties:
                            <ul>
                                <li>
                                    <strong>best_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the best type for the object's value
                                </li>
<li>
                                    <strong>class_</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the object's class
                                </li>
<li>
                                    <strong>default_type</strong>
                                    (r/o)
                                    <em>Type</em>
                                     -- the default type for the object's value
                                </li>
<li>
                                    <strong>index</strong>
                                    (r/o)
                                    <em>SInt32</em>
                                     -- the index of this instance of the object
                                </li>
<li>
                                    <strong>properties</strong>

                                    <em>AERecord</em>
                                     -- all of this object's properties returned in a single record
                                </li>
<li>
                                    <strong>closed</strong>
                                    (r/o)
                                    <em>Boolean</em>
                                     -- is this path closed?
                                </li>
<li>
                                    <strong>container</strong>
                                    (r/o)
                                    <em>ObjectSpecifier</em>
                                     -- the object's container
                                </li>
<li>
                                    <strong>entire_sub_path</strong>
                                    (r/o)
                                    <em><a href="#class_path_point_info">list of k.path_point_info</a></em>
                                     -- all the sub path item's path points
                                </li>
<li>
                                    <strong>operation</strong>
                                    (r/o)
                                    <em>k.shape_add | k.shape_intersect | k.shape_subtract | k.shape_xor</em>
                                     -- sub path operation on other sub paths
                                </li>
                            </ul>
                        </li>
                        <li>Elements:
                            <ul>
                                <li>
                                    <strong><a href="#class_path_point">path_points</a></strong> -- 
                                    <em>index | range | relative | test</em>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>




        <a name="suite_Miscellaneous_Standards_Suite" id="suite_Miscellaneous_Standards_Suite"></a>
        <h2>Miscellaneous Standards Suite</h2>

        <p>Miscellaneous standard commands and classes</p>



            <h3>Commands</h3>
            <ul>
                <li>
                    <a name="command_clear"></a>
                    <strong>application.clear()</strong>
                     -- clear current selection
                    <ul>


                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_copy"></a>
                    <strong>application.copy()</strong>
                     -- copy current selection to the clipboard
                    <ul>


                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_copy_merged"></a>
                    <strong>application.copy_merged()</strong>
                     -- copy current selection to the clipboard. Include data in all visible layers.
                    <ul>


                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_cut"></a>
                    <strong>application.cut()</strong>
                     -- cut current selection to the clipboard
                    <ul>


                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_do_action"></a>
                    <strong>application.do_action(...)</strong>
                     -- play an action from the Actions Palette
                    <ul>
                        <li>
                            <em>UnicodeText</em>
                             -- the name of the action to play (note that the case of letters in the Action name is important and must match the case of the name in the Actions palette)
                        </li>
                        <li>
                            <strong>from_=</strong><em>UnicodeText</em>
                             -- the name of the action set containing the action being played (note that the case of letters in the Action Set name is important and must match the case of the name in the Actions palette)
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_do_javascript"></a>
                    <strong>application.do_javascript(...)</strong>
                     -- execute a JavaScript
                    <ul>
                        <li>
                            <em>Anything</em>
                             -- JavaScript code or file to execute
                        </li>
                        <li>
                            [<strong>with_arguments=</strong><em>list of Anything</em>]
                             -- arguments to pass to the JavaScript routine
                        </li>
<li>
                            [<strong>show_debugger=</strong><em>k.before_running | k.never | k.on_runtime_error</em>]
                             -- when should a debugger be shown? ( default: never )
                        </li>
                        <li>
                            Result: <em>UnicodeText</em>
                             -- execute a JavaScript
                        </li>
                    </ul>
                </li>
<li>
                    <a name="command_paste"></a>
                    <strong>application.paste(...)</strong>
                     -- paste clipboard into the current document
                    <ul>

                        <li>
                            [<strong>clipping_to_selection=</strong><em>Boolean</em>]
                             -- should contents be clipped to the current selection? ( default: false )
                        </li>
                        <li>
                            Result: <em>None</em>

                        </li>
                    </ul>
                </li>
            </ul>






</td>

<td id="sidebar" valign="top">
<div class="box">
    <h2>Suites</h2>
    <ul>
        <li><a href="#suite_AdobeScriptAutomation">AdobeScriptAutomation</a></li>
<li><a href="#suite_Core_Suite">Core Suite</a></li>
<li><a href="#suite_Photoshop_Suite">Photoshop Suite</a></li>
<li><a href="#suite_Open_Formats_Suite">Open Formats Suite</a></li>
<li><a href="#suite_Save_Formats_Suite">Save Formats Suite</a></li>
<li><a href="#suite_Filter_Suite">Filter Suite</a></li>
<li><a href="#suite_Adjustment_Suite">Adjustment Suite</a></li>
<li><a href="#suite_Color_Suite">Color Suite</a></li>
<li><a href="#suite_Path_Suite">Path Suite</a></li>
<li><a href="#suite_Miscellaneous_Standards_Suite">Miscellaneous Standards Suite</a></li>
    </ul>
    <h2>Commands</h2>
    <ul>
        <li><a href="#command_adjust">adjust</a></li>
<li><a href="#command_apply">apply</a></li>
<li><a href="#command_apply_layer_style">apply_layer_style</a></li>
<li><a href="#command_change_mode">change_mode</a></li>
<li><a href="#command_clear">clear</a></li>
<li><a href="#command_close">close</a></li>
<li><a href="#command_contract">contract</a></li>
<li><a href="#command_convert">convert</a></li>
<li><a href="#command_convert_color">convert_color</a></li>
<li><a href="#command_convert_to_shape">convert_to_shape</a></li>
<li><a href="#command_copy">copy</a></li>
<li><a href="#command_copy_merged">copy_merged</a></li>
<li><a href="#command_count">count</a></li>
<li><a href="#command_create_PDF_presentation">create_PDF_presentation</a></li>
<li><a href="#command_create_photo_gallery">create_photo_gallery</a></li>
<li><a href="#command_create_selection">create_selection</a></li>
<li><a href="#command_create_work_path">create_work_path</a></li>
<li><a href="#command_crop">crop</a></li>
<li><a href="#command_cut">cut</a></li>
<li><a href="#command_delete">delete</a></li>
<li><a href="#command_deselect">deselect</a></li>
<li><a href="#command_deselect">deselect</a></li>
<li><a href="#command_do_action">do_action</a></li>
<li><a href="#command_do_javascript">do_javascript</a></li>
<li><a href="#command_duplicate">duplicate</a></li>
<li><a href="#command_equal_colors">equal_colors</a></li>
<li><a href="#command_exists">exists</a></li>
<li><a href="#command_expand">expand</a></li>
<li><a href="#command_export">export</a></li>
<li><a href="#command_feather">feather</a></li>
<li><a href="#command_fill">fill</a></li>
<li><a href="#command_fill_path">fill_path</a></li>
<li><a href="#command_filter">filter</a></li>
<li><a href="#command_flatten">flatten</a></li>
<li><a href="#command_flip_canvas">flip_canvas</a></li>
<li><a href="#command_grow">grow</a></li>
<li><a href="#command_import_annotations">import_annotations</a></li>
<li><a href="#command_invert">invert</a></li>
<li><a href="#command_link">link</a></li>
<li><a href="#command_load">load</a></li>
<li><a href="#command_make">make</a></li>
<li><a href="#command_make_clipping_path">make_clipping_path</a></li>
<li><a href="#command_make_work_path">make_work_path</a></li>
<li><a href="#command_merge">merge</a></li>
<li><a href="#command_merge_visible_layers">merge_visible_layers</a></li>
<li><a href="#command_move">move</a></li>
<li><a href="#command_open">open</a></li>
<li><a href="#command_paste">paste</a></li>
<li><a href="#command_print_">print_</a></li>
<li><a href="#command_purge">purge</a></li>
<li><a href="#command_quit">quit</a></li>
<li><a href="#command_rasterize">rasterize</a></li>
<li><a href="#command_recapture">recapture</a></li>
<li><a href="#command_reset_from_comp">reset_from_comp</a></li>
<li><a href="#command_resize_canvas">resize_canvas</a></li>
<li><a href="#command_resize_image">resize_image</a></li>
<li><a href="#command_reveal_all">reveal_all</a></li>
<li><a href="#command_rotate">rotate</a></li>
<li><a href="#command_rotate_boundary">rotate_boundary</a></li>
<li><a href="#command_rotate_canvas">rotate_canvas</a></li>
<li><a href="#command_save">save</a></li>
<li><a href="#command_scale">scale</a></li>
<li><a href="#command_scale_boundary">scale_boundary</a></li>
<li><a href="#command_Scripts">Scripts</a></li>
<li><a href="#command_select">select</a></li>
<li><a href="#command_select">select</a></li>
<li><a href="#command_select_all">select_all</a></li>
<li><a href="#command_select_border">select_border</a></li>
<li><a href="#command_similar">similar</a></li>
<li><a href="#command_smooth">smooth</a></li>
<li><a href="#command_split_channels">split_channels</a></li>
<li><a href="#command_store">store</a></li>
<li><a href="#command_stroke">stroke</a></li>
<li><a href="#command_stroke_path">stroke_path</a></li>
<li><a href="#command_translate">translate</a></li>
<li><a href="#command_translate_boundary">translate_boundary</a></li>
<li><a href="#command_trap">trap</a></li>
<li><a href="#command_trim">trim</a></li>
<li><a href="#command_unlink">unlink</a></li>
<li><a href="#command_web_safe_color">web_safe_color</a></li>
    </ul>
    <h2>Classes</h2>
    <ul>
        <li><a href="#class_add_noise">add_noise</a></li>
<li><a href="#class_adjustment_options">adjustment_options</a></li>
<li><a href="#class_application">application</a></li>
<li><a href="#class_art_layer">art_layer</a></li>
<li><a href="#class_automatic_contrast">automatic_contrast</a></li>
<li><a href="#class_automatic_levels">automatic_levels</a></li>
<li><a href="#class_Bitmap_mode_options">Bitmap_mode_options</a></li>
<li><a href="#class_blur">blur</a></li>
<li><a href="#class_blur_more">blur_more</a></li>
<li><a href="#class_BMP_save_options">BMP_save_options</a></li>
<li><a href="#class_brightness_and_contrast">brightness_and_contrast</a></li>
<li><a href="#class_change_mode_options">change_mode_options</a></li>
<li><a href="#class_channel">channel</a></li>
<li><a href="#class_clouds">clouds</a></li>
<li><a href="#class_CMYK_color">CMYK_color</a></li>
<li><a href="#class_color_balance">color_balance</a></li>
<li><a href="#class_color_value">color_value</a></li>
<li><a href="#class_curves">curves</a></li>
<li><a href="#class_custom_filter">custom_filter</a></li>
<li><a href="#class_deinterlace">deinterlace</a></li>
<li><a href="#class_desaturate">desaturate</a></li>
<li><a href="#class_despeckle">despeckle</a></li>
<li><a href="#class_difference_clouds">difference_clouds</a></li>
<li><a href="#class_diffuse_glow">diffuse_glow</a></li>
<li><a href="#class_displace_filter">displace_filter</a></li>
<li><a href="#class_document">document</a></li>
<li><a href="#class_dust_and_scratches">dust_and_scratches</a></li>
<li><a href="#class_EPS_open_options">EPS_open_options</a></li>
<li><a href="#class_EPS_save_options">EPS_save_options</a></li>
<li><a href="#class_equalize">equalize</a></li>
<li><a href="#class_filter_options">filter_options</a></li>
<li><a href="#class_font">font</a></li>
<li><a href="#class_gallery_banner_options">gallery_banner_options</a></li>
<li><a href="#class_gallery_color_options">gallery_color_options</a></li>
<li><a href="#class_gallery_images_options">gallery_images_options</a></li>
<li><a href="#class_gallery_options">gallery_options</a></li>
<li><a href="#class_gallery_security_options">gallery_security_options</a></li>
<li><a href="#class_gallery_thumbnail_options">gallery_thumbnail_options</a></li>
<li><a href="#class_Gaussian_blur">Gaussian_blur</a></li>
<li><a href="#class_GIF_save_options">GIF_save_options</a></li>
<li><a href="#class_glass_filter">glass_filter</a></li>
<li><a href="#class_gray_color">gray_color</a></li>
<li><a href="#class_high_pass">high_pass</a></li>
<li><a href="#class_history_state">history_state</a></li>
<li><a href="#class_HSB_color">HSB_color</a></li>
<li><a href="#class_Illustrator_paths_export_options">Illustrator_paths_export_options</a></li>
<li><a href="#class_indexed_mode_options">indexed_mode_options</a></li>
<li><a href="#class_info_object">info_object</a></li>
<li><a href="#class_inversion">inversion</a></li>
<li><a href="#class_JPEG_save_options">JPEG_save_options</a></li>
<li><a href="#class_Lab_color">Lab_color</a></li>
<li><a href="#class_layer">layer</a></li>
<li><a href="#class_layer_comp">layer_comp</a></li>
<li><a href="#class_layer_set">layer_set</a></li>
<li><a href="#class_lens_flare">lens_flare</a></li>
<li><a href="#class_levels_adjustment">levels_adjustment</a></li>
<li><a href="#class_maximum_filter">maximum_filter</a></li>
<li><a href="#class_median_noise">median_noise</a></li>
<li><a href="#class_minimum_filter">minimum_filter</a></li>
<li><a href="#class_mix_channels">mix_channels</a></li>
<li><a href="#class_motion_blur">motion_blur</a></li>
<li><a href="#class_no_color">no_color</a></li>
<li><a href="#class_NTSC_colors">NTSC_colors</a></li>
<li><a href="#class_ocean_ripple">ocean_ripple</a></li>
<li><a href="#class_offset_filter">offset_filter</a></li>
<li><a href="#class_open_options">open_options</a></li>
<li><a href="#class_path_item">path_item</a></li>
<li><a href="#class_path_point">path_point</a></li>
<li><a href="#class_path_point_info">path_point_info</a></li>
<li><a href="#class_PDF_open_options">PDF_open_options</a></li>
<li><a href="#class_PDF_save_options">PDF_save_options</a></li>
<li><a href="#class_Photo_CD_open_options">Photo_CD_open_options</a></li>
<li><a href="#class_Photoshop_DCS_10x2E0_save_options">Photoshop_DCS_10x2E0_save_options</a></li>
<li><a href="#class_Photoshop_DCS_20x2E0_save_options">Photoshop_DCS_20x2E0_save_options</a></li>
<li><a href="#class_Photoshop_save_options">Photoshop_save_options</a></li>
<li><a href="#class_PICT_file_save_options">PICT_file_save_options</a></li>
<li><a href="#class_PICT_resource_save_options">PICT_resource_save_options</a></li>
<li><a href="#class_pinch">pinch</a></li>
<li><a href="#class_Pixar_save_options">Pixar_save_options</a></li>
<li><a href="#class_PNG_save_options">PNG_save_options</a></li>
<li><a href="#class_polar_coordinates">polar_coordinates</a></li>
<li><a href="#class_posterize">posterize</a></li>
<li><a href="#class_presentation_options">presentation_options</a></li>
<li><a href="#class_radial_blur">radial_blur</a></li>
<li><a href="#class_raw_format_open_options">raw_format_open_options</a></li>
<li><a href="#class_raw_save_options">raw_save_options</a></li>
<li><a href="#class_RGB_color">RGB_color</a></li>
<li><a href="#class_RGB_hex_color">RGB_hex_color</a></li>
<li><a href="#class_ripple">ripple</a></li>
<li><a href="#class_save_options">save_options</a></li>
<li><a href="#class_selection_object">selection_object</a></li>
<li><a href="#class_selective_color">selective_color</a></li>
<li><a href="#class_settings_object">settings_object</a></li>
<li><a href="#class_SGI_RGB_save_options">SGI_RGB_save_options</a></li>
<li><a href="#class_sharpen">sharpen</a></li>
<li><a href="#class_sharpen_edges">sharpen_edges</a></li>
<li><a href="#class_sharpen_more">sharpen_more</a></li>
<li><a href="#class_shear">shear</a></li>
<li><a href="#class_smart_blur">smart_blur</a></li>
<li><a href="#class_spherize">spherize</a></li>
<li><a href="#class_sub_path_info">sub_path_info</a></li>
<li><a href="#class_sub_path_item">sub_path_item</a></li>
<li><a href="#class_Targa_save_options">Targa_save_options</a></li>
<li><a href="#class_text_object">text_object</a></li>
<li><a href="#class_texture_fill">texture_fill</a></li>
<li><a href="#class_threshold_adjustment">threshold_adjustment</a></li>
<li><a href="#class_TIFF_save_options">TIFF_save_options</a></li>
<li><a href="#class_twirl">twirl</a></li>
<li><a href="#class_unsharp_mask">unsharp_mask</a></li>
<li><a href="#class_wave_filter">wave_filter</a></li>
<li><a href="#class_XMP_metadata">XMP_metadata</a></li>
<li><a href="#class_zigzag">zigzag</a></li>
    </ul>
</div>
</td>
</tr>
</table>
