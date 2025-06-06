let gradeCurricular = [
    "Matemática",
    "Português",
    "Biologia",
    "Física",
    "História",
    "Educação Física",
    "Inglês"
  ];

gradeCurricular.splice(3, 1, "Programação" );
gradeCurricular.splice(4, 1, "Robótica" );

console.table(gradeCurricular);