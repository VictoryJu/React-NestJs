export interface ISlotItem {
  id: number;
  context: string;
  dropId: string;
  isDone: boolean;
}

export interface ISlotList {
  userItems: ISlotItem[];
}
