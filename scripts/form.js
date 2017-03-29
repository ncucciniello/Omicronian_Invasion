function getUrlVars() {
  let vars = [], hash;
  let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

  for (let i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[1]);
    vars[hash[0]] = hash[1];
  }

  return vars;
}


document.addEventListener('DOMContentLoaded', function() {
  document.querySelector(".username").innerHTML = " " + getUrlVars()[0];
});
