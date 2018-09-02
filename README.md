# Welcome to gitapi

[中文文档](mds/项目介绍.md)

Preview address: https://pysrc.github.io/gitapi/

This is a display page. As you can see, this is a way provided by Github pages to display markdown files. I used the hexo deployment blog before, but when I changed the computer, the hexo system migration was difficult. So I gave up the hexo. I encapsulated the Github API in this project, making it easier to deploy blogs. At the same time, because the system relies entirely on Github, migration between different computers becomes more convenient and faster, and does not compromise the integrity of markdown.

At present, the project supports code syntax highlighting, image, gif, keyword search, paging and other functions. More cool effects will be added in the future.

Below is a picture.

![](mds/ProjectIntroduction/hello.png)

Here is a Python code

```python
def say():
    print("Hello gitapi.")

if __name__ == "__main__":
    say()
    input()

```

More examples can visit my blog homepage

[www.1vs1024.com](http://www.1vs1024.com)

Github: https://github.com/pysrc/MarkdownRepos

## How to build my own homepage?

### Step 1

Clone the project to locally

### Step 2

Go to the project folder, delete the .git folder, CNAME file, and modify the conf.json file.

```js
conf = {
	"mostCount": 5, // The sidebar displays the number of bars, and the search is not subject to this restriction.
	"files":[ // List of files in the warehouse
		{
			"path": "mds/ProjectIntroduction.md", // File path
			"tags":[ // tags
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
}

```

Then initialize it to your own project and upload Github, then mark the project as Github pages, usually you will be able to access it through your browser at this time.

## Local display

Local presentations require Python 3.x to be installed. After running preview.py, you can access it by visiting `http://127.0.0.1/local.html`.