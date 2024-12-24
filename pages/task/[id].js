import { useRouter } from 'next/router';

export default function TaskPage() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Task Details</h1>
            <p>This is task {id}</p>
        </div>
    );
}
