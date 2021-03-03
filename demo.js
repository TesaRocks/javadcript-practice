function hello() {
    alert("hello tes");
  }
  if(!localStorage.getItem('counter')){
  localStorage.setItem('counter',10)
  }
  function count() {
    let counter = localStorage.getItem("counter")
    counter++;
    document.querySelector("h2").innerHTML = counter;
    localStorage.setItem('counter',counter)

  }
  function changeName() {
    const heading = document.querySelector("h1");
    if (heading.innerHTML === "hello world") {
      heading.innerHTML = "GoodBye!";
    } else {
      heading.innerHTML = "hello world";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("h2").innerHTML = localStorage.getItem("counter")
    document.querySelector("button").onclick = hello;
    document.querySelector("#c").onclick = count
      });

  document.addEventListener("DOMContentLoaded", ()=>{
      document.querySelector('form').onsubmit = ()=>{
          const name = document.querySelector('#name').value
          alert(`Welcome ${name}`)
      }
  })
  document.addEventListener("DOMContentLoaded", ()=>{
      document.querySelector('select').onchange = ()=>{
          document.querySelector('#hola').style.color = this.value
      }

  })
