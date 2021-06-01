export const promptSelectFiles = (): Promise<File[]> => {
  const input = document.createElement("input");
  input.type = "file";
  input.multiple = true;
  input.accept = "*.zip,*.rar,*.tar,*.tar.*";
  return new Promise((resolve) => {
    input.addEventListener("change", () => {
      resolve(Array.from(input.files || []));
    });
    input.click();
  });
};
