function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){ // mouse pressed
			if(startMouseX == -1){
				// here is the first frame after pressing the mouse for the first time
				// it's locking draw start point state
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}

			else{
				// this is not the first frame after the mouse is pressed for the first time
				// it's actual drawing the line, after the state is altered at the first frame
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else { // mouse is not pressed
			if(drawing){
				// here to reset draw state after mouse is relased, if it was still drawing
				drawing = false;
				startMouseX = -1;
				startMouseY = -1;
			}
		}
	};


}
