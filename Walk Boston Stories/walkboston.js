function renderPosts(boston, container) {
  var people = boston.data;
  const len = boston.data.length;
  var html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + 
      '<h2>' + people[i][8] + '</h2>' + 
      '<h3>' + people[i][11] + '</h3>';
  }
  container.innerHTML = '<ul id = "data">' + html + '</ul>';
}

function renderTopEmployees1(boston, container) {
  // Step 1 solution
  var person = boston.data;
  var topEmployees1 = person.sort((a, b) => b[18] - a[18]).slice(0, 5);
  const len = topEmployees1.length;
  var html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="top">' +
      '<h2>' + topEmployees1[i][8] + '</h2>' +
      '<h3>' + topEmployees1[i][18] + '</h3>';
  }

  container.innerHTML = '<ul id = "topEmployees1">' + html + '</ul>';
}



function renderTopSalaries(boston, container2) {
  //step 2 solution
  var people = boston.data;
  var topSalaries = people.filter((a) => a[11] > 100000);
  const len = topSalaries.length;
  var html = '';
  for (let i = 0; i < len; i++) {
    html = `${len}`;
  }

  document.getElementById("container2").innerHTML = 
  `${html} Walk Boston employees earned over \$100,000 in 2014.` 
}


renderTopEmployees1(boston, document.getElementById('container')); //step 1 solution
renderTopSalaries(boston, document.getElementById('container2')); //step 2 solution
