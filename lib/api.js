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
function getMarkdown(filepath){
    var txt = getText(filepath);
    ir = filepath.split("/")
    ir.pop()
    // 找到图片地址的前缀
    // 将markdown中的图片地址替换为真实的图片网址，不能引用网络上的图片
    txt = txt.replace(/\!\[(.*?)\]\((.*?)\)/g,"![$1]("+ir.join("/")+"/$2)")
    return txt;
}
