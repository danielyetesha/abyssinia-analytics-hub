
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
}

export const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: "John Doe",
      content: "Great insights from this report!",
      timestamp: "2024-02-20 10:30",
    },
    {
      id: 2,
      user: "Jane Smith",
      content: "The transaction patterns are interesting.",
      timestamp: "2024-02-20 11:15",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: comments.length + 1,
      user: "Current User",
      content: newComment,
      timestamp: new Date().toLocaleString(),
    };
    
    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Comments
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-4">
            {comments.map((comment) => (
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
  );
};
