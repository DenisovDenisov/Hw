function calcDeterminate(a) {
   var a = 0;
   a = matrix[0][0]*matrix[1][1]-matrix[1][0]*matrix[0][1];
   return a;
}
   var res = 0,
       n1 = 2,
       n2 = 4,
       n3 = 5,
       n4 = 7;

        matrix = [
                 [n1,n2],
                 [n3,n4]
                 ];
      res = calcDeterminate(matrix);
     console.log(res);          
    /*var res1 = 0;
        m = [
                 [1,2,3],
                 [4,5,6],
                 [7,8,9]
                 ];
        res1 = m[0][0]*m[1][1]*m[2][2]+m[2][0]*m[0][1]*m[1][2]+m[1][0]*m[2][1]*m[0][2]-m[2][0]*m[1][1]*m[0][2]-m[0][0]*m[2][1]*m[1][2]-m[1][0]*m[0][1]*m[2][2];
      console.log(res1); */

