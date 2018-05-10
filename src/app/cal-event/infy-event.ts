import { CalendarEvent} from 'angular-calendar';

export class InfyEvent implements CalendarEvent {
    id?: string | number;
    start: Date | null;
    title: string | null;
    color: any | null;
    eventName?: string;
    employeeId?: number;
    numberOfParticipants?: number;
    eventStart?: Date;
    eventEnd?: Date;
    room?: any;
}