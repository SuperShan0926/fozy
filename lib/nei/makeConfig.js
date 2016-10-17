
'use strict';

module.exports = function (data) {
    // constuct pages setting
    var pages = data.pages.map(function (item, i) {
        return {
            name: item.name,
            url: item.path,
            path: item.templates[0].path
        };
    });

    var docs = data.specs[0].docs,
        spec = data.specs[0].spec;

    var getRelativePath = function getRelativePath(uri) {
        var res = path.relative(process.cwd(), path.join(__root, uri)).replace(/\\/g, '/');
        return res;
    };

    var find = function find(docs, spec, res, dir) {
        res = res || {};
        dir = dir || '';
        if (docs == undefined || docs.length === 0 || spec.attributes == undefined) {
            return res;
        }
        docs.forEach(function (item, index) {
            switch (item.id) {
                case spec.attributes.mockApiRoot:
                    {
                        // console.log('mockApiRoot', dir + '/' + item.name);
                        res.mockApiRoot = getRelativePath(dir + '/' + item.name);
                        break;
                    }
                case spec.attributes.viewRoot:
                    {
                        // console.log('viewRoot', dir + '/' + item.name);
                        res.viewRoot = getRelativePath(dir + '/' + item.name);
                        break;
                    }
                case spec.attributes.mockViewRoot:
                    {
                        // console.log('mockViewRoot', dir + '/' + item.name);
                        res.mockViewRoot = getRelativePath(dir + '/' + item.name);
                        break;
                    }
                case spec.attributes.webRoot:
                    {
                        // console.log('webRoot', dir + '/' + item.name);
                        res.webRoot = getRelativePath(dir + '/' + item.name);
                        break;
                    }
            }
            find(item.children, spec, res, dir + '/' + item.name);
        });
        return res;
    };
    var conf = find(docs, spec);
};