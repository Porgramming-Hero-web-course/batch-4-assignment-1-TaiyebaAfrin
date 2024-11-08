
type Circle = {
    shape: "circle";
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
  function calculateShapeArea(shape: Circle | Rectangle): number {
  
    if (shape.shape === "circle") {
      return Math.PI * shape.radius * shape.radius; 
    }
    
  
    if (shape.shape === "rectangle") {
      return shape.width * shape.height; 
    }
  
  
    return 0;
  }
  
  
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea); 
  
  
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea); 
  