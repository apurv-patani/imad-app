var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    article_one:{
    title: 'Article One | Apurv Patani',
    heading: 'Article One',
    date: 'March 13 2018',
    content: `<p>
                    My name is Barry Allen and I'm the fastest man alive. When I was a chil
                    , I saw my mother killed by something impossible. My father went to 
                    prison for her murder. Then an accident made me the impossible. To the 
                    outside world, I'm just an ordinary forensic scientist, but secretly I 
                    use my speed to fight crime and find others like me, and one day I'll 
                    find who killed my mother and get justice for my father. I am The Flash.
                </p>
                <p>
                    My name is Barry Allen and I'm the fastest man alive. When I was a chil
                    , I saw my mother killed by something impossible. My father went to 
                    prison for her murder. Then an accident made me the impossible. To the 
                    outside world, I'm just an ordinary forensic scientist, but secretly I 
                    use my speed to fight crime and find others like me, and one day I'll 
                    find who killed my mother and get justice for my father. I am The Flash.
                </p>
                <p>
                    My name is Barry Allen and I'm the fastest man alive. When I was a chil
                    , I saw my mother killed by something impossible. My father went to 
                    prison for her murder. Then an accident made me the impossible. To the 
                    outside world, I'm just an ordinary forensic scientist, but secretly I 
                    use my speed to fight crime and find others like me, and one day I'll 
                    find who killed my mother and get justice for my father. I am The Flash.
                </p>`
},
article_two:{
    title:'Article Two | Apurv Patani',
    heading: 'Article Two',
    date: 'March 25, 2018',
    content:
    `<p>
     content for Article Two.
     </p>
    `
}
};



function createTemplate(data){
    var htmltemplate=
        `<html>
            <head>
                <title>
                    ${data.title}
                </title>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <h3>
                    ${data.heading}
                    </h3>
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <div>
                        March 13 2018
                    </div>
                    <div>
                        ${data.content}
                    </div>
                </div>
            </body>
        </html>
        `;
    return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article_three', function (req, res) {
  res.send("Article three it is. Believe it.");
});

app.get('/article_one', function (req, res) {
    res.send(createTemplate(articles.article_one));
});

app.get('/article_two', function (req, res) {
  res.send(createTemplate(articles.article_two));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
