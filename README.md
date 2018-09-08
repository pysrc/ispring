## 介绍

预览地址: https://www.ispring.ink

## 目前支持

+ 博客Markdown展示
+ 留言板系统（Markdown支持）
+ 私密留言功能（RSA加密）
+ 私密日记功能（RSA加密）

## 初始化自己的项目

### 1. Fork这个项目到你的Github上

### 2. pull到你本地
`git clone xxx`

### 3. 初始化配置

+ CNAME
该文件中的内容指向你的网站域名，若没有，请删除之！

+ conf.js

```js
rightCount = 10 // 右侧边栏显示条数，查找不受此限制
marks = [ // 仓库中的文件列表
	{
		"path": "mds/ProjectIntroduction.md", // 路径
		"tags":[ // 标签
			"hello",
			"markdown",
			"demo"
		]
	},
	{
		"path": "mds/项目介绍.md",
		"tags":[
			"second",
			"demo"
		]
	}
]

```

+ confplus.js

```js
/**
	需要实现留言的在此设置
*/

// 用于装issues的仓库名
repo = "pysrc/ispring"

// 用于匿名评论的github用户名
user = "land123"

// 用于匿名评论的github密码
pwd = "379679586@qq.com"

// 用于留言板的issues number
msgNumber = 2

// 留言分页大小
pageSizeMsg = 4

// 评论分页大小
pageSizeCom = 4

// 用于存放加密信息的issue number
primsgNumber = 3

// 用于存放RSA公钥的文件地址
rsapub = "rsa.pub"

// 用于存放AES加密后的RSA私钥文件地址
rsapri = "rsa.pri.aes"

// 用于存日记或其他重要事情的issue number
noteNumber = 1

// 用于留言板等公共的aeskey
pubaeskey = "1234567890123456"
pubaesiv = "1234567890123456"

```

**注意：rsapri指向的文件并不是RSA的私钥文件，其为你自己设的进入密码经过md5加密后再经过aes加密后的RSA私钥。可进入这个网址加密你的RSA私钥：www.ispring.ink/static/html/pwd-generate.html 并将加密后的数据复制粘贴到rsapri指向的文件中！**


### 4.上传Github，并初设置为Github pages

## 默认演示页面进入密码为：123456789


