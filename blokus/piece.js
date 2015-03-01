var Piece = function(x,y,cote,nom){
	this.carre = new Carre(x,y,cote);
	this.piece = [nom,this.carre.getCoords()];
	this.ajoutCarre = function(commande){
		if (commande.length > 0) {
			for (var i = 0; i < commande.length; i++) {
				if (commande[i] === "bas"){
					this.carre.modifierCarre(this.carre.getX(),this.carre.getY() - this.carre.getCote(), this.carre.getCote())
					this.piece.push(this.carre.getCoords());
				};
				if (commande[i] === "haut") {
					this.carre.modifierCarre(this.carre.getX(),this.carre.getY() + this.carre.getCote(), this.carre.getCote())
					this.piece.push(this.carre.getCoords());
				};
				if (commande[i] === "gauche"){
					this.carre.modifierCarre(this.carre.getX() - this.carre.getCote(),this.carre.getY(), this.carre.getCote())
					this.piece.push(this.carre.getCoords());
				};
				if (commande[i] === "droite"){
					this.carre.modifierCarre(this.carre.getX() + this.carre.getCote(),this.carre.getY(), this.carre.getCote())
					this.piece.push(this.carre.getCoords());
				};
				if (commande[i] === "arrbas"){
					this.carre.modifierCarre(this.carre.getX(),this.carre.getY() - this.carre.getCote(), this.carre.getCote())
				};
				if (commande[i] === "arrhaut") {
					this.carre.modifierCarre(this.carre.getX(),this.carre.getY() + this.carre.getCote(), this.carre.getCote())
				};
				if (commande[i] === "arrgauche"){
					this.carre.modifierCarre(this.carre.getX() - this.carre.getCote(),this.carre.getY(), this.carre.getCote())
				};
				if (commande[i] === "arrdroite"){
					this.carre.modifierCarre(this.carre.getX() + this.carre.getCote(),this.carre.getY(), this.carre.getCote())
				};
			};
		};
	}
}
