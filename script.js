const roles = ["Machine Learning Engineer", "Web Developer"];
let i = 0, j = 0, text = "", deleting = false;

function type() {
  text = roles[i];

  document.getElementById("typing").innerText =
    text.substring(0, j);

  if (!deleting && j < text.length) {
    j++;
  } else if (deleting && j > 0) {
    j--;
  } else {
    deleting = !deleting;
    if (!deleting) i = (i + 1) % roles.length;
  }

  setTimeout(type, deleting ? 50 : 100);
}

type();