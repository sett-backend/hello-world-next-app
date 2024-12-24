import Link from 'next/link';

export default function Dashboard() {
    const tasks = [1, 2, 3]; // Task IDs

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {tasks.map((taskId) => (
                    <li key={taskId}>
                        <Link href={`/task/${taskId}`}>Task {taskId}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
