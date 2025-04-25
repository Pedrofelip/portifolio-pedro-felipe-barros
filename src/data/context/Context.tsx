"use client";

import { createContext, ReactNode, useState } from "react";

interface Certificate {
  id: number;
  image: string[];
  tags: string[];
  name: string;
  description: string;
  origin: string;
  category: string;
  producedBy: string;
  weight: string;
}

interface Skill {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  url_rep?: string;
}

interface AppContextType {
  certificates: Certificate[];
  skills: Skill[];
  skills_sl: Skill[];
  projects: Project[];
}

interface ContextProviderProps {
  children: ReactNode;
}

const Context = createContext<AppContextType>({} as AppContextType);
export default Context;

export function ContextProvider({ children }: ContextProviderProps) {
  const [certificates] = useState([
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
      tags: ["Angular", "Java", "Python"],
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
      tags: ["Angular", "Java", "Python"],
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
      tags: ["Angular", "Java", "Python"],
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
      tags: ["Angular", "Java", "Python"],
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
      tags: ["Angular", "Java", "Python"],
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
      tags: ["Angular", "Java", "Python"],
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
      tags: ["Angular", "Java", "Python"],
      name: "Mel de Laranjeira",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
      origin: "Espírito Santo",
      category: "Mel",
      producedBy: "Mel Laranjeira",
      weight: "500g",
    },
  ]);

  const [skills] = useState([
    {
      id: 1,
      image: "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png",
      title: "HTML5",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
      title: "CSS",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 3,
      image: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
      title: "Javascript",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 4,
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      title: "Typescript",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 5,
      image: "https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-icone-da-linguagem-de-programacao-java.png",
      title: "Java",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 6,
      image: "https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png",
      title: "SQL",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 7,
      image: "https://img.icons8.com/color/512/git.png",
      title: "GIT",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
  ]);

  const [skills_sl] = useState([
    {
      id: 1,
      image: "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png",
      title: "React",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 2,
      image: "https://cdn.iconscout.com/icon/free/png-256/free-angular-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226070.png",
      title: "Angular",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 3,
      image: "https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png",
      title: "Next.js",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 4,
      image: "https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png",
      title: "Bootstrap",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 5,
      image: "https://img.icons8.com/color/600/spring-logo.png",
      title: "Spring Boot",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 6,
      image: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
      title: "SQL Server",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 7,
      image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      title: "GitHub",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
  ]);

  const [projects] = useState([
    {
      id: 1,
      image: "https://ortogonalprojetos.com.br/wp-content/uploads/2016/01/Program-Management-01.jpg",
      title: "Pedro Felipe Barros da Silva",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      url_rep: "#",
    },
    {
      id: 1,
      image: "https://ortogonalprojetos.com.br/wp-content/uploads/2016/01/Program-Management-01.jpg",
      title: "Best of Brazil",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 1,
      image: "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png",
      title: "HTML5",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
    {
      id: 1,
      image: "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png",
      title: "HTML5",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
    },
  ]);


  return (
    <Context.Provider
      value={{
        certificates,
        skills,
        skills_sl,
        projects
      }}
    >
      {children}
    </Context.Provider>
  );
}
