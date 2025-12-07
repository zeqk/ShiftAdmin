export type ShiftType = 'full' | 'simple';

export interface Box {
  id?: string;
  number: number;
  shiftType: ShiftType;
}
