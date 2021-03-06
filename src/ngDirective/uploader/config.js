define(function (require, exports) {

    'use strict';

    exports.error = {

        // 单文件模式下上传了多个文件
        multiple: {
            msg: '每次只能上传单个文件',
            code: 1
        },

        // 大小超出限制
        size: {
            msg: '文件太大了',
            code: 2
        },

        // 扩展名不对
        accept: {
            msg: '文件类型错误',
            code: 3
        },


        // 请求错误
        xhr: {
            msg: '系统异常',
            code: 4
        }
    };

    exports.fieldName = 'file';

    exports.content = '<button class="btn">上传</button>';

    exports.ext2MimeType = {
        html    : 'text/html',
        htm     : 'text/html',
        shtml   : 'text/html',
        xml     : 'text/xml',
        css     : 'text/css',
        js      : 'application/x-javascript',
        json    : 'application/json',
        atom    : 'application/atom+xml',
        rss     : 'application/rss+xml',

        mml     : 'text/mathml',
        txt     : 'text/plain',
        jad     : 'text/vnd.sun.j2me.app-descriptor',
        wml     : 'text/vnd.wap.wml',
        htc     : 'text/x-component',

        jpg     : 'image/jpeg',
        jpeg    : 'image/jpeg',
        png     : 'image/png',
        gif     : 'image/gif',
        tif     : 'image/tiff',
        tiff    : 'image/tiff',
        wbmp    : 'image/vnd.wap.wbmp',
        ico     : 'image/x-icon',
        jng     : 'image/x-jng',
        bmp     : 'image/x-ms-bmp',
        svg     : 'image/svg+xml',
        svgz    : 'image/svg+xml',
        webp    : 'image/webp',

        mp3     : 'audio/mpeg',
        wma     : 'audio/x-ms-wma',
        wav     : 'audio/x-wav',
        mid     : 'audio/midi',
        midd    : 'audio/midi',
        kar     : 'audio/midi',
        ogg     : 'audio/ogg',
        m4a     : 'audio/x-m4a',
        ra      : 'audio/x-realaudio',
        ram     : 'audio/x-pn-realaudio',
        mod     : 'audio/mod',


        '3gp'   : 'video/3gpp',
        '3gpp'  : 'video/3gpp',
        mp4     : 'video/mp4',
        mpeg    : 'video/mpeg',
        mpg     : 'video/mpeg',
        mov     : 'video/quicktime',
        webm    : 'video/webm',
        flv     : 'video/x-flv',
        m4v     : 'video/x-m4v',
        mng     : 'video/x-mng',
        asx     : 'video/x-ms-asf',
        asf     : 'video/x-ms-asf',
        wmv     : 'video/x-ms-wmv',
        avi     : 'video/x-msvideo',
        rm      : 'video/vnd.rn-realvideo',
        rmvb    : 'video/vnd.rn-realvideo',
        ts      : 'video/MP2T',
        dv      : 'video/x-dv',
        mkv     : 'video/x-matroska',

        jar     : 'application/java-archive',
        war     : 'application/java-archive',
        ear     : 'application/java-archive',
        hqx     : 'application/mac-binhex40',
        pdf     : 'application/pdf',
        ps      : 'application/postscript',
        eps     : 'application/postscript',
        ai      : 'application/postscript',
        rtf     : 'application/rtf',
        wmlc    : 'application/vnd.wap.wmlc',
        kml     : 'application/vnd.google-earth.kml+xml',
        kmz     : 'application/vnd.google-earth.kmz',
        '7z'    : 'application/x-7z-compressed',
        cco     : 'application/x-cocoa',
        jardiff : 'application/x-java-archive-diff',
        jnlp    : 'application/x-java-jnlp-file',
        run     : 'application/x-makeself',
        pl      : 'application/x-perl',
        pm      : 'application/x-perl',
        prc     : 'application/x-pilot',
        pdb     : 'application/x-pilot',
        rar     : 'application/x-rar-compressed',
        rpm     : 'application/x-redhat-package-manager',
        sea     : 'application/x-sea',
        swf     : 'application/x-shockwave-flash',
        sit     : 'application/x-stuffit',
        tcl     : 'application/x-tcl',
        tk      : 'application/x-tcl',
        der     : 'application/x-x509-ca-cert',
        pem     : 'application/x-x509-ca-cert',
        crt     : 'application/x-x509-ca-cert',
        xpi     : 'application/x-xpinstall',
        xhtml   : 'application/xhtml+xml',
        zip     : 'application/zip',

        bin     : 'application/octet-stream',
        exe     : 'application/octet-stream',
        dll     : 'application/octet-stream',
        deb     : 'application/octet-stream',
        dmg     : 'application/octet-stream',
        eot     : 'application/octet-stream',
        iso     : 'application/octet-stream',
        img     : 'application/octet-stream',
        msi     : 'application/octet-stream',
        msp     : 'application/octet-stream',
        msm     : 'application/octet-stream',

        doc     : 'application/msword',
        xls     : 'application/vnd.ms-excel',
        ppt     : 'application/vnd.ms-powerpoint',
        docx    : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        xlsx    : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        pptx    : 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    };
});