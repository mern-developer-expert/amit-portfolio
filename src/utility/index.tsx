export const handleDownloadResume = (format: string) => {
  let url: string;
  let filename: string;

  if (format === "pdf") {
    url = "https://docs.google.com/document/d/1hQcoSBzEqEhM97nAy6b6_lRGButLUZ7KaXv-SP_JN4c/export?format=pdf";
    filename = "Amit_Kumar_Resume.pdf";
  } else if (format === "docx") {
    url = "https://docs.google.com/document/d/1hQcoSBzEqEhM97nAy6b6_lRGButLUZ7KaXv-SP_JN4c/export?format=docx";
    filename = "Amit_Kumar_Resume.docx";
  } else if (format === "png") {
    url = "/caseStudy.png";
    filename = "Bright DiGi Gold Case Study.png";
  } else {
    return;
  }

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
