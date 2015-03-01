function creation_plateau(evt)
{
    svgdoc=evt.target.ownerDocument;
	for(var j = 0; j<=20; j++){
		for(var i = 0; i<=20; i++){
    	    node=svgdoc.createElementNS("http://www.w3.org/2000/svg" , "g");
	        node.setAttributeNS(null , "id" , "affiche"+i+j);
	        ou=evt.target;
	        ou.appendChild(node);
	        node=svgdoc.createElementNS("http://www.w3.org/2000/svg" ,"rect");
	        node.setAttributeNS(null ,"x",100+(i*20));node.setAttributeNS(null ,"y",50+(j*20));
	        node.setAttributeNS(null ,"width","20");node.setAttributeNS(null ,"height","20");
	        node.setAttributeNS(null ,"stroke","grey");
	        node.setAttributeNS(null ,"fill","grey");
	        node.setAttributeNS(null ,"fill-opacity","0.3");
	        ou=svgdoc.getElementById("affiche"+i+j);
	        ou.appendChild(node);
	    }
    }
}