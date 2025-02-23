
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";

interface Comment {
  id: number;
  user: string;
  content: string;
  timestamp: string;
  reportType: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: "John Doe",
      content: "Great insights from this Apollo report!",
      timestamp: "2024-02-20 10:30",
      reportType: "Apollo"
    },
    {
      id: 2,
      user: "Jane Smith",
      content: "The mobile banking transaction patterns are interesting.",
      timestamp: "2024-02-20 11:15",
      reportType: "Mobile Banking"
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [selectedReport, setSelectedReport] = useState("Apollo");

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: comments.length + 1,
      user: "Current User",
      content: newComment,
      timestamp: new Date().toLocaleString(),
      reportType: selectedReport
    };
    
    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-8">Report Comments</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Comments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <select
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
              className="w-full p-2 rounded-md border"
            >
              <option value="Apollo">Apollo Report</option>
              <option value="Mobile Banking">Mobile Banking Report</option>
              <option value="Card Banking">Card Banking Report</option>
            </select>

            <div className="space-y-4">
              {comments
                .filter(comment => comment.reportType === selectedReport)
                .map((comment) => (
                <div key={comment.id} className="rounded-lg border p-4">
                  <div className="flex justify-between items-start">
                    <span className="font-medium">{comment.user}</span>
                    <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
                  </div>
                  <p className="mt-2 text-sm">{comment.content}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[100px]"
              />
              <Button onClick={handleAddComment}>Add Comment</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Comments;
