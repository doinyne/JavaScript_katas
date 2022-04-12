function solution(A) {

  let total = 1;
  let patients = 0;

  for (var i = 0; i < A.length; i++) { 
    for (var j = i; j < A.length; j++) {
      if ( A[i] == A[j] )
      patients++;
      if ( total < patients ) {
        total = patients; 
        item = A[i];
      }
    }
    patients = 0;
  }
  return total;
}


console.log(solution(['Cardiology', 'Orthopaedics', 'Neurology', 'Cardiology', 'Orthopaedics', 'Cardiology']));
