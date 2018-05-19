'use strict';

(function calcTest() {
  function calculateArea(figure, input) {
    let obj = {
      figure,
      input
    };

    switch (figure) {
      case 'rectangle': obj = {...obj, area: input.a * input.b}; break;
      case 'circle': obj = {...obj, area: Math.PI * Math.pow(input.r, 2)}; break;
      case 'square': obj = {...obj, area: Math.pow(input.l, 2)}; break;
      case 'triangle': obj = {...obj, area: input.b * input.h / 2}; break;
      default: obj = {...obj, area: 0};
    }

    return obj;
  }
  
  console.log('\n');
  console.log('Calculate area test:')
  console.log('Rectangle (a = 3; b = 5) area = ', calculateArea('rectangle', {a: 3, b: 5}).area);
  console.log('Circle (r = 5) area = ', calculateArea('circle', {r: 5}).area);
  console.log('Square (l = 7) area = ', calculateArea('square', {l: 7}).area);
  console.log('Triangle (b = 4; h = 6) area = ', calculateArea('triangle', {b: 4, h: 6}).area);
}());
