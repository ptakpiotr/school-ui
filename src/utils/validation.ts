import * as yup from "yup";

/**
 * schemat walidacyjny dla danych podanych w formularzu zalogowania użytkownika
 */
export const loginSchema = yup.object().shape({
    email:yup.string().email().required(),
    password: yup.string().required()
});

/**
 * schemat walidacyjny dla danych podanych w formularzu rejestracji użytkownika
 */
export const registerSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .test({
        name: "equalPasswords",
        message: "{$path} must be equal to password",
        test: (value, ctx) => {
          return value === ctx.parent.password;
        },
      }),
  });
