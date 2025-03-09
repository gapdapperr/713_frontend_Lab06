export interface Event {
    id: number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: boolean;
    // organizerId: number | null;
    organizer?: Organizer | null;
    participants?: Participant[];
  }

  export type Organizer = {
    id?: number;
    name: string;
    events?: Event[];
  };

  export interface Participant{
    id?:number
    name: string
    email: string
    events: Event[]
}

export interface MessageState {
  message: string
}

export interface EventState {
  event: Event | null
}