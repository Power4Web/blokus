var Carre = function(x, y, cote){
	this.coord_x = x;
	this.coord_y = y;
	this.cote 	 = cote;

	if( typeof(x) == 'undefined' ){
        coord_x = 0;
    };

	if( typeof(y) == 'undefined' ){
        coord_y = 0;
    };

	if( typeof(cote) == 'undefined' ){
        coord_x = 1;
    };

	this.getX = function(){
		return this.coord_x;
	};

	this.getY = function(){
		return this.coord_y;
	};

	this.getCote = function(){
		return this.cote;
	};

	this.modifierCarre = function(x, y, cote){
		this.coord_x = x;
		this.coord_y = y;
		this.cote 	 = cote;
	};

	this.getCoords = function(){
		return {
			point_basgauche : {
				x : this.coord_x,
				y : this.coord_y,
				cote : this.cote
			},
			point_hautgauche : {
				x : this.coord_x,
				y : this.coord_y + this.cote,
				cote : this.cote
			},
			point_basdroit : {
				x : this.coord_x + this.cote,
				y : this.coord_y,
				cote : this.cote
			},
			point_hautdroit : {
				x : this.coord_x + this.cote,
				y : this.coord_y + this.cote,
				cote : this.cote
			},
		}
	}
}