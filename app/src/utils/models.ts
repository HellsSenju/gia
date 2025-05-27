export type Contact = {
  id: number;
  name: string;
  phone: string;
};

export type Group = {
  id: number;
  name: string;
};

export type ContactGroup = {
  id: number;
  contactId: number;
  groupId: number;
};
