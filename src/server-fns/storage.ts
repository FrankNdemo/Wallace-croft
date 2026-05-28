import { createServerFn } from "@tanstack/react-start";

type UploadIntentInput = {
  fileName?: string;
  fileType?: string;
  fileSize?: number;
};

const allowedTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/png",
  "image/jpeg",
  "text/plain",
]);

export const createUploadIntent = createServerFn({ method: "POST" })
  .inputValidator((input: UploadIntentInput) => input)
  .handler(async ({ data }) => {
    const fileSize = Number(data.fileSize ?? 0);
    const fileType = data.fileType ?? "";

    if (!allowedTypes.has(fileType)) {
      return { ok: false, message: "Unsupported file type." };
    }

    if (fileSize <= 0 || fileSize > 5 * 1024 * 1024) {
      return { ok: false, message: "File must be less than 5 MB." };
    }

    return {
      ok: true,
      message: "Upload storage is ready for provider wiring.",
    };
  });
