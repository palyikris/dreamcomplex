import { AddZero } from "./addzero";

export const handleSubmit = async (email, code, startDate, endDate) => {
  console.log(code);

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        code,
        startDate,
        endDate
      })
    });
  } catch (error) {
    console.error(error);
  }
};
