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
function newIssue(user,pwd,repos,title){
	var res
	var data={}
	data.title=title
	$.ajax({
		type:"POST",
		url:"https://api.github.com/repos/"+repos+"/issues",
		async: false,
		headers: {
			"Authorization":"Basic "+btoa(user+":"+pwd)
		},
		data:JSON.stringify(data),
		dataType: 'json',
		success: function(data) {
			res=data;
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
