export default {
    name: "vendas",
    title: "Vendas",
    type: "document",
    fields: [
      {
        name: "cliente",
        title: "Nome do cliente",
        type: "string",
      },
      {
        name: "produto",
        title: "Produto",
        type: "string",
      },
      {
        name: "valor",
        title: "Valor",
        type: "number",
      },
      {
        name: "date",
        title: "Data",
        type: "datetime",
      },
      {
        name: "status",
        title: "Status",
        type: "string",
      },
      {
        name: "comis",
        title: "Comissão",
        type: "number",
      },
    ],
  };
