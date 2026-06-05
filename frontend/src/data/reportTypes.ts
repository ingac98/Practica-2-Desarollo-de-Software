export type ReportType = {
  id: string;
  title: string;
  description: string;
  active: boolean;
  iconKey: "baches";
};

export const REPORT_TYPES: ReportType[] = [
  {
    id: "baches",
    title: "Baches",
    description: "Reporta daños en pistas, huecos o deterioro del pavimento.",
    active: true,
    iconKey: "baches"
  }
];