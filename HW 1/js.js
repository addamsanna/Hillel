const script = document.createElement('script');

let scriptNumber = +prompt("Enter a task number from 1 to 8", "");
if (!isNaN(scriptNumber) && scriptNumber>=1 && scriptNumber<=8) {
    script.setAttribute(
        'src',
        '/js' + scriptNumber + ".js",
      );
      
      script.setAttribute('async', '');
      document.querySelector("body").appendChild(script);
}

