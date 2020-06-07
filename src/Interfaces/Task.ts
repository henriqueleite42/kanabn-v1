export interface Comment {
  author: string;
  msg: string;
  time: Date;
}

export interface Activity {
  author: string;
  time: Date;
}

export interface Task {
  id: string;
  title: string;
  attibutes: {
    hasDescription: boolean;
    hasComments: number;
    hasAttachments: number;
  };

  description?: string;
  thumbnail?: string;
  inCharge?: Array<string>;
  images?: Array<string>;
  comments?: Array<Comment>;
  followers?: Array<string>;
  tags?: Array<string>;
  deadline?: Date;
  activity?: Array<Activity>;
}
