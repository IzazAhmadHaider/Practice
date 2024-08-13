fetch("https://cat-fact.herokuapp.com/facts")
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
      const p = document.createElement('p');
      p.textContent = element.text;
      document.body.appendChild(p);
    });
    console.log("All facts have been displayed.");
  })
  .catch(error => console.error('Error fetching cat facts:', error));
