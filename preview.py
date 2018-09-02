import http.server
import socketserver

PORT = 80

Handler = http.server.SimpleHTTPRequestHandler


httpd = socketserver.TCPServer(("127.0.0.1", PORT), Handler)
print("http://127.0.0.1/")
try:
    httpd.serve_forever()
except Exception as e:
    raise
else:
    pass
finally:
    if hasattr(httpd, "__exit__"):
        httpd.__exit__()
    else:
        print("退出本地浏览！")
