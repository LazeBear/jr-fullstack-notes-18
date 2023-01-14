OSI model (5,7)

TCP/UDP
packet
[1,2,3]

TCP - [1,2,3]
UDP - [1,3]

HTTP based on TCP/IP

// http handshake

http 5 version
0.9
1.0
1.1 - persistent connection
2 - http(s)
3

let's encrypt
<a href="" />
hyperlink ref
url -> uniform resource locator

DNS

https -> 443
http -> 80
mongodb -> 27017

// GET / HTTP/2
// Method pathname protocol

// status code

www.google.com

null

js object
{
a: 1,
b: 2,
c: undefined
}
JSON
{
"a": 1,
"b": 2,
}
// postman

public web api -> web service

api server

GET https://example.com/news

stateless , stateful
A: login
B: getnews

stateful
A, B -> news
B, A !-> news

stateless
A, B -> news
B -> news

B [token]

rpc -> remote procedure call

Restful api 设计规范

1. versioning (版本)
   example.com/v1
   example.com/api/v1
   api.example.com/v1
   api.example.com/v2

2. 用名词来描述资源，并且使用复数形式
   /v1/news
   /v1/users

3. 使用贴切的 http method， 比如 GET 只用来获取数据
   GET

4. url 可以使用嵌套结构
   posts {
   comments
   }
   GET /v1/posts/:postId/comments
   GET /v1/posts/{postId}/comments

5. 注意数据返回的大小，对数据进行分页
   10000 post
   GET /v1/posts -> ! 10000 -> 10 per page
   GET /v1/posts?page=20&pageSize=100

6. 使用正确的，恰当的状态码 status code 来表示返回的状态/结果
   201 -》 Post success
   204 -》 delete success

7. 返回 human-readable，可读性高的错误信息
   {"error": "error"}
   {"error": "invalid password"}

{"error": "A"}
js
{A:"invalid password"}

// serialization 序列化
{"error": "error"} -> xjijfiwejiz
xjijfiwejiz -> {"error": "error"}

<!-- redis -->

400
{error: "1"}

// confluence (wiki)
// in code comment
// protobuf

{100 property}
{10}

sequence diagram

fetch
axios

XMLHttpRequest
