class Line {
    
    constructor (context, color, size, tool) {
        this._context = context;
        this._color = color;
        this._size = size;
        this._tool = tool;
        this._drawingState = false;
    }

    // Setters
    setColor (color) { this._color = color; }
    setSize (size) { this._size = size; }
    setTool (tool) { this._tool = tool; }
    setDrawingState (state) { this._drawingState = state; }

    // Getters
    getColor () { return this._color; }
    getSize () { return this._size; }
    getTool () { return this._tool; }
    getDrawingState () { return this._drawingState; }

    // Functions
    startDrawing (x, y) {
        this._drawingState = true;
        this._context.beginPath();
        this._context.strokeStyle = this._color;
        this._context.lineWidth = this._size;
        this._context.moveTo(x, y);
    }

    drawLine (x, y) {
        if (this._drawingState == true) {
            // Crayon
            if (this._tool == 1) {
                this._context.globalCompositeOperation="source-over";
                this._context.lineTo(x, y);
                this._context.stroke();
                this._context.closePath();
                this._context.beginPath();
                this._context.moveTo(x, y);
            }
            // Gomme
            else if (this._tool == 99) {
                this._context.globalCompositeOperation="destination-out";
                this._context.arc(x,y,8,0,Math.PI*2,false);
                this._context.fill();
            }
            
        }
    }

    stopDrawing (x, y) {
        this._drawingState = false;
        this._context.lineTo(x, y);
        this._context.closePath();
    }

    eraseAll (canvas) {
        this._context.clearRect(0, 0, canvas.width, canvas.height);
    }

}