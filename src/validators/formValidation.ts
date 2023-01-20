import * as yup from "yup";

export const validationSchema = yup.object().shape({
  mdr: yup
    .number()
    .required("Informe o percentual de MDR")
    .typeError("Informe o percentual de MDR")
    .positive("Precisa ser um número positivo")
    .max(100, "O percentual máximo é 100"),
  installments: yup
    .number()
    .required("Informe o número de parcelas")
    .typeError("Informe o número de parcelas")
    .positive("Precisa ser um número positivo")
    .integer("Precisa ser um número inteiro")
    .min(1, "Mínimo de 1 parcela")
    .max(12, "Máximo de 12 parcelas"),
  amount: yup
    .number()
    .required("Informe o valor da venda")
    .typeError("Informe o valor da venda")
    .positive("Precisa ser um número positivo")
    .min(1000, "Mínimo de R$ 1.000,00"),
});
