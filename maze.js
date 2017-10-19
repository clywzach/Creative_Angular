angular
  .module('app', [])
  .directive('canvasDirective', CanvasDirective)

function CanvasDirective() {
  return {
    restrict: "A",
    link: function(scope, element) {
      // get canvas context
      var ctx = element[0].getContext('2d');
      // capture drawing modus
      var isDrawing = false;
      // last mouse coordinates
      var lastMouse = {x:0, y:0}

			// mouse down handler
      element.bind('mousedown', function(event) {
      	// save last mouse position
      	lastMouse.x = event.offsetX;
      	lastMouse.y = event.offsetY;
        // begins new line
        ctx.beginPath();
				// set is drawing
        isDrawing = true;
      });
      
      // mouse move handler
      element.bind('mousemove', function(event) {
        if (isDrawing) {
          // draw
          ctx.moveTo(lastMouse.x, lastMouse.y);
          ctx.lineTo(event.offsetX, event.offsetY);
          ctx.strokeStyle = "red";
          ctx.stroke();        
          // save last mouse
					lastMouse.x = event.offsetX;
      		lastMouse.y = event.offsetY;
        }

      });
      
      // mouse up handler
      element.bind('mouseup', function(event) {
        isDrawing = false;
      });

    }
  };
}
