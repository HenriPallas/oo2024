interface Quadratic {
  solveQuadratic(a:number,b:number,c:number): {x1: number | null, x2: number | null };
}

class Solver implements Quadratic {
  solveQuadratic(a:number,b:number,c:number): {x1: number | null, x2: number | null } {
    let discriminant = (b**2) - (4*a*c);

    if(discriminant < 0){
      return{x1: null, x2: null};
    } else {
      let x1 = (-b + Math.sqrt(discriminant))/(2*a);
      let x2 = (-b - Math.sqrt(discriminant))/(2*a);
      
      return {x1:x1, x2:x2};
    }
  }
}

/*let solver:Quadratic = new Solver();
let solution = solver.solveQuadratic(1,-3,2);
console.log(solution);*/
let solver:Solver = new Solver();
let solution = solver.solveQuadratic(1,-3,2);
console.log("x1: " + solution.x1 + ", x2: " + solution.x2);
let solver2:Solver = new Solver();
let solution2 = solver2.solveQuadratic(5,2,4);
console.log("x1: " + solution2.x1 + ", x2: " + solution2.x2);

export{
  Solver
}