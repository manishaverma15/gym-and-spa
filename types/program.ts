export type ProgramIconKey =
  | "strength"
  | "weightLoss"
  | "yoga"
  | "personal"
  | "hiit"
  | "nutrition";

export interface Program {
  title: string;
  desc: string;
  iconKey: ProgramIconKey;
}
