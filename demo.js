function hello() {
    alert("hello tes");
  }
  let counter = 0;
  function count() {
    counter++;
    document.querySelector("h2").innerHTML = counter;
    if (counter % 10 === 0) {
      alert(`count is now ${counter}`);
    }
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
    document.querySelector("button").onclick = hello;
  });

  document.addEventListener("DOMContentLoaded", ()=>{
      document.querySelector('form').onsubmit = ()=>{
          const name = document.querySelector('#name').value
          alert(`Welcome ${name}`)
      }
  })
  document.addEventListener("DOMContentLoaded", ()=>{
      document.querySelectorAll('.c').forEach((b)=>{
b.onclick= ()=>{
    document.querySelector('#hola').style.color = b.dataset.color
}
      })

  })
