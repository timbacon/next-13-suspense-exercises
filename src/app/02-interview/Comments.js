import Comment from '@/components/Comment';
import { getComments } from '@/helpers/interview-helpers';

export default async function Comments() {
    const comments = await getComments();
    return comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
    ));
}
