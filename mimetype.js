module.exports = function () {
    const listMimetype = [
        {extension:'.a'      , mimetype: 'application/octet-stream'},
        {extension:'.ai'     , mimetype: 'application/postscript'},
        {extension:'.aif'    , mimetype: 'audio/x-aiff'},
        {extension:'.aifc'   , mimetype: 'audio/x-aiff'},
        {extension:'.aiff'   , mimetype: 'audio/x-aiff'},
        {extension:'.au'     , mimetype: 'audio/basic'},
        {extension:'.avi'    , mimetype: 'video/x-msvideo'},
        {extension:'.bat'    , mimetype: 'text/plain'},
        {extension:'.bin'    , mimetype: 'application/octet-stream'},
        {extension:'.bmp'    , mimetype: 'image/x-ms-bmp'},
        {extension:'.c'      , mimetype: 'text/plain'},
        {extension:'.cdf'    , mimetype: 'application/x-cdf'},
        {extension:'.csh'    , mimetype: 'application/x-csh'},
        {extension:'.css'    , mimetype: 'text/css'},
        {extension:'.dll'    , mimetype: 'application/octet-stream'},
        {extension:'.doc'    , mimetype: 'application/msword'},
        {extension:'.dot'    , mimetype: 'application/msword'},
        {extension:'.dvi'    , mimetype: 'application/x-dvi'},
        {extension:'.eml'    , mimetype: 'message/rfc822'},
        {extension:'.eps'    , mimetype: 'application/postscript'},
        {extension:'.etx'    , mimetype: 'text/x-setext'},
        {extension:'.exe'    , mimetype: 'application/octet-stream'},
        {extension:'.gif'    , mimetype: 'image/gif'},
        {extension:'.gtar'   , mimetype: 'application/x-gtar'},
        {extension:'.h'      , mimetype: 'text/plain'},
        {extension:'.hdf'    , mimetype: 'application/x-hdf'},
        {extension:'.htm'    , mimetype: 'text/html'},
        {extension:'.html'   , mimetype: 'text/html'},
        {extension:'.jpeg'   , mimetype: 'image/jpeg'},
        {extension:'.js'     , mimetype: 'application/x-javascript'},
        {extension:'.ksh'    , mimetype: 'text/plain'},
        {extension:'.latex'  , mimetype: 'application/x-latex'},
        {extension:'.m1v'    , mimetype: 'video/mpeg'},
        {extension:'.man'    , mimetype: 'application/x-troff-man'},
        {extension:'.me'     , mimetype: 'application/x-troff-me'},
        {extension:'.mht'    , mimetype: 'message/rfc822'},
        {extension:'.mhtml'  , mimetype: 'message/rfc822'},
        {extension:'.mif'    , mimetype: 'application/x-mif'},
        {extension:'.mov'    , mimetype: 'video/quicktime'},
        {extension:'.movie'  , mimetype: 'video/x-sgi-movie'},
        {extension:'.mp2'    , mimetype: 'audio/mpeg'},
        {extension:'.mp3'    , mimetype: 'audio/mpeg'},
        {extension:'.mp4'    , mimetype: 'video/mp4'},
        {extension:'.mpa'    , mimetype: 'video/mpeg'},
        {extension:'.mpe'    , mimetype: 'video/mpeg'},
        {extension:'.mpeg'   , mimetype: 'video/mpeg'},
        {extension:'.mpg'    , mimetype: 'video/mpeg'},
        {extension:'.ms'     , mimetype: 'application/x-troff-ms'},
        {extension:'.nc'     , mimetype: 'application/x-netcdf'},
        {extension:'.nws'    , mimetype: 'message/rfc822'},
        {extension:'.o'      , mimetype: 'application/octet-stream'},
        {extension:'.obj'    , mimetype: 'application/octet-stream'},
        {extension:'.oda'    , mimetype: 'application/oda'},
        {extension:'.pbm'    , mimetype: 'image/x-portable-bitmap'},
        {extension:'.pdf'    , mimetype: 'application/pdf'},
        {extension:'.pfx'    , mimetype: 'application/x-pkcs12'},
        {extension:'.pgm'    , mimetype: 'image/x-portable-graymap'},
        {extension:'.png'    , mimetype: 'image/png'},
        {extension:'.pnm'    , mimetype: 'image/x-portable-anymap'},
        {extension:'.pot'    , mimetype: 'application/vnd.ms-powerpoint'},
        {extension:'.ppa'    , mimetype: 'application/vnd.ms-powerpoint'},
        {extension:'.ppm'    , mimetype: 'image/x-portable-pixmap'},
        {extension:'.pps'    , mimetype: 'application/vnd.ms-powerpoint'},
        {extension:'.ppt'    , mimetype: 'application/vnd.ms-powerpoint'},
        {extension:'.pptx'   , mimetype : 'application/vnd.ms-powerpoint'},
        {extension:'.ps'     , mimetype: 'application/postscript'},
        {extension:'.pwz'    , mimetype: 'application/vnd.ms-powerpoint'},
        {extension:'.py'     , mimetype: 'text/x-python'},
        {extension:'.pyc'    , mimetype: 'application/x-python-code'},
        {extension:'.pyo'    , mimetype: 'application/x-python-code'},
        {extension:'.qt'     , mimetype: 'video/quicktime'},
        {extension:'.ra'     , mimetype: 'audio/x-pn-realaudio'},
        {extension:'.ram'    , mimetype: 'application/x-pn-realaudio'},
        {extension:'.ras'    , mimetype: 'image/x-cmu-raster'},
        {extension:'.rdf'    , mimetype: 'application/xml'},
        {extension:'.rgb'    , mimetype: 'image/x-rgb'},
        {extension:'.roff'   , mimetype: 'application/x-troff'},
        {extension:'.rtx'    , mimetype: 'text/richtext'},
        {extension:'.sgm'    , mimetype: 'text/x-sgml'},
        {extension:'.sgml'   , mimetype: 'text/x-sgml'},
        {extension:'.sh'     , mimetype: 'application/x-sh'},
        {extension:'.shar'   , mimetype: 'application/x-shar'},
        {extension:'.snd'    , mimetype: 'audio/basic'},
        {extension:'.so'     , mimetype: 'application/octet-stream'},
        {extension:'.src'    , mimetype: 'application/x-wais-source'},
        {extension:'.swf'    , mimetype: 'application/x-shockwave-flash'},
        {extension:'.t'      , mimetype: 'application/x-troff'},
        {extension:'.tar'    , mimetype: 'application/x-tar'},
        {extension:'.tcl'    , mimetype: 'application/x-tcl'},
        {extension:'.tex'    , mimetype: 'application/x-tex'},
        {extension:'.texi'   , mimetype: 'application/x-texinfo'},
        {extension:'.texinfo', mimetype: 'application/x-texinfo'},
        {extension:'.tif'    , mimetype: 'image/tiff'},
        {extension:'.tiff'   , mimetype: 'image/tiff'},
        {extension:'.tr'     , mimetype: 'application/x-troff'},
        {extension:'.tsv'    , mimetype: 'text/tab-separated-values'},
        {extension:'.txt'    , mimetype: 'text/plain'},
        {extension:'.ustar'  , mimetype: 'application/x-ustar'},
        {extension:'.vcf'    , mimetype: 'text/x-vcard'},
        {extension:'.wav'    , mimetype: 'audio/x-wav'},
        {extension:'.wiz'    , mimetype: 'application/msword'},
        {extension:'.wsdl'   , mimetype: 'application/xml'},
        {extension:'.xbm'    , mimetype: 'image/x-xbitmap'},
        {extension:'.xlb'    , mimetype: 'application/vnd.ms-excel'},
        {extension:'.xls'    , mimetype: 'application/vnd.ms-excel'},
        {extension:'.xlsx'   , mimetype : 'application/vnd.ms-excel'},
        {extension:'.xml'    , mimetype: 'text/xml'},
        {extension:'.xpdl'   , mimetype: 'application/xml'},
        {extension:'.xpm'    , mimetype: 'image/x-xpixmap'},
        {extension:'.xsl'    , mimetype: 'application/xml'},
        {extension:'.xwd'    , mimetype: 'image/x-xwindowdump'},
        {extension:'.zip'    , mimetype: 'application/zip'}
    ];
    const _self = {};
    
    /**
     * findExtesion
     * @param {String} mimetype
     * @return {String} extension
     */
    _self.findExtension = (mimetype) => {
        try {
            const finded = listMimetype.find((item) => {
                return item.mimetype === mimetype;
            });
            if (finded) {
                return finded.extension;
            } else {
                return null;
            }
        } catch (error) {
            throw Error(error);
        }
    }

    /**
     * findMimetype
     * @param {String} mimetype
     * @return {String} extension
     */
    _self.findMimetype = (extension) => {
        try {
            const finded = listMimetype.find((item) => {
                return item.extension === extension;
            });
            if (finded) {
                return finded.mimetype;
            } else {
                return null;
            }
        } catch (error) {
            throw Error(error);
        }
    }

    /**
     * getListMimetype
     * @return {Array} mimetypes
     */
    _self.getListMimetype = () => {
        return listMimetype;
    }

    return _self;
}
