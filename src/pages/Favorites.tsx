
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, GripVertical } from "lucide-react";
import { 
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

interface FavoriteReport {
  id: string;
  name: string;
  type: string;
  date: string;
}

const SortableReport = ({ report }: { report: FavoriteReport }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: report.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      className="p-4 flex items-center justify-between bg-background border rounded-lg mb-2 cursor-move"
    >
      <div className="flex items-center gap-3">
        <div {...attributes} {...listeners}>
          <GripVertical className="h-5 w-5 text-muted-foreground" />
        </div>
        <FileText className="h-5 w-5 text-muted-foreground" />
        <div>
          <p className="font-medium">{report.name}</p>
          <p className="text-sm text-muted-foreground">{report.date}</p>
        </div>
      </div>
      <span className="text-sm text-muted-foreground">{report.type}</span>
    </div>
  );
};

const Favorites = () => {
  const [items, setItems] = useState<FavoriteReport[]>([
    { id: "1", name: "Monthly Performance Report", type: "Apollo", date: "2024-02-20" },
    { id: "2", name: "Customer Analytics", type: "Mobile Banking", date: "2024-02-19" },
    { id: "3", name: "Transaction Summary", type: "Card Banking", date: "2024-02-18" },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        const newItems = [...items];
        const [removed] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, removed);

        return newItems;
      });
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-8">Favorite Reports</h1>
      <Card>
        <CardHeader>
          <CardTitle>Drag to Reorder</CardTitle>
        </CardHeader>
        <CardContent>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
              {items.map((item) => (
                <SortableReport key={item.id} report={item} />
              ))}
            </SortableContext>
          </DndContext>
        </CardContent>
      </Card>
    </div>
  );
};

export default Favorites;
