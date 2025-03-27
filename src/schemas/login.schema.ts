import { z } from "zod";

const loginValidationSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginValidations = {
  loginValidationSchema,
};

export default loginValidations;
