var Pieces = function(x,y,cote){
	this.un 		= new Piece(x,y,cote,"un");
	this.deux 		= new Piece(x,y,cote,"deux");
	this.trois 		= new Piece(x,y,cote,"trois");
	this.petitL 	= new Piece(x,y,cote,"petitL");
	this.quatre 	= new Piece(x,y,cote,"quatre");
	this.petitJ 	= new Piece(x,y,cote,"petitJ");
	this.petitT 	= new Piece(x,y,cote,"petitT");
	this.carre 		= new Piece(x,y,cote,"carre");
	this.petitZ 	= new Piece(x,y,cote,"petitZ");
	this.cinq 		= new Piece(x,y,cote,"cinq");
	this.grandJ 	= new Piece(x,y,cote,"grandJ");
	this.serpent 	= new Piece(x,y,cote,"serpent");
	this.ge 		= new Piece(x,y,cote,"ge");
	this.ce 		= new Piece(x,y,cote,"ce");
	this.grandT 	= new Piece(x,y,cote,"grandT");
	this.equerre 	= new Piece(x,y,cote,"equerre");
	this.doubleV 	= new Piece(x,y,cote,"doubleV");
	this.grandZ 	= new Piece(x,y,cote,"grandZ");
	this.hippocampe = new Piece(x,y,cote,"hippocampe");
	this.croix 		= new Piece(x,y,cote,"croix");
	this.grandL 	= new Piece(x,y,cote,"grandL");

	//construction des pièces
	this.deux.ajoutCarre(["bas"]);
	this.trois.ajoutCarre(["bas","bas"]);
	this.petitL.ajoutCarre(["bas","droite"]);
	this.quatre.ajoutCarre(["bas","bas","bas"]);
	this.petitJ.ajoutCarre(["bas","bas","gauche"]);
	this.petitT.ajoutCarre(["bas","droite","arrgauche","bas"]);
	this.carre.ajoutCarre(["bas","droite","haut"]);
	this.petitZ.ajoutCarre(["droite","bas","droite"]);
	this.cinq.ajoutCarre(["bas","bas","bas","bas"]);
	this.grandJ.ajoutCarre(["bas","bas","bas","gauche"]);
	this.serpent.ajoutCarre(["bas","bas","gauche","bas"]);
	this.ge.ajoutCarre(["bas","bas","gauche","haut"]);
	this.ce.ajoutCarre(["droite","bas","bas","gauche"]);
	this.grandT.ajoutCarre(["bas","droite","arrgauche","bas","bas"]);
	this.equerre.ajoutCarre(["bas","bas","gauche","arrdroite","droite"]);
	this.doubleV.ajoutCarre(["droite","bas","droite","bas"]);
	this.grandZ.ajoutCarre(["droite","bas","bas","droite"]);
	this.hippocampe.ajoutCarre(["bas","droite","bas","arrhaut","droite"]);
	this.croix.ajoutCarre(["bas","bas","arrhaut","gauche","arrdroite","droite"]);
	this.grandL.ajoutCarre(["bas","bas","droite","droite"])
	

	this.ensemblePiece = {
		un 			: this.un.piece,
		deux 		: this.deux.piece,
		trois 		: this.trois.piece,
		petitL		: this.petitL.piece,
		quatre		: this.quatre.piece,
		petitJ		: this.petitJ.piece,
		petitT		: this.petitT.piece,
		carre 		: this.carre.piece,
		petitZ 		: this.petitZ.piece,
		cinq 		: this.cinq.piece,
		grandJ 		: this.grandJ.piece,
		serpent 	: this.serpent.piece,
		ge 			: this.ge.piece,
		ce 			: this.ce.piece,
		grandT 		: this.grandT.piece,
		equerre 	: this.equerre.piece,
		doubleV 	: this.doubleV.piece,
		grandZ 		: this.grandZ.piece,
		hippocampe 	: this.hippocampe.piece,
		croix 		: this.croix.piece,
		grandL 		: this.grandL.piece
	};

}