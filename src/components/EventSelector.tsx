import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Event {
  id: string;
  name: string;
  date: string;
}

interface EventSelectorProps {
  events: Event[];
  selectedEvent: string;
  onEventChange: (value: string) => void;
}

export const EventSelector = ({ events, selectedEvent, onEventChange }: EventSelectorProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Select Event</h2>
      <Select value={selectedEvent} onValueChange={onEventChange}>
        <SelectTrigger className="w-[300px]">
          <SelectValue placeholder="Select an event" />
        </SelectTrigger>
        <SelectContent>
          {events.map((event) => (
            <SelectItem key={event.id} value={event.id}>
              {event.name} - {new Date(event.date).toLocaleDateString()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};