import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { type TeamMember } from '@/lib/data/team';

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Card className="items-center text-center">
      <Image
        src={member.avatar}
        alt={member.name}
        width={120}
        height={120}
        className="mb-4 rounded-full"
      />
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-(--primary-color) font-medium">{member.role}</p>
      <p className="mt-2 text-sm text-gray-600">{member.description}</p>
    </Card>
  );
}
