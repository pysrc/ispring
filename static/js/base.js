// 获取文本文件内容
function getText(filepath){
    var txt = ""
    $.ajax({
        type:"GET",
        url:filepath,
        dataType:"text",
        async: false,
        success : function(msg) {
            txt = msg
        }
    });
    return txt
}
/**
    通过仓库名与文件路径名返回markdown地址
*/
function getMarkdown(dir, name){
    var txt = getText(dir+name+".md");
    name=name.replace("*","\\*").replace("+","\\+")
    // 将markdown中的资源地址替换为真实的网址
    re = new RegExp("\\[(.*?)\\]\\(("+name+"\\/.*?)\\)","g")
    txt = txt.replace(re,"[$1]("+dir+"$2)")
    return txt;
}

function getIssueByNumber(repo,number){
    var res=null
    $.ajax({
        type:"GET",
        url:"https://api.github.com/repos/"+repo+"/issues/"+number,
        async: false,
        dataType: 'json',
        success: function(data) {
            if(data.message!="Not Found")
                res=data
        }
    });
    return res;
}
function getComments(issue,page,pageSize){
    var res
    if(!issue)
        return []
    $.ajax({
        type:"GET",
        url:issue.comments_url+"?page="+page+"&per_page="+pageSize,
        async: false,
        dataType: 'json',
        success: function(data) {
            res = data
        }
    });
    return res;
}
function newComment(user,pwd,comments_url,message){
    var res
    var body={}
    body.body=message
    $.ajax({
        type: "POST",
        url: comments_url,
        async: false,
        headers: {
            "Authorization":"Basic "+btoa(user+":"+pwd)
        },
        data:JSON.stringify(body),
        dataType: 'json',
        success: function(data) {
            res=data;
        }
    });
    return res
}

function delComment(user,pwd,repo,commentId){
    var res=false
    $.ajax({
            type: "DELETE",
            url: "https://api.github.com/repos/"+repo+"/issues/comments/"+commentId,
            async: false,
            headers: {
                "Authorization":"Basic "+btoa(user+":"+pwd)
            },
            dataType: 'json',
            success: function(data) {
                res=true
            }
        });
    return res;
}
