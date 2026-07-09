import EventDetailsPage from '@/src/components/events/EventDetailsPage';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  return <EventDetailsPage id={id} />;
}
