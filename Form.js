class Form {
  constructor() {
    
  }

  display(){

    var title = createElement('h2')
    title.html("Football");
    title.position(displayWidth/2 - 75,displayHeight/2 - 240);
    
    var input = createInput('Name');
    var button = createButton('Play');

    title.style('font-size', 100 + 'px');
    title.style('color', "white")
    title.style('font-family', 'Dalek')
    button.style('height', 50 + 'px')
    button.style('width', 75 + 'px')
    input.style('height', 50 + 'px')
    input.style('width', 100 + 'px')

    input.position(displayWidth/2, displayHeight/2);
    button.position(displayWidth/2 + 30, displayHeight/2 + 30);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
      
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(displayWidth/2 + 35,displayHeight/2 - 20)
    });

  }
}