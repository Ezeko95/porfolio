export interface Certification {
  id: number;
  title: string;
  issuer: string;
  description: string;
  issueDate: string;
  credentialUrl: string | null;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Soy Henry Bootcamp",
    issuer: "Soy Henry",
    description: "Bootcamp de desarrollo web full-stack",
    issueDate: "Junio 2022",
    credentialUrl:
      "https://s3-sa-east-1.amazonaws.com/certs.henry/new-certs/b14199bcf737ca7e0cfb77b163995691f9aec918c462af82f85aa76f112f2424.pdf",
  },
  {
    id: 2,
    title: "Curso de Python Django",
    issuer: "Coderhouse",
    description: "Curso de Python Django",
    issueDate: "Julio 2022",
    credentialUrl:
      "https://www.coderhouse.com/certificados/672f4624-830f-435f-800e-69a12226261a",
  },
  {
    id: 3,
    title: "EF SET English Test",
    issuer: "EF SET",
    description: "Nivel C2 Proficiente",
    issueDate: "Junio 2023",
    credentialUrl: "https://cert.efset.org/p7Weds",
  },
];
