var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathName = url.parse(_url, true).pathname;
    
    if (pathName === '/') {
        if (queryData.id === undefined) {
            fs.readdir('./data', function (error, fileList) {
                var title = 'Welcome';
                var description = 'Hello, Node.js';

                var list = template.list(fileList);
                var html = template.HTML(title, list,
                    `<h2>${title}</h2>${description}`,
                    `<a href="/create">create</a>`);
                response.writeHead(200);
                response.end(html);
                /*
                var list = templateList(fileList);
                var template = templateHTML(title, list,
                    `<h2>${title}</h2>${description}`,
                    `<a href="/create">create</a>`);
                response.writeHead(200);
                response.end(template);
                */
            });
        } else {
            fs.readdir('./data', function (error, fileList) {
                var filteredId = path.parse(queryData.id).base;
                fs.readFile(`data/${filteredId}`, 'utf-8', function (err, description) {
                    var title = queryData.id;
                    var sanitizedTitle = sanitizeHtml(title);
                    var sanitizedDescription = sanitizeHtml(description, {allowedTags:['h1']});
                    var list = template.list(fileList);
                    var html = template.HTML(sanitizedTitle, list,
                        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
                        `<a href="/create">create</a> 
                                <a href="/update?id=${sanitizedTitle}">update</a>
                                <form action="delete_process" method="post">
                                    <input type="hidden" name="id" value="${sanitizedTitle}">
                                    <input type="submit" value="delete">
                                </form>`);
                    response.writeHead(200);
                    response.end(html);
                });
            });
        }
    } else if (pathName === '/create') {
        fs.readdir('./data', function (error, fileList) {
            var title = 'WEB - create';
            var list = template.list(fileList);
            var html = template.HTML(title, list, `
                <form action="/create_process" method="post">
                    <p><input type="text" name="title" placeholder="title"></p>
                    <p>
                        <textarea name="description" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
                `, '');
            response.writeHead(200);
            response.end(html);
        });
    } else if (pathName === '/create_process') {
        var body = "";
        request.on('data', function (data) {
            body = body + data;
        });
        request.on('end', function () {
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`, description, 'utf-8',
                function (err) {
                    response.writeHead(302, {location: `/?id=${title}`});
                    response.end("success");
                });
        });
    } else if (pathName === '/update') {
        fs.readdir('./data', function (error, fileList) {
            var filteredId = path.parse(queryData.id).base;
            fs.readFile(`data/${filteredId}`, 'utf-8', function (err, description) {
                var title = queryData.id;
                var list = template.list(fileList);
                var html = template.HTML(title, list,
                    `
                    <form action="/update_process" method="post">
                        <input type="hidden" name="id" value="${title}">
                        <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                        <p>
                            <textarea name="description" placeholder="description">${description}</textarea>
                        </p>
                        <p>
                            <input type="submit">
                        </p>
                    </form>
                    `,
                    `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
                response.writeHead(200);
                response.end(html);
            });
        });
    } else if (pathName === '/update_process') {
        var body = "";
        request.on('data', function (data) {
            body = body + data;
        });
        request.on('end', function () {
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;
            fs.rename(`data/${id}`, `data/${title}`, function (errer) {
                fs.writeFile(`data/${title}`, description, 'utf-8', function (err) {
                    response.writeHead(302, {location: `/?id=${title}`});
                    response.end("success");
                });
            });
        });
    } else if (pathName === '/delete_process') {
        var body = "";
        request.on('data', function (data) {
            body = body + data;
        });
        request.on('end', function () {
            var post = qs.parse(body);
            var id = post.id;
            var filteredId = path.parse(id).base;
            fs.unlink(`data/${filteredId}`, function (error) {
                response.writeHead(302, {Location: `/`});
                response.end();
            });
        });
    } else {
        response.writeHead(404);
        response.end('Not found');
    }

});
app.listen(3000);