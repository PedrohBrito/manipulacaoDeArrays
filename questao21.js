let estoque = [
    { produto: "Teclado", quantidade: 5 },
    { produto: "Mouse", quantidade: 12 },
    { produto: "Monitor", quantidade: 3 },
    { produto: "Notebook", quantidade: 18 },
    { produto: "Impressora", quantidade: 9 },
    { produto: "Webcam", quantidade: 20 }
  ];
  
  let estoqueMaisQue10Qntd = estoque.filter((item) => item.quantidade > 10);
  console.log(estoqueMaisQue10Qntd);
  