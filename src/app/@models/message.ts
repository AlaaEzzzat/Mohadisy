export interface IMessage {
  content: string;
  receiverId?: string;
  messageTypeId?: number;
  applicationUserId?: string;
}
