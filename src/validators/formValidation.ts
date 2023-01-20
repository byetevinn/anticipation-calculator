import * as yup from "yup";

export const validationSchema = yup.object().shape({
  amount: yup
    .number()
    .required("Informe o valor da venda")
    .positive()
    .min(1000, "Mínimo de R$ 1.000,00"),
  installments: yup
    .number()
    .required("Informe o número de parcelas")
    .positive()
    .integer()
    .min(1, "Mínimo de 1 parcela")
    .max(12, "Máximo de 12 parcelas"),
  mdr: yup.number().required("Informe o percentual de MDR").positive(),
});
