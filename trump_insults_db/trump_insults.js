function downloadAllInsults(document){
	var all_insults={};
	var entities= document.getElementsByClassName("g-entity-item");
	for(var i=0;i<entities.length;i++){
		var entity=entities[i];
		var entity_name=entity.getElementsByClassName("g-entity-name")[0].textContent;
		all_insults[entity_name]=getInsultsForEntity(entity);
	}
	createDownloadLink(all_insults,"nytint-upshot-nameplate");
}

function getInsultsForEntity(entity){
	var insults=[];

	var insults_container=entity.getElementsByClassName("g-insult-links-c");
	for(var i=0;i<insults_container.length;i++){
		var insult_elem=insults_container[i];

		var link_elem=insult_elem.getElementsByTagName("a")[0];
		insults.push(
		{
			text: link_elem.textContent,
			link: link_elem.getAttribute("href")
		});
	}
	return insults;
}

function createDownloadLink(obj, parentID){
	var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

	var a = document.createElement('a');
	a.href = 'data:' + data;
	a.download = 'data.json';
	a.innerHTML = 'download JSON';

	var container = document.getElementById(parentID);
	container.appendChild(a);
}

downloadAllInsults(document);