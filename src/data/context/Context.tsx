"use client";

import { createContext, useEffect, useState } from "react";

const Context = createContext({} as any);
export default Context;

export function ContextProvider(props: any) {
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      image: [
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      ],
      tags: ["Angular", "Java", "Python"],
      name: "Queijo Minas Artesanal",
      description:
        "Queijo minas artesanal, curado por 6 meses, com sabor suave e textura cremosa.",
      origin: "Minas Gerais",
      category: "Queijos",
      producedBy: "Queijaria São João",
      weight: "300g",
    },
    {
      id: 2,
      image: [
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      ],
      name: "Mel de Abelha Orgânico",
      description:
        "Mel puro e orgânico, extraído de abelhas cuidadas de forma sustentável.",
      origin: "São Paulo",
      category: "Mel",
      producedBy: "Mel Natural",
      weight: "500g",
    },
    {
      id: 3,
      image: [
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      ],
      name: "Pão de Queijo Congelado",
      description:
        "Delicioso pão de queijo, pronto para assar e saborear no seu café da manhã.",
      origin: "Minas Gerais",
      category: "Pães",
      producedBy: "Pão de Queijo Artesanal",
      weight: "400g",
    },
    {
      id: 4,
      image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      ],
      name: "Chocolates Finos",
      description:
        "Chocolate gourmet, elaborado com cacau de alta qualidade, disponível em várias versões.",
      origin: "São Paulo",
      category: "Doces",
      producedBy: "Chocolates Finos",
      weight: "250g",
    },
    {
      id: 5,
      image: [
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      ],
      name: "Vinho Varietal",
      description:
        "Vinho de qualidade, produzido com uvas selecionadas, oferecendo um sabor único.",
      origin: "Vale dos Vinhedos",
      category: "Vinhos",
      producedBy: "Vinícola Varietal",
      weight: "750ml",
    },
    {
      id: 6,
      image: [
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      ],
      name: "Salgadinhos Artesanais",
      description:
        "Salgadinhos feitos à mão com ingredientes frescos e selecionados, ideais para petiscar.",
      origin: "Campinas",
      category: "Salgados",
      producedBy: "Salgados de Festa",
      weight: "500g",
    },
    {
      id: 7,
      image: [
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      ],
      name: "Geleia de Morango Caseira",
      description:
        "Geleia feita com morangos frescos e açúcar mascavo, 100% natural e sem conservantes.",
      origin: "São Paulo",
      category: "Geleias",
      producedBy: "Geleias Caseiras",
      weight: "250g",
    },
    {
      id: 8,
      image: [
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      ],
      name: "Mel de Laranjeira",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
      origin: "Espírito Santo",
      category: "Mel",
      producedBy: "Mel Laranjeira",
      weight: "500g",
    },
  ]);
  return (
    <Context.Provider
      value={{
        certificates
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
