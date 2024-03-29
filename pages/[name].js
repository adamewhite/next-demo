import { useRouter } from 'next/router';
import topics from './api/topics';

export default function Learn() {
  const router = useRouter();
  const { name } = router.query;
  const topic = topics.find((topic) => topic.id === name);
  console.log(name, topic, topics);
  return (
    <div>
      <h1>Learn {topic?.id}</h1>
    </div>
  );
}
