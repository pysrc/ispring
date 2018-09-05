function getIssue(repo,title){
	var res=null
	$.ajax({
		type:"GET",
		url:"https://api.github.com/search/issues?q="+title+"+state:open+repo:"+repo,
		async: false,
		dataType: 'json',
		success: function(data) {
			if(data.total_count!=0)
				res = data.items[0] // 只获取第0个
		}
	});
	return res;
}
function getIssueFromList(issues,title){
  if(issues==null){
    return null;
  }
  for(i=0;i<issues.length;i++){
    if(issues[i].title == title)
      return issues[i]
  }
  return null
}
function getComments(comments_url,page,pageSize){
	var res
	$.ajax({
		type:"GET",
		url:comments_url+"?page="+page+"&per_page="+pageSize,
		async: false,
		dataType: 'json',
		success: function(data) {
			res = data
		}
	});
	return res;
}
function newIssue(user,pwd,repos,title){
	var res
	$.ajax({
		type:"POST",
		url:"https://api.github.com/repos/"+repos+"/issues",
		async: false,
		headers: {
			"Authorization":"Basic "+btoa(user+":"+pwd)
		},
		data:'{"title":"'+title+'"}',
		dataType: 'json',
		success: function(data) {
			res=data;
		}
	});
	return res;
}
function newComment(user,pwd,comments_url,message){
	var res
	$.ajax({
		type: "POST",
		url: comments_url,
		async: false,
		headers: {
			"Authorization":"Basic "+btoa(user+":"+pwd)
		},
		data:'{"body":"'+message+'"}',
		dataType: 'json',
		success: function(data) {
			res=data;
		}
	});
	return res
}