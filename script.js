const data = {
  "Semestre 1": [
    "Matemática",
    "Química General",
    "Biología Celular",
    "Introducción a QF"
  ],
  "Semestre 2": [
    "Química Orgánica I",
    "Física",
    "Bioestadística"
  ],
  "Semestre 3": [
    "Química Analítica",
    "Química Orgánica II"
  ]
};

const malla = document.getElementById("malla");

function guardarEstado() {
  const aprobados = [];
  document.querySelectorAll(".ramo.aprobado").forEach(r => {
    aprobados.push(r.innerText);
  });
  localStorage.setItem("aprobados", JSON.stringify(aprobados));
}

function cargarEstado() {
  return JSON.parse(localStorage.getItem("aprobados")) || [];
}

const aprobadosGuardados = cargarEstado();

for (const semestre in data) {
  const col = document.createElement("div");
  col.className = "semestre";

  const h2 = document.createElement("h2");
  h2.innerText = semestre;
  col.appendChild(h2);

  data[semestre].forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.innerText = ramo;

    if (aprobadosGuardados.includes(ramo)) {
      div.classList.add("aprobado");
    }

    div.onclick = () => {
      div.classList.toggle("aprobado");
      guardarEstado();
    };

    col.appendChild(div);
  });

  malla.appendChild(col);
}

