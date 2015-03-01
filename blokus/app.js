pieces = new Pieces(10,80,20);
var props="";

console.log (props);
creation_pieces = function(evt, couleur){
	couleur = couleur;
	y = 0;
	x = 0;
	nbPiece = 2;
	for (prop in pieces.ensemblePiece){
    	nom = pieces[prop].piece[0];
    	svgdoc=evt.target.ownerDocument;
    	node=svgdoc.createElementNS("http://www.w3.org/2000/svg" , "g");
    	node.setAttributeNS(null , "id" , nom);
	    ou=evt.target;
	    ou.appendChild(node);
		for (var i = 1; i < pieces[prop].piece.length; i++) {
		    node=svgdoc.createElementNS("http://www.w3.org/2000/svg" ,"rect");
		    node.setAttributeNS(null ,"x",pieces[prop].piece[i].point_basgauche.x+x);
		    node.setAttributeNS(null ,"y",pieces[prop].piece[i].point_basgauche.y+y);
		    node.setAttributeNS(null ,"width",pieces[prop].piece[i].point_basgauche.cote);
		    node.setAttributeNS(null ,"height",pieces[prop].piece[i].point_basgauche.cote);
		    node.setAttributeNS(null ,"stroke",couleur);
		    node.setAttributeNS(null ,"fill",couleur);
		    node.setAttributeNS(null ,"fill-opacity","0.3");
		    ou=svgdoc.getElementById(nom);
		    ou.appendChild(node);
		};
		if (nbPiece === 1) {
			x += 100;
			y = 0;
			nbPiece = 2;
		}
		else {
	    	y += 120;
			nbPiece--;
		};
	};



	// hippocampe = pieces.ensemblePiece.hippocampe;
};