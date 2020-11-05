export class Event {
  id:number;
  title: string;
  date: string;
  imgUrl: string;
  description: string;
  hidden: boolean;

  constructor(title: string,
    date: string,
    imgUrl: string,
    description: string, id:number) {
    this.title = title;
    this.date = date;
    this.imgUrl = imgUrl;
    this.description = description;
    this.hidden = false;
    this.id=id;
  }
}
