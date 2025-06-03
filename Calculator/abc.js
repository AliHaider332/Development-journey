function addValue(a) {
    document.getElementById("bar").value += a;
  }
  
  function clearBar() {
    document.getElementById("bar").value = '';
  }
  
  function calculateAnswer() {
    try {
      let result = eval(document.getElementById("bar").value);
      document.getElementById("bar").value = result;
    } catch (err) {
      alert (err.message);
      clearBar();
    }
  }
  