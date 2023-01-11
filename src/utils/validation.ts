import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email:yup.string().email().required(),
    password: yup.string().required()
});

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
