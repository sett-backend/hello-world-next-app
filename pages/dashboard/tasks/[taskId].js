import { useRouter } from 'next/router';

export default function Task() {
    const router = useRouter();
    const { taskId } = router.query;

    return (
        <div>
            <h1>Task Details</h1>
            <p>This is the details page for Task ID: {taskId}</p>
        </div>
    );
}
