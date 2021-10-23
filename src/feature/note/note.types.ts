export interface Note {
  id: string;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date;
  is_favorite: boolean;
  is_archived: boolean;
}
